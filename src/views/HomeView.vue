<!-- HomeView.vue -->
<template>
  <barra-navegacao></barra-navegacao>
  <div class="row g-0 justify-content-center">
    <div class="col-lg-9 col-md-6 col-sm-6">
      <div class="card">
        <p class="fs-2">Seja bem vindo!</p>
      </div>
    </div>
    <footer-barra></footer-barra>
  </div>
</template>

<script>
import BarraNavegacao from "@/components/BarraNavegacao.vue";
import FooterBarra from "@/components/FooterBarra.vue"; // Atualize a importação aqui

export default {
  name: 'HomeView',
  components: {
    'barra-navegacao': BarraNavegacao,
    'footer-barra': FooterBarra,
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
