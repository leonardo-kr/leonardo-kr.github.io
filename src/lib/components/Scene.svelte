<script lang="ts">
    import { T, useFrame } from '@threlte/core';
    import { interactivity, OrbitControls, Text } from "@threlte/extras";
    import { spring } from "svelte/motion";
    
    import { Vector3 } from "three";
    
    import BackendCube from "$lib/components/cubes/BackendCube.svelte";
    import FrontendCube from "$lib/components/cubes/FrontendCube.svelte";
    import ToolCube from "$lib/components/cubes/ToolCube.svelte";
    import DatabaseCube from "$lib/components/cubes/DatabaseCube.svelte";
    
    interactivity();

    let rotation = 0
    useFrame(() => {
        rotation += 0.0005
    })
</script>

<T.Group rotation.y={rotation}>
    <T.PerspectiveCamera
            makeDefault
            position={[-30, 30, 30]}
            fov={15}
            on:create={({ ref }) => {
      ref.lookAt(0, 0, 0)
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


    <BackendCube 
            color={"#00D000"}
            position={new Vector3(-4.5, 1, -4.5)}
        />

    <FrontendCube
            color={"#F00000"}
            position={new Vector3(3.5, 1, -4.5)}
        />
    
    <ToolCube
            color={"#FA8000"}
            position={new Vector3(-4.5, 1, 3.5)}
        />
    
    <DatabaseCube
            color={"#0059FF"}
            position={new Vector3(3.5, 1, 3.5)}
        />
    
</T.Group>
