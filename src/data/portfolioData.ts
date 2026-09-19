export interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  learnings?: string;
  problemsSolved?: string[];
  github?: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  learningProgress?: number;
  learningFocus?: number;
}

export interface TimelineNode {
  title: string;
  description: string;
  year?: string;
}

export const PROFILE = {
  name: "Ahmad Daffa Arief",
  status: "Siswa SMK Muhammadiyah 2 Kota Malang (Jurusan TKJ)",
  tagline: "Linux & Infrastructure Enthusiast",
  bio: "Vocational student building real-world experience through Linux, networking, virtualization, cybersecurity, and homelab infrastructure. Hands-on experimentation and rigorous troubleshooting.",
  github: "https://github.com/wehrmacht241",
  linkedin: "https://linkedin.com/in/example",
  email: "ahmaddaffaakun23655@gmail.com"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Linux & System Administration",
    learningProgress: 90,
    learningFocus: 80,
    skills: ["Arch Linux", "Debian", "Gentoo", "Fedora", "NixOS", "Linux CLI", "systemd", "SSH", "Package Management", "Filesystem Management", "Kernel Troubleshooting", "Server Administration"]
  },
  {
    category: "Virtualization & Infrastructure",
    learningProgress: 70,
    learningFocus: 90,
    skills: ["Proxmox VE", "KVM", "LXC", "Virtual Machines", "Containers", "Proxmox Clustering", "Corosync", "Homelab Infrastructure", "Self-hosted Services", "Network Storage"]
  },
  {
    category: "Networking",
    learningProgress: 50,
    learningFocus: 65,
    skills: ["TCP/IP", "IPv4 Subnetting", "Routing", "DHCP", "NAT", "Static IP", "Network Troubleshooting", "NFS", "MikroTik RouterOS", "MikroTik CHR", "Tailscale", "Subnet Routing", "WireGuard"]
  },
  {
    category: "Development",
    learningProgress: 25,
    learningFocus: 40,
    skills: ["Python", "Bash Scripting", "Git", "Linux Dev Environments"]
  },
  {
    category: "Cybersecurity",
    learningProgress: 10,
    learningFocus: 8,
    skills: ["Linux Security Fundamentals", "Network Security", "Penetration Testing Basics", "Attack Surface Awareness", "Infrastructure Security", "Defensive Security"]
  },
  {
    category: "Local AI Infrastructure",
    learningProgress: 50,
    learningFocus: 80,
    skills: ["llama.cpp", "GGUF Models", "Local LLM Inference", "Local AI Agents", "TTS Experimentation", "AI Infrastructure", "Resource Optimization"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Personal Linux Homelab",
    description: "Built and maintained a multi-device Linux homelab using repurposed hardware to simulate enterprise environments.",
    highlights: ["Multiple Linux servers", "SSH administration", "Network configuration", "Self-hosted infrastructure", "NFS Storage", "Low-resource optimization"],
    technologies: ["Linux", "SSH", "NFS", "Bash", "systemd"],
    learnings: "Mastered remote headless administration, robust storage mounting, and systemd service management.",
    problemsSolved: ["Resolved persistent kernel module load failures on repurposed hardware", "Configured reliable headless boot sequences."]
  },
  {
    title: "Proxmox Infrastructure & Clustering",
    description: "Deployed a multi-node virtualization environment using Proxmox VE, LXC containers, and Corosync quorum clustering.",
    highlights: ["VMs & LXC Containers", "Network bridges", "NFS storage backend", "Proxmox clustering", "Corosync / Quorum"],
    technologies: ["Proxmox VE", "KVM", "LXC", "Corosync", "QEMU"],
    learnings: "Gained deep insight into high availability, cluster quorum maintenance under network jitter, and resource allocation.",
    problemsSolved: ["Diagnosed and fixed split-brain risks by tuning Corosync token timeouts in a 2-node cluster with external witness."]
  },
  {
    title: "MikroTik Networking & Routing Lab",
    description: "Experimented with MikroTik CHR and RouterOS as a virtualized core router managing multi-subnet routing.",
    highlights: ["IP addressing & Subnetting", "Gateway configuration", "DHCP & NAT", "ISP router integration"],
    technologies: ["MikroTik RouterOS", "CHR", "TCP/IP", "NAT/DHCP"],
    learnings: "Understood packet flow, firewall filter chains, NAT table translations, and VLAN trunking.",
    problemsSolved: ["Fixed asymmetric routing issues between virtualized VLANs and physical upstream gateways."]
  },
  {
    title: "Tailscale Subnet Routing & Remote Access",
    description: "Configured secure remote access infrastructure for the homelab using Tailscale as a secure mesh VPN and subnet router.",
    highlights: ["Tailscale Mesh VPN", "Subnet Router configuration", "Private network access", "Routing table adjustments"],
    technologies: ["Tailscale", "WireGuard", "Linux Routing", "IPTables"],
    learnings: "Learned overlay networks, NAT traversal mechanics, and secure remote endpoint management.",
    problemsSolved: ["Configured packet forwarding and IP masquerading on the gateway node to expose internal subnets securely."]
  },
  {
    title: "Linux Storage & NFS Lab",
    description: "Engineered network-attached storage using Linux NFS server/client architectures with automated mounting.",
    highlights: ["NFS Server/Client setup", "Automatic fstab mounting", "HDD/SSD pool management", "SATA/Filesystem troubleshooting"],
    technologies: ["NFS", "Ext4/XFS", "Linux Storage", "systemd"],
    learnings: "Mastered file permissions, export security (root squashing), and network share resilience.",
    problemsSolved: ["Prevented boot hangs during network share timeouts by implementing automount (autofs) and systemd network-online dependencies."]
  },
  {
    title: "Local AI Infrastructure on Low-End Hardware",
    description: "Set up local LLM inference pipelines and AI agent testbeds optimized for resource-constrained hardware.",
    highlights: ["llama.cpp & GGUF models", "CPU inference tuning", "Local AI agents", "TTS experimentation", "Memory footprint optimization"],
    technologies: ["Python", "llama.cpp", "GGUF", "Bash", "Linux Containers"],
    learnings: "Understood quantization impacts, context window memory overhead, and CPU threading optimizations.",
    problemsSolved: ["Optimized thread affinity and thread counts to eliminate CPU bottlenecking during token generation on older microarchitectures."]
  }
];

export const TIMELINE: TimelineNode[] = [
  { title: "Linux Mastery", description: "Deep dive into Linux CLI, Arch/Debian, filesystem hierarchies, and systemd." },
  { title: "System Administration", description: "Headless server management, SSH hardening, package management, and kernel troubleshooting." },
  { title: "Networking Fundamentals", description: "TCP/IP, IPv4 subnetting, static routing, DHCP, NAT, and packet capture." },
  { title: "Homelab Construction", description: "Repurposing old hardware into multi-node Linux server racks with network storage." },
  { title: "Proxmox & Virtualization", description: "Deploying KVM, LXC, bridges, and Corosync high-availability clustering." },
  { title: "MikroTik Routing", description: "Virtual router configuration, firewall rules, gateway integration, and subnet isolation." },
  { title: "Tailscale & VPNs", description: "Encrypted mesh VPN overlays and subnet routing for secure remote management." },
  { title: "Cybersecurity & Hardening", description: "Attack surface reduction, firewall tuning, and defensive security posture." },
  { title: "Local AI Infrastructure", description: "Running GGUF models locally via llama.cpp, resource profiling, and local AI agent integration." }
];
