export const profile = {
  name: "Muhammad Ayman",
  initials: "MA",
  title: "Blue Team Cybersecurity Engineer",
  roles: [
    "Blue Team Engineer",
    "Microsoft 365 Security Engineer",
    "Network Security Specialist",
    "IoT & Embedded Developer",
    "Frontend & UI/UX Engineer",
  ],
  tagline:
    "Defending cloud, identity and network perimeters — and shipping software that runs on them.",
  email: "eng.muhammed.ayman@gmail.com",
  phone: "+20 101 4935 968",
  whatsapp: "201014935968",
  location: "Sharkia, Egypt",
  available: true,
  socials: {
    linkedin: "https://www.linkedin.com/in/eng-muhammad-ayman/",
    github: "https://github.com/M0oham6d",
  },
  summary:
    "Cybersecurity engineer and fresh Electronics & Communications graduate from Zagazig University, specializing in Blue Team operations, Microsoft 365 security, and network defense. Hands-on with Microsoft Sentinel, Defender XDR, Entra ID, Intune and Purview, plus deep practice in Splunk SIEM, threat hunting with KQL, and incident response. Background spans CCNA-level networking, Windows Server / Active Directory, IoT and embedded systems on AVR/ESP32, and modern frontend work with React, Next.js and Tailwind. Currently a Networks & Cybersecurity Instructor and a Microsoft 365 Security Engineer Trainee at Global Brands Group.",
};

