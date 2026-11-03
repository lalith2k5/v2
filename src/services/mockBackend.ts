/**
 * Complete in-browser mock backend and data persistence engine
 * Implements the AI Opportunity Discovery & Innovation Intelligence Platform Specification
 */

export interface MockOpportunity {
  id: number;
  title: string;
  description: string;
  opportunity_score: number;
  confidence_score: number;
  demand_score: number;
  research_gap_score: number;
  trend_score: number;
  innovation_score: number;
  competition_score: number;
  feasibility_score: number;
  market_readiness_score: number;
  opportunity_score_spec?: number;
  confidence_spec?: number;
  weights_version?: string;
  confidence_version?: string;
  spec_status?: string;
  explanation?: string;
  domain?: string | null;
  industry?: string | null;
  related_technologies?: string[];
  existing_research?: string[];
  existing_approaches?: string | null;
  known_limitations?: string | null;
  suggested_research_direction?: string | null;
  suggested_project_direction?: string | null;
  emerging_trend?: string | null;
  evidence_sources?: { source: string; url: string; title: string }[];
  organization?: { name: string; industry_domain: string | null; source: string | null } | null;
  problem_type?: string | null;
  created_at?: string;
}

const STORAGE_PREFIX = 'aod_mock_';

function getStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage error', e);
  }
}

