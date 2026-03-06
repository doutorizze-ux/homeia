"use client";

import {
    Search,
    Filter,
    Star,
    Download,
    Tag,
    ChevronRight,
    LayoutGrid
} from "lucide-react";

const PROJECTS = [
    { id: 1, name: 'Villa Mediterrânea', author: 'Arq. Julia Mendes', price: 'R$ 450', rating: 4.9, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
    { id: 2, name: 'Loft Industrial', author: 'Eng. Roberto Silva', price: 'R$ 290', rating: 4.7, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea' },
    { id: 3, name: 'Casa de Campo Sustentável', author: 'Eco Arqs Ltda', price: 'R$ 550', rating: 5.0, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233' },
];

export default function MarketplacePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold">Marketplace</h1>
                        <p className="text-slate-500 mt-2">Encontre projetos prontos certificados por especialistas.</p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Buscar projetos..."
                                className="w-full bg-slate-900 border border-white/5 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                            />
                        </div>
                        <button className="p-3 bg-slate-900 border border-white/5 rounded-2xl hover:bg-slate-800">
                            <Filter className="w-5 h-5 text-slate-400" />
                        </button>
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all hover:translate-y-[-4px]">
                            <div className="h-64 relative overflow-hidden">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-1">
                                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                    <span className="text-xs font-bold">{project.rating}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{project.name}</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                                    Por <span className="text-slate-300 font-medium underline underline-offset-4 decoration-slate-700">{project.author}</span>
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Preço</p>
                                        <p className="text-2xl font-black text-white">{project.price}</p>
                                    </div>
                                    <button className="bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-2xl transition-all shadow-lg shadow-cyan-900/40">
                                        <Download className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <div className="mt-20 p-12 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-[40px] text-center">
                    <h2 className="text-3xl font-bold mb-4">É um profissional?</h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8">
                        Publique seus projetos em nossa plataforma e alcance milhares de possíveis compradores.
                        Nós cuidamos da burocracia e entrega.
                    </p>
                    <button className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-slate-200 transition-all flex items-center gap-2 mx-auto">
                        Começar a vender <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
