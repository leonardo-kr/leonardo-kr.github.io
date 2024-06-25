<script lang="ts">
    import { T } from '@threlte/core';
    import { Text3DGeometry } from "@threlte/extras";
    import { spring } from "svelte/motion";

    export let color: string;
    
    export let position: any = {x: 0, y: 0, z: 0};

    const scale = spring(5);

    let PositionX = position.x;
    let PositionY = position.y;
    let PositionZ = position.z;

    $: {
        PositionX = position.x;
        PositionY = position.y;
        PositionZ = position.z;
    }


    const planePositionY = spring(-1.5);

    const PositionScale = spring(1);
    const TextScale = spring(0);
    
</script>

<T.Group>

    <T.Mesh
        position={[$PositionX - 0.5, $PositionY + 3, $PositionZ + 2.75]}
        scale={$scale / 1000}
    >
        <Text3DGeometry text="Tools" />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
        position={[$PositionX - 1.6, $PositionY - 0.15, $PositionZ + 1.6]}
        scale={$TextScale / 150}
    >
        <Text3DGeometry text="Docker" />
        <T.MeshStandardMaterial color={"#FFFFFF"} />
    </T.Mesh>

    <T.Mesh
        position={[$PositionX + 1.4, $PositionY + 0.2, $PositionZ + 1.6]}
        scale={$TextScale / 150}
    >
        <Text3DGeometry text="Git" />
        <T.MeshStandardMaterial color={"#FFFFFF"} />
    </T.Mesh>
    
    <T.Mesh
        position={[$PositionX + 0.55, $PositionY + 1, $PositionZ - 0.9]}
        scale={$TextScale / 150}
    >
        <Text3DGeometry text="Windows" />
        <T.MeshStandardMaterial color={"#FFFFFF"} />
    </T.Mesh>
    
    <T.Mesh
        position={[$PositionX - 1.4, $PositionY + 1.5, $PositionZ - 0.9]}
        scale={$TextScale / 150}
    >
        <Text3DGeometry text="Linux" />
        <T.MeshStandardMaterial color={"#FFFFFF"} />
    </T.Mesh>
    
    <T.Mesh
        position={[$PositionX + $PositionScale / 2, $PositionY, $PositionZ + $PositionScale / 2]}

        scale={$scale}

        on:pointerenter={(event) => {
            
            TextScale.set(0.6);
            
            event.stopPropagation();
        }}
        on:pointerleave={() => {
            TextScale.set(0);
        }}
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} transparent={true} opacity={0.25} />
    </T.Mesh>
    <T.Mesh
            rotation.x={-Math.PI / 2}
            rotation.z={45 / 180 * Math.PI}

            position.x={$PositionX + $PositionScale / 2}
            position.y={$planePositionY}
            position.z={$PositionZ + $PositionScale / 2}

            scale={$scale / 4}

            receiveShadow>

        <T.CircleGeometry args={[2.5, 4]} />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX - 0.75, $PositionY - 0.45, $PositionZ - 0.75]}
            scale={[$scale / 6, $scale / 1.5, $scale / 6]}
            castShadow
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX + 1.75, $PositionY - 0.65, $PositionZ - 0.75]}
            scale={[$scale / 6, $scale / 1.75, $scale / 6]}
            castShadow
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX + 1.75, $PositionY - 1.05, $PositionZ + 1.75]}
            scale={[$scale / 6, $scale / 2.5, $scale / 6]}
            castShadow
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX - 0.75, $PositionY - 1.25, $PositionZ + 1.75]}
            scale={[$scale / 6, $scale / 3, $scale / 6]}
            castShadow
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>


</T.Group>
