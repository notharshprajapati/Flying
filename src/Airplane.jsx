import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Matrix4, Vector3 } from "three";

export const planePosition = new Vector3(0, 3, 7);

export function Airplane(props) {
  const { nodes, materials } = useGLTF("assets/models/airplane.glb");
  const groupRef = useRef();
  const helixMeshRef = useRef();

  useFrame(({ camera }) => {
    const matrix = new Matrix4().multiply(
      new Matrix4().makeTranslation(
        planePosition.x,
        planePosition.y,
        planePosition.z
      )
    );

    groupRef.current.matrixAutoUpdate = false;
    groupRef.current.matrix.copy(matrix);
    groupRef.current.matrixWorldNeedsUpdate = true;
  });

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
