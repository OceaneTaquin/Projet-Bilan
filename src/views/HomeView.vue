<script setup>
import MainElement from "@/components/MainElement.vue";
import MyContact from "@/components/MyContact.vue";
import { ref } from "vue";

const showModal = ref(false);

const toggleModal = (value) => {
  showModal.value = value;
};
</script>

<template>
  <main>
    <div id="WelcomeItem">
      <h1>Bienvenue sur mon Portfolio !</h1>
      <p>
        Bonjour à vous ! Je m'appelle Taquin Océane, je suis actuellement
        apprentie développeuse Web et Web mobile !
      </p>
    </div>

    <router-link to="#section1" class="nav-link">Aller à la section Projets</router-link>
    <router-link to="#section2" class="nav-link">Aller à la section Pour me contacter !</router-link>

    <div id="section1" class="main-element-container">
      <MainElement :showModal="showModal" :toggleModal="toggleModal" />
    </div>
    <div id="section2">
      <MyContact />
    </div>
  </main>
</template>

<style scoped>
#WelcomeItem {
  position: absolute;
  top: 350px;
  left: 20px;
  right: 20px;
  text-align: center;
  font-size: medium;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Playfair Display", serif;
}

.nav-link {
  display: block;
  box-sizing: border-box;
  width: 200px;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
  color: #333;
  background-color: rgb(222, 135, 186);
  border-radius: 10px;
  border: 2px solid #d180e1db;
  font-family: "Playfair Display", serif;
  font-size: 10px;
  transition: background-color 0.5s ease;
  text-align: center;
}

.nav-link:hover {
  background-color: #d180e1db;
  border-color: rgb(222, 135, 186);
}

#WelcomeItem h1,
#WelcomeItem p {
  display: block;
  margin-bottom: 10px;
}

.main-element-container {
  margin-top: 300px;
}

#MyProjects {
  font-size: small;
  margin: 20px 50px;
}
</style>
