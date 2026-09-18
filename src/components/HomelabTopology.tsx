import React from 'react';
export const HomelabTopology: React.FC = () => {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 md:p-8 overflow-x-auto font-mono text-sm">
      <div className="text-accent text-xs font-semibold mb-4 tracking-wider uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Interactive Topology Architecture
      </div>
      
      <div className="min-w-[640px] flex flex-col items-center space-y-6 text-secondary">
        {/* Internet */}
        <div className="border border-border/80 bg-background-light px-6 py-3 rounded-lg text-center shadow-sm">
          <span className="text-primary font-bold">🌍 Internet</span>
        </div>

        <div className="text-accent">↓</div>

        {/* ISP Router */}
        <div className="border border-border/80 bg-background-light px-6 py-3 rounded-lg text-center shadow-sm">
          <span className="text-primary font-semibold">📡 ISP Gateway / Router</span>
          <span className="block text-xs text-secondary mt-0.5">192.168.1.1 (Gateway)</span>
        </div>

        <div className="text-accent">↓</div>

        {/* MikroTik */}
        <div className="border border-accent/60 bg-accent/5 px-6 py-3 rounded-lg text-center shadow-md">
          <span className="text-primary font-bold">🔀 MikroTik RouterOS (CHR)</span>
          <span className="block text-xs text-secondary mt-0.5">Firewall, NAT, DHCP, VLAN Routing</span>
        </div>

        <div className="text-accent">↓</div>

        {/* Network Switch */}
        <div className="border border-border/80 bg-background-light px-8 py-3 rounded-lg text-center shadow-sm w-full max-w-md">
          <span className="text-primary font-semibold">🖧 Gigabit Core Switch</span>
        </div>

        <div className="w-full max-w-2xl grid grid-cols-4 gap-4 pt-2">
          {/* Proxmox Node */}
          <div className="border border-border bg-background-light p-4 rounded-lg text-center">
            <div className="text-primary font-bold text-xs mb-1">🖥️ Proxmox VE</div>
            <div className="text-[10px] text-secondary">KVM / LXC Cluster</div>
          </div>

          {/* Linux Servers */}
          <div className="border border-border bg-background-light p-4 rounded-lg text-center">
            <div className="text-primary font-bold text-xs mb-1">🐧 Linux Servers</div>
            <div className="text-[10px] text-secondary">Arch / Debian / NixOS</div>
          </div>

          {/* Storage / NFS */}
          <div className="border border-border bg-background-light p-4 rounded-lg text-center">
            <div className="text-primary font-bold text-xs mb-1">💾 NFS Storage</div>
            <div className="text-[10px] text-secondary">ZFS / Network Share</div>
          </div>

          {/* Client Devices */}
          <div className="border border-border bg-background-light p-4 rounded-lg text-center">
            <div className="text-primary font-bold text-xs mb-1">💻 Client Nodes</div>
            <div className="text-[10px] text-secondary">Workstation & Testing</div>
          </div>
        </div>

        {/* Tailscale overlay */}
        <div className="w-full mt-6 pt-6 border-t border-border flex flex-col items-center">
          <div className="text-accent text-xs font-semibold mb-2">🔒 Secure Mesh Overlay (Tailscale Subnet Router)</div>
          <div className="border border-emerald-500/40 bg-emerald-500/5 px-6 py-3 rounded-lg text-center">
            <span className="text-primary text-xs">Encrypted Remote Access ➔ Internal Homelab Subnets</span>
          </div>
        </div>
      </div>
    </div>
  );
};
