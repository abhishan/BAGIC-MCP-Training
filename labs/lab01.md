# Build a Web-Grounded Copilot Studio Agent for Non-Life Insurance Catalogue

Create a declarative Copilot Studio agent that retrieves and answers user queries about non-life insurance offerings using publicly available web content from Bajaj General Insurance.

---

## 🧭 Lab Details

| Level | Persona | Duration | Purpose |
|------|--------|----------|---------|
| 100 | Basic Maker | 20 minutes | After completing this lab, attendees will be able to create and publish a declarative Copilot Studio agent grounded in web-based knowledge to answer insurance product queries accurately and concisely. |

---

## 📚 Table of Contents

- [Introduction](#-introduction)
- [Core Concepts Overview](#-core-concepts-overview)
- [Prerequisites](#-prerequisites)
- [Summary of Targets](#-summary-of-targets)
- [Use Cases Covered](#-use-cases-covered)
- [Instructions by Use Case](#️-instructions-by-use-case)
  - [Use Case #1: Agent with Web-Based Knowledge](#-use-case-1-agent-with-web-based-knowledge)
- [Test Your Understanding](#-test-your-understanding)
- [Summary of Learnings](#-summary-of-learnings)
- [Conclusions & Recommendations](#-conclusions--recommendations)

---

## 🌐 Introduction

In this lab, you will build a **declarative Copilot Studio agent** designed to retrieve and answer questions related to **non-life insurance offerings** by grounding responses in publicly available content from the Bajaj General Insurance website.

The agent will function as a **Non-Life Catalogue Assistant**, helping users discover and understand insurance products using concise, professional responses backed by authoritative web data.

---

## 🎓 Core Concepts Overview

| Concept | Why it matters |
|------|----------------|
| **Declarative Agent** | Enables fast creation of agents using instructions and knowledge sources without custom orchestration or code. |
| **Web-based Knowledge Source** | Allows agents to retrieve answers from publicly accessible websites using controlled crawling and grounding. |
| **Grounding** | Ensures responses are anchored in verified data, reducing hallucinations and increasing trust. |
| **Agent Instructions** | Define persona, tone, behavior, and content boundaries for consistent responses. |
| **Test Canvas** | Provides a safe environment to validate accuracy and behavior before publishing. |

---

## ✅ Prerequisites

- Access to **Microsoft Copilot Studio**
- Azure AD account with permission to create agents
- Internet access to public websites

---

## 🎯 Summary of Targets

By the end of this lab, you will be able to:

- Create a declarative Copilot Studio agent
- Configure agent instructions for a professional insurance persona
- Add and validate a web-based knowledge source
- Test and publish the agent for user consumption

---

## 🧩 Use Cases Covered

| Step | Use Case | Value added | Effort |
|------|----------|------------|--------|
| 1 | Agent with Web-Based Knowledge | Enables users to query non-life insurance offerings using authoritative web data | 20 min |

---

## 🛠️ Instructions by Use Case

---

## 🤖 Use Case #1: Agent with Web-Based Knowledge

Build a declarative Copilot Studio agent that retrieves and answers queries related to non-life insurance products using the Bajaj General Insurance website as a knowledge source.

| Use case | Value added | Estimated effort |
|--------|-------------|------------------|
| Non-Life Catalogue Agent | Provides accurate, web-grounded answers on insurance offerings | 20 minutes |

### Summary of Tasks

In this section, you will create a declarative agent, configure its instructions and persona, add a web-based knowledge source, validate responses, and publish the agent.

### Scenario

You are designing an AI assistant for users seeking information on non-life insurance products. The agent must provide **concise, professional, and accurate answers** grounded exclusively in trusted public web content.

---

### Objective

Create and publish a **NonLife Catalogue Agent** that retrieves answers from the Bajaj General Insurance website using web crawling.

---

### Step-by-Step Instructions

---

### Step A — Access the Platform

1. Open a web browser and navigate to the **Copilot Studio portal**.
2. Sign in using your **Azure AD account**.
3. Confirm that you have access to the correct environment.

---

### Step B — Create the Agent

1. Select **Create** → **Copilot**.
2. Choose the **Declarative** agent type.
3. Enter the following details:
   - **Name:** NonLife Catalogue Agent
   - **Description:** Agent that retrieves and answers questions about non-life insurance offerings
   - **Language:** English
4. Select **Create**.

---

### Step C — Define Instructions

Navigate to **Settings** → **Instructions** and configure the agent using the following structure:

- **Role:** Insurance Product Specialist
- **Tone:** Concise and professional
- **Knowledge usage rule:** Answer only using configured knowledge sources
- **Citation rule:** Reference information derived from web sources
- **Content constraints:** Avoid speculation or unsupported assumptions

> [!TIP]  
> Clear, well-structured instructions ensure consistent and trustworthy responses across all user interactions.

---

### Step D — Add Web-Based Knowledge Source

1. Navigate to **Knowledge** → **Add knowledge source**.
2. Select **Website**.
3. Configure the source as follows:
   - **URL:** https://www.bajajgeneralinsurance.com/
   - **Domain:** bajajgeneralinsurance.com
   - **Crawl depth:** 2 or 3
4. Save and allow the crawler to index the content.

> [!IMPORTANT]  
> Limiting crawl depth helps balance coverage with relevance and performance.

---

### Step E — Validate Using Test Canvas

1. Open the **Test Canvas**.
2. Ask sample questions related to non-life insurance offerings.
3. Validate that responses are:
   - Accurate
   - Grounded in website content
   - Aligned with the defined persona and tone

---

### Step F — Publish the Agent

1. Once validation is complete, select **Publish**.
2. Make the agent available to the intended channels (e.g., Web or Teams).

---

### 🏅 Congratulations! Your NonLife Catalogue Agent is live!

---

## 🧠 Test Your Understanding

**Key takeaways:**

- Web-grounded agents provide reliable, authoritative responses
- Declarative agents are ideal for low-complexity, knowledge-based use cases
- Instruction quality directly impacts response consistency and trust

**Reflection questions:**

- How would you adjust crawl depth for broader or narrower knowledge coverage?
- What additional instruction rules could further reduce ambiguity?
- Which other public websites could enhance this agent’s usefulness?

---

## 🔁 Summary of Learnings

- Built a declarative Copilot Studio agent
- Configured a professional insurance persona
- Grounded responses using web-based knowledge
- Tested and published the agent successfully

---

## 📌 Conclusions & Recommendations

> [!IMPORTANT]  
> To maximize the effectiveness of web-grounded agents:
> - Regularly review and update web sources
> - Keep instructions concise and explicit
> - Test frequently to ensure accuracy and relevance
> - Start simple before adding complexity

This approach ensures your agents remain reliable, scalable, and aligned with real-world business needs.

---

## Badge Earned
Copilot White Belt
