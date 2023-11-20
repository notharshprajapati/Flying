import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Airplane(props) {
  const { nodes, materials } = useGLTF("assets/models/airplane.glb");
  const groupRef = useRef();
  const helixMeshRef = useRef();

  return (
    <group ref={groupRef}>
      <group {...props} dispose={null} scale={0.01} rotation-y={Math.PI}>
        <mesh
          geometry={nodes.supports.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.chassis.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.helix.geometry}
          material={materials["Material.005"]}
          ref={helixMeshRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/airplane.glb");
