
<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <div class="search-bar">
          <input type="text" v-model="searchTerm" placeholder="Search lessons" />
          <button v-on:click="performSearch">
              <i class="fas fa-search"></i>
          </button>
      </div>
      <button v-on:click="showCheckout">
          {{ itemsInTheCart }}
          <i class="fas fa-cart-shopping"></i>
          Checkout
      </button>
  </header>

    <main>
      <TheWelcome />
    </main>
  </div>
</template>


<script>
import ProductList from "./components/ProductList.vue";
export default {
    name: 'app',
    data() {
        return {
            sitename: "Welcome to Lesson Website vue.js app",
            cart: [],
            currentView: ProductList
    }
},
component: { ProductList, Checkout},
methods: {
                showCheckout () {
                  if (this.currentView === ProductList) {
                    this.currentView = Checkout;
                  } else {
                    this.currentView = ProductList
                  }
                }
              }
            }
          

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
