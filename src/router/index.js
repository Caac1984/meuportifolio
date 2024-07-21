import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Habilidades from '../views/HabilidadesView.vue';
import Projetos from '../views/ProjetosView.vue';
import Contato from '../views/ContatoView.vue';

const routes= [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Habilidades',
    name: 'Habilidades',
    component: Habilidades,
  },
  {
    path: '/Projetos',
    name: 'Projetos',
    component: Projetos,
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
