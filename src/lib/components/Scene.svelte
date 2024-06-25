<script lang="ts">
    import {onDestroy, onMount} from "svelte";

    import { T, useFrame } from '@threlte/core';
    import { interactivity, Environment, OrbitControls } from "@threlte/extras";
    import { CircleGeometry, MeshStandardMaterial, Vector3 } from "three";

    import { get } from "svelte/store";
    import { spring } from "svelte/motion";
    import { selectedCube } from "../../stores";

    import BackendCube from "$lib/components/cubes/BackendCube.svelte";
    import FrontendCube from "$lib/components/cubes/FrontendCube.svelte";
    import ToolCube from "$lib/components/cubes/ToolCube.svelte";
    import DatabaseCube from "$lib/components/cubes/DatabaseCube.svelte";

    enum cube {
        none = -1,
        backend = 0,
        frontend = 1,
        tool = 2,
        database = 3
    }

    interactivity();

    // const rotation = spring(0);
    // rotation.stiffness = 0.01;
    // rotation.damping = 1;
    
    const backendPosition = new Vector3(-4.5, 1, -4.5);
    const frontendPosition = new Vector3(3.5, 1, -4.5);
    const toolPosition = new Vector3(-4.5, 1, 3.5);
    const databasePosition = new Vector3(3.5, 1, 3.5);
    
    const cameraPosition = new Vector3(-20, 11, 30);
    const cameraPositionX = spring(cameraPosition.x);
    const cameraPositionY = spring(cameraPosition.y);
    const cameraPositionZ = spring(cameraPosition.z);

    const lookAtX = spring(0);
    const lookAtY = spring(0);
    const lookAtZ = spring(0);

    const unsubscribe = selectedCube.subscribe(value => {
        console.log(value);
        switch (value) {
            case cube.none:
                cameraPositionX.set(cameraPosition.x);
                cameraPositionY.set(cameraPosition.y);
                cameraPositionZ.set(cameraPosition.z);

                lookAtX.set(0);
                lookAtY.set(0);
                lookAtZ.set(0);
                break;
            case cube.backend:
                // rotation.set(0);
                cameraPositionX.set(backendPosition.x - 2.25);
                cameraPositionY.set(5);
                cameraPositionZ.set(backendPosition.z + 30);
                
                lookAtX.set(backendPosition.x + 0.5);
                lookAtY.set(backendPosition.y);
                lookAtZ.set(backendPosition.z);
                break;
            case cube.frontend:
                cameraPositionX.set(frontendPosition.x - 0.5);
                cameraPositionY.set(5);
                cameraPositionZ.set(frontendPosition.z + 30);

                lookAtX.set(frontendPosition.x + 0.5);
                lookAtY.set(frontendPosition.y);
                lookAtZ.set(frontendPosition.z);
                break;
            case cube.tool:
                cameraPositionX.set(toolPosition.x - 3);
                cameraPositionY.set(5);
                cameraPositionZ.set(toolPosition.z + 30);

                lookAtX.set(toolPosition.x + 0.5);
                lookAtY.set(toolPosition.y);
                lookAtZ.set(toolPosition.z);
                break;
            case cube.database:
                break;
            default:
                break;
        }
    });
    
    useFrame(() => {
        if (get(selectedCube) === cube.none) {
            // rotation += 0.0005;
            // rotation.update((value) => value += 0.0005);
        }
    });
    
    onDestroy(unsubscribe);
</script>

<T.Group rotation.y={0}>
    <T.PerspectiveCamera
            makeDefault
            position={[$cameraPositionX, $cameraPositionY, $cameraPositionZ]}
            fov={15}
            on:create={({ ref }) => {
                ref.lookAt($lookAtX, $lookAtY, $lookAtZ);
            }}
            focalLength={10}
    >
        <!--    maxPolarAngle={1.4}-->
        <OrbitControls enableDamping  enablePan={false} maxPolarAngle={1.4} target={[$lookAtX, $lookAtY, $lookAtZ]} />
    </T.PerspectiveCamera>
</T.Group>

<T.PointLight 
    position={[1, 3, 10]}
    intensity={4}
    decay={0.2}
    castShadow
/>

<T.AmbientLight intensity={0.4} />

<T.Group>
    
    <T.Mesh
        position={[5, -2, -10]}

        rotation.y={-30 / 180 * Math.PI}
        rotation.z={45 / 180 * Math.PI}

        scale={12}
    >
        <T.CircleGeometry args={[2.5, 4]} />
        <T.MeshStandardMaterial color={"#202020"} />
    </T.Mesh>

    <BackendCube 
            color={"#00D000"}
            position={backendPosition}
        />

    <FrontendCube
            color={"#F00000"}
            position={frontendPosition}
        />
    
    <ToolCube
            color={"#FA8000"}
            position={toolPosition}
        />
    
    <DatabaseCube
            color={"#0059FF"}
            position={databasePosition}
        />
    
</T.Group>