// Initial Spec-Compliant Opportunities
const INITIAL_OPPORTUNITIES: MockOpportunity[] = [
  {
    id: 1,
    title: 'Autonomous Hallucination Mitigation for Medical LLM Clinical Summarization',
    description: 'Real-time multi-agent fact-checking and biomedical knowledge graph constraint validation for clinical note generation in Electronic Health Record (EHR) pipelines.',
    opportunity_score: 92.4,
    confidence_score: 88.5,
    demand_score: 95.0,
    research_gap_score: 89.0,
    trend_score: 94.0,
    innovation_score: 91.0,
    competition_score: 62.0,
    feasibility_score: 86.0,
    market_readiness_score: 84.0,
    opportunity_score_spec: 92.4,
    confidence_spec: 88.5,
    weights_version: 'v1.0.0',
    confidence_version: 'v1.0.0',
    spec_status: 'VALIDATED',
    explanation: 'High demand across hospital networks facing physician burnout combined with critical safety gap in unsupervised LLM clinical summaries. 7-factor weighted formula yields 92.4 with strong multi-source evidence.',
    domain: 'Healthcare AI',
    industry: 'Clinical Informatics & Hospitals',
    related_technologies: ['Biomedical Knowledge Graphs', 'RAG Guardrails', 'Constrained Decoding', 'EHR Interoperability APIs'],
    existing_research: ['arXiv:2401.08922 (Clinical Fact Verification)', 'arXiv:2311.14502 (Medical Triples Induction)'],
    existing_approaches: 'Post-hoc human review by nursing staff; static regex blacklist; unconstrained proprietary LLM prompting.',
    known_limitations: 'Latency budget under 1.2s required during live physician consultation; false-positive fact reject rate currently exceeds 14%.',
    suggested_research_direction: 'Develop sub-100ms speculative graph verification models running on edge clinical workstations.',
    suggested_project_direction: 'FHIR-compliant HL7 bridge with continuous local validation daemon for Epic and Cerner EHR suites.',
    emerging_trend: 'Growing (+38% QoQ in clinical AI governance)',
    evidence_sources: [
      { source: 'github', url: 'https://github.com/clinical-nlp/med-fact-check', title: 'MedFact: EHR Assertion Validator (1.4k stars)' },
      { source: 'arxiv', url: 'https://arxiv.org/abs/2401.08922', title: 'Zero-Hallucination Clinical Summarization via Dynamic Graph Guidance' },
      { source: 'news', url: 'https://statnews.com/clinical-ai-governance', title: 'FDA and Health Systems Mandate Real-Time Verifiability' },
      { source: 'challenge_portal', url: 'https://challenge.gov/clinical-ai-safety', title: 'HHS Health AI Safety & Hallucination Challenge 2026' },
      { source: 'rd_cells', url: 'https://mit.edu/csail/ehr-ai', title: 'MIT CSAIL Clinical Decision Intelligence Initiative' }
    ],
    organization: { name: 'Mayo Clinic Clinical R&D', industry_domain: 'Healthcare', source: 'rd_cells' },
    problem_type: 'Safety & Verification',
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 2,
    title: 'Solid-State Battery Dendrite Suppression via Nanocomposite Polymer-Ceramic Interfaces',
    description: 'Overcoming catastrophic short-circuit failures in ultra-fast charging lithium metal solid-state cells through self-healing atomic layer deposition (ALD) electrolytes.',
    opportunity_score: 89.1,
    confidence_score: 84.0,
    demand_score: 93.0,
    research_gap_score: 87.0,
    trend_score: 91.0,
    innovation_score: 88.0,
    competition_score: 55.0,
    feasibility_score: 79.0,
    market_readiness_score: 75.0,
    opportunity_score_spec: 89.1,
    confidence_spec: 84.0,
    weights_version: 'v1.0.0',
    confidence_version: 'v1.0.0',
    spec_status: 'VALIDATED',
    explanation: 'EV automakers require 15-minute 80% charge cycles without dendrite growth. Strong cross-domain alignment between patent filings and materials science literature.',
    domain: 'CleanTech & Energy Storage',
    industry: 'Automotive & Grid Storage',
    related_technologies: ['Solid-State Electrolytes', 'Atomic Layer Deposition', 'In-Situ Synchrotron XRD', 'Self-Healing Polymers'],
    existing_research: ['arXiv:2403.02190 (Ionic Conductivity in Sulfide Solids)', 'Nature Materials 2026 (Ceramic Grain Boundaries)'],
    existing_approaches: 'Thick liquid electrolytes with toxic flammable solvents; high external stack pressure (>5 MPa) mechanical clamps.',
    known_limitations: 'High interfacial impedance at room temperature; brittle mechanical fracture during thermal cycling.',
    suggested_research_direction: 'Design ductile hybrid organo-ceramic interlayers with elastic moduli accommodating lithium expansion.',
    suggested_project_direction: 'Pilot roll-to-roll ALD coating station compatible with standard battery gigafactory slot-die lines.',
    emerging_trend: 'Emerging (+52% YoY in automotive OEM R&D commitments)',
    evidence_sources: [
      { source: 'patents', url: 'https://patents.google.com/patent/US202601991', title: 'Multilayer Solid-State Lithium Electrolyte with In-Situ Barrier' },
      { source: 'rd_cells', url: 'https://anl.gov/solid-state-breakthrough', title: 'Argonne National Lab Joint Center for Energy Storage Research' },
      { source: 'arxiv', url: 'https://arxiv.org/abs/2403.02190', title: 'Microscopic Mechanisms of Dendrite Prevention in PEO-LLZO Hybrids' }
    ],
    organization: { name: 'Argonne National Laboratory', industry_domain: 'Energy & CleanTech', source: 'rd_cells' },
    problem_type: 'Material Failure & Scalability',
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    id: 3,
    title: 'Zero-Knowledge Proof Hardware Acceleration for Decentralized AI Model Auditing',
    description: 'ASIC/FPGA pipelined zk-SNARK prover architecture capable of verifying 70B+ parameter neural network inference weights without exposing proprietary parameters.',
    opportunity_score: 87.8,
    confidence_score: 81.2,
    demand_score: 88.0,
    research_gap_score: 91.0,
    trend_score: 89.0,
    innovation_score: 92.0,
    competition_score: 48.0,
    feasibility_score: 76.0,
    market_readiness_score: 72.0,
    opportunity_score_spec: 87.8,
    confidence_spec: 81.2,
    weights_version: 'v1.0.0',
    confidence_version: 'v1.0.0',
    spec_status: 'UNDER_REVIEW',
    explanation: 'Enterprise and financial compliance rules demand cryptographic proof of model execution integrity while preserving commercial trade secrets.',
    domain: 'Cryptography & AI Systems',
    industry: 'Financial Services & Regulated Tech',
    related_technologies: ['zk-SNARKs', 'Hardware Acceleration (FPGA/ASIC)', 'Quantized NTT Algorithms', 'Confidential Computing'],
    existing_research: ['arXiv:2402.11200 (zkML Benchmarks)', 'IEEE Micro (Hardware NTT Acceleration)'],
    existing_approaches: 'CPU-based prover software taking >45 minutes per forward pass; trusted execution environments (TEEs) prone to side-channel leakage.',
    known_limitations: 'Prover overhead is ~10,000x greater than unverified inference; memory bandwidth bottleneck during large polynomial commitments.',
    suggested_research_direction: 'Explore folding schemes like Nova/HyperNova directly mapped to custom systolic tensor arrays.',
    suggested_project_direction: 'Open-source PCIe zk-coprocessor driver and PyTorch backend hook for verifiable compliance logging.',
    emerging_trend: 'Growing (+44% research volume in zkML)',
    evidence_sources: [
      { source: 'github', url: 'https://github.com/zk-ai/zk-accel-core', title: 'zkAccel: High-Throughput NTT Engine for FPGAs' },
      { source: 'arxiv', url: 'https://arxiv.org/abs/2402.11200', title: 'Sub-Minute Proofs for Billion-Parameter Transformer Inferences' },
      { source: 'news', url: 'https://coindesk.com/zkml-enterprise-audit', title: 'Wall Street Consortia Pilot Verifiable LLM Financial Reasoning' }
    ],
    organization: { name: 'Stanford Cryptography Lab', industry_domain: 'Cryptography', source: 'arxiv' },
    problem_type: 'Computational Bottleneck',
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: 4,
    title: 'Neuromorphic Event-Camera Vision for High-Speed Robotic Micro-Assembly',
    description: 'Sub-millisecond latency visual servoing using asynchronous bio-inspired neuromorphic spiking sensors for semiconductor packaging and micromanipulation.',
    opportunity_score: 85.6,
    confidence_score: 82.0,
    demand_score: 86.0,
    research_gap_score: 84.0,
    trend_score: 87.0,
    innovation_score: 89.0,
    competition_score: 58.0,
    feasibility_score: 82.0,
    market_readiness_score: 79.0,
    opportunity_score_spec: 85.6,
    confidence_spec: 82.0,
    weights_version: 'v1.0.0',
    confidence_version: 'v1.0.0',
    spec_status: 'VALIDATED',
    explanation: 'Traditional 60–240 fps cameras suffer from motion blur during 10,000 components-per-hour surface mount assembly. Event cameras offer microsecond resolution.',
    domain: 'Robotics & Advanced Manufacturing',
    industry: 'Semiconductor & Electronics Manufacturing',
    related_technologies: ['Event Cameras (DVS)', 'Spiking Neural Networks (SNN)', 'Edge Microcontrollers', 'Visual Servoing'],
    existing_research: ['arXiv:2312.04910 (Asynchronous Visual Tracking)', 'Robotics: Science and Systems 2026'],
    existing_approaches: 'Stroboscopic high-speed CMOS sensors requiring extreme lighting power and producing terabytes of redundant video.',
    known_limitations: 'Sensor noise in static scenes; lack of standardized spatial calibration tooling for industrial arm kinematics.',
    suggested_research_direction: 'Hybrid neuromorphic-frame Kalman fusion filters for high-precision sub-pixel coordinate tracking.',
    suggested_project_direction: 'Plug-and-play C-mount industrial event camera module with embedded ROS2 SpikeDriver nodes.',
    emerging_trend: 'Emerging (+31% patent filings in machine vision)',
    evidence_sources: [
      { source: 'patents', url: 'https://patents.google.com/patent/EP399120', title: 'Continuous Asynchronous Visual Alignment for Die Bonding' },
      { source: 'github', url: 'https://github.com/event-robotics/fast-servo', title: 'FastServo: 2000Hz Robotic Eye-in-Hand Tracker' },
      { source: 'rd_cells', url: 'https://fraunhofer.de/microassembly', title: 'Fraunhofer IZM Precision Assembly Joint Venture' }
    ],
    organization: { name: 'Fraunhofer Institute for Reliability and Microintegration', industry_domain: 'Semiconductors', source: 'rd_cells' },
    problem_type: 'Latency & Sensor Fidelity',
    created_at: new Date(Date.now() - 86400000 * 6).toISOString(),
  },
  {
    id: 5,
    title: 'Generative RNA Tertiary Structure Prediction for Targeted Riboswitch Therapeutics',
    description: 'Equivariant diffusion model architectures predicting dynamic 3D conformational states of non-coding RNA targets for intractable oncology and rare disease pathways.',
    opportunity_score: 93.8,
    confidence_score: 89.4,
    demand_score: 96.0,
    research_gap_score: 94.0,
    trend_score: 95.0,
    innovation_score: 97.0,
    competition_score: 45.0,
    feasibility_score: 81.0,
    market_readiness_score: 77.0,
    opportunity_score_spec: 93.8,
    confidence_spec: 89.4,
    weights_version: 'v1.0.0',
    confidence_version: 'v1.0.0',
    spec_status: 'VALIDATED',
    explanation: 'Over 85% of disease-associated genomic transcripts are non-coding RNA with scarce experimental crystallization data. High therapeutic upside.',
    domain: 'Biotech & Genomics',
    industry: 'Pharmaceuticals & Drug Discovery',
    related_technologies: ['Equivariant Diffusion', 'Cryo-EM Ensemble Modeling', 'SE(3) Transformers', 'RNA Chemical Probing (SHAPE-seq)'],
    existing_research: ['Nature Biotechnology 2026 (RNAfold-3D)', 'arXiv:2402.18900 (Equivariant RNA Conformational Ensembles)'],
    existing_approaches: 'Secondary structure 2D co-variance folding (ViennaRNA); rigid-body docking software with high steric clash rates.',
    known_limitations: 'Scarcity of solved RNA crystal structures in PDB compared to proteins (<2% of entries); dynamic folding kinetics.',
    suggested_research_direction: 'Condition generative models on high-throughput in-cell DMS-MaPseq chemical reactivity profiles.',
    suggested_project_direction: 'Cloud-native computational riboswitch screening workbench targeting cancer stem-cell driver RNAs.',
    emerging_trend: 'Growing (+65% Venture & Pharma R&D allocation)',
    evidence_sources: [
      { source: 'arxiv', url: 'https://arxiv.org/abs/2402.18900', title: 'DiffRNA: Ensemble Conformational Dynamics of Riboswitches' },
      { source: 'news', url: 'https://biopharmadive.com/rna-tertiary-revolution', title: 'Top 5 Pharmas Form Alliance for RNA 3D Targeting' },
      { source: 'github', url: 'https://github.com/open-rna/diff-fold-3d', title: 'DiffFold3D: Open RNA generative diffusion package' }
    ],
    organization: { name: 'Broad Institute of MIT and Harvard', industry_domain: 'Life Sciences', source: 'rd_cells' },
    problem_type: 'Structural Modeling & Data Scarcity',
    created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
  },
  {
    id: 6,
    title: 'Continuous Acoustic Emission Anomaly Detection for Subsea High-Voltage DC Interconnects',
    description: 'Ultra-low-power fiber-optic distributed acoustic sensing (DAS) with edge CNNs for real-time submarine power cable seabed abrasion and partial discharge detection.',
    opportunity_score: 83.2,
    confidence_score: 79.5,
    demand_score: 84.0,
    research_gap_score: 82.0,
    trend_score: 85.0,
    innovation_score: 83.0,
    competition_score: 65.0,
    feasibility_score: 84.0,
    market_readiness_score: 80.0,
    opportunity_score_spec: 83.2,
    confidence_spec: 79.5,
    weights_version: 'v1.0.0',
    confidence_version: 'v1.0.0',
    spec_status: 'PROPOSED',
    explanation: 'Offshore wind farms lose $35M+ per cable fault due to delayed inspection vessels. Permanent fiber DAS monitoring prevents anchor strikes and cable scouring.',
    domain: 'CleanTech & Maritime Infrastructure',
    industry: 'Offshore Wind & Energy Transmission',
    related_technologies: ['Distributed Acoustic Sensing (DAS)', 'Fiber-Optic OTDR', 'Edge 1D-CNNs', 'Subsea Cable Armor Engineering'],
    existing_research: ['IEEE Trans. Power Delivery 2026', 'arXiv:2401.07720 (Acoustic Feature Extraction in Turbid Seawater)'],
    existing_approaches: 'Annual ROV visual underwater surveys; reactive post-tripping fault locator pulses.',
    known_limitations: 'High ambient seabed acoustic noise from marine life and shipping; optical attenuation across >150 km cable runs.',
    suggested_research_direction: 'Self-supervised contrastive learning models pre-trained on wave action noise profiles.',
    suggested_project_direction: 'Edge interrogator box deployable on offshore wind substations with automated satellite alerting.',
    emerging_trend: 'Stable (High sustained utility and infrastructure investment)',
    evidence_sources: [
      { source: 'challenge_portal', url: 'https://sbir.gov/offshore-wind-cables', title: 'DOE National Lab Marine Energy Innovation Prize' },
      { source: 'news', url: 'https://rechargenews.com/subsea-power-cable-failures', title: 'Insurers Report Subsea Cable Claims Surpass Wind Turbine Claims' }
    ],
    organization: { name: 'National Renewable Energy Laboratory (NREL)', industry_domain: 'Renewable Energy', source: 'rd_cells' },
    problem_type: 'Infrastructure Monitoring & Harsh Environments',
    created_at: new Date(Date.now() - 86400000 * 9).toISOString(),
  }
];

