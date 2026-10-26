const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // Se estiver a rodar localmente (npm run serve), usa '/'
  // Se for para build de produção (GitHub Pages), usa '/meuportifolio/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/meuportifolio/'
    : '/'
})