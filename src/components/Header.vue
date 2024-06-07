<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

//Retour Haut de page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //Pour le scroll
        });
    };

    //Déplacement photo
    onMounted(() => {
        const header = document.querySelector("header");
        const photo = document.querySelector(".return-top-photo");

        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const headerHeight = header.offsetHeight;

            photo.computedStyleMap.transform = "translateY(${scrollPos}px)";

            //Afficher/maquer l'image en fonction de sa position
            if (scrollPos > headerHeight) {
                photo.style.opacity = "1";
                } else {
                    photo.style.opacity = "0";
        }
    };

    window.addEventListener("scroll", handleScroll);

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

});
</script>

<template>
    <header>
        <img @click="scrollToTop" src="../assets/images/fleche-vers-le-haut.png" alt="Image Retour vers le Haut" class="return-top-photo"/>

        <nav>
            <div class="container">
                <ul>
                    <li><RouterLink to="/">Accueil</RouterLink></li>
                    <li><RouterLink :to="{name: "Error404"}">Projets</RouterLink></li>
                    <li><RouterLink :to="{name: "Error404"}">Contact</RouterLink></li>
                </ul>
            </div>
        </nav>
    </header>
</template>