<!-- src/App.vue -->
<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Projeto Node + Vue',
      welcomeMessage: 'Bem-vindo ao Meu Site com Vue.js!'
    };
  }
};
</script>
