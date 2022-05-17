<template>
  <footer>
    <div class="content-footer">
      <h2>Desafio: Calculadora</h2>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  height: 3.2rem;
  padding: 2rem;
  background-color: var(--radical-red);
  display: flex;
  justify-content: center;
}

.content-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-footer {
  display: flex;
  justify-content: center;
  align-items: center;
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