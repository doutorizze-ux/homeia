"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Maximize,
    BedDouble,
    Bath,
    Layers,
    Sparkles,
    ArrowRight,
    Loader2
} from "lucide-react";
import BIMViewer from "@/components/BIMViewer";

export default function GeneratePage() {
    const [loading, setLoading] = useState(false);
    const [terreno, setTerreno] = useState("250");
    const [quartos, setQuartos] = useState("3");
    const [banheiros, setBanheiros] = useState("2");
    const [layoutData, setLayoutData] = useState<any>(null);

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/project/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    terrenoSize: Number(terreno),
                    bedrooms: Number(quartos),
                    bathrooms: Number(banheiros),
                    style: "Moderno"
                })
            });

            const text = await res.text();
            let jsonStr = text;
            const match = text.match(/```json\n([\s\S]*?)\n```/);
            if (match) jsonStr = match[1];

            try {
                const data = JSON.parse(jsonStr);
                setLayoutData(data?.walls ? data : { walls: data });
            } catch (e) {
                console.error("Falha ao analisar a resposta da IA. Retorno:", text);
                alert("A IA retornou um formato inesperado. Tente gerar novamente.");
            }
        } catch (error) {
            console.error("Erro ao gerar projeto:", error);
            alert("Erro de comunicação com o servidor de IA.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-6xl mx-auto mt-12">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-900/20">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Criar Novo Projeto</h1>
                        <p className="text-slate-400 mt-2">Nossa IA transformará suas ideias em uma planta técnica completa.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Card de Configuração */}
                    <div className="lg:col-span-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl h-fit">
                        <div className="space-y-8">
                            <section>
                                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-6 px-1">Terreno e Estrutura</h3>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400 flex items-center gap-2">
                                            <Maximize className="w-4 h-4" /> Tamanho do Terreno (m²)
                                        </label>
                                        <input
                                            type="number"
                                            value={terreno}
                                            onChange={(e) => setTerreno(e.target.value)}
                                            placeholder="Ex: 360"
                                            className="w-full bg-slate-800/50 border border-white/5 rounded-xl py-3 px-4 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-6 px-1">Ambientes</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400 flex items-center gap-2">
                                            <BedDouble className="w-4 h-4" /> Quartos
                                        </label>
                                        <input type="number" value={quartos} onChange={e => setQuartos(e.target.value)} className="w-full bg-slate-800/50 border border-white/5 rounded-xl py-2 px-4 text-center outline-none focus:ring-1 focus:ring-cyan-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400 flex items-center gap-2">
                                            <Bath className="w-4 h-4" /> Banheiros
                                        </label>
                                        <input type="number" value={banheiros} onChange={e => setBanheiros(e.target.value)} className="w-full bg-slate-800/50 border border-white/5 rounded-xl py-2 px-4 text-center outline-none focus:ring-1 focus:ring-cyan-500" />
                                    </div>
                                </div>
                            </section>

                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 disabled:opacity-50 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-5 h-5" /> Gerar Planta IA <ArrowRight className="w-5 h-5" /></>}
                            </button>
                        </div>
                    </div>

                    {/* Visualizador / Preview */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <BIMViewer layout={layoutData} />

                        <div className="bg-slate-900 border border-white/5 rounded-3xl p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-3">
                                    <Layers className="w-6 h-6 text-cyan-400" /> Camadas Técnicas
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['Arquitetônico', 'Estrutural', 'Elétrico', 'Hidráulico'].map(layer => (
                                    <button key={layer} className="p-4 bg-slate-800/50 border border-white/5 rounded-2xl hover:bg-slate-800 transition-colors text-center group">
                                        <div className="w-8 h-8 bg-slate-700 rounded-lg mx-auto mb-3 group-hover:bg-cyan-600 transition-colors" />
                                        <span className="text-xs font-medium text-slate-300">{layer}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
