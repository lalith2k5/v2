# AI Opportunity Discovery & Innovation Intelligence Platform

A multi-agent, evidence-driven React application that discovers real-world problems, maps them to emerging technologies and research, identifies research gaps, and produces explainable, scored, and ranked problem–technology opportunities.

Built to the **AI-Assisted Problem–Technology Opportunity Discovery Platform System Specification**.

---

## Key Features

1. **Entrance & Command Dashboard**:
   - Executive overview of opportunities, problem clusters, trends, and health metrics
   - Quick workflow routing for Students, Researchers, R&D Leaders, and Investors
   - Real-time search history and notification status

2. **Scored & Ranked Opportunities (Spec §33)**:
   - Full 7-factor weighted scoring model (`w_problem`, `w_tech`, `w_gap`, `w_trend`, `w_evidence`, `w_feasibility`, `w_recency`)
   - Decoupled confidence scoring with beta-weighting (count, diversity, credibility, agreement) and conflict severity penalties
   - Multi-source evidence aggregation across 7 intelligence feeds (GitHub, arXiv, News RSS, R&D Lab cells, Challenge Portals, Patents, and Reddit)
   - Deep detail cards with research directions, project blueprints, known limitations, and polarity metrics

3. **Problem Discovery & Idea Clusters**:
   - Real-world problem profiles extracted from field disclosures and research
   - Demand scoring, keyword indexing, and affected stakeholder mapping
   - Cross-linked to emerging technologies and arXiv preprints

4. **Technology Radar & Maturity**:
   - Classification across stages (*Emerging*, *Validation*, *Rapid Growth*, *Mature*)
   - Trend growth tracking, composite scoring, and related patent/repo links

5. **Research Paper Intelligence**:
   - Curated arXiv preprint analysis with research objectives, methodology, key findings, and documented limitations

6. **Interactive Knowledge Graph**:
   - Force-directed topological network connecting Problems, Technologies, Papers, Organizations, and Trends
   - Relationship filtering (`SOLVES`, `EXTENDS`, `RESEARCHES`, `DEVELOPED_BY`, `DISCOVERED_BY`)
   - 2-hop semantic neighborhood exploration

7. **Spec Module 18 Expert Review Queue**:
   - Reviewer decision workflow for research gaps (`PROPOSED`, `UNDER_REVIEW`, `VALIDATED`, `REVISED`, `REJECTED`)
   - Rationale capture and conflict flag tracking

8. **AI Innovation Chat**:
   - Entity-scoped conversational AI for deep dives into specific opportunities, technologies, or research gaps

9. **Exports & Admin Governance**:
   - Direct contextual PDF and JSON report downloads
   - Agent activity log inspection and scheduler monitoring
   - Data source registry controls

---

## Technical Architecture

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom macOS/Apple-grade dark and light design tokens
- **Data & Persistence**: In-browser spec-compliant mock backend and localStorage persistence engine
- **Visualization**: Recharts & React Force Graph 2D
- **Icons**: Lucide React

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Build production bundle
npm run build
```
