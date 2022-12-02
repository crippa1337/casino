<script lang="ts">
    import { page } from "$app/stores";
    const user = $page.data.user as User;
</script>

<main>
    <div class="player-info">
        <div class="account-name">{user.account_name}</div>
        <form action="/logout" method="POST">
            <button class="logout">Logout</button>
        </form>
    </div>
    <div class="wheel"></div>
    <div class="betting-field"></div>
    <div class="current-bets"></div>
</main>

<style>
    * {
        box-sizing: border-box;
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }

    main {
        width: 100%;
        height: 100vh;
        background-color: rgb(43, 43, 43);
    }

    .player-info {
        outline: 3px solid rgb(0, 0, 0);
        width: 15rem;
        height: 10rem;
        margin: 1rem;
        position: absolute;
        z-index: 0;
        background-color: rgba(22, 22, 22, 0.253);
    }

</style>