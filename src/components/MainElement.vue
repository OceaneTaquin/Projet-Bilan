<template>
  <div id="MyProjects">
    <h2>Mes projets</h2>
    <div class="projects-container">
      <!--Utilisation de v-for pour afficher les différents projets-->
      <Project v-for="(projet, index) in projects" :key="index" :project="project" class="project"/>
    </div>
  </div>
</template>

<script setup>
import Project from "../components/Project.vue";
const projects = [
  {
    title: "Projet de CV en HTML5 et CSS3",
    description:
      "Mon premier projet dans le cadre de mes études en développement web a été de faire un CV en HTML5 et CSS3 afin de montrer la bonne acquisition de ces compétences.",
    img: "/src/assets/images/CV-Complet.jpeg",
    technologies: "HTML et CSS",
    githubLink: "https://github.com/OceaneTaquin/Devoir-CV",
    createdAt: "25 octobre 2023",
    additionalPhotos: [
      "/src/assets/images/CV-Footer actionné.jpeg",
      "/src/assets/images/CV-Footer simple.jpeg",
      "/src/assets/images/CV-Header.jpeg",
    ],
  },
  {
    title: "Projet de création d'un cahier des charges",
    description:
      "Mon second projet a été de concevoir un cahier des charges pour une commande fictive, la consigne demandait de créer un fichier sous format PDF avec une analyse concurrentielle, une estimation des coûts et la création d'une maquette.",
    img: "/src/assets/images/Cahier des charges.jpeg",
  },
  {
    title:
      "Projet d'un espace commentaire dynamique en HTML, CSS et JavaScript",
    description:
      "Mon troisième et dernier projet en date a été de concevoir un espace commentaire avec JavaScript à partir d'un index.html déjà fourni. La consigne pour réussir ce projet était de pouvoir afficher un commentaire dans un espace donné de manière immédiate, un message d'erreur devait également s'afficher dans le cas où l'un des champs à remplir était vide au moment de l'envoi.",
    img: "/src/assets/images/Dynamiser un espace commentaire 1.jpeg",
    technologies: "HTML, CSS et JavaScript",
    githubLink:
      "https://github.com/OceaneTaquin/Devoir-Dynamiser-un-espace-Commentaire",
    createdAt: "9 avril 2024",
    additionalPhotos: [
      "/src/assets/images/Dynamiser un espace commentaire 2.jpeg",
    ],
  },
];
</script>

<style scoped>
#MyProjects h2 {
  font-size: xx-large;
  text-align: center;
  margin-top: 400px;
  margin-bottom: 60px;
  font-family: "Playfair Display", serif;
}

.project {
  max-width: 100%;
  max-height: 200px;
  width: 50px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  justify-content: center;
}
</style>
