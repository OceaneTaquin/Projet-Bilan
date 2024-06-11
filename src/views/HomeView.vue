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

    <router-link to="#section1" class="nav-link"
      >Aller à la section Projets</router-link
    >
    <router-link to="#section2" class="nav-link"
      >Aller à la section Pour me contacter !</router-link
    >

    <div id="section1" class="main-element-container">
      <MainElement :showModal="showModal" :toggleModal="toggleModal" />
    </div>
    <div id="section2">
      <MyContact />
    </div>
  </main>
</template>
