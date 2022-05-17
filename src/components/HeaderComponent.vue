<template>
  <header>
    <div class="content-header">
      <div class="container-logo">
        <img
          class="logo"
          src="../assets/calc.png"
          alt="imagem de uma calculadora"
        />
      </div>
      <div class="header-navbar">
        <h2>Desafio: Calculadora</h2>
      </div>
      <div class="exit-container">
        <button class="exit-button" v-on:click="logout">Logout</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
header {
  height: 3.2rem;
  padding: 2rem;
  background-color: var(--radical-red);
  display: flex;
  justify-content: center;
}

.content-header {
  min-width: 80%;
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container-logo {
  width: 9%;
}

img {
  width: 55%;
}

.header-navbar {
  display: flex;
  color: var(--white);
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
}

.exit-container {
  width: 6%;
}

.exit-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--white);
  color: var(--text-color);
  width: 70px;
  height: 37px;
  border: 0;
  box-sizing: border-box;
  border-radius: 6px;
}
</style>