<template>
  <div class="home">
    <HeaderComponent />
    <main class="main-content">
      <TipComponent class="tip" />
      <AdvancedCalculatorComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import AdvancedCalculatorComponent from "../components/AdvancedCalculatorComponent.vue";
import TipComponent from "../components/TipComponent.vue";

export default {
  name: "AdvancedView",
  components: {
    HeaderComponent,
    FooterComponent,
    AdvancedCalculatorComponent,
    TipComponent,
  },
};
</script>

<style scoped>
.main-content {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media (min-width: 100px) and (max-width: 425px) {
  .main-content {
    padding: 15rem 0;
    width: 85vw;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .tip {
    height: 35vh;
    width: 79vw;
    margin-bottom: 3rem;
  }
}

@media (min-width: 426px) and (max-width: 767px) {
  .main-content {
    padding: 15rem 0;
    width: 85vw;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .tip {
    height: 35vh;
    width: 80vw;
    margin-bottom: 3rem;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .main-content {
    padding: 15rem 0;
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .tip {
    width: 35vw;
  }
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
