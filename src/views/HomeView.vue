<template>
  <div class="home">
    <HeaderComponent />
    <main class="main-content">
      <BaseCalculatorComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BaseCalculatorComponent from "../components/BaseCalculatorComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent,
    BaseCalculatorComponent,
  },
};
</script>

<style scoped>
.main-content {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: var(--black);
}

.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
