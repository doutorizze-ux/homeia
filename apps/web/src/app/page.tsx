"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Layout,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      {/* Navbar Adoc */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter">HOMEIA</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link>
            <Link href="/map" className="hover:text-white transition-colors">Mapa Urbano</Link>
            <Link href="/construction" className="hover:text-white transition-colors">Gestão</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-slate-300 hover:text-white">Entrar</Link>
            <Link href="/register" className="bg-white text-black px-5 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition-all text-sm">
              Começar Agora
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGENHARIA POTENCIALIZADA POR IA</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
            O futuro da <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">arquitetura</span> é inteligente.
          </h1>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Gere plantas baixas, projetos complementares e orçamentos técnicos em segundos.
            A primeira plataforma SaaS que une BIM, IA e Gestão de Obras.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/generate" className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl shadow-cyan-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Criar Novo Projeto <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/marketplace" className="w-full sm:w-auto bg-slate-900/50 border border-white/10 px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-900 transition-all">
              Ver Projetos Prontos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "IA Generativa BIM",
              desc: "Nossa Arquiteta IA cria layouts otimizados seguindo normas técnicas e aproveitamento solar.",
              icon: Layout
            },
            {
              title: "Gestão em Real-Time",
              desc: "Acompanhe cronograma, custos e materiais direto do canteiro com dashboards interativos.",
              icon: ShieldCheck
            },
            {
              title: "Marketplace Global",
              desc: "Uma vitrine premium para profissionais venderem projetos certificados para todo o país.",
              icon: Layers
            }
          ].map((feat, i) => (
            <div key={i} className="group p-8 rounded-[32px] bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <feat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feat.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-slate-600 text-sm">© 2026 Homeia — Advanced Agentic Coding Project</p>
      </footer>
    </div>
  );
}
