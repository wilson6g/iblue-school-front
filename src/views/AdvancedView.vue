<template>
  <div class="home">
    <HeaderComponent />
    <main class="main-content">
      <AdvancedCalculatorComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import AdvancedCalculatorComponent from "../components/AdvancedCalculatorComponent.vue";

export default {
  name: "AdvancedView",
  components: {
    HeaderComponent,
    FooterComponent,
    AdvancedCalculatorComponent,
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
