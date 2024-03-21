<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <div class="search-bar">
        <input type="text" v-model="searchTerm" placeholder="Search lessons" />
        <button @click="performSearch">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          Search
        </button>
      </div>
      <button @click="showCheckout">
        {{ cart.length }}
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
    },
    addItemToTheCart(lesson) {
      this.cart.push(lesson.id);
    },
    removeItemFromOrder(itemId) {
      const index = this.cart.indexOf(itemId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    submitCheckoutForm() {
      alert("Congratulations, Order Submitted :) ");
    },
    performSearch() {
      const searchTerm = this.searchTerm.toLowerCase();
      // Perform search logic here
    },
  },
};
</script>

<style src="./assets/styles.css" scoped></style>
