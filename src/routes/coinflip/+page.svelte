<script lang="ts">
    import type { ActionData } from "./$types";
    export let form: ActionData;
    import PlayerInfo from "$lib/components/playerinfo.svelte";
    import type { PageData } from './$types';
    import { enhance } from "$app/forms";
    export let data: PageData;
        
    let value = "";
    $: value = value.replace(/[^0-9]/g, '')
    console.log(data);
    
</script>

<main>
    <PlayerInfo/>
    <div class="play-area-container">
        <div class="room-container">
            <div class="betting-area room">
                <form method="POST" action="?/create_bet" use:enhance>
                    <h1>Coinflip</h1>
                    <input bind:value min=1 type="text" name="betting_input" id="betting_input" placeholder="Bet size" />
                    <button type="submit">Create Bet</button>
                    {#if form}
                        <div class="error">Balance is too low.</div>
                    {/if}
                    {#if form?.incorrect}
                        <div class="error">Invalid input.</div>
                    {/if}
                </form>
                <form method="POST" action="?/refresh_bets" use:enhance>
                    <button type="submit">Refresh Bets</button>
                </form>
            </div>
            {#each data.rooms as room}
                <div class="room betting-room">
                    <h1>{room.id}</h1>
                    {#if room.occupied == 0}
                        <div class="room-empty">Empty</div>
                    {:else if room.occupied == 1}
                        <div class="room-bet-size">{room.bet}</div>
                        <div class="room-bet-player1"></div>
                    {:else}
                        <div class="room-bet-size">{room.bet}</div>
                        <div class="room-bet-player1"></div>
                        <div class="room-bet-player2"></div>
                    {/if}

                </div>
            {/each}
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

    .error {
        margin-top: 1rem;
        color: rgb(255, 255, 255);
        font-size: 1rem;
    }

    .room-empty {
        color: rgba(255, 255, 255, 0.295);
        font-size: 3rem;
        width: auto;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .betting-room

    .betting-room h1 {
        color: white;
        margin: 0.5rem;
    }

</style>