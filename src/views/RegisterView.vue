<template>
  <main class="home">
    <aside class="container-title">
      <div class="wrap-image">
        <img src="../assets/calc.png" alt="imagem de uma calculadora" />
        <h1>Desafio</h1>
      </div>
    </aside>
    <div class="wrap-login-form">
      <form class="login-form" v-on:submit.prevent="register">
        <h1 class="title-form">Registrar-se</h1>
        <input
          v-model="email"
          type="email"
          class="input-username"
          placeholder="Digite seu e-mail"
        />
        <input
          v-model="password"
          type="password"
          class="input-password"
          placeholder="Digite sua senha"
        />
        <select v-model="schooling" type="text" class="select-schooling">
          <option value="1" selected>Fundamental 1</option>
          <option value="2">Fundamental 2</option>
        </select>

        <button type="submit">Cadastrar</button>
        <p class="not-account">
          Já tem uma conta?
          <router-link to="/"
            ><strong class="register-label">Entre por aqui</strong></router-link
          >
        </p>
      </form>
    </div>
  </main>
</template>

<script>
import { createUser } from "../services/user-service/user";
import Toastify from "toastify-js";

export default {
  name: "RegisterView",
  data: function () {
    return {
      email: "",
      password: "",
      schooling: 0,
    };
  },
  methods: {
    register: async function () {
      try {
        const data = {
          email: this.email,
          password: this.password,
          schooling: this.schooling,
        };

        const response = await createUser(data);

        Toastify({
          text: `${response.data.statusCode}: Usuário cadastrado com sucesso!`,
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

        this.$router.push("/");
      } catch (error) {
        Toastify({
          text: `${error.response.data.message}`,
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
  width: 90%;
  height: 20%;
  color: var(--black);
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
}

.input-password {
  width: 90%;
  height: 20%;
  color: var(--black);
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
}

.select-schooling {
  width: 90%;
  height: 20%;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
}

button {
  height: 4.2rem;
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