<script lang="ts">
    import { T } from '@threlte/core';
    import { Text3DGeometry } from "@threlte/extras";
    import { spring } from "svelte/motion";
    import { Vector3 } from "three";
    import { selectedCube } from "../../../stores";
    import { get } from "svelte/store";

    export let color: string;
    
    export let position: Vector3 = new Vector3(0, 0, 0);

    const scale = spring(2.5);
    
    const PositionX = spring(position.x);
    const PositionY = spring(position.y);
    const PositionZ = spring(position.z);

    const PositionScale = spring(1);
    
</script>

<T.Group>
    
    <T.Mesh
        position={[$PositionX - $PositionScale / 6, $PositionY + $PositionScale / 2, $PositionZ + $PositionScale / 2]}
        scale={$scale / 1000}
    >
        <Text3DGeometry text="Backend" />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
        position={[-4, $PositionY, -4]}

        scale={$scale}

        on:pointerenter={(event) => {
            scale.set(5);
            PositionX.set(-5);
            PositionY.set(2);
            PositionZ.set(-5);
            
            PositionScale.set(2);
            
            event.stopPropagation();
        }}
        on:pointerleave={() => {
            if (get(selectedCube) === 0) {
                selectedCube.set(-1);
            }
            scale.set(2.5);
            PositionX.set(position.x);
            PositionY.set(position.y);
            PositionZ.set(position.z);
            
            PositionScale.set(1);
        }}
        on:click={() => {
            selectedCube.set(0);
        }}
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} transparent={true} opacity={0.25} />
    </T.Mesh>
    <T.Mesh
            rotation.x={-Math.PI / 2}
            rotation.z={45 / 180 * Math.PI}

            position.x={-4}
            position.z={-4}

            scale={$scale / 4}

            receiveShadow>

        <T.CircleGeometry args={[2.5, 4]} />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX, $PositionY / 3.3, $PositionZ]}
            scale={[$scale / 8, $scale / 4, $scale / 8]}
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX + $PositionScale, $PositionY / 3.3, $PositionZ]}
            scale={[$scale / 8, $scale / 4, $scale / 8]}
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX + $PositionScale, $PositionY / 3.3, $PositionZ + $PositionScale]}
            scale={[$scale / 8, $scale / 4, $scale / 8]}
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX, $PositionY / 3.3, $PositionZ + $PositionScale]}
            scale={[$scale / 8, $scale / 4, $scale / 8]}
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

    <T.Mesh
            position={[$PositionX + $PositionScale / 2, $PositionY / 3.3, $PositionZ + $PositionScale / 2]}
            scale={[$scale / 8, $scale / 4, $scale / 8]}
    >
        <T.BoxGeometry />
        <T.MeshStandardMaterial color={color} />
    </T.Mesh>

</T.Group>
