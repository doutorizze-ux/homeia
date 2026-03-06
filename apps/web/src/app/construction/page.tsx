"use client";

import {
    TrendingUp,
    DollarSign,
    Calendar,
    Users,
    Camera,
    ClipboardCheck,
    CheckCircle2
} from "lucide-react";

export default function ConstructionDashboard() {
    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold">Gestão de Obra</h1>
                        <p className="text-slate-500 mt-1">Residência Alpha — Lote 42, Condomínio Solar</p>
                    </div>
                    <button className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-900/20 flex items-center gap-2">
                        <Camera className="w-5 h-5" /> Novo Registro Fotográfico
                    </button>
                </header>

                {/* Status Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Progresso Total', val: '45%', icon: TrendingUp, color: 'text-cyan-400' },
                        { label: 'Custo Previsto', val: 'R$ 250k', icon: DollarSign, color: 'text-emerald-400' },
                        { label: 'Custo Real', val: 'R$ 210k', icon: TrendingUp, color: 'text-rose-400' },
                        { label: 'Equipe Ativa', val: '12', icon: Users, color: 'text-amber-400' },
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-xl">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 bg-slate-800 rounded-2xl ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">{item.label}</p>
                            <p className="text-2xl font-bold mt-1 text-white">{item.val}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cronograma */}
                    <div className="lg:col-span-2 bg-slate-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-cyan-400" /> Cronograma de Obra
                            </h3>
                            <span className="text-xs text-slate-500 font-mono tracking-tighter">Última atualização: Hoje, 08:30</span>
                        </div>

                        <div className="space-y-6">
                            {[
                                { task: 'Fundação e Alvenaria', date: 'Jan - Fev', status: 'done' },
                                { task: 'Laje e Estrutura', date: 'Mar - Abr', status: 'current' },
                                { task: 'Instalações Elétricas', date: 'Mai', status: 'pending' },
                                { task: 'Acabamento Fino', date: 'Jun - Ago', status: 'pending' },
                            ].map((task, i) => (
                                <div key={i} className={`flex items-center gap-6 p-4 rounded-2xl ${task.status === 'current' ? 'bg-cyan-500/5 border border-cyan-500/20' : ''}`}>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${task.status === 'done' ? 'bg-emerald-500/20 text-emerald-400' :
                                            task.status === 'current' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-900/40' :
                                                'bg-slate-800 text-slate-600'
                                        }`}>
                                        {task.status === 'done' ? <CheckCircle2 className="w-6 h-6" /> : <span>{i + 1}</span>}
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-bold ${task.status === 'pending' ? 'text-slate-500' : 'text-white'}`}>{task.task}</p>
                                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{task.date}</p>
                                    </div>
                                    {task.status === 'current' && (
                                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-[10px] font-bold rounded-full uppercase">Em Curso</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Diário de Obra */}
                    <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl h-fit">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <ClipboardCheck className="w-6 h-6 text-cyan-400" /> Diário de Obra
                        </h3>

                        <div className="space-y-4">
                            <div className="p-4 bg-slate-800/50 rounded-2xl border border-white/5">
                                <p className="text-xs text-slate-500 mb-2 font-mono">06 MAR 2026 — 09:15</p>
                                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                                    Iniciada concretagem da segunda laje. Clima estável, equipe completa no canteiro.
                                </p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-2xl border border-white/5">
                                <p className="text-xs text-slate-500 mb-2 font-mono">05 MAR 2026 — 16:40</p>
                                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                                    Recebimento de materiais elétricos (Tubos e Conexões). Tudo conforme o pedido.
                                </p>
                            </div>
                        </div>

                        <button className="w-full mt-8 py-3 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                            Ver histórico completo →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
