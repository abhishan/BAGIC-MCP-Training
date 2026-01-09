# Build an Autonomous Regulatory Monitoring Agent Using Web-Based Knowledge

Create an autonomous Copilot Studio agent that continuously monitors regulatory updates from the IRDAI website and summarizes relevant circulars for non-life insurers.

---

## 🧭 Lab Details

| Level | Persona | Duration | Purpose |
|------|--------|----------|---------|
| 200 | Intermediate Maker | 25 minutes | After completing this lab, attendees will be able to create an autonomous Copilot Studio agent that independently monitors regulatory websites and delivers summarized compliance insights. |

---

## 📚 Table of Contents

- [Introduction](#-introduction)
- [Core Concepts Overview](#-core-concepts-overview)
- [Prerequisites](#-prerequisites)
- [Summary of Targets](#-summary-of-targets)
- [Use Cases Covered](#-use-cases-covered)
- [Instructions by Use Case](#️-instructions-by-use-case)
  - [Use Case #4: Autonomous Agent with Web-Based Knowledge](#-use-case-4-autonomous-agent-with-web-based-knowledge)
- [Test Your Understanding](#-test-your-understanding)
- [Summary of Learnings](#-summary-of-learnings)
- [Conclusions & Recommendations](#-conclusions--recommendations)

---

## 🌐 Introduction

In this lab, you will build an **autonomous Copilot Studio agent** that proactively monitors regulatory updates published by the **Insurance Regulatory and Development Authority of India (IRDAI)**.

The agent, **IRDAI Regulations Agent**, is designed to:
- Track regulatory circulars relevant to non-life insurers
- Periodically scan authoritative web content
- Generate concise summaries for compliance and regulatory teams

This lab introduces **autonomy configuration**, enabling agents to act independently without explicit user prompts.

---

## 🎓 Core Concepts Overview

| Concept | Why it matters |
|------|----------------|
| **Autonomous Agent** | Operates independently by initiating tasks based on schedules or conditions rather than direct user input. |
| **Web-Based Knowledge Source** | Enables agents to retrieve information from authoritative public websites. |
| **Autonomy Configuration** | Defines how and when an agent initiates actions such as periodic monitoring. |
| **Regulatory Monitoring** | Ensures organizations stay informed about compliance updates and policy changes. |
| **Grounding** | Anchors summaries in official regulatory content to ensure accuracy and trust. |

---

## ✅ Prerequisites

- Access to **Microsoft Copilot Studio**
- Permission to create **autonomous agents**
- Internet access to public regulatory websites
- Familiarity with regulatory or compliance concepts (recommended)

---

## 🎯 Summary of Targets

By the end of this lab, you will be able to:

- Create an autonomous Copilot Studio agent
- Configure a regulatory compliance persona
- Add and scope web-based regulatory knowledge sources
- Configure autonomous execution schedules
- Validate regulatory summaries
- Publish the agent for operational use

---

## 🧩 Use Cases Covered

| Step | Use Case | Value added | Effort |
|------|----------|------------|--------|
| 4 | Autonomous Agent with Web-Based Knowledge | Enables proactive monitoring and summarization of regulatory circulars | 25 min |

---

## 🛠️ Instructions by Use Case

---

## 📜 Use Case #4: Autonomous Agent with Web-Based Knowledge

Build an autonomous Copilot Studio agent that monitors IRDAI regulatory updates and summarizes circulars relevant to non-life insurers.

| Use case | Value added | Estimated effort |
|--------|-------------|------------------|
| IRDAI Regulations Agent | Provides continuous regulatory insights without manual monitoring | 25 minutes |

---

### Summary of Tasks

In this section, you will create an autonomous agent, configure its regulatory persona, add a web-based knowledge source, enable autonomous execution, validate summaries, and publish the agent.

---

### Scenario

Regulatory and compliance teams must stay current with frequent updates issued by IRDAI. Manual tracking of circulars is time-consuming and error-prone. You are tasked with creating an AI agent that autonomously monitors official sources and delivers summarized insights to support compliance readiness.

---

### Objective

Create and publish the **IRDAI Regulations Agent**, an autonomous agent that independently monitors and summarizes regulatory circulars for non-life insurers.

---

### Step-by-Step Instructions

---

### Step A — Create the Autonomous Agent

1. Open **Copilot Studio**.
2. Select **Create** → **Copilot**.
3. Choose the **Autonomous** agent type.
4. Enter the following details:
   - **Name:** IRDAI Regulations Agent
   - **Description:** Autonomous agent that monitors and summarizes IRDAI regulatory circulars for non-life insurers
   - **Language:** English
5. Select **Create**.

---

### Step B — Configure Persona and Instructions

Navigate to **Settings** → **Instructions** and configure:

- **Persona:** Regulatory Compliance Analyst
- **Tone:** Formal, precise, and compliance-focused
- **Knowledge usage rule:** Answer only using configured regulatory sources
- **Content constraints:** Do not interpret beyond published regulatory guidance

> [!TIP]  
> A compliance-focused persona ensures summaries remain factual, neutral, and audit-friendly.

---

### Step C — Add Web-Based Knowledge Source

1. Navigate to **Knowledge** → **Add knowledge source**.
2. Select **Website**.
3. Configure the source:
   - **URL:** https://irdai.gov.in/insurers/non-life-insurers
   - **Domain:** irdai.gov.in
   - **Crawl depth:** 2
4. Save the configuration and allow indexing to complete.

> [!IMPORTANT]  
> Regulatory sites should be scoped carefully to avoid unrelated content.

---

### Step D — Configure Autonomy

1. Navigate to **Autonomy** settings.
2. Enable **Self-initiation**.
3. Configure execution frequency:
   - Daily or Weekly (based on operational needs)
4. Save the autonomy configuration.

---

### Step E — Validate Agent Queries

1. Open the **Test Canvas**.
2. Ask the agent: Summarize latest IRDAI circulars

3. Validate that summaries:
- Reference recent regulatory updates
- Are concise and accurate
- Reflect the defined compliance tone

---

### Step F — Publish the Agent

1. Select **Publish**.
2. Make the agent available to the intended channels or operational users.

---

### 🏅 Congratulations! Your IRDAI Regulations Agent is now autonomous!

---

## 🧠 Test Your Understanding

**Key takeaways:**

- Autonomous agents operate without direct user prompts
- Scheduled execution is ideal for monitoring use cases
- Regulatory agents must prioritize accuracy over interpretation

**Reflection questions:**

- How would you route summaries to compliance teams?
- What cadence best balances freshness and noise?
- How would you detect and handle regulatory website changes?

---

## 🔁 Summary of Learnings

- Created an autonomous Copilot Studio agent
- Configured regulatory persona and tone
- Grounded responses in authoritative web content
- Enabled scheduled autonomous execution
- Validated and published the agent

---

## 📌 Conclusions & Recommendations

> [!IMPORTANT]  
> When building autonomous regulatory agents:
> - Scope knowledge sources narrowly
> - Keep autonomy frequency intentional
> - Validate summaries regularly
> - Treat outputs as decision-support, not legal advice

This ensures autonomous agents remain trustworthy, compliant, and operationally valuable.

---

## Badge Earned
Copilot Ninja
