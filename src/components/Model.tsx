import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import vierge3GLB from "../assets/vierge3.glb";
// TypeScript type for GLTF
type GLTFResult = {
  scene: THREE.Scene;
  [key: string]: any;
};

// Model component
const Model: React.FC<{ scale?: number }> = (props) => {
  const { scene } = useGLTF(vierge3GLB) as unknown as GLTFResult;

  // Reference to the scene for rotation
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (ref.current) {
      // Center the model using its bounding box
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = box.getCenter(new THREE.Vector3());
      ref.current.position.sub(center); // Shift model to center
    }
  }, []);

  // Rotate the model on every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust speed here
    }
  });

  return <primitive object={scene} ref={ref} scale={2.2} {...props} />; // Adjust scale to fit
};

// Main component
const MainFunk: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "40%", // Adjust based on your layout
        transform: "translateY(-50%)", // Center vertically
        right: "-10vw", // Adjust position from the right
        width: "1000px",
        height: "1000px",
        pointerEvents: "none", // Ensure it doesn't block interactions
      }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 0, 8], near: 0.1, far: 1000 }} // Adjust camera position to fit the model
        gl={{ alpha: true }} // Enable transparency
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
      </Canvas>
    </div>
  );
};

export default MainFunk;

// Drei's GLTF loader declaration
useGLTF.preload(vierge3GLB);