// Initial Problem Clusters / Ideas
const INITIAL_PROBLEMS = [
  {
    id: 1,
    title: 'Clinical LLM Hallucinations in High-Stakes Patient Intake',
    description: 'LLMs generate plausible but factually erroneous medical assertions, medication dosages, and patient histories without grounding verification.',
    keywords: ['hallucination', 'clinical safety', 'EHR', 'factual grounding', 'knowledge graph'],
    source_count: 38,
    demand_score: 95.0,
    domain: 'Healthcare AI',
    problem_type: 'Safety & Verification',
    trend_score: 94.0,
    trend_name: 'AI Safety & Verification',
    opportunity_count: 3,
    top_opportunity_score: 92.4,
    recent_activity: '12 new papers this week',
    composite_score: 94.2
  },
  {
    id: 2,
    title: 'Solid-State Electrolyte Dendrite Penetration and Interfacial Resistance',
    description: 'Lithium dendrites penetrate solid ceramic and polymer electrolytes during high-rate fast charging, causing catastrophic internal short circuits.',
    keywords: ['solid-state', 'dendrite', 'lithium metal', 'fast charging', 'electrolyte'],
    source_count: 29,
    demand_score: 93.0,
    domain: 'CleanTech',
    problem_type: 'Material Science Bottleneck',
    trend_score: 91.0,
    trend_name: 'Solid-State Battery Tech',
    opportunity_count: 2,
    top_opportunity_score: 89.1,
    recent_activity: '8 patent applications published',
    composite_score: 91.8
  },
  {
    id: 3,
    title: 'Prover Latency in Zero-Knowledge Machine Learning (zkML)',
    description: 'Generating cryptographic zero-knowledge proofs for modern transformer inferences requires massive computational overhead and hours of CPU runtime.',
    keywords: ['zkML', 'zero-knowledge', 'hardware acceleration', 'prover latency', 'privacy'],
    source_count: 24,
    demand_score: 88.0,
    domain: 'Cryptography',
    problem_type: 'Computational Overhead',
    trend_score: 89.0,
    trend_name: 'Verifiable AI Inference',
    opportunity_count: 2,
    top_opportunity_score: 87.8,
    recent_activity: '4 open source libraries launched',
    composite_score: 88.4
  },
  {
    id: 4,
    title: 'Motion Blur and Latency in High-Speed Precision Robotics',
    description: 'Standard frame-based visual inspection systems cannot track microsecond micro-assembly components without introducing extreme motion blur.',
    keywords: ['event camera', 'neuromorphic', 'visual servoing', 'motion blur', 'micro-assembly'],
    source_count: 19,
    demand_score: 86.0,
    domain: 'Robotics',
    problem_type: 'Sensor Latency Bottleneck',
    trend_score: 87.0,
    trend_name: 'Neuromorphic Sensing',
    opportunity_count: 1,
    top_opportunity_score: 85.6,
    recent_activity: 'DARPA robotics testbed published',
    composite_score: 86.2
  },
  {
    id: 5,
    title: 'RNA 3D Conformational Modeling Under Extreme Data Scarcity',
    description: 'Lack of resolved crystallographic tertiary structures for therapeutic non-coding RNA targets limits rational small molecule drug discovery.',
    keywords: ['RNA folding', 'riboswitch', 'equivariant diffusion', 'drug discovery', 'SHAPE-seq'],
    source_count: 31,
    demand_score: 96.0,
    domain: 'Biotech',
    problem_type: 'Structural Biology Gap',
    trend_score: 95.0,
    trend_name: 'Generative Biomolecular Design',
    opportunity_count: 2,
    top_opportunity_score: 93.8,
    recent_activity: 'Broad Institute benchmark released',
    composite_score: 95.6
  }
];

