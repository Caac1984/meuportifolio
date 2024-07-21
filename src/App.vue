<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.navbar {
  border-radius: 10px;
}

.navbar-brand {
  width: 110px; /* Largura da logo */
  height: 40px; /* Altura automática para manter a proporção */
  margin-right: 50px; /* Espaçamento para esquerda */
  margin-left: 20px; /* Espaçamento para direita */
}

body {
  background: rgb(14,0,255);
  background: linear-gradient(90deg, rgba(0,164,255,1) 0%, rgba(14,0,255,1) 50%, rgba(0,164,255,1) 100%);
  height: 100%;
  width: 100%;
  
}
</style>
