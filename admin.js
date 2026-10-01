import { auth } from "./firebase-config.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const loginForm =
    document.getElementById("loginForm");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const loginBtn =
    document.getElementById("loginBtn");

const loginMessage =
    document.getElementById("loginMessage");


/* =========================================================
   VERIFICA SE JÁ ESTÁ LOGADO
========================================================= */

onAuthStateChanged(auth, (user) => {

    if (user) {

        window.location.href = "admin-dashboard.html";

    }

});


/* =========================================================
   LOGIN
========================================================= */

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;


    loginMessage.textContent = "";

    loginBtn.disabled = true;

    loginBtn.textContent = "Entrando...";


    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        loginMessage.style.color = "#b9f5c8";

        loginMessage.textContent =
            "Login realizado. Entrando no painel...";


        /*
         * O onAuthStateChanged vai detectar
         * o usuário autenticado e redirecionar.
         */

    } catch (erro) {

        console.error(
            "Erro ao fazer login:",
            erro
        );


        loginMessage.style.color = "#ffb5b5";


        switch (erro.code) {

            case "auth/invalid-credential":

                loginMessage.textContent =
                    "E-mail ou senha incorretos.";

                break;


            case "auth/invalid-email":

                loginMessage.textContent =
                    "Digite um e-mail válido.";

                break;


            case "auth/too-many-requests":

                loginMessage.textContent =
                    "Muitas tentativas. Aguarde alguns minutos.";

                break;


            default:

                loginMessage.textContent =
                    "Não foi possível realizar o login.";

        }


        loginBtn.disabled = false;

        loginBtn.textContent = "Entrar";

    }

});