export type SkillGroup = { category: string; level: number; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Cybersecurity",
    level: 90,
    skills: [
      "Network Defense", "Threat Detection", "Incident Response",
      "Vulnerability Assessment", "Security Monitoring",
      "CompTIA Security+ Fundamentals", "CySA+ Fundamentals",
      "MITRE ATT&CK", "PKI", "Cryptography",
    ],
  },
  {
    category: "Microsoft 365 Security",
    level: 85,
    skills: [
      "Microsoft Entra ID", "Microsoft Intune", "Defender XDR",
      "Microsoft Purview (DLP)", "Microsoft Sentinel (SIEM/SOAR)", "KQL",
    ],
  },
  {
    category: "Networking",
    level: 88,
    skills: [
      "TCP/IP", "Routing & Switching", "OSPF/OSPFv3", "EIGRP", "STP",
      "VLANs", "ACLs", "ZBF / ASA", "Site-to-Site IPSec VPN",
      "AAA (TACACS+/RADIUS)", "F5 Technologies",
    ],
  },
  {
    category: "Cloud & Identity",
    level: 75,
    skills: [
      "Google Cloud Security", "Zero Trust", "Cloud Native Security",
      "Identity Protection", "Conditional Access",
    ],
  },
  {
    category: "Systems Administration",
    level: 80,
    skills: [
      "Windows Server 2022", "Active Directory", "Group Policy",
      "Linux Administration", "System Hardening", "MCSA",
    ],
  },
  {
    category: "Security Tools",
    level: 85,
    skills: [
      "Splunk", "Microsoft Sentinel", "Nessus", "OpenVAS", "Nmap",
      "Wireshark", "Metasploit", "YARA", "VirusTotal", "AbuseIPDB",
      "Cisco Packet Tracer", "VMware", "Docker",
    ],
  },
  {
    category: "Programming",
    level: 80,
    skills: ["C", "Embedded C", "JavaScript (ES6+)", "Java (OOP)", "KQL", "SPL"],
  },
  {
    category: "Frontend & UI/UX",
    level: 78,
    skills: [
      "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3",
      "Responsive Design", "Accessibility", "Figma", "Adobe XD",
    ],
  },
  {
    category: "IoT & Embedded",
    level: 82,
    skills: [
      "AVR / ATmega32", "ESP32", "RTOS", "Microcontroller Interfacing",
      "Proteus", "Node-RED", "Blynk", "MIT App Inventor",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tag: "Cybersecurity" | "Cloud Security" | "Networking" | "Embedded" | "Teaching";
};

export const experiences: Experience[] = [
  {
    role: "Networks & Cybersecurity Instructor",
    company: "Galaxy for Development (GFD)",
    location: "Sharkia, Egypt",
    period: "Jan 2026 – Present",
    tag: "Teaching",
    bullets: [
      "Delivering CCNA-level networking and cybersecurity training programs.",
      "Teaching TCP/IP, routing & switching, network security and system administration.",
      "Running hands-on labs in Cisco Packet Tracer and Wireshark.",
      "Coaching students through threat detection, incident response and defensive techniques.",
    ],
  },
  {
    role: "Microsoft 365 Security Engineer Trainee",
    company: "Global Brands Group (GBG)",
    location: "New Cairo, Egypt",
    period: "Jan 2026 – Present",
    tag: "Cloud Security",
    bullets: [
      "Implemented identity protection controls across Microsoft Entra ID.",
      "Managed Microsoft Intune for MDM/MAM, device compliance and endpoint security.",
      "Deployed and tuned Microsoft Defender XDR for threat detection & response.",
      "Configured Microsoft Purview DLP and sensitivity labels for data protection.",
      "Built Microsoft Sentinel analytics rules, incident workflows and KQL hunts.",
    ],
  },
  {
    role: "Blue Team Cybersecurity Trainee",
    company: "National Telecommunication Institute (NTI)",
    location: "Smart Village, Egypt",
    period: "Oct 2025 – Jan 2026",
    tag: "Cybersecurity",
    bullets: [
      "Hands-on labs across Security+, CySA+, cryptography and cloud security fundamentals.",
      "Splunk SIEM use cases for log analysis, threat detection and incident monitoring.",
      "Built YARA rules for malware detection; hardened Windows and Linux baselines.",
      "Studied F5 (LTM/ASM/APM/GTM), Trellix EDR/XDR/DLP and Google Cloud Security.",
    ],
  },
  {
    role: "Embedded Systems Trainee",
    company: "EDGES",
    location: "Nasr City, Egypt",
    period: "Jul – Oct 2024",
    tag: "Embedded",
    bullets: [
      "Built embedded projects in C: smart home, smart parking, door locker, stopwatch.",
      "Microcontroller interfacing on AVR/ATmega32; circuit design and HW debugging.",
      "Strong foundations in data structures and computer organization.",
    ],
  },
  {
    role: "IoT Trainee",
    company: "Information Technology Institute (ITI)",
    location: "Egypt",
    period: "2024",
    tag: "Embedded",
    bullets: [
      "IoT value chain, application development and hands-on device labs.",
      "Worked with Node-RED and Blynk for IoT dashboards and control.",
    ],
  },
  {
    role: "CCNA Trainee",
    company: "National Telecommunication Institute (NTI)",
    location: "Egypt",
    period: "2024",
    tag: "Networking",
    bullets: [
      "Introduction to Networks; Switching, Routing & Wireless Essentials.",
      "Enterprise Networking, Security & Automation.",
    ],
  },
];

export type Project = {
  title: string;
  period: string;
  category:
    | "Cybersecurity"
    | "Microsoft 365"
    | "Networking"
    | "IoT / Embedded"
    | "Frontend"
    | "UI/UX";
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Centralized Logging & Security Monitoring with Splunk",
    period: "Jan 2026",
    category: "Cybersecurity",
    description:
      "Designed and deployed a centralized logging stack on Rocky Linux using Splunk Enterprise, forwarding logs from Kali endpoints for real-time monitoring.",
    tech: ["Splunk Enterprise", "Rocky Linux", "Kali Linux", "rsyslog", "Universal Forwarder"],
    highlights: [
      "Hardened Splunk indexer with firewall rules and dedicated indexes.",
      "Real-time log ingestion from multiple Linux endpoints.",
      "Lab-validated alerting and search workflows.",
    ],
  },
  {
    title: "Splunk Threat Hunting Use Case (MITRE ATT&CK)",
    period: "Dec 2025",
    category: "Cybersecurity",
    description:
      "End-to-end threat hunting use case based on a MITRE ATT&CK technique, complete with SPL detections, data sources and response runbook.",
    tech: ["Splunk", "SPL", "Sysmon", "Windows Event Logs", "MITRE ATT&CK"],
    highlights: [
      "Authored detection logic and tuned for false positives.",
      "Documented data sources, attack scenario and response steps.",
    ],
  },
  {
    title: "Lumma Stealer PCAP Investigation",
    period: "Nov 2025",
    category: "Cybersecurity",
    description:
      "Forensic analysis of malicious PCAPs tied to Lumma Stealer, extracting IOCs to support detection and IR workflows.",
    tech: ["Wireshark", "PCAP Analysis", "IOC Extraction"],
    highlights: [
      "Identified C2 domains, suspicious IPs and payload signatures.",
      "Produced IOC report for downstream detection.",
    ],
  },
  {
    title: "Metasploitable Attack Simulation",
    period: "Nov 2025",
    category: "Cybersecurity",
    description:
      "Controlled offensive exercise against Metasploitable, performed to enrich Blue Team detection coverage.",
    tech: ["Kali Linux", "Nmap", "Metasploit"],
    highlights: [
      "Discovered and exploited known vulnerabilities.",
      "Established basic C2 channel for adversary emulation.",
    ],
  },
  {
    title: "Enterprise Network Design & Security Implementation",
    period: "Dec 2025",
    category: "Networking",
    description:
      "Dual-stack IPv4/IPv6 enterprise network with full security hardening, simulated end-to-end in Cisco Packet Tracer.",
    tech: ["Cisco Packet Tracer", "OSPF/OSPFv3", "Cisco ASA", "ZBF", "TACACS+", "RADIUS", "IPSec VPN"],
    highlights: [
      "VLAN segmentation, trunking and Layer-2 security.",
      "AAA, RBAC views and custom privilege levels.",
      "Site-to-Site IPSec VPN between IPv4 sites.",
    ],
  },
  {
    title: "Microsoft 365 Security Hardening Lab",
    period: "2026",
    category: "Microsoft 365",
    description:
      "Lab build covering identity, endpoint, data and SIEM controls across the full Microsoft 365 security stack.",
    tech: ["Entra ID", "Intune", "Defender XDR", "Purview", "Sentinel", "KQL"],
    highlights: [
      "Conditional Access and identity protection policies.",
      "Intune compliance and endpoint hardening baselines.",
      "Sentinel analytics rules and KQL hunting queries.",
    ],
  },
  {
    title: "Integrated Smart Vehicle Management System (ISVMS)",
    period: "Jun 2025",
    category: "IoT / Embedded",
    description:
      "Graduation project: an IoT-enabled smart vehicle with collision avoidance, auto-parking, environmental telemetry and a mobile + web control plane.",
    tech: ["ESP32", "ATmega32", "Embedded C", "Android", "Figma", "IoT Dashboard"],
    highlights: [
      "Collision avoidance via front/rear ultrasonic sensors.",
      "Auto-parking algorithm and remote mobile control.",
      "Live telemetry dashboard for sensors and GPS.",
    ],
    github: "https://github.com/M0oham6d",
  },
  {
    title: "Door Locker Security System",
    period: "Nov 2024",
    category: "IoT / Embedded",
    description:
      "Two-MCU smart lock with password authentication, EEPROM storage, PIR sensing and motorized door control.",
    tech: ["AVR", "Embedded C", "UART", "EEPROM", "Proteus"],
    highlights: [
      "HMI_ECU and CONTROL_ECU communicating over UART.",
      "Password storage in external EEPROM with retry lockout.",
    ],
    github: "https://github.com/M0oham6d",
  },
  {
    title: "Smart Home Automation",
    period: "Oct 2024",
    category: "IoT / Embedded",
    description:
      "Environment-aware home controller for lighting, fans and safety using temperature, light and flame sensors.",
    tech: ["ATmega32", "Embedded C", "PWM", "LM35", "LDR", "Proteus"],
    highlights: ["PWM fan speed control via LM35 readings.", "Flame and light-aware automation."],
    github: "https://github.com/M0oham6d",
  },
  {
    title: "Car Parking Sensor",
    period: "Oct 2024",
    category: "IoT / Embedded",
    description:
      "Ultrasonic parking aid with LED + buzzer feedback and live distance display.",
    tech: ["AVR", "Ultrasonic", "LCD", "Embedded C"],
    highlights: ["Real-time distance display.", "Proximity-tiered LED + audio alerts."],
    github: "https://github.com/M0oham6d",
  },
  {
    title: "Car Controller Mobile UI/UX",
    period: "May 2025",
    category: "UI/UX",
    description:
      "Designed a mobile app for remote car control with intuitive controls, real-time feedback and a full design system.",
    tech: ["Figma", "Design Systems", "Prototyping"],
    highlights: ["User flows and interactive prototypes.", "Reusable design system components."],
  },
  {
    title: "E-Commerce App UI/UX",
    period: "Mar 2025",
    category: "UI/UX",
    description:
      "Complete e-commerce mobile interface with wireframes, hi-fi prototypes and accessibility-first layout.",
    tech: ["Adobe XD", "Wireframing", "Accessibility"],
    highlights: ["Visual hierarchy and responsive layout.", "Accessible component patterns."],
  },
  {
    title: "Responsive Dashboard UI",
    period: "May 2025",
    category: "Frontend",
    description:
      "Multi-page responsive dashboard built with semantic HTML and modern CSS.",
    tech: ["HTML5", "CSS3", "Font Awesome"],
    highlights: ["Semantic structure and keyboard navigation.", "Mobile-first responsive layout."],
    github: "https://github.com/M0oham6d",
  },
  {
    title: "Tetris Game (Java OOP)",
    period: "May 2023",
    category: "Frontend",
    description:
      "Classic Tetris implementation in Java using OOP, with three difficulty levels, sounds and multi-window architecture.",
    tech: ["Java", "OOP", "Swing"],
    highlights: ["Five-window architecture wired through OOP.", "Three difficulty levels with audio."],
    github: "https://github.com/M0oham6d",
  },
];

