<template>
  <div class="contact-form">
    <h2>Pour me contacter !</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input type="text" id="firstName" v-model="firstName" placeholder="Prénom" required/>
        <input type="text" id="lastName" v-model="lastName" placeholder="Nom" required/>
      </div>

      <div class="from-group">
        <input type="text" id="subject" v-model="subject" placeholder="Objet" required/>
      </div>

      <div class="form-group">
        <textarea id="message" v-model="message" placeholder="Message" required></textarea>
      </div>

      <button type="submit">Envoyer</button>
      <p v-if="emailSent">Votre e-mail a été envoyé à {{ emailDestination }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const subject = ref("");
    const message = ref("");
    const emailSent = ref("");
    const emailDestination = ref("oceanetaquin2426@outlook.com");

    const submitForm = () => {
      emailSent.value = true;
    };

    return {
      firstName,
      lastName,
      subject,
      message,
      emailSent,
      emailDestination,
      submitForm,
    };
  },
};
</script>

<style scoped>
.contact-form {
  margin: 20px auto;
  max-width: 400px;
  background-color: rgb(0, 0, 0);
  padding: 20px;
  border-radius: 10 px;
  box-shadow: 0px 0px 15px 0px rgba(200, 0, 255, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: rgba(194, 145, 11, 0.842);
  font-family: "Playfair Display", serif;
}

p {
  font-size: small;
}

.form-group {
  display: grid;
  gap: 10px;
}

input[type="text"],
textarea {
  width: calc(100% - 20%);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: azure;
  color: maroon;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #10538e;
}
</style>
