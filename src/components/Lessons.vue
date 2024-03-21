<template>
  <div class="lessons-container">
    <div class="lesson-card" v-for="lesson in lessons" :key="lesson.id">
      <h1>{{ lesson.Subject }}</h1>
      <img :src="lesson.image" alt="Lesson Image" />
      <p>{{ lesson.Location }}</p>
      <p><strong>Price: {{ lesson.price }}</strong></p>
      <p v-if="itemsLeft(lesson) === 0">All out!</p>
      <p v-else-if="itemsLeft(lesson) < 5">
        Only {{ itemsLeft(lesson) }} left!
      </p>
      <p v-else>Buy Now!</p>
      <div class="rating">
        <span v-for="n in lesson.rating" class="star">★</span>
        <span v-for="n in 5 - lesson.rating" class="star">☆</span>
      </div>
      <button v-if="canAddToTheCart(lesson)" @click="addItemToTheCart(lesson)">
        Add to Cart
      </button>
      <button v-else disabled>Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array // Define cart as a prop
  },
  data() {
    return {
      lessons: [
        {
        "id": 1001,

        "Subject": "Bangla",

        "Location": "Bangladesh", 

        "price": 100,

        "image": "/single-file-component/CW3-single-file-component/src/assets/bangla.png",

        "Spaces": 5,

        "rating": 4
    },
    {
        "id": 1002,

        "Subject": "Math",

        "Location": "London", 

        "price": 100,

        "image": "images/math.png",

        "Spaces": 5,

        "rating": 4
    },
    {
        "id": 1003,

        "Subject": "Math",

        "Location": "Oxford",  

        "price": 110,

        "image": "images/math.png",

        "Spaces": 5,

        "rating": 3
    },
    {
        "id": 1004,

        "Subject": "English",

        "Location": "London", 

        "price": 80,

        "image": "images/english.png",

        "Spaces": 5,

        "rating": 3
    },
    {
        "id": 1005,

        "Subject": "English",

        "Location": "New York", 

        "price": 80,

        "image": "images/english.png",

        "Spaces": 5,

        "rating": 4
    },
    {
        "id": 1006,

        "Subject": "French",

        "Location": "France",  

        "price": 80,

        "image": "images/french.png",

        "Spaces": 5,

        "rating": 3
    },
    {
        "id": 1007,

        "Subject": "Spanish",

        "Location": "Madrid", 

        "price": 80,

        "image": "images/spanish.png",

        "Spaces": 5,

        "rating": 4
    },
    {
        "id": 1008,

        "Subject": "Spanish",

        "Location": "Barselona", 

        "price": 80,

        "image": "images/spanish.png",

        "Spaces": 5,

        "rating": 4
    },
    {
        "id": 1009,

        "Subject": "Art",

        "Location": "India", 

        "price": 100,

        "image": "images/art.png",

        "Spaces": 5,

        "rating": 4
    },
    {
        "id": 1010,

        "Subject": "Yoga",

        "Location": "India", 

        "price": 100,

        "image": "images/yoga.png",

        "Spaces": 5,

        "rating": 4
    }
      ],
    };
  },
  methods: {
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < (this.cart || []).length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    },
    itemsLeft(lesson) {
      return lesson.Spaces - this.cartCount(lesson.id);
    },
    canAddToTheCart(lesson) {
      return this.itemsLeft(lesson) > 0;
    },
    addItemToTheCart(lesson) {
      this.$emit('add-to-cart', lesson);
    }
  }
};
</script>

<style scoped>
/* Your CSS styles go here */
/* Lessons Container Styles */
.lessons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center items horizontally */
}

/* Lesson Card Styles */
.lesson-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 15px;
  width: 200px;
  text-align: center;
  transition: box-shadow 0.3s ease-in-out;
}

.lesson-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.lesson-card h1 {
  font-size: 20px;
  margin-bottom: 10px;
}

.lesson-card p {
  margin-bottom: 8px;
}

.lesson-card img {
  border-radius: 50%;
  width: 150px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  object-fit: cover; /* Maintain aspect ratio while covering the dimensions */
}

/* Button Styles */
.lesson-card button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.lesson-card button:hover {
  background-color: #218838;
}

.lesson-card button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
