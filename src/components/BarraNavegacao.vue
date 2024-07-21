<template>
    <div class="container-fluid mb-3 p-3 bg">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navmenu">
        <a href="/">
          <img src="@/assets/logo.png" ref="../src/views/homeview" alt="Logo" class="navbar-brand" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Início</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Habilidades" class="nav-link">Habilidades</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Projetos" class="nav-link">Projetos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Contato" class="nav-link">Contato</router-link>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  
  export default {
    methods: {
      
    },
    
  };
  </script>
  
  <style scoped>
  
  #navmenu {
   text-align: center;
  }
  
  button {
    margin: 0 10px;
  }
  
  .navbar {
    border-radius: 10px;
    font-size: 18px;
  }
  
  .navbar-brand {
    width: 40px;
    height: 40px;
    margin-right: 50px;
    margin-left: 40px;
  }
  
  .nav-item {
    margin-right: 10px;
    /* Espaçamento entre os itens do menu */
  }

  #navbar:hover {
    color: rgb(224, 14, 14);
  }
  
  </style>