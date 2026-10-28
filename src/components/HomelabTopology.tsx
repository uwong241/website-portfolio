import React from 'react';

export const HomelabTopology: React.FC = () => {
  const vlans = [
    {
      id: 'vlan 20',
      name: 'network',
      ip: '192.168.20.1',
      badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      services: ['adguard'],
      icon: '🛡️',
    },
    {
      id: 'vlan 30',
      name: 'storage',
      ip: '192.168.30.1',
      badgeColor: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      services: ['omv', 'immich'],
      icon: '💾',
    },
    {
      id: 'vlan 40',
      name: 'AI',
      ip: '192.168.40.1',
      badgeColor: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      services: ['9router-proxy', 'hermes'],
      icon: '🤖',
    },
    {
      id: 'vlan 50',
      name: 'experimental',
      ip: '192.168.50.1',
      badgeColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      services: ['LFS', 'hermes axploit', 'hermes crypto', 'VM testing'],
      icon: '🧪',
    },
    {
      id: 'vlan 60',
      name: 'games',
      ip: '192.168.60.1',
      badgeColor: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
      services: ['Minecraft servers'],
      icon: '🎮',
    },
    {
      id: 'vlan 70',
      name: 'monitoring',
      ip: '192.168.70.1',
      badgeColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      services: ['uptime kuma', 'prometheus'],
      icon: '📊',
    },
    {
      id: 'vlan 80',
      name: 'media',
      ip: '192.168.80.1',
      badgeColor: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
      services: ['jellyfin'],
      icon: '🎬',
    },
  ];

  return (
    <div className="bg-surface border border-border rounded-xl p-6 md:p-8 overflow-x-auto font-mono text-sm shadow-xl">
      {/* Topology Header */}
      <div className="text-accent text-xs font-semibold mb-6 tracking-wider uppercase flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          VLAN-Segmented Network Topology
        </div>
        <span className="text-[11px] text-secondary lowercase font-normal">7-vlan isolation + mikrotik chr + managed switch</span>
      </div>
      
      <div className="min-w-[900px] flex flex-col items-center space-y-5 text-secondary">
        {/* ISP Node */}
        <div className="border border-border/80 bg-background-light px-6 py-2.5 rounded-xl text-center shadow-sm hover:border-accent/40 transition-colors">
          <div className="text-primary font-bold text-xs flex items-center gap-2">
            <span>📡 ISP Gateway Router</span>
            <span className="text-[10px] text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">192.168.1.1</span>
          </div>
        </div>

        <div className="text-accent text-xs">↓ (WAN Uplink)</div>

        {/* MikroTik CHR */}
        <div className="border border-accent/60 bg-accent/5 px-8 py-3 rounded-xl text-center shadow-md w-full max-w-md hover:border-accent transition-colors">
          <div className="text-primary font-bold text-sm">🔀 MikroTik CHR</div>
          <div className="text-xs text-accent font-semibold mt-0.5">192.168.10.1</div>
          <div className="text-[11px] text-secondary mt-1">Core Router · Firewall · NAT · DHCP · Inter-VLAN Routing</div>
        </div>

        <div className="text-accent text-xs">↓ (Trunk Link)</div>

        {/* Managed Switch */}
        <div className="border border-border/80 bg-background-light px-8 py-3 rounded-xl text-center shadow-sm w-full max-w-lg hover:border-accent/40 transition-colors">
          <span className="text-primary font-bold text-sm">🖧 Managed Switch</span>
          <span className="block text-xs text-secondary mt-0.5">802.1Q VLAN Trunking & Access Ports</span>
        </div>

        <div className="text-accent text-xs">↓ (VLAN Segmentation)</div>

        {/* 7 VLAN Nodes Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-7 gap-3 pt-2">
          {vlans.map((vlan) => (
            <div 
              key={vlan.id} 
              className={`border p-3.5 rounded-xl flex flex-col justify-between text-left hover:scale-[1.02] transition-all card-lift ${vlan.badgeColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider">{vlan.id}</span>
                  <span className="text-xs">{vlan.icon}</span>
                </div>
                <div className="text-xs font-bold text-primary mb-1">({vlan.name})</div>
                <div className="text-[10px] text-secondary/80 font-mono mb-2 pb-1.5 border-b border-border/50">
                  {vlan.ip}
                </div>

                <div className="space-y-1">
                  <div className="text-[9px] uppercase font-bold text-secondary tracking-wider">Services:</div>
                  {vlan.services.map((svc, sIdx) => (
                    <div key={sIdx} className="text-[11px] font-semibold text-primary/90 flex items-center gap-1">
                      <span className="text-accent text-[9px]">➔</span>
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tailscale Subnet Router & Mesh VPN Overlay */}
        <div className="w-full mt-6 pt-5 border-t border-border/80 flex flex-col items-center">
          <div className="text-accent text-xs font-semibold mb-2 flex items-center gap-1.5">
            <span>🔒 Tailscale Mesh VPN & Subnet Router</span>
          </div>
          <div className="border border-emerald-500/40 bg-emerald-500/5 px-6 py-2.5 rounded-xl text-center max-w-xl">
            <span className="text-primary text-xs">
              Zero-Trust Encrypted WireGuard Overlay ➔ Direct Access to Isolated Subnets (20/30/40/50/60/70/80)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomelabTopology;
