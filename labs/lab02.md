# Build a Claims Analysis Copilot Studio Agent Using Localized Document Knowledge

Create an advanced Copilot Studio agent that performs analytical claims Q&A using localized Excel data and triggers an automated email workflow using Power Automate.

---

## 🧭 Lab Details

| Level | Persona | Duration | Purpose |
|------|--------|----------|---------|
| 300 | Advanced Maker | 30 minutes | After completing this lab, attendees will be able to build a high-complexity Copilot Studio agent that analyzes uploaded Excel data, orchestrates multi-step topic workflows, and sends automated claims summary emails. |

---

## 📚 Table of Contents

- [Introduction](#-introduction)
- [Core Concepts Overview](#-core-concepts-overview)
- [Prerequisites](#-prerequisites)
- [Summary of Targets](#-summary-of-targets)
- [Use Cases Covered](#-use-cases-covered)
- [Instructions by Use Case](#️-instructions-by-use-case)
  - [Use Case #2: Agent with Localized Document Knowledge](#-use-case-2-agent-with-localized-document-knowledge)
- [Test Your Understanding](#-test-your-understanding)
- [Summary of Learnings](#-summary-of-learnings)
- [Conclusions & Recommendations](#-conclusions--recommendations)

---

## 🌐 Introduction

In this lab, you will build a **high-complexity Copilot Studio agent** that performs **analytical question-and-answer operations on localized document data** and automates downstream actions.

The agent, **ClaimsAssist**, is designed to:
- Analyze claims data from an uploaded Excel file
- Guide users through structured interactions
- Generate analytical summaries
- Trigger a Power Automate flow to send claims summary emails

This lab introduces **document grounding, topic workflows, variable handling, and flow integration**.

---

## 🎓 Core Concepts Overview

| Concept | Why it matters |
|------|----------------|
| **Localized Knowledge Source** | Enables agents to analyze structured files such as Excel spreadsheets uploaded directly into Copilot Studio. |
| **Topic Workflow** | Allows controlled, step-by-step conversations using variables, logic, and actions. |
| **Power Automate Integration** | Extends agents beyond conversation by executing real-world actions like sending emails. |
| **Variables** | Store and reuse user inputs and generated outputs during a conversation. |
| **Test Canvas** | Validates analytical accuracy and end-to-end orchestration before publishing. |

---

## ✅ Prerequisites

- Access to **Microsoft Copilot Studio**
- Permission to upload files and create topics
- Access to **Power Automate**
- Outlook mailbox for email testing
- Claims data file: `Claims_FY24_25.xlsx`

---

## 🎯 Summary of Targets

By the end of this lab, you will be able to:

- Create an advanced Copilot Studio agent
- Analyze uploaded Excel data using localized knowledge
- Design topic-based workflows with variables
- Integrate Power Automate flows for email automation
- Test and publish an end-to-end analytical agent

---

## 🧩 Use Cases Covered

| Step | Use Case | Value added | Effort |
|------|----------|------------|--------|
| 2 | Agent with Localized Document Knowledge | Enables analytical claims insights and automated email delivery using structured data | 30 min |

---

## 🛠️ Instructions by Use Case

---

## 📊 Use Case #2: Agent with Localized Document Knowledge

Build a Copilot Studio agent that analyzes claims data from an uploaded Excel file and sends summarized insights via email using a topic-driven workflow.

| Use case | Value added | Estimated effort |
|--------|-------------|------------------|
| ClaimsAssist | Delivers analytical claims insights and automates claims summary communication | 30 minutes |

---

### Summary of Tasks

In this section, you will create a studio agent, configure analytical instructions, upload an Excel knowledge source, design a topic workflow with variables, integrate a Power Automate flow, and publish the agent.

---

### Scenario

You are building an AI assistant for claims operations. The agent must analyze structured claims data, interactively gather user inputs, generate meaningful summaries, and send those summaries to stakeholders via email.

---

### Objective

Create and publish a **ClaimsAssist** agent capable of analytical claims Q&A and automated email delivery.

---

### Step-by-Step Instructions

---

### Step A — Create the Agent

1. Open **Copilot Studio**.
2. Select **Create** → **Copilot**.
3. Enter the following details:
   - **Name:** ClaimsAssist
   - **Description:** Analytical claims assistant using Excel data and email automation
   - **Language:** English
4. Select **Create**.

---

### Step B — Configure Instructions

Navigate to **Settings** → **Instructions** and configure:

- **Persona:** Claims Data Analyst
- **Tone:** Analytical
- **Knowledge usage rule:** Answer using uploaded document data
- **Response style:** Data-driven and precise
- **Content constraints:** Avoid assumptions not supported by data

> [!TIP]  
> Analytical agents benefit from precise instructions that prioritize accuracy over conversational tone.

---

### Step C — Upload Excel Knowledge Source

1. Navigate to **Knowledge** → **Add knowledge source**.
2. Select **File upload**.
3. Upload the file:
   - `Claims_FY24_25.xlsx`
4. Confirm the file is indexed and available for analysis.

> [!IMPORTANT]  
> Ensure the Excel file contains clean headers and structured data for optimal analysis.

---

### Step D — Validate Analytics in Test Canvas

1. Open the **Test Canvas**.
2. Ask analytical questions based on claims data.
3. Validate:
   - Correct calculations
   - Relevant aggregations
   - Clear explanations

---

### Step E — Create Topic: Send Claims Email

1. Navigate to **Topics** → **+ New topic**.
2. Name the topic: **Send Claims Email**
3. Define trigger phrases:
   - “Email claims summary”

---

### Step F — Design Topic Workflow

Configure the topic flow with the following steps:

1. Ask the user for a filter value  
   - Store response in variable: `filterValue`
2. Ask for the recipient email address  
   - Store response in variable: `groupEmail`
3. Generate a claims summary  
   - Store output in variable: `summaryText`

---

### Step G — Create Power Automate Flow

1. Create a new **Power Automate cloud flow**.
2. Configure:
   - **Trigger:** Copilot
   - **Action:** Outlook → Send email
   - **Return value:** EmailSent confirmation
3. Save the flow.

---

### Step H — Bind Flow to Topic

1. Return to the topic workflow.
2. Call the Power Automate flow.
3. Map inputs:
   - Email address → `groupEmail`
   - Email body → `summaryText`
4. Capture the returned confirmation.

---

### Step I — Test End-to-End

1. Trigger the topic using: Email claims summary

2. Validate:
- Correct filtering
- Accurate summary generation
- Successful email delivery
- Confirmation message returned to the user

---

### Step J — Publish the Agent

1. Select **Publish**.
2. Make the agent available to the desired channels.

---

### 🏅 Congratulations! Your ClaimsAssist agent is live!

---

## 🧠 Test Your Understanding

**Key takeaways:**

- Localized documents enable deep, structured analysis
- Topics allow deterministic, multi-step workflows
- Power Automate extends agents into real-world actions

**Reflection questions:**

- How would you handle invalid email input?
- What safeguards could prevent incorrect summaries?
- Which other workflows could benefit from document analysis?

---

## 🔁 Summary of Learnings

- Built an advanced Copilot Studio agent
- Analyzed Excel-based claims data
- Designed a variable-driven topic workflow
- Integrated Power Automate for email automation
- Validated and published an end-to-end solution

---

## 📌 Conclusions & Recommendations

> [!IMPORTANT]  
> When building high-complexity agents:
> - Validate data quality early
> - Keep topic workflows deterministic
> - Clearly separate analysis from actions
> - Test automation flows thoroughly before publishing

This ensures analytical agents remain reliable, auditable, and production-ready.

---

## Badge Earned
Copilot Green Belt