/**
 * Progress Tracking Module for Copilot Studio Training Hub
 * Handles local storage, progress calculation, and badge management
 */

// Badge Definitions
const BADGES = {
    lab01: { name: 'Copilot White Belt', emoji: '🥋' },
    lab02: { name: 'Copilot Green Belt', emoji: '🎖️' },
    lab03: { name: 'Copilot Black Belt', emoji: '🥇' },
    lab04: { name: 'Copilot Ninja', emoji: '🥷' }
};

const STORAGE_KEY = 'copilot_training_progress';

/**
 * Initialize progress data structure
 */
function initializeProgress() {
    return {
        labs: {
            lab01: { completed: false, attempts: 0, lastAttemptTime: null, lastAttemptDate: null, badge: null },
            lab02: { completed: false, attempts: 0, lastAttemptTime: null, lastAttemptDate: null, badge: null },
            lab03: { completed: false, attempts: 0, lastAttemptTime: null, lastAttemptDate: null, badge: null },
            lab04: { completed: false, attempts: 0, lastAttemptTime: null, lastAttemptDate: null, badge: null }
        },
        totalBadges: 0
    };
}

/**
 * Get progress data from local storage
 */
function getProgress() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        const initialData = initializeProgress();
        saveProgress(initialData);
        return initialData;
    }
    return JSON.parse(data);
}

/**
 * Save progress data to local storage
 */
function saveProgress(progressData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
}

/**
 * Start a lab attempt
 */
function startLabAttempt(labId) {
    const progress = getProgress();
    if (!progress.labs[labId]) {
        console.error(`Lab ${labId} not found in progress data`);
        return;
    }

    progress.labs[labId].attempts += 1;
    saveProgress(progress);
}

/**
 * Complete a lab
 */
function completeLabAttempt(labId, timeTaken) {
    const progress = getProgress();
    if (!progress.labs[labId]) {
        console.error(`Lab ${labId} not found in progress data`);
        return;
    }

    const wasAlreadyCompleted = progress.labs[labId].completed;

    progress.labs[labId].completed = true;
    progress.labs[labId].lastAttemptTime = timeTaken;
    progress.labs[labId].lastAttemptDate = new Date().toISOString();
    progress.labs[labId].badge = BADGES[labId] ? BADGES[labId].name : null;

    // Increment total badges only if this is the first completion
    if (!wasAlreadyCompleted) {
        progress.totalBadges += 1;
    }

    saveProgress(progress);
}

/**
 * Get overall completion percentage
 */
function getCompletionPercentage() {
    const progress = getProgress();
    const totalLabs = Object.keys(progress.labs).length;
    const completedLabs = Object.values(progress.labs).filter(lab => lab.completed).length;
    return Math.round((completedLabs / totalLabs) * 100);
}

/**
 * Get total number of completed labs
 */
function getCompletedLabsCount() {
    const progress = getProgress();
    return Object.values(progress.labs).filter(lab => lab.completed).length;
}

/**
 * Get total number of labs
 */
function getTotalLabsCount() {
    const progress = getProgress();
    return Object.keys(progress.labs).length;
}

/**
 * Get total attempts across all labs
 */
function getTotalAttempts() {
    const progress = getProgress();
    return Object.values(progress.labs).reduce((sum, lab) => sum + lab.attempts, 0);
}

/**
 * Get last lab attempt details
 */
function getLastAttempt() {
    const progress = getProgress();
    let lastAttempt = null;

    Object.values(progress.labs).forEach(lab => {
        if (lab.lastAttemptDate) {
            if (!lastAttempt || new Date(lab.lastAttemptDate) > new Date(lastAttempt.date)) {
                lastAttempt = {
                    time: lab.lastAttemptTime,
                    date: lab.lastAttemptDate
                };
            }
        }
    });

    return lastAttempt;
}

/**
 * Get all badges (earned and unearned)
 */
function getAllBadges() {
    const progress = getProgress();
    return Object.keys(BADGES).map(labId => ({
        labId: labId,
        name: BADGES[labId].name,
        emoji: BADGES[labId].emoji,
        earned: progress.labs[labId] && progress.labs[labId].completed
    }));
}

/**
 * Get earned badges count
 */
function getEarnedBadgesCount() {
    const progress = getProgress();
    return progress.totalBadges;
}

/**
 * Reset all progress
 */
function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    return initializeProgress();
}

/**
 * Update progress panel UI (for index.html)
 */
function updateProgressPanelUI() {
    // Update completion percentage
    const completionEl = document.getElementById('progressPercentage');
    if (completionEl) {
        completionEl.textContent = `${getCompletionPercentage()}%`;
    }

    // Update circular progress
    const circleEl = document.getElementById('progressCircle');
    if (circleEl) {
        const percentage = getCompletionPercentage();
        const circumference = 2 * Math.PI * 54; // radius = 54
        const offset = circumference - (percentage / 100) * circumference;
        circleEl.style.strokeDashoffset = offset;
    }

    // Update labs completed
    const labsCompletedEl = document.getElementById('labsCompleted');
    if (labsCompletedEl) {
        labsCompletedEl.textContent = `${getCompletedLabsCount()}/${getTotalLabsCount()}`;
    }

    // Update total attempts
    const totalAttemptsEl = document.getElementById('totalAttempts');
    if (totalAttemptsEl) {
        totalAttemptsEl.textContent = getTotalAttempts();
    }

    // Update last attempt time
    const lastAttemptEl = document.getElementById('lastAttemptTime');
    if (lastAttemptEl) {
        const lastAttempt = getLastAttempt();
        lastAttemptEl.textContent = lastAttempt ? lastAttempt.time : '--:--:--';
    }

    // Update badges display
    const badgesContainerEl = document.getElementById('badgesContainer');
    if (badgesContainerEl) {
        const badges = getAllBadges();
        badgesContainerEl.innerHTML = badges.map(badge => `
            <div class="badge-card ${badge.earned ? 'earned' : 'locked'}">
                <div class="badge-emoji">${badge.emoji}</div>
                <div class="badge-name">${badge.name}</div>
            </div>
        `).join('');
    }
}