export type Certification = { name: string; issuer: string; date: string; id?: string };

export const certifications: Certification[] = [
  { name: "Network Security", issuer: "National Telecommunication Institute (NTI)", date: "Jan 2026" },
  { name: "Certified Cybersecurity Educator Professional (CCEP)", issuer: "Independent", date: "Dec 2025" },
  { name: "Cybersecurity Academy — Graduate Level", issuer: "National Telecommunication Institute (NTI)", date: "Sep 2025" },
  { name: "Windows Server Administration (MCSA)", issuer: "Self-paced (Online)", date: "Jul 2025" },
  { name: "Cisco Certified Network Associate (CCNA)", issuer: "NTI / Cisco", date: "Sep 2024" },
  { name: "IoT", issuer: "Information Technology Institute (ITI)", date: "Sep 2024" },
  { name: "Embedded Systems", issuer: "EDGES", date: "Oct 2024" },
  { name: "Master C & C for Embedded Applications", issuer: "Udemy", date: "Oct 2024" },
  { name: "Learn Adobe XD", issuer: "Udemy", date: "Mar 2025" },
];

export const services = [
  {
    title: "Microsoft 365 Security",
    description:
      "Entra ID hardening, Conditional Access, Intune compliance, Defender XDR, Purview DLP and Sentinel analytics.",
    icon: "ShieldCheck",
  },
  {
    title: "Blue Team & SOC Engineering",
    description:
      "Splunk / Sentinel detections, KQL & SPL hunting, MITRE ATT&CK use cases and IR runbooks.",
    icon: "Radar",
  },
  {
    title: "Network Security",
    description:
      "Enterprise network design, VLANs, ACLs, ZBF, Cisco ASA, IPSec VPN and AAA hardening.",
    icon: "Network",
  },
  {
    title: "Cloud Security",
    description:
      "Zero Trust foundations, identity protection and cloud-native security best practices.",
    icon: "Cloud",
  },
  {
    title: "IoT & Embedded Development",
    description:
      "ESP32/AVR firmware, sensor integration, IoT dashboards and embedded C engineering.",
    icon: "Cpu",
  },
  {
    title: "Web & UI/UX",
    description:
      "Responsive React/Next.js frontends, design systems, Figma & Adobe XD prototypes.",
    icon: "Palette",
  },
];

export const education = {
  school: "Zagazig University — Faculty of Engineering",
  degree: "B.Sc. in Electronics & Communications Engineering",
  period: "Graduated July 2025 · Very Good",
  highlights: [
    "Graduation Project: Integrated Smart Vehicle Management System (ISVMS).",
    "Coursework across embedded systems, communications, networking and software engineering.",
  ],
};

export const stats = [
  { label: "Certifications", value: 9 },
  { label: "Projects shipped", value: 14 },
  { label: "Tech & tools", value: 60 },
  { label: "Years building", value: 4 },
];
