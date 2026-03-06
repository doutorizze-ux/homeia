"use client";

import AuthLayout from "@/components/AuthLayout";
import { UserPlus, Mail, Lock, User as UserIcon, Briefcase } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <AuthLayout>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Criar conta</h1>
                <p className="text-slate-400">Junte-se ao futuro da engenharia civil</p>
            </div>

            <form className="space-y-5">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Nome Completo</label>
                    <div className="relative group">
                        <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email Profissional</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Eu sou...</label>
                    <div className="relative group">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                        <select
                            className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all appearance-none"
                        >
                            <option value="ENGINEER">Engenheiro</option>
                            <option value="ARCHITECT">Arquiteto</option>
                            <option value="BUILDER">Construtor</option>
                            <option value="REALTOR">Corretor de Imóveis</option>
                            <option value="CITY_HALL">Prefeitura</option>
                            <option value="DEVELOPER">Loteadora</option>
                            <option value="CLIENT">Cliente Final</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            ▼
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Senha forte</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-4 rounded-2xl shadow-lg shadow-cyan-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
                >
                    <UserPlus className="w-5 h-5" />
                    Criar minha conta
                </button>
            </form>

            <p className="mt-8 text-center text-slate-400 text-sm">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-cyan-400 font-semibold hover:underline">
                    Acesse aqui
                </Link>
            </p>
        </AuthLayout>
    );
}
