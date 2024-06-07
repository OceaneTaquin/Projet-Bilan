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
                    <li><RouterLink :to="{name: 'Error404'}">Projets</RouterLink></li>
                    <li><RouterLink :to="{name: 'Error404'}">Contact</RouterLink></li>
                </ul>
            </div>
        </nav>
    </header>
    <div class="logo-container">
        <img src=""/>
    </div>
</template>

<style scoped>
.return-top-photo {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 70px;
    height: 70px;
    border-radius: 25%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    cursor: pointer;
    opacity: 0;
}

.logo-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 30px;
}

.logo {
    width: 150px;
    height: auto;
}

header nav ul li:hover a {
    text-decoration: underline;
    font-weight: bold;
}

header {
    position: relative;
    background: rgba(0, 0, 0, 0);
    color: black;
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin: 1rem 1rem 0;
    border-radius: 0.5rem;
    text-align: center;
    font-family: "Playfair Display", serif;
}

header nav ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    max-width: 80%;
    margin: 0 auto;
    list-style: none;
}

header nav ul li {
    flex: 1;
    text-align: center;
    font-weight: bold;
    transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
}

header nav ul li:hover {
    transform: scale(1.1);
    color: #ff6200;
}

header nav ul li:not(:last-child) {
    margin-right: 1rem;
}
</style>