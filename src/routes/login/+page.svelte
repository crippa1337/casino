<script lang="ts">
    import type { ActionData } from "./$types";
    export let form: ActionData;
</script>

<main>
    <div class="login__container">
            {#if form?.incorrect}
                <div class="error">Incorrect Password!<br>Please try again.</div>
            {/if}
            {#if form?.invalid}
                <div class="error">Invalid Input!<br>Please try again.</div>
            {/if}
        <div class="super__login__container">
            <div class="login__container__header">
                <h1>Ericsson Casino</h1>
            </div>
            <div class="login__container__form">
                <form method="POST">
                    <div class="login__container__form__input">
                        <label for="account_name">Name</label>
                        <input type="text" name="account_name" id="account_name" placeholder="Name" />
                    </div>
                    <div class="login__container__form__input">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div class="login__container__form__input">
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>

<style>
    * {
        box-sizing: border-box;
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }

    .super__login__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 50vh;
        outline: 1px solid green;
        border-radius: 1rem;
        background-color: var(--fg-color);
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
    }

    .login__container {
        width: 100%;
        height: 100vh;
        background-color: var(--bg-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login__container__header {
        width: 100%;
        margin: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login__container__header h1 {
        font-size: 3rem;
        color: white;
    }

    .login__container__form {
        width: 58%;
        height: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login__container__form form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .login__container__form__input {
        width: 50%;
        height: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .login__container__form__input label {
        font-size: 1.5rem;
        color: white;
    }

    .login__container__form__input input {
        width: 100%;
        height: 2rem;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
        color: white;
        background-color: rgba(20, 20, 20, 0.719);
        transition: 0.25s;
    }

    .login__container__form__input input:focus {
        outline: green solid 2px;
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
    }

    .login__container__form__input button {
        width: 50%;
        height: 2rem;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
        background-color: rgb(20, 20, 20);
        color: white;
        transition: 0.25s;
    }

    .login__container__form__input button:hover {
        outline: green 2px solid;
        box-shadow: rgba(10, 49, 0, 0.486) 0px 8px 24px;
        color: rgb(25, 128, 0);
    }

    .login__container__form__input button:active {
        scale: 0.95;
    }

    .error {
        color: red;
        font-size: 2rem;
    }

</style>