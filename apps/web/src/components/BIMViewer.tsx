"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, PerspectiveCamera, Environment } from "@react-three/drei";

function Wall({ position, args, color = "#64748b" }: any) {
    return (
        <mesh position={position}>
            <boxGeometry args={args} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

export default function BIMViewer({ layout }: { layout?: any }) {
    // Exemplo de layout padrão se não fornecido
    const walls = layout?.walls || [
        { pos: [0, 1.5, -5], args: [10, 3, 0.2] }, // Parede Fundo
        { pos: [-5, 1.5, 0], args: [0.2, 3, 10] },  // Parede Esquerda
        { pos: [5, 1.5, 0], args: [0.2, 3, 10] },   // Parede Direita
    ];

    return (
        <div className="w-full h-[500px] bg-slate-900 rounded-3xl overflow-hidden border border-white/5 relative group">
            <div className="absolute top-4 left-4 z-10 bg-slate-800/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Visualização BIM 3D</span>
            </div>

            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[10, 10, 10]} />
                <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} />

                <Grid infiniteGrid sectionSize={1} sectionColor="#1e293b" cellColor="#334155" />

                {/* Chão */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#0f172a" />
                </mesh>

                {/* Parede Placeholder */}
                {walls.map((wall: any, i: number) => (
                    <Wall key={i} position={wall.pos} args={wall.args} />
                ))}

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
