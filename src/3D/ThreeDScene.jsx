import React from "react";
import { Canvas } from "@react-three/fiber";
import Expirinece from "./Expirinece";
import { OrbitControls } from "@react-three/drei";

export default function ThreeDScene() {
  return (
    <Canvas>
      <OrbitControls />
      <Expirinece />
    </Canvas>
  );
}
