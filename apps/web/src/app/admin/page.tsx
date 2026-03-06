"use client";

import {
    Users,
    BarChart3,
    Settings,
    Bell,
    ShieldCheck,
    CreditCard,
    Database
} from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex">
            {/* Sidebar Admin */}
            <aside className="w-64 bg-slate-900 border-r border-white/5 p-6 flex flex-col gap-6">
                <h1 className="text-xl font-black text-cyan-400">HOMEIA ADMIN</h1>
                <nav className="space-y-2">
                    {[
                        { n: 'Visão Geral', i: BarChart3, a: true },
                        { n: 'Usuários', i: Users },
                        { n: 'Faturamento', i: CreditCard },
                        { n: 'Logs do Sistema', i: Database },
                        { n: 'Configurações', i: Settings },
                    ].map((item) => (
                        <button key={item.n} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.a ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:bg-white/5 hover:text-white'}`}>
                            <item.i className="w-5 h-5" /> {item.n}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-12">
                <header className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold">Painel de Controle</h2>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center relative">
                            <Bell className="w-5 h-5 text-slate-400" />
                            <div className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-slate-900 rounded-full" />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-slate-900 border border-white/5 p-8 rounded-[32px]">
                        <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-bold">Usuários Ativos</p>
                        <p className="text-4xl font-black">12.482</p>
                    </div>
                    <div className="bg-slate-900 border border-white/5 p-8 rounded-[32px]">
                        <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-bold">MRR (Faturamento)</p>
                        <p className="text-4xl font-black text-emerald-400">R$ 145.200</p>
                    </div>
                    <div className="bg-slate-900 border border-white/5 p-8 rounded-[32px]">
                        <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-bold">Projetos Gerados</p>
                        <p className="text-4xl font-black text-cyan-400">34.891</p>
                    </div>
                </div>

                <section className="mt-12 bg-slate-900 border border-white/5 rounded-[40px] p-10 overflow-hidden relative">
                    <h3 className="text-xl font-bold mb-8">Últimos Projetos Gerados</h3>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-slate-600 text-xs uppercase tracking-widest border-b border-white/5">
                                <th className="pb-4 font-black">ID</th>
                                <th className="pb-4 font-black">Usuário</th>
                                <th className="pb-4 font-black">Tipo</th>
                                <th className="pb-4 font-black">Data</th>
                                <th className="pb-4 font-black">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { id: '#8921', user: 'Julia Mendes', type: 'Arquitetônico', date: 'Hoje', status: 'Sucedido' },
                                { id: '#8920', user: 'Roberto Silva', type: 'Elétrico', date: 'Hoje', status: 'Sucedido' },
                                { id: '#8919', user: 'Prefeitura SP', type: 'Urbano', date: 'Ontem', status: 'Sucedido' },
                            ].map((row) => (
                                <tr key={row.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                                    <td className="py-6 font-mono text-slate-500">{row.id}</td>
                                    <td className="py-6 font-bold">{row.user}</td>
                                    <td className="py-6 text-slate-400">{row.type}</td>
                                    <td className="py-6 text-slate-400">{row.date}</td>
                                    <td className="py-6">
                                        <span className="flex items-center gap-2 text-emerald-400">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
