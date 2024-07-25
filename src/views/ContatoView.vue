<template>
  <barra-navegacao></barra-navegacao>
  <div class="row g-0 justify-content-center">
    <div class="col-lg-9 col-md-6 col-sm-6">
      <div class="card">
        <p class="fs-2">Contato</p>
      </div>
    </div>
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