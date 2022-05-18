<template>
  <div class="calculator">
    <div class="calculator-keys">
      <div class="history-display">
        {{ this.display }}
      </div>
      <div class="calculator-display">{{ result[result.length - 1] }}</div>

      <button v-on:click="addKeys(sum)" class="operation-sum">+</button>
      <button v-on:click="addKeys(subtract)" class="operation-subtract">
        -
      </button>
      <button v-on:click="addKeys(multiply)" class="operation-multiply">
        *
      </button>
      <button v-on:click="addKeys(division)" class="operation-division">
        /
      </button>
      <button v-on:click="addKeys(percent)" class="operation-percent">%</button>
      <button v-on:click="addKeys(square)" class="operation-square">√</button>

      <button v-on:click="addKeys(seven)" class="button-seven">7</button>
      <button v-on:click="addKeys(eight)" class="button-eight">8</button>
      <button v-on:click="addKeys(nine)" class="button-nine">9</button>

      <button v-on:click="addKeys(four)" class="button-four">4</button>
      <button v-on:click="addKeys(five)" class="button-five">5</button>
      <button v-on:click="addKeys(six)" class="button-six">6</button>

      <button v-on:click="addKeys(one)" class="button-one">1</button>
      <button v-on:click="addKeys(two)" class="button-two">2</button>
      <button v-on:click="addKeys(three)" class="button-three">3</button>

      <button v-on:click="addKeys(zero)" class="button-zero">0</button>
      <button v-on:click="addKeys(dot)" class="button-dot">.</button>
      <button v-on:click="clearCalculationResult()" class="button-ac">
        AC
      </button>

      <button v-on:click="addKeys(equals)" class="key--equal">=</button>
    </div>
  </div>
</template>

<script>
import Toastify from "toastify-js";
import { operation } from "../services/operations-service/basic-operation";

export default {
  name: "AdvancedCalculatorComponent",
  data: function () {
    return {
      numbers: [],
      result: [],
      calculate: "",
      display: "",
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      sum: "+",
      division: "/",
      multiply: "*",
      subtract: "-",
      dot: ".",
      equals: "=",
      percent: "%",
      square: "√",
    };
  },
  methods: {
    addKeys: function (value) {
      if (value == "=") {
        this.numbers.push(this.calculate);
        this.calculate = "";
        this.makeCalculation();
      }
      if (value != "=") {
        this.display += value.toString();
        this.calculate += value.toString();
      }
    },
    clearCalculationResult: function () {
      this.result = [];
      this.numbers = [];
      this.calculate = "";
      this.display = "";
    },
    async makeCalculation() {
      try {
        var numbers = {
          numbers: this.numbers,
        };

        if (this.result.length == 0) {
          const { data } = await operation(numbers);
          this.result.push(data);
        } else {
          var getLastResult = this.result[this.result.length - 1].toString();

          var newCalculation = getLastResult.concat(
            this.numbers[this.numbers.length - 1]
          );

          this.numbers.push(newCalculation);

          const { data } = await operation(numbers);
          this.result.push(data);
        }
      } catch (error) {
        Toastify({
          text: `${error.response.status}: ${error.response.data.message}`,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
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
.calculator {
  width: 30vw;
  height: 60vh;
  background-color: #000;
}

@media (min-width: 100px) and (max-width: 767px){
  .calculator {
      width: 70vw;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .calculator {
      width: 40vw;
  }
}

.calculator-display {
  background-color: #222222;
  color: #fff;
  font-size: 1.714285714em;
  padding: 0.5em 0.75em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: display;
}

.history-display {
  background-color: #222222;
  color: #fff;
  font-size: 1.714285714em;
  padding: 0.5em 0.75em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: history-display;
}

.calculator-keys {
  display: grid;
  grid-template:
    "history-display history-display history-display history-display "
    "display display display display "
    "sum subtract multiply division  "
    "seven eight nine percent  "
    "four five six square "
    "one two three equal"
    "zero dot ac equal";
}

.operation-percent {
  grid-area: percent;
}

.operation-square {
  grid-area: square;
}

.operation-sum {
  grid-area: sum;
}

.operation-subtract {
  grid-area: subtract;
}
.operation-multiply {
  grid-area: multiply;
}
.operation-division {
  grid-area: division;
}

.button-nine {
  grid-area: nine;
}
.button-eight {
  grid-area: eight;
}
.button-seven {
  grid-area: seven;
}
.button-six {
  grid-area: six;
}
.button-five {
  grid-area: five;
}
.button-four {
  grid-area: four;
}
.button-three {
  grid-area: three;
}
.button-two {
  grid-area: two;
}
.button-one {
  grid-area: one;
}
.button-zero {
  grid-area: zero;
}
.button-dot {
  grid-area: dot;
}
.button-ac {
  grid-area: ac;
}

button {
  cursor: pointer;
}

.key--equal {
  background-color: var(--radical-light-red);
  grid-area: equal;
}

.button-operation {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-weight: bold;
  background-color: var(--alabaster);
  height: 100%;
}

.calculator {
  display: grid;
}
</style>
