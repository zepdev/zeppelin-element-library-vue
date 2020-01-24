<template>
  <div>
    <div
      class="zep-numberinput"
      data-zep-type="number-input"
      data-zep-step="1"
      data-zep-max="10"
      data-zep-min="0"
    >
      <button id="minus" class="zep-button zep-button-icon" @click="onDecreament(value)">
        <svg
          class="zep-button__icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>{{ minustitle }}</title>
          <path fill="currentColor" d="M25.333 17.333h-18.667v-2.667h18.667z" />
        </svg>
      </button>
      <label for="counter" class="zep-visually-hidden">Counter</label>
      <input
        id="counter"
        type="text"
        :max="max"
        :min="min"
        :step="step"
        class="zep-input zep-input--number"
        :value="value"
        @input="onInput"
        @change="onUpdateCounter"
        @focus="clear"
      />
      <button id="plus" class="zep-button zep-button-icon" @click="onIncreament(value)">
        <svg
          class="zep-button__icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>{{ plustitle }}</title>
          <path fill="currentColor" d="M25.333 17.333h-8v8h-2.667v-8h-8v-2.667h8v-8h2.667v8h8z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { parse } from "@babel/core";
export default {
  name: "ZelVueNumberInput",
  props: {
    plustitle: String,
    minustitle: String,
    max: Number,
    min: Number,
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clear() {
      this.$emit("input", 0);
    },
    onInput(evt) {
      let value = parseInt(evt.target.value, 10);
      /^[0-9]*$/.test(evt.target.value) ? this.$emit("input", value) : 0;
    },
    onUpdateCounter(evt) {
      let counter = parseInt(evt.target.value, 10);
      if (counter >= this.min && counter <= this.max) {
        return counter;
      } else {
        this.clear();
      }
    },
    onIncreament(counter) {
      counter = parseInt(counter, 10);
      let step = this.step || 1;
      counter += step;
      if (counter <= this.max) {
        this.$emit("onplus-click", counter);
      }
    },
    onDecreament(counter) {
      counter = parseInt(counter, 10);
      let step = this.step || 1;
      counter -= step;
      if (counter >= this.min) {
        this.$emit("onminus-click", counter);
      }
    }
  }
};
</script>

<style></style>
