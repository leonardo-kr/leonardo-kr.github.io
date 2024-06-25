<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<style>
    * {
        color: white;
        font-family: monospace;
    }
    .body {
        min-height: 100%;
        padding-left: 12.5%;
        padding-right: 12.5%;
        display: flex;
        align-content: center;
        flex-direction: column;
    }

    .skills {
        flex-grow: 2;
        min-height: 65%;
        border: rgb(200, 200, 200) 1px solid;
        border-radius: 1vh;
    }
    
    h1 {
        font-size: 5vw;
        text-align: center;
    }

    h2 {
        color: rgb(200, 200, 200);
        font-size: 3.5vw;
        text-align: center;
    }
</style>
<div class="body">
    <h1> Leonardo Kreienbühl </h1>

    <div class="kurzprofil"> </div>

    <h2>Informatikkompetenzen</h2>
    <div class="skills">
        <Canvas>
          <Scene />
        </Canvas>
    </div>
</div>
