<template>
  <barra-navegacao></barra-navegacao>
    <div class="hello">
      <!-- Conteúdo do template -->
       <h1>ProjetosView</h1>
    </div>
  </template>
  
  <script>

import BarraNavegacao from "@/components/BarraNavegacao.vue";

  export default {
    name: 'ProjetosView',
    components: {
    BarraNavegacao
  }
  }
  </script>
  
  <style scoped>
  /* Estilos CSS para este componente */
  </style>