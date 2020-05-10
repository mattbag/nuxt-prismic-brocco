<template>
  <div>
    <label for="first">
      <input
        type="checkbox"
        name="first"
        id="first"
        v-model="first"
      >
      <span>First</span>
    </label>
    <label for="second">
      <input
        type="checkbox"
        name="second"
        id="second"
        v-model="second"
      >
      <span>second</span>
    </label>
    <label for="third">
      <input
        type="checkbox"
        name="third"
        v-model="third"
        id="third"
      >
      <span>third</span>
    </label>
    <label for="fourth">
      <input
        type="checkbox"
        name="fourth"
        v-model="fourth"
        id="fourth"
      >
      <span>fourth</span>
    </label>

    <div>
      <span>Step: {{step}}</span>
      <ul>
        <li>1 {{first ? 1 : 0}}</li>
        <li>2 {{second? 1 : 0}}</li>
        <li>3 {{third? 1 : 0}}</li>
        <li>4 {{fourth? 1 : 0}}</li>
      </ul>
      <strong>Key: {{score ? score : "0000"}}</strong>
      <br>
      <strong>Result: {{getResult}}</strong>
      <br>
      Matrix: {{combinations}}

    </div>
    <div class="my-4">
      Content:
      [for each step]
      <div>
        <ul>
          <li
            v-for="(val,key) in getResult"
            :key="key"
          >
            {{key}} - {{val}} =
            {{content[step][key]}}
          </li>
        </ul>
      </div>
    </div>
    <button @click="step++">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      first: false,
      second: false,
      third: false,
      fourth: false,
      results: {
        "0000": { a: true, b: true, c: true },
        "1234": { a: true, b: false, c: true },
        "123": { a: false, b: true, c: false },
        "124": { a: true, b: true, c: true },
        "12": { a: true, b: true, c: true },
        "134": { a: true, b: true, c: true },
        "13": { a: true, b: true, c: true },
        "14": { a: true, b: true, c: true },
        "1": { a: true, b: true, c: true },
        "234": { a: true, b: true, c: true },
        "23": { a: true, b: true, c: true },
        "24": { a: true, b: true, c: true },
        "2": { a: true, b: true, c: true },
        "34": { a: true, b: true, c: true },
        "3": { a: true, b: true, c: true },
        "4": { a: true, b: true, c: true }
      },
      content: {
        1: {
          a: "content 1a",
          b: "content 1b",
          c: "content 1c"
        },
        2: {
          a: "content 2a",
          b: "content 2b",
          c: "content 2c"
        },
        3: {
          a: "content 2a",
          b: "content 2b",
          c: "content 2c"
        }
      }
    };
  },
  computed: {
    score() {
      return (
        (this.first ? "1" : "") +
        (this.second ? "2" : "") +
        (this.third ? "3" : "") +
        (this.fourth ? "4" : "")
      );
    },
    combinations() {
      var fn = function(active, rest, a) {
        if (!active && !rest) return;
        if (!rest) {
          a.push(active);
        } else {
          fn(active + rest[0], rest.slice(1), a);
          fn(active, rest.slice(1), a);
        }
        return a;
      };
      return fn("", "1234", ["0000"]);
    },
    getResult() {
      let _key;
      if (!this.first && !this.second && !this.third && !this.fourth) {
        return this.results["0000"];
      }
      _key = this.score;
      return this.results[_key];
    },
    getContent() {
      return this.getResult.map(line => {
        line.access = this.results[this.score];
        return line;
      });
    }
  }
};
</script>

<style>
</style>