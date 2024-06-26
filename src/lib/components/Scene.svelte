<script lang="ts">
    import { T, useFrame } from '@threlte/core';
    import { interactivity, OrbitControls } from "@threlte/extras";
    import { Vector3 } from "three";

    import { spring } from "svelte/motion";

    import BackendCube from "$lib/components/cubes/BackendCube.svelte";
    import FrontendCube from "$lib/components/cubes/FrontendCube.svelte";
    import ToolCube from "$lib/components/cubes/ToolCube.svelte";
    import DatabaseCube from "$lib/components/cubes/DatabaseCube.svelte";

    enum cube {
        backend = 0,
        frontend = 1,
        database = 2,
        tool = 3,
    }

    interactivity();
    
    const backendPosition = {x: spring(-0.5), y: spring(0.5), z: spring(-0.5)};
    const frontendPosition = {x: spring(20), y: spring(0.5), z: spring(-0.5)};
    const databasePosition = {x: spring(40), y: spring(0.5), z: spring(-0.5)};
    const toolPosition = {x: spring(60), y: spring(0.5), z: spring(-0.5)};
    
    const cameraPosition = new Vector3(-20, 11, 30);
    const cameraPositionX = spring(cameraPosition.x);
    const cameraPositionY = spring(cameraPosition.y);
    const cameraPositionZ = spring(cameraPosition.z);

    const lookAtX = spring(0);
    const lookAtY = spring(0);
    const lookAtZ = spring(0);

    let selectedCube = 0;

    useFrame(() => {
        // rotation += 0.0005;
        // rotation.update((value) => value += 0.0005);
    });

    function setPosition() {
            switch (selectedCube) {
                case cube.backend:
                    backendPosition.x.set(-0.5);
                    frontendPosition.x.set(20);
                    databasePosition.x.set(40);
                    toolPosition.x.set(60);
                    break;
                case cube.frontend:
                    backendPosition.x.set(-20);
                    frontendPosition.x.set(-0.5);
                    databasePosition.x.set(20);
                    toolPosition.x.set(40);
                    break;
                case cube.database:
                    backendPosition.x.set(-40);
                    frontendPosition.x.set(-20);
                    databasePosition.x.set(-0.5);
                    toolPosition.x.set(20);
                    break;
                case cube.tool:
                    backendPosition.x.set(-60);
                    frontendPosition.x.set(-40);
                    databasePosition.x.set(-20);
                    toolPosition.x.set(-0.5);
                    break;
            }
    }
    
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
        <OrbitControls enableDamping  enablePan={false} maxPolarAngle={1.4} target={[$lookAtX, $lookAtY, $lookAtZ]} maxDistance={50} minDistance={20} 
            maxAzimuthAngle={2} minAzimuthAngle={-2}    
        />
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
        position={[-5, -3, 5]}
        scale={0.45}

        on:click={(event) => {
            if (selectedCube > 0) {
                selectedCube -= 1;
            }
            else {
                selectedCube = 3;
            }
            setPosition();
            event.stopPropagation();
        }}
    >
    
        <T.CylinderGeometry args={[2.5, 2.5, 1.5, 40]} />
        <T.MeshStandardMaterial color={"#ff0000"} transparent opacity={0}/>

    </T.Mesh>
    
    <T.Mesh

            position.x={-5}
            position.y={-3}
            position.z={5}

            scale={0.4}

            receiveShadow>

        <T.CylinderGeometry args={[2, 2.5, 1, 40]} />
        <T.MeshStandardMaterial color={"#ffffff"} />
    </T.Mesh>

    <T.Mesh
            rotation.y={30 / 180 * Math.PI}
            position.x={-5}
            position.y={-2.75}
            position.z={5}

            scale={0.3}

            receiveShadow>

    >

        
        <T.CylinderGeometry args={[2.5, 2.5, 0.5, 3]} />
        <T.MeshStandardMaterial color={"#000000"} />

    </T.Mesh>

    <T.Mesh

            position.x={5}
            position.y={-3}
            position.z={5}

            scale={0.4}

            receiveShadow>

        <T.CylinderGeometry args={[2, 2.5, 1, 40]} />
        <T.MeshStandardMaterial color={"#ffffff"} />
    </T.Mesh>
    
    <T.Mesh
            rotation.y={(30 + 180) / 180 * Math.PI}
            position.x={5}
            position.y={-2.75}
            position.z={5}

            scale={0.3}

            receiveShadow>

    >

        
        <T.CylinderGeometry args={[2.5, 2.5, 0.5, 3]} />
        <T.MeshStandardMaterial color={"#000000"} />

    </T.Mesh>
    
    <T.Mesh
        position={[5, -3, 5]}
        scale={0.45}

        on:click={(event) => {
            // change selected cube
            if (selectedCube < 3) {
                selectedCube += 1;
            }
            else {
                selectedCube = 0;
            }
            setPosition();
            event.stopPropagation();
        }}
    >
    
        <T.CylinderGeometry args={[2.5, 2.5, 1.5, 40]} />
        <T.MeshStandardMaterial color={"#ff0000"} transparent opacity={0}/>

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
