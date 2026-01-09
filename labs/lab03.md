# Build an Employee-Facing SOP Retrieval Agent Using SharePoint Knowledge

Create a declarative Copilot Studio agent that helps employees quickly retrieve Standard Operating Procedures (SOPs) and policy documents from a SharePoint document library.

---

## 🧭 Lab Details

| Level | Persona | Duration | Purpose |
|------|--------|----------|---------|
| 100 | Basic Maker | 15 minutes | After completing this lab, attendees will be able to create a declarative Copilot Studio agent grounded in SharePoint documents to support employee SOP and policy retrieval scenarios. |

---

## 📚 Table of Contents

- [Introduction](#-introduction)
- [Core Concepts Overview](#-core-concepts-overview)
- [Prerequisites](#-prerequisites)
- [Summary of Targets](#-summary-of-targets)
- [Use Cases Covered](#-use-cases-covered)
- [Instructions by Use Case](#️-instructions-by-use-case)
  - [Use Case #3: Agent with SharePoint Knowledge](#-use-case-3-agent-with-sharepoint-knowledge)
- [Test Your Understanding](#-test-your-understanding)
- [Summary of Learnings](#-summary-of-learnings)
- [Conclusions & Recommendations](#-conclusions--recommendations)

---

## 🌐 Introduction

In this lab, you will build an **employee-facing Copilot Studio agent** that retrieves and explains **Standard Operating Procedures (SOPs)** and internal policy documents stored in **SharePoint**.

The agent, **SOP Buddy**, acts as a digital helpdesk assistant—enabling employees to quickly find the right procedures without manually searching document libraries.

---

## 🎓 Core Concepts Overview

| Concept | Why it matters |
|------|----------------|
| **Declarative Agent** | Enables rapid creation of agents using instructions and knowledge sources without custom orchestration. |
| **SharePoint Knowledge Source** | Allows agents to retrieve information securely from internal documents employees already trust. |
| **Employee-Facing Agent** | Designed for internal use, aligned with organizational policies and permissions. |
| **Grounding** | Ensures responses are sourced directly from SharePoint documents, reducing ambiguity and errors. |
| **Test Canvas** | Allows validation of document retrieval accuracy before publishing to employees. |

---

## ✅ Prerequisites

- Access to **Microsoft Copilot Studio**
- Permission to create declarative agents
- Access to a **SharePoint site** containing SOP or policy documents
- Permissions to the target **SharePoint Document Library**

---

## 🎯 Summary of Targets

By the end of this lab, you will be able to:

- Create a declarative Copilot Studio agent
- Configure an employee-focused SOP persona
- Ground the agent in SharePoint document libraries
- Validate document retrieval accuracy
- Publish the agent for employee use in Microsoft Teams

---

## 🧩 Use Cases Covered

| Step | Use Case | Value added | Effort |
|------|----------|------------|--------|
| 1 | Agent with SharePoint Knowledge | Enables fast, accurate retrieval of SOPs and internal policies for employees | 15 min |

---

## 🛠️ Instructions by Use Case

---

## 📄 Use Case #3: Agent with SharePoint Knowledge

Build a declarative Copilot Studio agent that retrieves SOP and policy documents from a SharePoint document library for internal employee use.

| Use case | Value added | Estimated effort |
|--------|-------------|------------------|
| SOP Buddy | Improves employee efficiency by simplifying access to SOPs and policies | 15 minutes |

---

### Summary of Tasks

In this section, you will create a declarative agent, configure an SOP-focused persona, add a SharePoint knowledge source, validate responses, and publish the agent.

---

### Scenario

Employees frequently need access to SOPs and internal policy documents, but manual searches in SharePoint can be time-consuming. You are tasked with creating an AI assistant that provides fast, accurate, and contextual answers grounded in approved internal documentation.

---

### Objective

Create and publish **SOP Buddy**, an employee-facing agent that retrieves SOP and policy information from SharePoint.

---

### Step-by-Step Instructions

---

### Step 1 — Create the Agent

1. Open **Copilot Studio**.
2. Select **Create** → **Copilot**.
3. Choose the **Declarative** agent type.
4. Enter the following details:
   - **Name:** SOP Buddy
   - **Description:** Employee-facing SOP and policy retrieval assistant
   - **Language:** English
5. Select **Create**.

![alt text](labs/images/common/CopilotHome.png)

---

### Step 2 — Configure Persona and Instructions

Navigate to **Settings** → **Instructions** and configure:

- **Persona:** SOP & Policy Helpdesk Assistant
- **Tone:** Clear, helpful, and professional
- **Knowledge usage rule:** Answer only using SharePoint documents
- **Content constraints:** Do not speculate beyond documented procedures

> [!TIP]  
> A clear helpdesk-style persona ensures responses remain consistent, accurate, and employee-friendly.

---

### Step 3 — Add SharePoint Knowledge Source

1. Navigate to **Knowledge** → **Add knowledge source**.
2. Select **SharePoint**.
3. Authenticate when prompted.
4. Choose the appropriate **SharePoint site**.
5. Select the **Document Library** containing SOPs and policies.
6. Save the configuration and allow indexing to complete.

> [!IMPORTANT]  
> The agent will only retrieve content from documents users already have permission to access.

---

### Step 4 — Validate Using Test Canvas

1. Open the **Test Canvas**.
2. Ask questions related to SOPs or internal policies.
3. Validate that responses:
   - Reference the correct documents
   - Use clear and concise language
   - Align with documented procedures

---

### Step 5 — Publish the Agent

1. Select **Publish**.
2. Publish the agent to **Microsoft Teams** (recommended).
3. Confirm availability for employee access.

---

### 🏅 Congratulations! SOP Buddy is ready to assist your employees!

---

## 🧠 Test Your Understanding

**Key takeaways:**

- SharePoint grounding ensures secure, trusted responses
- Declarative agents are ideal for SOP retrieval scenarios
- Persona definition strongly influences usability and clarity

**Reflection questions:**

- How would you handle outdated SOP documents?
- Which document library structures work best for retrieval?
- What additional instructions could prevent misinterpretation?

---

## 🔁 Summary of Learnings

- Created an employee-facing declarative agent
- Grounded responses in SharePoint documents
- Validated SOP retrieval accuracy
- Published the agent for Teams consumption

---

## 📌 Conclusions & Recommendations

> [!IMPORTANT]  
> For effective SOP retrieval agents:
> - Keep document libraries well-organized
> - Regularly review and archive outdated SOPs
> - Clearly define agent boundaries and tone
> - Test with real employee questions before broad rollout

This ensures SOP agents remain accurate, trusted, and widely adopted.

---

## Badge Earned
Copilot Black Belt