<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
</script>

<style>
    * {
        color: white;
        font-family: monospace;
        font-size: 1vw;
    }
    .body {
        height: 100%;
        padding-left: 12.5%;
        padding-right: 12.5%;
        display: flex;
        align-content: center;
        flex-direction: column;
    }

    .skills {
        min-height: 65%;
        border: rgb(200, 200, 200) 4px solid;
        border-radius: 2px;
    }
    
    h1 {
        font-size: 2vw;
        text-align: center;
    }

    h2 {
        color: rgb(200, 200, 200);
        font-size: 1.5vw;
        text-align: center;
    }
</style>
<div class="body">
    <h1> Leonardo Kreienbühl </h1>

    <div class="kurzprofil"> 
        
        Ich bin ein passionierter Informatiker und baue gerne Software. <br>
        Am Liebsten programmiere ich mit C#, da ich damit am effizientesten arbeiten kann, sei es eine Webseite oder ein kleines Programm. <br>
        Mein Ziel ist es eine Software zu kreieren, welche anderen Menschen hilft, sei es ein kleines Tool für Informatiker oder ein kompliziertes Programm. <br>
        

    </div>

    <h2>Informatikkompetenzen</h2>
    <div class="skills">
        <Canvas>
          <Scene />
        </Canvas>
    </div>

    <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
        test
    </div>
    
</div>