// Initial Research Gaps (Spec Module 18)
const INITIAL_RESEARCH_GAPS = [
  {
    id: 1,
    title: 'Sub-100ms Graph Constraint Verification for Streaming Clinical LLMs',
    description: 'Current neuro-symbolic graph validation methods require seconds per assertion, exceeding the tight latency budget needed for live physician-patient dictation.',
    gap_score: 89.0,
    gap_confidence: 88.0,
    kind: 'CAPABILITY' as const,
    gap_status: 'VALIDATED' as const,
    supporting_limitations: ['Inability to verify recursive medical assertions', 'Excessive memory footprint on edge devices'],
    created_at: new Date(Date.now() - 86400000 * 3).toISOString()
  },
  {
    id: 2,
    title: 'In-Situ Atomic Layer Interface Self-Healing in Sulfide Electrolytes',
    description: 'Lack of real-time electro-chemo-mechanical feedback models predicting atomic migration during sub-zero fast charging cycles.',
    gap_score: 87.0,
    gap_confidence: 83.5,
    kind: 'COVERAGE' as const,
    gap_status: 'UNDER_REVIEW' as const,
    supporting_limitations: ['Synchrotron test setups cannot run continuous 1,000 charge cycles', 'High void formation at low ambient temps'],
    created_at: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    id: 3,
    title: 'Pipelined Polynomial Commitment Architecture on 16nm FPGAs',
    description: 'No existing open-source RTL implementations can stream large degree 2^24 polynomial commitments without CPU bus stalling.',
    gap_score: 91.0,
    gap_confidence: 82.0,
    kind: 'CAPABILITY' as const,
    gap_status: 'PROPOSED' as const,
    supporting_limitations: ['Memory bandwidth saturation over PCIe Gen5', 'High thermal dissipation during continuous NTT loops'],
    created_at: new Date(Date.now() - 86400000 * 1).toISOString()
  },
  {
    id: 4,
    title: 'Dynamic Multi-State RNA Riboswitch Thermodynamic Ensemble Prediction',
    description: 'Existing generative models predict single static 3D states, failing to capture ligand-dependent metastable switching equilibria.',
    gap_score: 94.0,
    gap_confidence: 90.0,
    kind: 'CAPABILITY' as const,
    gap_status: 'VALIDATED' as const,
    supporting_limitations: ['Overfitting on limited PDB RNA crystal structures', 'Failure to predict pseudoknot torsion angles accurately'],
    created_at: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];

// Initial Trends
const INITIAL_TRENDS = [
  { id: 1, name: 'AI Safety & Verification', category: 'Healthcare AI', trend_score: 94.0, growth_rate: 0.38, recent_avg: 88.0, prior_avg: 64.0, label: 'growing' as const, detected_at: new Date().toISOString() },
  { id: 2, name: 'Solid-State Battery Tech', category: 'Energy Storage', trend_score: 91.0, growth_rate: 0.52, recent_avg: 85.0, prior_avg: 56.0, label: 'emerging' as const, detected_at: new Date().toISOString() },
  { id: 3, name: 'Verifiable zkML Coprocessors', category: 'Cryptography', trend_score: 89.0, growth_rate: 0.44, recent_avg: 82.0, prior_avg: 57.0, label: 'growing' as const, detected_at: new Date().toISOString() },
  { id: 4, name: 'Neuromorphic Event Vision', category: 'Robotics', trend_score: 87.0, growth_rate: 0.31, recent_avg: 79.0, prior_avg: 60.0, label: 'emerging' as const, detected_at: new Date().toISOString() },
  { id: 5, name: 'Generative Biomolecular Design', category: 'Biotech', trend_score: 95.0, growth_rate: 0.65, recent_avg: 92.0, prior_avg: 55.0, label: 'growing' as const, detected_at: new Date().toISOString() }
];

// Initial Knowledge Graph Data
const INITIAL_KG_NODES = [
  { id: 1, name: 'Clinical LLM Hallucinations', type: 'Problem', metadata: { domain: 'Healthcare AI', severity: 'Critical' } },
  { id: 2, name: 'Biomedical Knowledge Graphs', type: 'Technology', metadata: { stage: 'Rapid Growth', tRL: 7 } },
  { id: 3, name: 'RAG Guardrails', type: 'Technology', metadata: { stage: 'Rapid Growth', tRL: 8 } },
  { id: 4, name: 'arXiv:2401.08922', type: 'ResearchPaper', metadata: { authors: ['K. Patel', 'M. Chen'], year: 2026 } },
  { id: 5, name: 'Mayo Clinic Clinical R&D', type: 'Organization', metadata: { type: 'Hospital R&D Lab' } },
  { id: 6, name: 'Solid-State Battery Dendrites', type: 'Problem', metadata: { domain: 'CleanTech', severity: 'High' } },
  { id: 7, name: 'Atomic Layer Deposition', type: 'Technology', metadata: { stage: 'Mature', tRL: 8 } },
  { id: 8, name: 'Argonne National Laboratory', type: 'Organization', metadata: { type: 'Federal Research Lab' } },
  { id: 9, name: 'zkML Hardware Provers', type: 'Technology', metadata: { stage: 'Emerging', tRL: 4 } },
  { id: 10, name: 'Stanford Cryptography Lab', type: 'Organization', metadata: { type: 'Academic Institution' } },
  { id: 11, name: 'Generative RNA 3D Diffusion', type: 'Technology', metadata: { stage: 'Emerging', tRL: 5 } },
  { id: 12, name: 'Broad Institute', type: 'Organization', metadata: { type: 'Genomics Research Institute' } }
];

const INITIAL_KG_EDGES = [
  { source: 'Biomedical Knowledge Graphs', target: 'Clinical LLM Hallucinations', relation: 'SOLVES' },
  { source: 'RAG Guardrails', target: 'Clinical LLM Hallucinations', relation: 'SOLVES' },
  { source: 'arXiv:2401.08922', target: 'Biomedical Knowledge Graphs', relation: 'EXTENDS' },
  { source: 'Mayo Clinic Clinical R&D', target: 'Clinical LLM Hallucinations', relation: 'DISCOVERED_BY' },
  { source: 'Atomic Layer Deposition', target: 'Solid-State Battery Dendrites', relation: 'SOLVES' },
  { source: 'Argonne National Laboratory', target: 'Solid-State Battery Dendrites', relation: 'RESEARCHES' },
  { source: 'zkML Hardware Provers', target: 'Stanford Cryptography Lab', relation: 'DEVELOPED_BY' },
  { source: 'Generative RNA 3D Diffusion', target: 'Broad Institute', relation: 'DEVELOPED_BY' }
];

// Initial Data Sources
const INITIAL_DATA_SOURCES = [
  { id: 1, name: 'github', source_type: 'repo + issues', is_active: true, last_fetched: '2026-11-02T20:15:00Z', document_count: 1840 },
  { id: 2, name: 'arxiv', source_type: 'research papers', is_active: true, last_fetched: '2026-11-02T20:20:00Z', document_count: 2450 },
  { id: 3, name: 'news', source_type: 'RSS news feeds', is_active: true, last_fetched: '2026-11-02T20:25:00Z', document_count: 1290 },
  { id: 4, name: 'rd_cells', source_type: 'R&D lab feeds', is_active: true, last_fetched: '2026-11-02T19:50:00Z', document_count: 670 },
  { id: 5, name: 'challenge_portal', source_type: 'gov challenges', is_active: true, last_fetched: '2026-11-02T18:00:00Z', document_count: 320 },
  { id: 6, name: 'patents', source_type: 'PatentsView', is_active: true, last_fetched: '2026-11-02T17:30:00Z', document_count: 890 },
  { id: 7, name: 'reddit', source_type: 'community posts', is_active: true, last_fetched: '2026-11-02T20:10:00Z', document_count: 1120 }
];

// Seed storage if empty
export function initMockStore() {
  if (!localStorage.getItem(STORAGE_PREFIX + 'opportunities')) {
    setStorage('opportunities', INITIAL_OPPORTUNITIES);
  }
  if (!localStorage.getItem(STORAGE_PREFIX + 'problems')) {
    setStorage('problems', INITIAL_PROBLEMS);
  }
  if (!localStorage.getItem(STORAGE_PREFIX + 'research_gaps')) {
    setStorage('research_gaps', INITIAL_RESEARCH_GAPS);
  }
  if (!localStorage.getItem(STORAGE_PREFIX + 'trends')) {
    setStorage('trends', INITIAL_TRENDS);
  }
  if (!localStorage.getItem(STORAGE_PREFIX + 'data_sources')) {
    setStorage('data_sources', INITIAL_DATA_SOURCES);
  }
  if (!localStorage.getItem(STORAGE_PREFIX + 'kg_nodes')) {
    setStorage('kg_nodes', INITIAL_KG_NODES);
  }
  if (!localStorage.getItem(STORAGE_PREFIX + 'kg_edges')) {
    setStorage('kg_edges', INITIAL_KG_EDGES);
  }
}

// Ensure mock backend handles requests
export function setupMockBackend() {
  initMockStore();

  // If user is not logged in, seed a valid logged-in session so the user can immediately experience the app!
  if (!localStorage.getItem('aod_token')) {
    const defaultUser = {
      id: 1,
      name: 'Dr. Elena Vance (Lead Innovation Architect)',
      email: 'test@example.com',
      role: 'admin',
    };
    localStorage.setItem('aod_token', 'mock_jwt_token_demo');
    localStorage.setItem('aod_refresh', 'mock_refresh_token_demo');
    localStorage.setItem('aod_user', JSON.stringify(defaultUser));
  }

  // Intercept window.fetch for /api calls
  const originalFetch = window.fetch;
  window.fetch = async function (input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const urlString = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;

    if (urlString.startsWith('/api') || urlString.startsWith('http://localhost:8000/api')) {
      const path = urlString.replace(/^https?:\/\/[^/]+/, '').replace(/^\/api/, '');
      const method = (init?.method || 'GET').toUpperCase();

      // Handle PDF and JSON exports
      if (path.includes('/reports/pdf')) {
        const reportText = `AI OPPORTUNITY DISCOVERY & INNOVATION INTELLIGENCE PLATFORM REPORT\nGenerated: ${new Date().toISOString()}\n\nModule: Spec §33 / 7-Factor Weighted Scoring\nPlatform Confidence: 88.5%\n\nOpportunity Title: Autonomous Hallucination Mitigation for Medical LLM Clinical Summarization\nScore: 92.4 (Spec Confirmed)\nDomain: Healthcare AI / Clinical Informatics\n\nExecutive Summary:\nEvidence synthesized across 5 independent sources reveals critical clinical demand for sub-100ms real-time fact-checking guardrails.\n\nRecommended Action:\nAdvance to pilot testing on FHIR/HL7 EHR sandbox.`;
        const blob = new Blob([reportText], { type: 'application/pdf' });
        return new Response(blob, {
          status: 200,
          headers: { 'Content-Type': 'application/pdf' },
        });
      }

      if (path.includes('/export/')) {
        const opps = getStorage('opportunities', INITIAL_OPPORTUNITIES);
        const blob = new Blob([JSON.stringify(opps, null, 2)], { type: 'application/json' });
        return new Response(blob, {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      try {
        const responseData = await handleMockApiRoute(path, method, init?.body);
        return new Response(JSON.stringify(responseData), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err: any) {
        return new Response(
          JSON.stringify({ detail: err.message || 'Internal mock error' }),
          { status: err.status || 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    return originalFetch.apply(window, [input, init]);
  };
}

async function handleMockApiRoute(path: string, method: string, body?: any): Promise<any> {
  const [routePath, queryString] = path.split('?');
  const params = new URLSearchParams(queryString || '');

  // Auth routes
  if (routePath === '/auth/login' && method === 'POST') {
    let email = 'test@example.com';
    let role = 'admin';
    if (body) {
      if (typeof body === 'string') {
        const p = new URLSearchParams(body);
        email = p.get('username') || email;
      } else if (body instanceof FormData) {
        email = (body.get('username') as string) || email;
      }
    }
    const user = { id: 1, name: email.split('@')[0], email, role };
    return {
      access_token: 'mock_jwt_token_' + Date.now(),
      refresh_token: 'mock_refresh_token_' + Date.now(),
      user,
    };
  }

  if (routePath === '/auth/register' && method === 'POST') {
    const data = typeof body === 'string' ? JSON.parse(body) : body;
    const user = { id: Date.now(), name: data.name || 'User', email: data.email, role: data.role || 'researcher' };
    return {
      access_token: 'mock_jwt_token_' + Date.now(),
      refresh_token: 'mock_refresh_token_' + Date.now(),
      user,
    };
  }

  if (routePath === '/auth/refresh') {
    return { access_token: 'mock_jwt_token_' + Date.now(), refresh_token: 'mock_refresh_token_' + Date.now() };
  }

  if (routePath === '/auth/logout') {
    return { ok: true };
  }

  // Health
  if (routePath === '/health') {
    return {
      status: 'healthy',
      vectors_stored: 4892,
      agents_online: 16,
      pipeline_idle: true,
      spec_version: 'v1.0.0',
    };
  }

  // Opportunities
  if (routePath === '/opportunities' && method === 'GET') {
    const opps = getStorage<MockOpportunity[]>('opportunities', INITIAL_OPPORTUNITIES);
    const domain = params.get('domain');
    const industry = params.get('industry');
    const technology = params.get('technology');
    const problem_type = params.get('problem_type');

    let filtered = opps;
    if (domain) filtered = filtered.filter(o => o.domain?.toLowerCase().includes(domain.toLowerCase()));
    if (industry) filtered = filtered.filter(o => o.industry?.toLowerCase().includes(industry.toLowerCase()));
    if (technology) filtered = filtered.filter(o => o.related_technologies?.some(t => t.toLowerCase().includes(technology.toLowerCase())));
    if (problem_type) filtered = filtered.filter(o => o.problem_type?.toLowerCase().includes(problem_type.toLowerCase()));

    return filtered;
  }

  if (routePath === '/opportunities/filters') {
    return {
      domains: ['Healthcare AI', 'CleanTech & Energy Storage', 'Cryptography & AI Systems', 'Robotics & Advanced Manufacturing', 'Biotech & Genomics', 'CleanTech & Maritime Infrastructure'],
      industries: ['Clinical Informatics & Hospitals', 'Automotive & Grid Storage', 'Financial Services & Regulated Tech', 'Semiconductor & Electronics Manufacturing', 'Pharmaceuticals & Drug Discovery', 'Offshore Wind & Energy Transmission'],
      technologies: ['Biomedical Knowledge Graphs', 'RAG Guardrails', 'Solid-State Electrolytes', 'Atomic Layer Deposition', 'zk-SNARKs', 'Hardware Acceleration (FPGA/ASIC)', 'Event Cameras (DVS)', 'Equivariant Diffusion', 'Distributed Acoustic Sensing (DAS)'],
      problem_types: ['Safety & Verification', 'Material Failure & Scalability', 'Computational Bottleneck', 'Latency & Sensor Fidelity', 'Structural Modeling & Data Scarcity', 'Infrastructure Monitoring & Harsh Environments']
    };
  }

  // Opportunity Detail
  const oppDetailMatch = routePath.match(/^\/opportunities\/(\d+)$/);
  if (oppDetailMatch && method === 'GET') {
    const id = parseInt(oppDetailMatch[1], 10);
    const opps = getStorage<MockOpportunity[]>('opportunities', INITIAL_OPPORTUNITIES);
    const opp = opps.find(o => o.id === id) || opps[0];
    return opp;
  }

  // Opportunity History
  if (routePath.match(/^\/opportunities\/\d+\/history/)) {
    const days = parseInt(params.get('days') || '30', 10);
    const history = [];
    for (let i = days; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000).toISOString().slice(5, 10);
      history.push({
        date: d,
        opportunity_score: Math.min(100, Math.max(70, 85 + Math.sin(i / 3) * 6 + (30 - i) * 0.2)),
        confidence_score: Math.min(100, Math.max(65, 80 + Math.cos(i / 4) * 5)),
      });
    }
    return history;
  }

  // Recommendations
  if (routePath.match(/^\/opportunities\/\d+\/recommendations/) || routePath === '/recommendations/recent') {
    return {
      count: 3,
      recommendations: [
        {
          id: 1,
          opportunity_id: 1,
          opportunity: { id: 1, title: 'Autonomous Hallucination Mitigation for Medical LLMs' },
          suggested_research_direction: 'Develop sub-100ms speculative graph verification models on edge hospital nodes.',
          suggested_project_direction: 'FHIR HL7 bridge with continuous local validation daemon for Epic EHR.',
          score_at_time: 92.4,
          rank_at_time: 1,
          created_at: new Date().toISOString()
        },
        {
          id: 2,
          opportunity_id: 2,
          opportunity: { id: 2, title: 'Solid-State Battery Dendrite Suppression' },
          suggested_research_direction: 'Design ductile hybrid organo-ceramic interlayers with elastic moduli accommodating lithium expansion.',
          suggested_project_direction: 'Pilot roll-to-roll ALD coating station compatible with standard battery gigafactory lines.',
          score_at_time: 89.1,
          rank_at_time: 2,
          created_at: new Date(Date.now() - 86400000).toISOString()
        }
      ]
    };
  }

  // Problems / Ideas
  if (routePath === '/problems' || routePath === '/ideas') {
    return getStorage('problems', INITIAL_PROBLEMS);
  }

  const ideaDetailMatch = routePath.match(/^\/ideas\/(\d+)$/);
  if (ideaDetailMatch) {
    const id = parseInt(ideaDetailMatch[1], 10);
    const problems = getStorage<any[]>('problems', INITIAL_PROBLEMS);
    const item = problems.find(p => p.id === id) || problems[0];
    return {
      idea: item,
      related_technologies: [
        { name: 'Biomedical Knowledge Graphs', stage: 'Rapid Growth', confidence: 0.88 },
        { name: 'RAG Guardrails', stage: 'Rapid Growth', confidence: 0.92 }
      ],
      related_news: [
        { id: 101, title: 'Health Regulators Issue Guidance on LLM Hallucinations in Clinical Settings', url: 'https://news.health-ai.org/fda-ehr', source: 'news' },
        { id: 102, title: 'Hospital Networks Form Safety Verification Coalition', url: 'https://healthcare-it.com/ehr-safety', source: 'news' }
      ],
      reddit_discussions: [
        { id: 201, title: 'Experiences deploying open-source LLMs in real clinical documentation pipelines', url: 'https://reddit.com/r/MachineLearning', source: 'reddit' }
      ],
      github_repositories: [
        { id: 301, title: 'clinical-nlp/med-fact-check', url: 'https://github.com/clinical-nlp/med-fact-check', source: 'github' }
      ],
      research_papers: [
        { id: 401, title: 'Zero-Hallucination Clinical Summarization via Dynamic Graph Guidance', arxiv_id: '2401.08922', relevance_score: 0.94 }
      ],
      evidence: [
        { source: 'arXiv', title: 'Clinical Fact Verification Benchmark', url: 'https://arxiv.org/abs/2401.08922', relevance_score: 0.94 },
        { source: 'GitHub', title: 'MedFact Repository (1.4k stars)', url: 'https://github.com/clinical-nlp/med-fact-check', relevance_score: 0.89 }
      ],
      potential_gaps: [
        { id: 1, title: 'Sub-100ms Graph Constraint Verification for Streaming Clinical LLMs', description: 'Latency exceeds acceptable clinician wait times during real-time speech transcription.', gap_score: 89.0 }
      ],
      opportunities: [
        { id: 1, title: 'Autonomous Hallucination Mitigation for Medical LLM Clinical Summarization', opportunity_score: 92.4, feasibility_score: 86.0 }
      ],
      suggested_directions: [
        { kind: 'research', text: 'Investigate speculative graph decoding with pruned biomedical ontology subgraphs.' },
        { kind: 'project', text: 'Build an open-source SMART-on-FHIR clinical summary verifier extension.' }
      ]
    };
  }

  // Research Gaps
  if (routePath === '/research-gaps') {
    return getStorage('research_gaps', INITIAL_RESEARCH_GAPS);
  }

  // Trends
  if (routePath === '/trends') {
    return getStorage('trends', INITIAL_TRENDS);
  }

  if (routePath.match(/^\/trends\/[^/]+\/history/)) {
    const days = parseInt(params.get('days') || '30', 10);
    const history = [];
    for (let i = days; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000).toISOString().slice(5, 10);
      history.push({
        date: d,
        score: Math.min(100, Math.max(50, 75 + Math.sin(i / 4) * 8 + (30 - i) * 0.3)),
      });
    }
    return history;
  }

  // Technologies
  if (routePath === '/technologies') {
    return [
      {
        name: 'Biomedical Knowledge Graphs',
        domain: 'Healthcare AI',
        stage: 'Rapid Growth',
        confidence: 0.89,
        source_count: 42,
        related_problem_count: 5,
        related_paper_count: 14,
        trend_score: 94.0,
        trend_label: 'growing',
        recent_activity: '12 new papers this week',
        description: 'Structured ontologies representing biological entities, clinical relationships, and drug interactions for grounding generative models.',
        composite_score: 91.5
      },
      {
        name: 'Solid-State Electrolytes',
        domain: 'Energy & CleanTech',
        stage: 'Emerging',
        confidence: 0.84,
        source_count: 36,
        related_problem_count: 4,
        related_paper_count: 18,
        trend_score: 91.0,
        trend_label: 'emerging',
        recent_activity: '8 patent applications published',
        description: 'Inorganic sulfide and ceramic materials replacing flammable liquid electrolytes in next-generation lithium cells.',
        composite_score: 88.0
      },
      {
        name: 'zkML Hardware Acceleration',
        domain: 'Cryptography',
        stage: 'Emerging',
        confidence: 0.82,
        source_count: 28,
        related_problem_count: 3,
        related_paper_count: 9,
        trend_score: 89.0,
        trend_label: 'growing',
        recent_activity: '4 open source libraries launched',
        description: 'FPGA and ASIC coprocessors executing Number Theoretic Transforms and polynomial commitments for zero-knowledge neural network audits.',
        composite_score: 86.2
      },
      {
        name: 'Event-Camera Vision',
        domain: 'Robotics',
        stage: 'Rapid Growth',
        confidence: 0.86,
        source_count: 22,
        related_problem_count: 2,
        related_paper_count: 11,
        trend_score: 87.0,
        trend_label: 'emerging',
        recent_activity: 'DARPA robotics testbed published',
        description: 'Bio-inspired asynchronous vision sensors that report pixel-level brightness changes with microsecond temporal resolution.',
        composite_score: 85.0
      },
      {
        name: 'Equivariant RNA Diffusion',
        domain: 'Biotech',
        stage: 'Emerging',
        confidence: 0.88,
        source_count: 34,
        related_problem_count: 3,
        related_paper_count: 16,
        trend_score: 95.0,
        trend_label: 'growing',
        recent_activity: 'Broad Institute benchmark released',
        description: 'Geometric deep learning models that generate 3D RNA conformational ensembles respecting SE(3) spatial symmetries.',
        composite_score: 93.0
      }
    ];
  }

  const techDetailMatch = routePath.match(/^\/technologies\/([^/]+)$/);
  if (techDetailMatch) {
    const rawName = decodeURIComponent(techDetailMatch[1]);
    return {
      technology: {
        name: rawName,
        stage: 'Rapid Growth',
        confidence: 0.89,
        domain: 'Deep Technology & Applied AI',
        domains: ['Applied AI', 'Systems Engineering', 'Computer Science'],
        source_count: 38,
        related_problem_count: 4,
        related_paper_count: 14,
        description: `${rawName} represents an advancing frontier in high-performance innovation intelligence, unlocking new capabilities across enterprise workflows and scientific discovery.`
      },
      related_problems: [
        {
          id: 1,
          problem_title: 'Hallucination Mitigation in High-Stakes Decision Support',
          problem_description: 'Autonomous reasoning validation for critical regulatory and clinical tasks.',
          industry_domain: 'Healthcare & Enterprise',
          problem_type: 'Safety & Verification',
          organization: 'Mayo Clinic Clinical R&D',
          source: 'rd_cells',
          source_url: 'https://mayo.edu/rd',
          stage: 'Validation',
          created_at: new Date().toISOString()
        }
      ],
      related_papers: [
        {
          id: 1,
          title: 'Dynamic Graph Guidance for Verifiable Autonomous Reasoning',
          arxiv_id: '2401.08922',
          url: 'https://arxiv.org/abs/2401.08922',
          relevance_score: 0.94,
          authors: ['K. Patel', 'M. Chen', 'S. Gupta'],
          abstract: 'We present a novel constrained decoding algorithm utilizing real-time graph verification to enforce factual assertions.',
          research_methods: ['SE(3) Graph Neural Networks', 'Constrained Beam Decoding'],
          results_summary: 'Reduced factual error rate from 18.2% to 1.1% while maintaining conversational fluency.',
          limitations: ['Requires pre-indexed knowledge base', 'Additional 80ms latency per generation step'],
          research_areas: ['Natural Language Processing', 'Neuro-Symbolic AI']
        }
      ],
      github_repositories: [
        { id: 1, title: 'awesome-neurosymbolic-ai', url: 'https://github.com/ai/awesome', source: 'github', collected_at: new Date().toISOString() }
      ],
      news_articles: [
        { id: 2, title: 'Venture Investment Surges in Hardware & Grounded AI', url: 'https://techcrunch.com', source: 'news', collected_at: new Date().toISOString() }
      ],
      reddit_discussions: [],
      trend: {
        name: rawName,
        trend_score: 92.0,
        category: 'Applied AI',
        detected_at: new Date().toISOString(),
        growth_rate: 0.42,
        recent_avg: 88.0,
        prior_avg: 62.0,
        label: 'growing'
      },
      potential_gaps: [
        { id: 1, title: 'Edge Hardware Acceleration Bottleneck', description: 'Model evaluation requires heavy server GPUs; lack of quantized edge runtimes.', gap_score: 87.5 }
      ],
      opportunities: [
        { id: 1, title: 'Autonomous Hallucination Mitigation for Medical LLM Clinical Summarization', opportunity_score: 92.4, feasibility_score: 86.0, research_gap_score: 89.0, domain: 'Healthcare AI', industry: 'Clinical Informatics' }
      ],
      sources: [
        { source: 'arXiv', title: 'Graph Guidance in Clinical Tasks', url: 'https://arxiv.org/abs/2401.08922' },
        { source: 'GitHub', title: 'Open-Source Grounding Tooling', url: 'https://github.com/clinical-nlp/med-fact-check' }
      ]
    };
  }

  // Research Papers
  if (routePath === '/research-papers') {
    return [
      {
        arxiv_id: '2401.08922',
        arxiv_id_raw: '2401.08922v2',
        title: 'Zero-Hallucination Clinical Summarization via Dynamic Graph Guidance',
        authors: ['K. Patel', 'M. Chen', 'S. Gupta', 'E. Vance'],
        year: 2026,
        published: '2026-01-18',
        domain: 'Healthcare AI',
        keywords: ['EHR', 'knowledge graphs', 'clinical NLP', 'hallucination mitigation'],
        abstract_snippet: 'We introduce GraphGuard, a neuro-symbolic decoding architecture that validates clinical assertion triples in real-time against medical knowledge graphs...',
        relevance_score: 0.94,
        url: 'https://arxiv.org/abs/2401.08922',
        limitations_count: 2,
        methods: ['Constrained Decoding', 'Entity Disambiguation', 'Graph Embedding']
      },
      {
        arxiv_id: '2403.02190',
        arxiv_id_raw: '2403.02190v1',
        title: 'Microscopic Mechanisms of Dendrite Prevention in PEO-LLZO Hybrid Electrolytes',
        authors: ['H. Zhang', 'R. Tanaka', 'L. Dubois'],
        year: 2026,
        published: '2026-03-02',
        domain: 'Energy Storage',
        keywords: ['solid-state battery', 'dendrite suppression', 'in-situ synchrotron', 'LLZO'],
        abstract_snippet: 'Using operando synchrotron X-ray computed microtomography, we visualize the initiation and mechanical arrest of lithium dendrites at polymer-ceramic interfaces...',
        relevance_score: 0.91,
        url: 'https://arxiv.org/abs/2403.02190',
        limitations_count: 2,
        methods: ['Synchrotron Microtomography', 'Impedance Spectroscopy', 'Molecular Dynamics']
      },
      {
        arxiv_id: '2402.11200',
        arxiv_id_raw: '2402.11200v3',
        title: 'Sub-Minute Proofs for Billion-Parameter Transformer Inferences',
        authors: ['A. Klein', 'F. Rossi', 'T. Zhao'],
        year: 2026,
        published: '2026-02-14',
        domain: 'Cryptography & AI Systems',
        keywords: ['zk-SNARKs', 'zkML', 'hardware NTT', 'polynomial commitments'],
        abstract_snippet: 'We introduce FastZK, a parallelized folding scheme and FPGA pipeline optimized for 16-bit quantized matrix-vector products in LLMs...',
        relevance_score: 0.89,
        url: 'https://arxiv.org/abs/2402.11200',
        limitations_count: 3,
        methods: ['HyperNova Folding', 'FPGA Pipelining', 'Quantized NTT']
      }
    ];
  }

  const paperDetailMatch = routePath.match(/^\/research-papers\/([^/]+)$/);
  if (paperDetailMatch) {
    const rawId = decodeURIComponent(paperDetailMatch[1]);
    return {
      paper: {
        arxiv_id: rawId,
        arxiv_id_raw: rawId,
        title: 'Zero-Hallucination Clinical Summarization via Dynamic Graph Guidance',
        authors: ['K. Patel', 'M. Chen', 'S. Gupta', 'E. Vance'],
        published: '2026-01-18',
        year: 2026,
        url: `https://arxiv.org/abs/${rawId}`,
        abstract: 'Automated clinical documentation using large language models promises to relieve physician burnout, but hallucinations pose substantial medical risks. We present GraphGuard, a speculative constraint architecture that verifies factual assertions against unified biomedical knowledge graphs during generation without retraining the base language model.',
        relevance_score: 0.94,
        domain: 'Healthcare AI'
      },
      research_objective: 'Eliminate factual inaccuracies in automated clinical intake summaries using real-time knowledge graph constraint checks.',
      methodology: ['Biomedical Named Entity Recognition', 'Dynamic Graph Traversal', 'Constrained Beam Search', 'Epic EHR Integration Tests'],
      key_findings: 'Reduces physician-verified error rate by 94.2% while achieving 45 tokens/second on an NVIDIA L40S GPU.',
      limitations: [
        'Requires continuous ontology updates for newly approved pharmaceuticals.',
        'Slightly higher latency on consumer-grade hospital workstations lacking tensor accelerators.'
      ],
      related_papers: [
        { arxiv_id: '2311.14502', title: 'Medical Triples Induction for Low-Resource Languages', year: 2025, relevance_score: 0.85, url: 'https://arxiv.org/abs/2311.14502' }
      ],
      related_technologies: ['Biomedical Knowledge Graphs', 'RAG Guardrails', 'Constrained Decoding'],
      potential_gaps: [
        { id: 1, title: 'Sub-100ms Graph Constraint Verification for Streaming Clinical LLMs', description: 'Need ultra-fast edge validation under 100ms.', gap_score: 89.0 }
      ],
      source: { url: `https://arxiv.org/abs/${rawId}`, arxiv_id: rawId }
    };
  }

  // R&D Problem Profiles
  if (routePath === '/problem-profiles') {
    return {
      total: 3,
      offset: 0,
      limit: 10,
      items: [
        {
          id: 1,
          organization: 'Mayo Clinic Clinical R&D',
          problem_title: 'Real-Time EHR Clinical Note Hallucination Detection',
          problem_description: 'Physicians spend >3.5 hours per shift editing automated clinical notes due to untrusted LLM outputs.',
          industry_domain: 'Healthcare',
          problem_type: 'Safety & Verification',
          technology_stage: 'Validation',
          required_technology: ['Biomedical Knowledge Graphs', 'EHR HL7 FHIR Bridge'],
          current_approach: 'Manual physician review',
          known_limitations: 'High burnout, 14% missed factual errors under time pressure',
          expected_outcome: 'Zero critical hallucinations; under 15s note sign-off time',
          source: 'rd_cells',
          source_url: 'https://mayo.edu/rd',
          keywords: ['hallucination', 'EHR', 'clinical safety'],
          problem_status: 'VALIDATED',
          student_suitability: 'High - excellent thesis project for biomedical informatics',
          extracted_by: 'ProblemExtractorAgent v1.2',
          affected_stakeholders: ['Physicians', 'Patients', 'Hospital Compliance'],
          evidence: ['Mayo internal audit report', 'HHS Health AI Safety challenge brief'],
          confidence: 0.92,
          created_at: new Date().toISOString()
        },
        {
          id: 2,
          organization: 'Argonne National Laboratory',
          problem_title: 'Lithium Dendrite Penetration in Solid-State Electrolytes',
          problem_description: 'Dendritic shorts prevent commercialization of solid-state EV battery packs capable of 15-minute fast charging.',
          industry_domain: 'Energy & CleanTech',
          problem_type: 'Material Failure & Scalability',
          technology_stage: 'Prototyping',
          required_technology: ['Solid-State Electrolytes', 'Atomic Layer Deposition'],
          current_approach: 'High mechanical stack pressure clamps (>5 MPa)',
          known_limitations: 'Pack weight penalty; cell fracture after 300 cycles',
          expected_outcome: 'Dendrite-free cycling over 1,000 cycles at 4C charge rate',
          source: 'rd_cells',
          source_url: 'https://anl.gov',
          keywords: ['solid-state', 'battery', 'lithium metal'],
          problem_status: 'VALIDATED',
          student_suitability: 'Moderate - requires lab access to gloveboxes or synchrotron beamtime',
          extracted_by: 'ProblemExtractorAgent v1.2',
          affected_stakeholders: ['EV Automakers', 'Battery Gigafactories'],
          evidence: ['DOE JCESR Annual Report', 'Nature Materials peer review'],
          confidence: 0.88,
          created_at: new Date().toISOString()
        }
      ]
    };
  }

  const rdDetailMatch = routePath.match(/^\/rd\/problems\/(\d+)$/);
  if (rdDetailMatch) {
    const id = parseInt(rdDetailMatch[1], 10);
    return {
      problem: {
        id,
        organization: 'Mayo Clinic Clinical R&D',
        problem_title: 'Real-Time EHR Clinical Note Hallucination Detection',
        problem_description: 'Physicians spend >3.5 hours per shift editing automated clinical notes due to untrusted LLM outputs.',
        industry_domain: 'Healthcare',
        problem_type: 'Safety & Verification',
        technology_stage: 'Validation',
        required_technology: ['Biomedical Knowledge Graphs', 'EHR HL7 FHIR Bridge'],
        current_approach: 'Manual physician review',
        known_limitations: 'High burnout, 14% missed factual errors under time pressure',
        expected_outcome: 'Zero critical hallucinations; under 15s note sign-off time',
        source: 'rd_cells',
        source_url: 'https://mayo.edu/rd',
        keywords: ['hallucination', 'EHR', 'clinical safety'],
        problem_status: 'VALIDATED',
        student_suitability: 'High - excellent thesis project for biomedical informatics',
        extracted_by: 'ProblemExtractorAgent v1.2',
        affected_stakeholders: ['Physicians', 'Patients', 'Hospital Compliance'],
        evidence: ['Mayo internal audit report', 'HHS Health AI Safety challenge brief'],
        confidence: 0.92,
        created_at: new Date().toISOString()
      },
      organization: {
        id: 1,
        name: 'Mayo Clinic Clinical R&D',
        industry_domain: 'Healthcare',
        source: 'rd_cells'
      },
      related_technologies: [
        { name: 'Biomedical Knowledge Graphs', stage: 'Rapid Growth', confidence: 0.89 },
        { name: 'RAG Guardrails', stage: 'Rapid Growth', confidence: 0.92 }
      ],
      technology_landscape: {
        count: 4,
        stages: ['Emerging', 'Validation', 'Rapid Growth'],
        average_confidence: 0.88
      },
      research_landscape: [
        {
          id: 1,
          arxiv_id: '2401.08922',
          title: 'Zero-Hallucination Clinical Summarization via Dynamic Graph Guidance',
          year: 2026,
          relevance_score: 0.94,
          url: 'https://arxiv.org/abs/2401.08922',
          research_methods: ['SE(3) Graph Neural Networks', 'Constrained Beam Search'],
          results_summary: 'Reduced factual error rate from 18.2% to 1.1% while maintaining conversational fluency.'
        }
      ],
      emerging_trends: [
        { name: 'AI Safety & Verification', trend_score: 94.0, category: 'Healthcare AI', detected_at: new Date().toISOString() }
      ],
      evidence_aggregation: {
        github: [{ id: 1, title: 'MedFact Validator', url: 'https://github.com/clinical-nlp/med-fact-check', source: 'github', collected_at: new Date().toISOString() }],
        arxiv: [{ id: 2, title: 'Dynamic Graph Guidance', url: 'https://arxiv.org/abs/2401.08922', source: 'arxiv', collected_at: new Date().toISOString() }]
      },
      evidence_sources: [
        { source: 'arXiv', title: 'Dynamic Graph Guidance', url: 'https://arxiv.org/abs/2401.08922' }
      ],
      knowledge_graph: {
        node: 'Clinical LLM Hallucinations',
        nodes: [
          { name: 'Clinical LLM Hallucinations', type: 'Problem', metadata: {} },
          { name: 'Biomedical Knowledge Graphs', type: 'Technology', metadata: {} }
        ],
        edges: [
          { source: 'Biomedical Knowledge Graphs', target: 'Clinical LLM Hallucinations', relation: 'SOLVES' }
        ]
      },
      potential_gaps: [
        { id: 1, title: 'Sub-100ms Graph Constraint Verification for Streaming Clinical LLMs', description: 'Latency bottleneck in real-time dictation.', gap_score: 89.0 }
      ],
      innovation_opportunities: [
        { id: 1, title: 'Autonomous Hallucination Mitigation for Medical LLM Clinical Summarization', opportunity_score: 92.4, feasibility_score: 86.0, research_gap_score: 89.0, domain: 'Healthcare AI', industry: 'Clinical Informatics' }
      ],
      opportunity_scoring: {
        opportunity_id: 1,
        title: 'Autonomous Hallucination Mitigation for Medical LLM Clinical Summarization',
        opportunity_score: 92.4,
        demand: 95.0,
        research_gap: 89.0,
        trend: 94.0,
        feasibility: 86.0,
        market_readiness: 84.0,
        technology_suitability: 91.0,
        evidence_strength: 92.0,
        recency: 96.0,
        confidence: 88.5,
        explanation: 'Strong demand score and multi-source credibility with 5 independent evidence feeds.'
      },
      recommended_next_steps: [
        { kind: 'research', text: 'Benchmark against PubMedKB and UMLS medical ontology subgraphs.' },
        { kind: 'prototype', text: 'Assemble Dockerized FHIR proxy service with Epic test sandbox.' }
      ]
    };
  }

  // Flow endpoints
  if (routePath === '/researcher/flow') {
    return {
      topic: params.get('topic') || 'quantum computing',
      matched_papers: 14,
      identified_gaps: getStorage('research_gaps', INITIAL_RESEARCH_GAPS),
      emerging_directions: [
        'Explore error mitigation via surface codes in high-noise regimes',
        'Investigate hybrid quantum-classical tensor networks for molecular simulation'
      ]
    };
  }

  if (routePath === '/rd/flow') {
    return {
      industry_problem: params.get('industry_problem') || 'all',
      technology_landscape: [
        { technology: 'Solid-State Electrolytes', readiness: 'TRL 6', confidence: 0.88 },
        { technology: 'Atomic Layer Deposition', readiness: 'TRL 8', confidence: 0.94 }
      ],
      evidence_summary: 'Aggregated from 7 sources including 3 federal lab disclosures.',
      opportunities: getStorage('opportunities', INITIAL_OPPORTUNITIES)
    };
  }

  if (routePath === '/problem-profiles/stats') {
    return {
      total_profiles: 48,
      validated: 32,
      under_review: 12,
      proposed: 4,
      unique_orgs: 18
    };
  }

  // Review Queue (Spec Module 18)
  if (routePath === '/admin/review/queue') {
    const gaps = getStorage<any[]>('research_gaps', INITIAL_RESEARCH_GAPS);
    return {
      count: gaps.length,
      items: gaps.map(g => ({
        id: g.id,
        title: g.title,
        description: g.description,
        gap_score: g.gap_score,
        gap_confidence: g.gap_confidence || 85.0,
        kind: g.kind || 'CAPABILITY',
        gap_status: g.gap_status || 'PROPOSED',
        supporting_limitations: g.supporting_limitations || ['Identified via automated literature synthesis'],
        problem_cluster_id: 1,
        created_at: g.created_at || new Date().toISOString()
      }))
    };
  }

  const reviewDecideMatch = routePath.match(/^\/admin\/review\/gaps\/(\d+)\/decide$/);
  if (reviewDecideMatch && method === 'POST') {
    const gapId = parseInt(reviewDecideMatch[1], 10);
    const data = typeof body === 'string' ? JSON.parse(body) : body;
    const gaps = getStorage<any[]>('research_gaps', INITIAL_RESEARCH_GAPS);
    const target = gaps.find(g => g.id === gapId);
    if (target) {
      target.gap_status = data.decision;
      target.decision_rationale = data.rationale;
      setStorage('research_gaps', gaps);
    }
    return { ok: true, gapId, decision: data.decision };
  }

  // Admin endpoints
  if (routePath === '/admin/stats') {
    return {
      total_opportunities: 42,
      active_gaps: 18,
      total_papers: 156,
      total_sources: 7,
      pipeline_runs: 84,
      conflicts_detected: 2,
    };
  }

  if (routePath === '/admin/users') {
    return [
      { id: 1, name: 'Dr. Elena Vance', email: 'test@example.com', role: 'admin', created_at: '2026-09-01' },
      { id: 2, name: 'Marcus Thorne', email: 'marcus@mit.edu', role: 'researcher', created_at: '2026-10-12' },
      { id: 3, name: 'Sarah Lin', email: 'sarah@apexventures.com', role: 'investor', created_at: '2026-10-20' },
      { id: 4, name: 'Reviewer Panel Lead', email: 'panel@spec18.org', role: 'reviewer', created_at: '2026-10-25' }
    ];
  }

  if (routePath.match(/^\/admin\/users\/\d+\/role/)) {
    return { ok: true, message: 'Role updated' };
  }

  if (routePath === '/admin/agent-logs') {
    return [
      { id: 1, agent_name: 'OrchestratorAgent', event: 'PIPELINE_COMPLETE', message: 'Cycle finished with 6 new opportunities scored.', timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: 2, agent_name: 'OpportunityIntelligence', event: 'SCORE_CALCULATED', message: '7-factor formula evaluated for Opp #1: 92.4', timestamp: new Date(Date.now() - 3700000).toISOString() },
      { id: 3, agent_name: 'EvidenceAgent', event: 'EVIDENCE_POLARITY_CHECK', message: 'Synthesized 5 sources for clinical verification. Polarity: +0.88', timestamp: new Date(Date.now() - 3800000).toISOString() },
      { id: 4, agent_name: 'ConflictDetector', event: 'SWEEP_COMPLETE', message: 'CR-1..CR-6 evaluated. 0 active blocking conflicts found.', timestamp: new Date(Date.now() - 3900000).toISOString() }
    ];
  }

  if (routePath === '/admin/scheduler') {
    return {
      is_running: true,
      interval_hours: 6,
      last_run: new Date(Date.now() - 7200000).toISOString(),
      next_run: new Date(Date.now() + 14400000).toISOString(),
      spec_hooks_interval_min: 15,
      active_jobs: ['Data Ingestion', 'Conflict Sweeper (CR-1..CR-6)', 'Spec Score Recalculator']
    };
  }

  if (routePath === '/admin/scheduler/trigger') {
    return { ok: true, message: 'Scheduler pipeline triggered immediately.' };
  }

  if (routePath === '/admin/settings') {
    return {
      items: [
        { key: 'weights_version', value: 'v1.0.0 (7-Factor Spec §33.2)' },
        { key: 'w_problem', value: '0.20' },
        { key: 'w_tech', value: '0.15' },
        { key: 'w_gap', value: '0.20' },
        { key: 'w_trend', value: '0.15' },
        { key: 'w_evidence', value: '0.15' },
        { key: 'w_feasibility', value: '0.10' },
        { key: 'w_recency', value: '0.05' },
        { key: 'confidence_conflict_penalty', value: '0.50' }
      ]
    };
  }

  if (routePath === '/admin/sync/status') {
    return {
      status: 'idle',
      last_synced: new Date(Date.now() - 1800000).toISOString(),
      items_indexed: 5420
    };
  }

  if (routePath === '/admin/sync/trigger') {
    return { ok: true, status: 'Sync triggered successfully.' };
  }

  if (routePath === '/admin/llm/status') {
    return {
      provider: 'Gemini (gemini-3.5-flash-lite)',
      fallback: 'OpenRouter -> OpenAI',
      rpd_remaining: 488,
      latency_ms: 295,
      active_status: 'HEALTHY'
    };
  }

  if (routePath === '/admin/pipeline/status') {
    return {
      running: false,
      started_at: null,
      topic: 'quantum computing & solid-state batteries',
      user_id: 1
    };
  }

  if (routePath === '/admin/data-sources') {
    return getStorage('data_sources', INITIAL_DATA_SOURCES);
  }

  const dsToggleMatch = routePath.match(/^\/admin\/data-sources\/(\d+)$/);
  if (dsToggleMatch && method === 'PATCH') {
    const id = parseInt(dsToggleMatch[1], 10);
    const data = typeof body === 'string' ? JSON.parse(body) : body;
    const sources = getStorage<any[]>('data_sources', INITIAL_DATA_SOURCES);
    const target = sources.find(s => s.id === id);
    if (target) {
      target.is_active = data.is_active;
      setStorage('data_sources', sources);
    }
    return { ok: true, updated: target };
  }

  if (routePath === '/admin/keys') {
    return {
      slots: [
        { name: 'GEMINI_API_KEY', configured: true, source: 'env', preview: 'AIzaSy...****', updated_at: '2026-10-18', updated_by: 1 },
        { name: 'OPENAI_API_KEY', configured: false, source: 'none', preview: '', updated_at: null, updated_by: null },
        { name: 'GITHUB_TOKEN', configured: true, source: 'env', preview: 'ghp_****', updated_at: '2026-10-18', updated_by: 1 }
      ]
    };
  }

  // Knowledge Graph
  if (routePath === '/kg/stats') {
    return {
      total_nodes: 124,
      total_edges: 312,
      density: 0.042,
      avg_degree: 5.03
    };
  }

  if (routePath === '/kg/entity-types') {
    return ['Problem', 'Technology', 'ResearchPaper', 'Organization', 'Trend', 'ResearchGap'];
  }

  if (routePath === '/kg/nodes') {
    return getStorage('kg_nodes', INITIAL_KG_NODES);
  }

  if (routePath === '/kg/edges') {
    return getStorage('kg_edges', INITIAL_KG_EDGES);
  }

  if (routePath.match(/^\/kg\/semantic-chain\//)) {
    const nodes = getStorage<any[]>('kg_nodes', INITIAL_KG_NODES);
    const edges = getStorage<any[]>('kg_edges', INITIAL_KG_EDGES);
    return {
      nodes: nodes.slice(0, 8),
      edges: edges.slice(0, 10)
    };
  }

  // Pipeline Run
  if (routePath === '/pipeline/run') {
    return {
      status: 'started',
      run_id: 'run_' + Date.now(),
      topic: (body && typeof body === 'object' && body.query) || 'autonomous systems',
      message: '16 AI agents orchestrated. Ingestion, clustering, and 7-factor scoring completed.'
    };
  }

  // AI Chat
  if (routePath === '/chat') {
    const q = (body && typeof body === 'object' && body.question) || 'How does this work?';
    return {
      response: `Based on the latest multi-agent evidence synthesis:\n\nRegarding **"${q}"**:\n\n1. **Core Problem Alignment**: We cross-referenced 7 active data sources (GitHub repositories, arXiv preprints, news feeds, and federal R&D cells). There is strong evidence pointing to actionable technical gaps.\n2. **Technology Readiness**: The associated technologies are currently in the *Rapid Growth* phase with high suitability scores according to the 7-factor evaluation formula.\n3. **Recommended Next Steps**: Review the linked research directions and export the contextual dossier for engineering review.`,
      confidence: 0.91,
      citations: [
        { title: 'Clinical NLP & Grounding (arXiv:2401.08922)', url: 'https://arxiv.org/abs/2401.08922' },
        { title: 'MedFact Validation Suite', url: 'https://github.com/clinical-nlp/med-fact-check' }
      ]
    };
  }

  // Semantic Search
  if (routePath === '/search') {
    const q = (body && typeof body === 'object' && body.query) ? body.query.toLowerCase() : '';
    const opps = getStorage<MockOpportunity[]>('opportunities', INITIAL_OPPORTUNITIES);
    const problems = getStorage<any[]>('problems', INITIAL_PROBLEMS);
    return {
      opportunities: opps.filter(o => o.title.toLowerCase().includes(q) || o.description.toLowerCase().includes(q)),
      problems: problems.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)),
      technologies: [
        { name: 'Biomedical Knowledge Graphs', match_score: 0.92 },
        { name: 'Solid-State Electrolytes', match_score: 0.88 }
      ],
      papers: [
        { title: 'Zero-Hallucination Clinical Summarization via Dynamic Graph Guidance', arxiv_id: '2401.08922', match_score: 0.95 }
      ]
    };
  }

  // Notifications
  if (routePath === '/notifications') {
    return [
      { id: 1, title: 'New High-Score Opportunity', message: 'Autonomous Hallucination Mitigation reached 92.4 Spec Score.', is_read: false, created_at: new Date(Date.now() - 3600000).toISOString() },
      { id: 2, title: 'Expert Review Queue Update', message: 'New research gap proposed for Module 18 evaluation.', is_read: false, created_at: new Date(Date.now() - 14400000).toISOString() }
    ];
  }

  if (routePath === '/notifications/unread-count') {
    return { unread: 2 };
  }

  if (routePath.match(/^\/notifications\/\d+\/read/)) {
    return { ok: true };
  }

  if (routePath === '/notifications/read-all') {
    return { ok: true };
  }

  // Organizations
  if (routePath === '/organizations') {
    return [
      { id: 1, name: 'Mayo Clinic Clinical R&D', canonical_name: 'mayo_clinic', industry_domain: 'Healthcare', source: 'rd_cells', profile_count: 5 },
      { id: 2, name: 'Argonne National Laboratory', canonical_name: 'argonne_national_lab', industry_domain: 'CleanTech', source: 'rd_cells', profile_count: 8 },
      { id: 3, name: 'Stanford Cryptography Lab', canonical_name: 'stanford_crypto', industry_domain: 'Cryptography', source: 'arxiv', profile_count: 4 },
      { id: 4, name: 'Fraunhofer IZM', canonical_name: 'fraunhofer_izm', industry_domain: 'Robotics', source: 'rd_cells', profile_count: 6 },
      { id: 5, name: 'Broad Institute', canonical_name: 'broad_institute', industry_domain: 'Biotech', source: 'rd_cells', profile_count: 7 }
    ];
  }

  // History
  if (routePath === '/search-history') {
    return [
      { id: 1, query: 'medical LLM hallucination', timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: 2, query: 'solid state battery dendrite', timestamp: new Date(Date.now() - 7200000).toISOString() },
      { id: 3, query: 'zkML hardware accelerator', timestamp: new Date(Date.now() - 86400000).toISOString() }
    ];
  }

  if (routePath === '/chat-history') {
    return [
      { id: 1, title: 'Medical LLM verification discussion', created_at: new Date(Date.now() - 3600000).toISOString() }
    ];
  }

  // Fallback for any other endpoint
  return { ok: true, status: 'simulated', path: routePath };
}
