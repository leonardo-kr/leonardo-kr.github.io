<script lang="ts">
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';

  import bugtracker from "$lib/assets/images/bugtracker.png";
  import portfolioScreenshot from "$lib/assets/images/portfolioScreenshot.png";
  import instantMessenger from "$lib/assets/images/instantMessenger.png";

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
        border: white 4px solid;
        border-radius: 2px;
    }
    
    h1 {
        padding-bottom: 2vh;
        font-size: 2vw;
        text-align: center;
    }

    h2 {
        padding-top: 3vh;
        padding-bottom: 2vh;
        color: rgb(160, 160, 160);
        font-size: 1.5vw;
        text-align: center;
    }

    h3 {
        color: rgb(100, 100, 100);
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

    .examples {
        display: flex;
        flex-direction: column;
        gap: 1vw;
    }
    
    .examples div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1vw;
        border: rgb(160, 160, 160) 4px solid;
        padding: 2vw;
    }

    .docs {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        text-align: center;
        gap: 2vh;
    }

    embed {
        margin: 0;
        width: 90%;
        height: 75vh;
    }

    .docs div {
        padding: 2vw;
        width: 94.15%;
        border: rgb(160, 160, 160) 4px solid;
    }
</style>
<div class="body">
    <h1> Leonardo Kreienbühl </h1>

    <div class="kurzprofil"> 
        
        Ich bin ein passionierter Informatiker und baue gerne Software. <br>
        Am Liebsten programmiere ich mit C#, da ich damit am effizientesten arbeiten kann, unabhängig davon, woran ich arbeiten muss. <br>
        Mein Ziel ist es, eine Software zu kreieren, welche anderen Menschen hilft, sei es ein kleines Tool für Informatiker/-innen oder ein grösseres Programm für Benutzer/-innen. <br>
        

    </div>

    <h2>Informatikkompetenzen</h2>
        <p>
            Die im folgenden dargestellten vier Würfel zeigen verschiedene Aspekte meiner Informatikkompetenzen. Je höher die Türme, desto grösser ist mein Wissen und Können in der entsprechenden Sprache bzw. im entsprechenden Bereich. 
        </p>
        <i style="font-size: 0.9vw; color: rgb(180, 180, 180); padding-bottom: 1vh;">Mit der linken Maustaste können Sie die Kamera bewegen. Wenn Sie mit der Maus über den Würfel gehen, werden Ihnen die Sprachen bzw. Bereiche angezeigt mit Text.</i>
    <div class="skills">
        <Canvas>
          <Scene />
        </Canvas>
    </div>

    <h2>Arbeitsbeispiele</h2>
    <div class="examples">
        <div>
            <h3>Portfolio</h3>
            <p>
                Das erste Beispiel ist das Portfolio, in welchem Sie sich bereits befinden. Den Quellcode können Sie auf
                <a href="https://www.github.com/yetanothercoder00/yetanothercoder00.github.io">Github</a> anschauen.
            </p>
            <img src={portfolioScreenshot} alt="Screenshot vom Portfolio" />
        </div>

        <div>
            <h3>Bug Tracker</h3>
            <p>
                Das zweite Beispiel ist ein "Bug Tracker", welchen ich mit ASP.NET, C# und Microsoft SQL Server gebaut habe. Den Quellcode dafür können Sie auch auf <a href="https://www.github.com/yetanothercoder00/bugtracker">Github</a> finden. Diese Webseite wurde mit dem MVC-Pattern und Entity Framework Core erstellt.
            </p>
            <img src={bugtracker} alt="Screenshot vom Bug Tracker" />
        </div>
        <div>
            <h3>Instant Messenger</h3>
            <p>
                Das dritte Beispiel ist ein "Instant Messenger", welcher mithilfe von <a href="https://kit.svelte.dev">SvelteKit</a> gebaut wurde. Hier werden Nachrichten in einer SQLite3 Datenbank auf einem Server gespeichert und in Intervallen von einer Sekunde abgerufen und angezeigt. Den Quellcode können Sie auf <a href="https://www.github.com/yetanothercoder00/instantmessenger">Github</a> finden.
            </p>
            <img src={instantMessenger} alt="Screenshot des instant messengers" />
        </div>
    </div>

    <h2>Dokumente</h2>
    <div class="docs">
        <div>
            <h3>Lebenslauf</h3>
            <embed src={lebenslauf} type="application/pdf">
        </div>

        <div>
            <h3>Modulnotenübersicht</h3>
            <embed src={modulnoten} type="application/pdf">
        </div>
    </div>
    
</div>

<footer>

</footer>
