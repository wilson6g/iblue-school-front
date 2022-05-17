<template>
  <main class="home">
    <aside class="container-title">
      <div class="wrap-image">
        <img src="../assets/calc.png" alt="imagem de uma calculadora" />
        <h1>Desafio</h1>
      </div>
    </aside>
    <div class="wrap-login-form">
      <form class="login-form" v-on:submit.prevent="login">
        <h1 class="title-form">Faça login</h1>
        <input
          v-model="email"
          type="text"
          class="input-username"
          placeholder="Digite seu e-mail"
        />
        <input
          v-model="password"
          type="password"
          class="input-password"
          placeholder="Digite sua senha"
        />
        <button type="submit">Entrar</button>
        <p class="not-account">
          Não tem conta?
          <router-link to="/register"
            ><strong class="register-label"
              >Registre-se aqui</strong
            ></router-link
          >
        </p>
      </form>
    </div>
  </main>
</template>

<script>
import { loginUser } from "../services/user-service/user";
import Toastify from "toastify-js";

export default {
  name: "LoginView",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: async function () {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };

        const response = await loginUser(data);

        Toastify({
          text: `${response.status}: Usuário logado com sucesso!`,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();

        this.$router.push("/home");
      } catch (error) {
        Toastify({
          text: `${error.response.status}: ${error.response.data.message}`,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #ff0000, #ff0000)",
          },
        }).showToast();
      }
    },
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container-title {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
}

.wrap-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  color: var(--black);
}

img {
  width: 20%;
}

.wrap-login-form {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--radical-red);
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
}

.title-form {
  text-align: center;
  color: var(--white);
  text-justify: inter-word;
  font-size: 3.2rem;
}

.input-username {
  width: 100%;
  height: 20%;
  color: var(--black);
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
}

.input-password {
  width: 100%;
  height: 20%;
  color: var(--black);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
}

button {
  height: 3.2rem;
  width: 8.2rem;
  border: 0;
  background-color: var(--white);
  color: var(--black);
  border-radius: 0.5rem;
}

.not-account {
  color: var(--white);
}
.register-label {
  color: var(--white);
  text-decoration: underline;
}
</style>