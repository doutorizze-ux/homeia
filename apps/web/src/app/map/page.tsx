"use client";

import {
    Map as MapIcon,
    Navigation,
    Info,
    TrendingUp,
    Home,
    ChevronRight,
    MapPin
} from "lucide-react";
import { motion } from "framer-motion";

const TERRENOS = [
    { id: 1, name: 'Loteamento Jd. das Flores', price: 'R$ 1.200/m²', trend: '+12%', type: 'Residencial' },
    { id: 2, name: 'Distrito Industrial Oeste', price: 'R$ 850/m²', trend: '+5%', type: 'Comercial' },
    { id: 3, name: 'Condomínio Altos da Serra', price: 'R$ 2.400/m²', trend: '+20%', type: 'Alto Padrão' },
];

export default function SmartMapPage() {
    return (
        <div className="h-screen bg-slate-950 flex overflow-hidden">
            {/* Sidebar de Dados */}
            <aside className="w-96 bg-slate-900 border-r border-white/5 p-8 overflow-y-auto flex flex-col gap-8 z-20">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <MapIcon className="w-7 h-7 text-cyan-400" /> Mapa Inteligente
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">Dados imobiliários em tempo real</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Terrenos em Destaque</h3>
                    {TERRENOS.map((t) => (
                        <div key={t.id} className="p-4 bg-slate-800/50 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-2">
                                <p className="font-bold text-slate-200 group-hover:text-cyan-400">{t.name}</p>
                                <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3" /> {t.trend}
                                </span>
                            </div>
                            <div className="flex justify-between items-end mt-4">
                                <p className="text-lg font-black text-white">{t.price}</p>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{t.type}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto p-6 bg-cyan-600/10 border border-cyan-500/20 rounded-3xl">
                    <h4 className="font-bold text-cyan-400 flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4" /> Sugestão da IA
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                        "Baseado na valorização de 20% da região Altos da Serra, sugerimos a construção de casas de alto padrão (min 250m²) para maximizar o ROI."
                    </p>
                </div>
            </aside>

            {/* Área do Mapa (Placeholder Visual Premium) */}
            <main className="flex-1 relative bg-[#0a0f1a] overflow-hidden">
                {/* Camada de UI Flutuante no Mapa */}
                <div className="absolute top-8 left-8 z-10 flex gap-3">
                    <button className="bg-slate-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-sm font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-800">
                        <Layers className="w-4 h-4" /> Satélite
                    </button>
                    <button className="bg-slate-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-sm font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-800">
                        Valorização
                    </button>
                </div>

                {/* Representação Estilizada do Mapa */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                {/* Pins do Mapa */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1/2 left-1/3 p-4 bg-cyan-500 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] cursor-pointer group z-10"
                >
                    <MapPin className="w-6 h-6 text-white" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-black p-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-500">Lote Disponível</p>
                        <p className="font-bold">450m² — R$ 1.080.000</p>
                    </div>
                </motion.div>

                <div className="absolute bottom-8 right-8">
                    <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                        <Navigation className="w-6 h-6" />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Layers({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    );
}
