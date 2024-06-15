<template>
  <div class="error-page">
    <h1>404 - Page introuvable</h1>
    <p>La page que vous cherchez n'existe pas.</p>
    <div class="error-image"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Playfair Display", serif;
}

.error-image {
  width: 200em;
  height: 200px;
  background: url("../assets/images/error 404.png") center center/cover no-repeat;
}
</style>
