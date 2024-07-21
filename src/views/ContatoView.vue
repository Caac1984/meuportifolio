<template>
  <barra-navegacao></barra-navegacao>
    <div class="hello">
      <!-- Conteúdo do template -->
       <h1>Contato</h1>
    </div>
  </template>
  
  <script>
  import BarraNavegacao from "@/components/BarraNavegacao.vue";
  export default {
    name: 'ContatosView',
    components: {
    BarraNavegacao
  }
  }
  </script>
  
  <style scoped>
  /* Estilos CSS para este componente */
  </style>