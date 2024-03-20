<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <button @click="showCheckout">
        {{ itemsInTheCart }}
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        Checkout
      </button>
    </header>

    <main>
      <br>
      <component :is="currentView"></component>
    </main>
  </div>
</template>

<script>
import Checkout from "./components/Checkout.vue";
import Lessons from "./components/Lessons.vue";


export default {
  name: 'app',
  data() {
    return {
      sitename: "Welcome to Lesson Website vue.js app",
      cart: [],
      currentView: Lessons
    };
  },
  components: { Lessons, Checkout },
  methods: {
    showCheckout() {
      this.currentView = this.currentView === Lessons ? Checkout : Lessons;
    }
  }
};
</script>

<style src="./assets/styles.css" scoped></style>
