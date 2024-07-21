import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import HabilidadesView from '../views/HabilidadesView.vue';
import ProjetosView from '../views/ProjetosView.vue';
import ContatoView from '../views/ContatoView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/HabilidadesView.vue',
    name: 'Habilidades',
    component: HabilidadesView,
  },
  {
    path: '/ProjetosView',
    name: 'Projetos',
    component: ProjetosView,
  },
  {
    path: '/ContatoView',
    name: 'Contato',
    component: ContatoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
