<script lang="ts">
    import { page } from "$app/stores";
    const user = $page.data.user as User;
</script>

<div class="player-info">
    <div class="company">Ericsson Casino&#8482</div>
    <div class="nav-buttons-container">
        <a href="/coinflip" class="button coinflip">Coinflip</a>
        <a href="/roulette" class="button roulette">Roulette</a>
        <a href="/" class="button wip1">W.I.P</a>
        <a href="/" class="button wip2">W.I.P</a>
    </div>
    <div class="account-container">
        <div class="account-name-top"><b>[User]</b></div>
        <div class="account-name">{user.account_name}</div>
    </div>
    <div class="bal-container">
            <div class="bal-top"><b>[Balance]</b></div>
            <div class="bal">{user.balance}</div>
        </div>
    <form class="account-buttons-container" action="/logout" method="POST">
        <button class="button">Logout</button>
        <button class="button">Delete</button>
    </form>
</div>

<style>
    * {
        box-sizing: border-box;
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }

    .player-info {
        width: 100%;
        height: 10vh;
        position: fixed;
        background-color: var(--fg-color);
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
        outline: 1px solid green;

        display: grid;
        grid-template-areas:
            "company nav-buttons name bal . account-buttons";
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr;
    }

    .account-container, .bal-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-inline: 1px solid;
        border-color: var(--gamer-green);
        box-shadow: rgba(10, 49, 0, 0.486) 0px 0px 16px 0px;
    }

    .account-name,
    .bal
    {
        color: white;
        font-size: 2rem;
    }

    .account-name {
        grid-area: name;
    }

    .bal {
        grid-area: bal;
    }

    .bal-top,
    .account-name-top {
        font-size: 1rem;
        color: rgba(0, 255, 64, 0.342);
    }

    .company {
        color: rgba(255, 255, 255, 0.219);
        font-size: 1rem;
        grid-area: company;
        margin: 1rem;
    }

    .button {
        color: white;
        width: 6rem;
        height: 2rem;
        font-size: 1rem;
        border-radius: 0.5rem;
        border: none;
        grid-area: buttons;
        background-color: rgb(20, 20, 20);
        color: white;
        transition: 0.25s;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    .button:hover {
        outline: green 2px solid;
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
        color: rgb(25, 128, 0);
    }

    .button:active {
        scale: 0.95;
    }

    .nav-buttons-container {
        grid-area: nav-buttons;
        display: grid;
        place-items: center;
        grid-template-areas: 
        "coinflip roulette"
        "wip1 wip2";
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin: auto;
        gap: 5px;
    }

    .coinflip {
        grid-area: coinflip;
        width: 8rem;
    }

    .roulette {
        grid-area: roulette;
        width: 8rem;
    }

    .wip1 {
        grid-area: wip1;
        width: 8rem;
    }

    .wip2 {
        grid-area: wip2;
        width: 8rem;
    }

    .account-buttons-container {
        grid-area: account-buttons;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0.5rem;
        margin-left: auto;
    }



</style>

