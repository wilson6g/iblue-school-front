<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --background: #fff;
  --white: #fff;
  --radical-red: #ff1053;
  --radical-light-red: #f73068;
  --blue: #20A4F3;
  --nickel: #697268;
  --raisin-black: #211A1D;
  --black: #000;
  --alabaster: #E2E8DD;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media (min-width: 1080px) {
    font-size: 93.75%;
  }
  @media (min-width: 720px) {
    font-size: 87.5%;
  }
}
body {
  background: var(--background);
  --webkit-font-smoothing: antialiased;
}
body,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 800;
  color: var(--white);
}
h1 {
  font-family: "Roboto", sans-serif;
  line-height: auto;
  letter-spacing: -3%;
  font-size: 80px;
}
a {
  text-decoration: none;
  color: var(--text-color);
}
</style>
