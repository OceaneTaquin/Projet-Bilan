<template>
  <footer>
    <a href="https://github.com/OceaneTaquin" target="_blank"><img src="../assets/images/github.png" alt="logo-github"/></a>
    <a href="https://x.com/Nashiro_Las" target="_blank"><img src="../assets/images/twitter-alt-circle.png" alt="twitter"/></a>
    <a href="https://web.whatsapp.com/" target="_blank"><img src="../assets/images/whatsapp.png" alt="WhatsApp"/></a>
    <p>&copy; 2024 - Mon Projet-Bilan</p>
    <p>
      Dernière mise à jour : <time datetime="2024-06-07"> 07 juin 2024</time>
    </p>
  </footer>
</template>

<style scoped>
footer {
  background: rgba(0, 0, 0, 0);
  color: black;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0 1rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-family: "Playfair Display", serif;
}

footer a {
  margin: 0 10px;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: 35%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

footer a img {
  width: 36px;
}

footer a:hover {
  transform: scale(1.2);
  border-color: #ff6f00;
}

footer p {
  color: aliceblue;
}
</style>
