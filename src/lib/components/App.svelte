<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';

  import bugtracker from "$lib/assets/images/bugtracker.png";
  import lebenslauf from "$lib/assets/docs/lebenslauf.pdf";
  import modulnoten from "$lib/assets/docs/modulnoten.pdf";

</script>

<style>
    * {
        color: white;
        font-family: monospace;
        font-size: 1vw;
    }
    .body {
        padding-left: 12.5%;
        padding-right: 12.5%;
        display: flex;
        align-content: center;
        flex-direction: column;
    }

    .skills {
        min-height: 65vh;
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

    h3 {
        color: rgb(180, 180, 180);
        font-size: 1.2vw;
        text-align: center;
    }

    img {
        width: 50vw;
        height: auto;
    }

    footer {
        height: 12.5%;
    }
    
    .examples div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1vw;
    }

    .docs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
    }

    embed {
        width: 100%;
        height: 75vh;
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

    <h2>Arbeitsbeispiele</h2>
    <div class="examples">
        <h3>Portfolio</h3>
        <div>
            <p>
                Das erste Beispiel ist natürlich das Portfolio, welches Sie sehen. Dieses können Sie auf 
                <a href="https://www.github.com/yetanothercoder00/yetanothercoder00.github.io">Github</a> anschauen.
            </p>
        </div>

        <h3>Bug Tracker</h3>
        <div>
            <p>
                Das zweite Beispiel ist ein "Bug Tracker", welcher ich mit ASP.NET, C# und Microsoft SQL Server gebaut habe. Dies können Sie natürlich auch auf <a href="https://www.github.com/yetanothercoder00/bugtracker">Github</a> finden.
            </p>
            <img src={bugtracker} alt="Screenshot vom Bug Tracker" />
        </div>
    </div>

    <h2>Dokumente</h2>
    <div class="docs">
        <embed src={lebenslauf} type="application/pdf">
        <embed src={modulnoten} type="application/pdf">
    </div>
    
</div>

<footer>

</footer>
