<script lang="ts">
  import { T, useFrame } from '@threlte/core';
  import {interactivity, OrbitControls, Text} from "@threlte/extras";
  import { spring } from "svelte/motion";

  interactivity();
  const scale = spring(1);
  const positionY = spring(0.5);
  
  const backendScale = spring(2.5);
  
  const backendPositionX = spring(-4.5);
  const backendPositionY = spring(1);
  const backendPositionZ = spring(-4.5);
  
  const backendPositionScale = spring(1);

  let rotation = 0
  useFrame(() => {
    // rotation += 0.0005
  })
</script>

<T.Group rotation.y={rotation}>
  <T.PerspectiveCamera
    makeDefault
    position={[-15, 40, 15]}
    fov={15}
    on:create={({ ref }) => {
      ref.lookAt(0, 1, 0)
    }}
  >
<!--    maxPolarAngle={1.4}-->
    <OrbitControls enableDamping  enablePan={false} />
  </T.PerspectiveCamera>
</T.Group>

<T.DirectionalLight
  intensity={1.2}
  position.x={5}
  position.y={10}
  position.z={5}
  castShadow
/>
<T.AmbientLight intensity={0.4} />

<!--<T.Fog attach="fog" color="#ffffff" near={0} far={200} >-->
<!--  -->
<!--</T.Fog>-->

<!--position.z={6.6}-->
<T.Group>
  
  
  <T.Group>
    
    <T.Mesh
      position={[-4, $backendPositionY, -4]}

      scale={$backendScale}
      
      on:pointerenter={() => {
        backendScale.set(5);
        backendPositionX.set(-5);
        backendPositionY.set(2);
        backendPositionZ.set(-5);
        
        backendPositionScale.set(2);
      }}
      on:pointerleave={() => {
        backendScale.set(2.5);
        backendPositionX.set(-4.5);
        backendPositionY.set(1);
        backendPositionZ.set(-4.5);
        
        backendPositionScale.set(1);
      }}
    >
      <T.BoxGeometry />
    <!--  <T.MeshStandardMaterial color="#0059BA" transparent={true} opacity={0.5} />-->
      <T.MeshStandardMaterial color="#00D000" transparent={true} opacity={0.25} />
    </T.Mesh>
    <T.Mesh
      rotation.x={-Math.PI / 2}
      rotation.z={45 / 180 * Math.PI}
      
      position.x={-4}
      position.z={-4}
      
      scale={$backendScale / 4}
      
      receiveShadow>
      
      <T.CircleGeometry args={[2.5, 4]} />
      <T.MeshStandardMaterial color="#00D000" />
    </T.Mesh>
    
    <T.Mesh 
      position={[$backendPositionX, $backendPositionY / 3.3, $backendPositionZ]}
      scale={[$backendScale / 8, $backendScale / 4, $backendScale / 8]}
    >
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#00D000" />
    </T.Mesh>

    <T.Mesh
      position={[$backendPositionX + $backendPositionScale, $backendPositionY / 3.3, $backendPositionZ]}
      scale={[$backendScale / 8, $backendScale / 4, $backendScale / 8]}
    >
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#00D000" />
    </T.Mesh>

    <T.Mesh
      position={[$backendPositionX + $backendPositionScale, $backendPositionY / 3.3, $backendPositionZ + $backendPositionScale]}
      scale={[$backendScale / 8, $backendScale / 4, $backendScale / 8]}
    >
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#00D000" />
    </T.Mesh>

    <T.Mesh
      position={[$backendPositionX, $backendPositionY / 3.3, $backendPositionZ + $backendPositionScale]}
      scale={[$backendScale / 8, $backendScale / 4, $backendScale / 8]}
    >
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#00D000" />
    </T.Mesh>

    <T.Mesh
      position={[$backendPositionX + $backendPositionScale / 2, $backendPositionY / 3.3, $backendPositionZ + $backendPositionScale / 2]}
      scale={[$backendScale / 8, $backendScale / 4, $backendScale / 8]}
    >
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#00D000" />
    </T.Mesh>
    
  </T.Group>
  
  <T.Group>
    
    <T.Mesh
      position.x={4}
      position.y={$positionY}
      position.z={-4}
      
      scale={$scale}

      on:pointerenter={() => {
        scale.set(1.5);
        positionY.set(0.75);
      }}
      on:pointerleave={() => {
        scale.set(1);
        positionY.set(0.5);
      }}
    >
      <T.BoxGeometry />
      <!--  <T.MeshStandardMaterial color="#0059BA" transparent={true} opacity={0.5} />-->
      <T.MeshStandardMaterial color="#F00000" />
    </T.Mesh>
    
  </T.Group>

  <T.Mesh
    position.x={-4}
    position.y={$positionY}
    position.z={4}

    scale={$scale}
    on:pointerenter={() => {
      scale.set(1.5);
      positionY.set(0.75);
    }}
    on:pointerleave={() => {
      scale.set(1);
      positionY.set(0.5);
    }}
  >
    <T.BoxGeometry />
    <!--  <T.MeshStandardMaterial color="#0059BA" transparent={true} opacity={0.5} />-->
    <T.MeshStandardMaterial color="#FA8000" />
  </T.Mesh>

  <T.Mesh
    position.x={4}
    position.y={$positionY}
    position.z={4}

    scale={$scale}
    on:pointerenter={() => {
      scale.set(1.5);
      positionY.set(0.75);
    }}
    on:pointerleave={() => {
      scale.set(1);
      positionY.set(0.5);
    }}


  >
    <T.BoxGeometry />
    <!--  <T.MeshStandardMaterial color="#0059BA" transparent={true} opacity={0.5} />-->
    <T.MeshStandardMaterial color="#0059FF" />
  </T.Mesh>
</T.Group>
<!-- Floor -->
<!--<T.Mesh-->
<!--  rotation.x={-Math.PI / 2}-->
<!--  position.y={0}-->
<!--  rotation.z={1 * 180 / Math.PI}-->
<!--  receiveShadow-->
<!--&gt;-->
<!--  <T.CircleGeometry args={[10, 4]} />-->
<!--  <T.MeshStandardMaterial-->
<!--    color="white"-->
<!--  />-->
<!--</T.Mesh>-->
