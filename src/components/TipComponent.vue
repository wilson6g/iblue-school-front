<template>
  <div class="container-tip">
    <strong class="title-tip"> Como usar as novas operações: </strong>
    <div class="content-tip">
      <p>
        💡 Para fazer subtração com porcentagem, siga o exemplo:
        <strong>100-15%</strong>
      </p>
      <p>
        💡 Para fazer soma com porcentagem, siga o exemplo:
        <strong>100+15%</strong>
      </p>
      <p>
        💡 Para utilizar raiz quadrada, siga o exemplo: <strong>50√</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TipComponent",
};
</script>

<style scoped>
strong {
  color: var(--white);
}

@media (min-width: 100px) and (max-width: 767px) {
  .container-tip {
    width: 20vw;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .container-tip {
    width: 35vw;
  }
}

.title-tip {
  text-align: center;
  font-size: 24px;
}

.container-tip {
  display: flex;
  background: var(--radical-red);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 50vh;
  border-radius: 5px;
  padding: 25px 0;
}

.content-tip {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 250px;
  color: var(--white);
  text-align: justify;
}
</style>