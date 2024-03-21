<template>
    <div class="checkout-container">
      <h2>Welcome to the checkout page</h2>
      <form @submit.prevent="submitCheckoutForm">
        <p>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model.trim="order.name">
        </p>
        <p>
          <label for="surname">Surname:</label>
          <input type="text" id="surname" v-model.trim="order.surname">
        </p>
        <p>
          <label for="number">Phone Number:</label>
          <input type="tel" id="number" v-model.number="order.number">
        </p>
        <p>
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="order.address">
        </p>
        <h3>All The Lessons Brought:-</h3>
        <div v-for="itemId in cart" :key="itemId">
          <p>
            <strong>Lesson:</strong> {{ getLessonById(itemId).Subject }}
            <button @click.prevent="removeItemFromOrder(itemId)">Remove from Order</button>
          </p>
        </div>
        <h2>Order Information</h2>
        <p><strong>Name:</strong> {{ order.name }}</p>
        <p><strong>Surname:</strong> {{ order.surname }}</p>
        <p><strong>Phone Number:</strong> {{ order.number }}</p>
        <p><strong>Address:</strong> {{ order.address }}</p>
        <button type="submit">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        order: {
          name: "",
          surname: "",
          number: "",
          address: "",
        },
      };
    },
    props: {
      cart: {
        type: Array,
        required: true,
      },
      getLessonById: {
        type: Function,
        required: true,
      },
      removeItemFromOrder: {
        type: Function,
        required: true,
      },
      submitCheckoutForm: {
        type: Function,
        required: true,
      },
    },
  };
  </script>
  
</script>

<style scoped>
/* Styles for checkout container */
.checkout-container {
  margin-top: 20px; /* Add some space between the lessons and checkout sections */
  padding: 20px;
  background-color: #fff; /* Set background color */
  border-radius: 8px; /* Add rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
}

/* Styles for form elements */
.checkout-container form {
  margin-bottom: 20px;
}

.checkout-container input[type="text"],
.checkout-container input[type="tel"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;
}

.checkout-container input[type="text"]:focus,
.checkout-container input[type="tel"]:focus {
  border-color: #007bff;
}

/* Styles for buttons */
.checkout-container button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.checkout-container button:hover {
  background-color: #0056b3;
}
</style>
