<script lang="ts">
    import PlayerInfo from "$lib/components/playerinfo.svelte";

    let value = "";

    $: value = value.replace(/[^0-9]/g, '')
</script>

<main>
    <PlayerInfo/>
    <div class="play-area-container">
        <div class="room-container">
            <form class="betting-area room" method="POST" action="">
                <h1>Coinflip</h1>
                <input bind:value min=1 type="tel" name="betting_input" id="betting_input" placeholder="Bet size" />
                <button>Create Bet</button>
            </form>
            <div class="room room1">

            </div>
            <div class="room room2">

            </div>
            <div class="room room3">

            </div>
            <div class="room room4">

            </div>
            <div class="room room5">

            </div>
            <div class="room room6">

            </div>
        </div>
    </div>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    main {
        width: 100%;
        height: 100vh;
        background-color: var(--bg-color);
        display: flex;
        flex-direction: column;
    }

    .play-area-container {
        width: 100%;
        height: 90vh;
        margin-top: 10vh;

        display: flex;
        justify-content: center;
        align-items: center;
        outline: 1px solid red;
    }

    .room-container {
        width: 100%;
        height: 75vh;

        display: grid;
        grid-template-areas: 
        "bets room1 room2 room3"
        "bets room4 room5 room6";
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .room {
        width: auto;
        height: auto;
        margin: 1rem;
        background-color: var(--fg-color);
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
        outline: 1px solid green;
    }

    .room1 {
        grid-area: room1;
    }

    .room2 {
        grid-area: room2;
    }

    .room3 {
        grid-area: room3;
    }

    .room4 {
        grid-area: room4;
    }

    .room5 {
        grid-area: room5;
    }

    .room6 {
        grid-area: room6;
    }

    .betting-area {
        grid-area: bets;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .betting-area h1 {
        width: 70%;
        text-align: center;
        font-size: 2.5rem;
        color: white;
        margin-block: 3rem;
        padding: 0.5rem;
        outline: green solid 2px;
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
    }

    .betting-area input {
        width: 70%;
        height: 6rem;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 3rem;
        color: white;
        background-color: rgba(20, 20, 20, 0.719);
        transition: 0.25s;
    }

    .betting-area input:focus {
        outline: green solid 2px;
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
    }

    .betting-area button {
        width: 70%;
        height: 3rem;

        border: none;
        border-radius: 0.5rem;
        margin-top: 0.5rem;

        font-size: 1.5rem;
        background-color: rgb(20, 20, 20);
        color: white;
        transition: 0.25s;
    }

    .betting-area button:hover {
        outline: green 2px solid;
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
        color: rgb(25, 128, 0);
    }

    .betting-area button:active {
        scale: 0.95;
    }

</style>