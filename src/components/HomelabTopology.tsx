import React from 'react';

export const HomelabTopology: React.FC = () => {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 md:p-8 overflow-x-auto font-mono text-sm">
      <div className="text-accent text-xs font-semibold mb-6 tracking-wider uppercase flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Interactive Homelab Network Architecture
        </div>
        <span className="text-[11px] text-secondary lowercase font-normal">dual-proxmox + armbian + ovm nfs</span>
      </div>
      
      <div className="min-w-[760px] flex flex-col items-center space-y-6 text-secondary">
        {/* Internet */}
        <div className="border border-border/80 bg-background-light px-6 py-2.5 rounded-lg text-center shadow-sm">
          <span className="text-primary font-bold">🌍 Internet</span>
        </div>

        <div className="text-accent text-xs">↓ (WAN Uplink)</div>

        {/* ISP Router */}
        <div className="border border-border/80 bg-background-light px-6 py-2.5 rounded-lg text-center shadow-sm">
          <span className="text-primary font-semibold">📡 ISP Gateway Router</span>
          <span className="block text-xs text-secondary mt-0.5">192.168.1.1</span>
        </div>

        <div className="text-accent text-xs">↓</div>

        {/* Core Switch */}
        <div className="border border-accent/60 bg-accent/5 px-8 py-3 rounded-lg text-center shadow-md w-full max-w-lg">
          <span className="text-primary font-bold">🖧 Gigabit Core Switch</span>
          <span className="block text-xs text-secondary mt-0.5">VLAN Segmentation, Trunk & Access Ports</span>
        </div>

        <div className="text-accent text-xs">↓ (Distributed Infrastructure)</div>

        {/* Distributed Nodes Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {/* Node 1: Proxmox VE Production + MikroTik CHR */}
          <div className="border border-blue-500/40 bg-blue-500/5 p-4 rounded-xl text-center flex flex-col justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded bg-blue-500/20 text-blue-400 mb-2">PROD NODE</span>
              <div className="text-primary font-bold text-xs mb-1">🖥️ Proxmox VE #1</div>
              <div className="text-[11px] text-primary/90 font-medium mb-1.5">Production Environment</div>
              <div className="border-t border-border/60 pt-2 text-[10px] text-secondary space-y-1 text-left">
                <div className="flex items-center gap-1">
                  <span className="text-accent">➔</span>
                  <span><strong>MikroTik CHR</strong> (Core Router, Firewall, DHCP, NAT)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-accent">➔</span>
                  <span>Mission-Critical Services</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[9px] text-emerald-500 font-semibold uppercase tracking-wider">● Stable / 24x7</div>
          </div>

          {/* Node 2: Proxmox VE Experiments */}
          <div className="border border-amber-500/40 bg-amber-500/5 p-4 rounded-xl text-center flex flex-col justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded bg-amber-500/20 text-amber-400 mb-2">LAB NODE</span>
              <div className="text-primary font-bold text-xs mb-1">🧪 Proxmox VE #2</div>
              <div className="text-[11px] text-primary/90 font-medium mb-1.5">Experiments Only</div>
              <div className="border-t border-border/60 pt-2 text-[10px] text-secondary space-y-1 text-left">
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">➔</span>
                  <span>Distro Hopping (Arch, Gentoo, NixOS)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">➔</span>
                  <span>Sandbox KVM / Testing Containers</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[9px] text-amber-400 font-semibold uppercase tracking-wider">● Scratchpad / Lab</div>
          </div>

          {/* Node 3: STB Armbian Production */}
          <div className="border border-indigo-500/40 bg-indigo-500/5 p-4 rounded-xl text-center flex flex-col justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded bg-indigo-500/20 text-indigo-400 mb-2">ARM PROD</span>
              <div className="text-primary font-bold text-xs mb-1">📟 STB (Armbian) #1</div>
              <div className="text-[11px] text-primary/90 font-medium mb-1.5">Production Services</div>
              <div className="border-t border-border/60 pt-2 text-[10px] text-secondary space-y-1 text-left">
                <div className="flex items-center gap-1">
                  <span className="text-indigo-400">➔</span>
                  <span>Low-Power 24/7 Daemons</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-indigo-400">➔</span>
                  <span>DNS & Core Network Services</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[9px] text-indigo-400 font-semibold uppercase tracking-wider">● Low Power Prod</div>
          </div>

          {/* Node 4: STB Armbian Experiments */}
          <div className="border border-purple-500/40 bg-purple-500/5 p-4 rounded-xl text-center flex flex-col justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded bg-purple-500/20 text-purple-400 mb-2">ARM LAB</span>
              <div className="text-primary font-bold text-xs mb-1">🕹️ STB (Armbian) #2</div>
              <div className="text-[11px] text-primary/90 font-medium mb-1.5">Experiments Lab</div>
              <div className="border-t border-border/60 pt-2 text-[10px] text-secondary space-y-1 text-left">
                <div className="flex items-center gap-1">
                  <span className="text-purple-400">➔</span>
                  <span>Embedded Linux Tests</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-purple-400">➔</span>
                  <span>Kernel Tuning & Benchmarks</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[9px] text-purple-400 font-semibold uppercase tracking-wider">● Scratchpad ARM</div>
          </div>

          {/* Node 5: OpenMediaVault (OMV) NFS Storage */}
          <div className="border border-emerald-500/40 bg-emerald-500/5 p-4 rounded-xl text-center flex flex-col justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-500/20 text-emerald-400 mb-2">STORAGE</span>
              <div className="text-primary font-bold text-xs mb-1">💾 OpenMediaVault</div>
              <div className="text-[11px] text-primary/90 font-medium mb-1.5">Dedicated NFS Storage</div>
              <div className="border-t border-border/60 pt-2 text-[10px] text-secondary space-y-1 text-left">
                <div className="flex items-center gap-1">
                  <span className="text-emerald-500">➔</span>
                  <span>NFS Shares for Proxmox ISO & Backups</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-emerald-500">➔</span>
                  <span>Centralized Persistent Storage</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">● NFS Target</div>
          </div>
        </div>

        {/* Tailscale mesh overlay */}
        <div className="w-full mt-6 pt-6 border-t border-border flex flex-col items-center">
          <div className="text-accent text-xs font-semibold mb-2">🔒 Tailscale Mesh Network & Subnet Router</div>
          <div className="border border-emerald-500/40 bg-emerald-500/5 px-6 py-2.5 rounded-lg text-center max-w-xl">
            <span className="text-primary text-xs">
              Zero-Trust Encrypted WireGuard Overlay ➔ Secure Remote Access to Production & Lab Nodes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomelabTopology;
