'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function ProductIcons({ time }) {
  const products = [
    { name: 'Elastic\nDraw Cord', pos: [4, 1, 0], color: '#FFD700', shape: 'torusKnot' },
    { name: 'Plain\nElastic', pos: [-3, 1.5, 2], color: '#FF6B6B', shape: 'torus' },
    { name: 'Poly &\nPrinting', pos: [2, 0.5, -3], color: '#4ECDC4', shape: 'box' },
    { name: 'Digital Fabrics\nPrinting', pos: [-4, 0, 1], color: '#45B7D1', shape: 'cylinder' },
    { name: 'Carton', pos: [0, -1, 4], color: '#F4A261', shape: 'box' },
    { name: 'Gum Tape', pos: [3, -0.5, -2], color: '#E76F51', shape: 'cylinder' },
    { name: 'Metal\nAccessories', pos: [-2, 2, -1], color: '#C0C0C0', shape: 'icosahedron' },
  ];

  const meshesRef = useRef([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshesRef.current.forEach((mesh, i) => {
      if (mesh) {
        const product = products[i];
        mesh.rotation.y += 0.02;
        mesh.position.y += Math.sin(t * 3 + i) * 0.01;
        mesh.scale.setScalar(0.8 + Math.sin(t * 2 + i * 0.5) * 0.2);
      }
    });
  });

  return (
    <>
      {products.map((product, i) => (
        <mesh
          key={product.name}
          ref={(el) => (meshesRef.current[i] = el)}
          position={[
            product.pos[0] + Math.sin(time + i * 0.8) * 0.3,
            product.pos[1],
            product.pos[2]
          ]}
        >
          {product.shape === 'torusKnot' && <torusKnotGeometry args={[0.4, 0.15, 100, 16]} />}
          {product.shape === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
          {product.shape === 'box' && <boxGeometry args={[1, 0.6, 0.4]} />}
          {product.shape === 'cylinder' && <cylinderGeometry args={[0.5, 0.5, 1.2, 24]} />}
          {product.shape === 'icosahedron' && <icosahedronGeometry args={[0.7, 1]} />}
          
          <meshStandardMaterial
            color={product.color}
            metalness={product.name.includes('Metal') ? 0.95 : 0.3}
            roughness={product.name.includes('Metal') ? 0.1 : 0.4}
            emissive={product.color}
            emissiveIntensity={0.15}
          />
        </mesh>
      ))}
    </>
  );
}

function Logo3D({ time }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main Logo Block */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[4, 0.6, 0.3]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* BD Block */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[1.4, 1.1, 0.4]} />
        <meshStandardMaterial 
          color="#00C853" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#00C853"
          emissiveIntensity={0.6}
        />
      </mesh>
      
      {/* Logo Glow Ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[3.5, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#00C853" 
          emissive="#00C853"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

function Scene({ onComplete }) {
  const cameraRef = useRef();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(onComplete, 12000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    setTime(t);
    
    // Cinematic camera movement
    if (cameraRef.current) {
      const progress = Math.min(t / 12, 1);
      
      // Phase 1: Wide establishing shot (0-4s)
      if (progress < 0.33) {
        cameraRef.current.position.set(
          Math.sin(t * 0.5) * 8,
          4 + Math.sin(t * 0.3) * 1,
          12 + Math.sin(t * 0.2) * 2
        );
      }
      // Phase 2: Product showcase (4-8s)
      else if (progress < 0.66) {
        cameraRef.current.position.set(
          Math.sin((t - 4) * 0.8) * 6,
          2 + Math.cos((t - 4) * 0.5) * 1.5,
          8 + Math.sin((t - 4) * 0.4) * 3
        );
      }
      // Phase 3: Logo closeup (8-12s)
      else {
        cameraRef.current.position.set(
          Math.sin((t - 8) * 1.2) * 2,
          1 + Math.sin((t - 8) * 0.8) * 0.5,
          5 + Math.sin((t - 8) * 0.6) * 1
        );
      }
      
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      {/* Studio Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} color="#00C853" intensity={2.5} />
      <spotLight 
        position={[-8, 8, 8]} 
        angle={0.4}
        penumbra={1}
        intensity={1.8}
        color="#ffffff"
      />
      <directionalLight position={[0, 10, 0]} intensity={1} />

      {/* Products orbiting around logo */}
      <ProductIcons time={time} />
      
      {/* Main Logo */}
      <Logo3D time={time} />

      {/* Floating particles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <mesh
          key={`particle-${i}`}
          position={[
            (Math.sin(time * 2 + i) * 8),
            Math.sin(time * 1.5 + i * 0.3) * 4,
            (Math.cos(time * 1.8 + i) * 6) - 3
          ]}
        >
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial 
            color="#00C853" 
            transparent 
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#0A3D62" 
          metalness={0.1}
          roughness={0.9}
          transparent 
          opacity={0.2}
        />
      </mesh>

      <Environment preset="studio" />
      
      {/* Camera */}
      <perspectiveCamera 
        ref={cameraRef}
        makeDefault
        position={[0, 0, 15]}
        fov={65}
      />
    </>
  );
}

export default function ThreeIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 0.1, 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[150] bg-gradient-to-br from-[#0A3D62] via-[#0A2540] to-[#0A1D3A] overflow-hidden">
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance" 
        }}
        style={{ background: 'transparent' }}
        camera={{ fov: 65, position: [0, 0, 15] }}
      >
        <Scene onComplete={onComplete} />
      </Canvas>

      {/* Cinematic HUD */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center backdrop-blur-xl bg-black/40 border border-white/20 rounded-3xl p-10 shadow-2xl shadow-white/10">
          <div className="w-28 h-28 border-4 border-white/20 border-t-gradient-to-r border-t-from-transparent border-t-via-white/50 border-t-to-transparent rounded-full animate-spin mx-auto mb-8 shadow-xl"></div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-white/90 to-[#00C853] bg-clip-text text-transparent tracking-[-0.05em] leading-tight">
              GROUPON BD
            </h1>
            <p className="text-2xl font-bold text-white/90 tracking-wide">
              Premium Manufacturing Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 overflow-hidden z-20">
        <div 
          className="h-full bg-gradient-to-r from-[#00C853] to-[#00C853]/70 rounded-full shadow-lg transition-all duration-1000 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-12 left-12 px-8 py-5 bg-white/20 backdrop-blur-3xl hover:bg-white/30 text-white font-bold text-xl rounded-3xl border-2 border-white/50 hover:border-white/80 hover:shadow-2xl hover:shadow-[#00C853]/40 transition-all duration-300 shadow-2xl z-20 group"
      >
        <span>Skip Intro</span>
        <span className="ml-2 text-[#00C853] group-hover:ml-4 transition-all">({Math.ceil(12 - progress * 12)}s)</span>
      </button>

      {/* Product Labels - Fade in/out */}
      <div className="absolute top-12 left-12 w-64 text-white/80 text-sm font-medium tracking-wide z-20 backdrop-blur-sm bg-black/20 rounded-2xl p-4 border border-white/20">
        Premium Garments Accessories
      </div>
    </div>
  );
}
