// components/MeshViewer.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/earth_globe.glb"); // Place file in /public/models/
  return <primitive object={scene} scale={1.5} />;
}

export default function MeshViewer() {
  return (
    <Canvas camera={{ position: [0, 1, 1.5] }}>
      {/* Light Setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />

      {/* Model */}
      <Model />

      {/* Controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
