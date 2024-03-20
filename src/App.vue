
<template>
  <div id="app">
    <!--header>
      <h1>{{ sitename }}</h1>
      <div class="search-bar">
          <input type="text" v-model="searchTerm" placeholder="Search lessons" />
          <button v-on:click="performSearch">
              <i class="fas fa-search"></i>
          </button>
      </div>
      
  </header-->
  
  <header>
    <h1>{{ sitename }}</h1>
    <button @click="showCheckout">
      {{ itemsInTheCart }}
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
      Checkout
  </button>
  </header>

    <!--main>
      <TheWelcome />
    </main-->

    <main>
     <br>
     <component :is="currentView"></component>
    </main>

  </div>
</template>


<script>
import Checkout from "./components/Checkout.vue";
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
                },

                addItemToTheCart: function (lessons) {
                    this.cart.push(lessons.id);
                },

                removeItemFromCart: function (lessonId) {
                    const index = this.cart.indexOf(lessonId);
                    if (index !== -1) {
                        this.cart.splice(index, 1);
                    }
                },

                isItemInCart: function (lessonId) {
                    return this.cart.includes(lessonId);
                },

                removeItemFromOrder: function (itemId) {
                    const index = this.cart.indexOf(itemId);
                    if (index !== -1) {
                        this.cart.splice(index, 1);
                    }
                },

                getLessonById: function (lessonId) {
                    return this.lessons.find((lesson) => lesson.id === lessonId) || {};
                },

                submitCheckoutForm() {
                    alert("Congratulations, Order Submitted :) ");
                },
                canAddToTheCart(lessons) {
                    return lessons.Spaces > this.cartCount(lessons.id);
                },
                cartCount(id) {
                    let count = 0;
                    for (let i = 0; i < this.cart.length; i++) {
                        if (this.cart[i] === id) {
                            count++;
                        }
                    }
                    return count;
                },
                itemsLeft(lessons) {
                    return lessons.Spaces - this.cartCount(lessons.id);
                },

                performSearch: function () {
                    const searchTerm = this.searchTerm.toLowerCase();
                    this.showlessons = true;
                    this.filteredLessons = this.lessons.filter(lesson =>
                        lesson.Subject.toLowerCase().includes(searchTerm) ||
                        lesson.Location.toLowerCase().includes(searchTerm) ||
                        lesson.price.toString().includes(searchTerm)
                    );
                },
                resetSearch: function () {
                    this.searchTerm = "";
                    this.filteredLessons = this.lessons;
                },
            },

            computed: {
                itemsInTheCart: function () {
                    return this.cart.length || "";
                },
                sortedlessons() {
                    // the comparison function that defines the order
                    function compare(a, b) {
                        if (a.price > b.price) return 1;
                        if (a.price < b.price) return -1;
                        return 0;
                    }
                    // sort the 'lessons' array and return it
                    return this.lessons.sort(compare);
                },

                filteredLessons: function () {
                    const searchTerm = this.searchTerm.toLowerCase();
                    return this.lessons.filter((lesson) =>
                        lesson.Subject.toLowerCase().includes(searchTerm)
                    );
                },
            },
        };
          

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
