<template>
  <div id="app" class="portfolio-container">
    <!-- Header / Navbar -->
   <header class="navbar">
  <div class="logo-container">
    <img src="@/img/logo.png" alt="Logo Carlos" class="site-logo" />
    <span>Carlos Alexandre</span>
  </div>
  <nav class="nav-links">
    <a href="#sobre">Sobre</a>
    <a href="#competencias">Competências</a>
    <a href="#projetos">Projetos</a>
    <a href="#experiencia">Experiência</a>
    <a href="#contato" class="btn-primary-sm">Contato</a>
  </nav>
</header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <span class="badge">Disponível para Oportunidades</span>
        <h1>Carlos Alexandre</h1>
        <h2>Desenvolvedor Front-end / Back-end Júnior | Analista de Sistemas Júnior</h2>
        <p>
          Formado em Bacharel em Sistemas de Informação (UniSales). Aplicações web full-stack, 
          APIs RESTful, arquitetura serverless, engenharia de dados e soluções de visão computacional.
        </p>
        <div class="hero-buttons">
          <a href="#projetos" class="btn-primary">Ver Projetos</a>
          <a href="#contato" class="btn-outline">Falar Comigo</a>
        </div>
      </div>
    </section>

    <!-- Sobre Mim -->
    <section id="sobre" class="section">
      <h2 class="section-title">Sobre Mim</h2>
      <div class="card-about">
        <p>
          Graduado em Sistemas de Informação, com projetos práticos em desenvolvimento web,
          front-end e back-end, APIs, bancos de dados, integração de sistemas, Business Intelligence (BI) e engenharia de dados. Portfólio
          com projetos em Vue.js, Java/Spring Boot, Python, microserviços, ETL/OLAP, dashboards e visão computacional. Experiência
          profissional anterior em rotinas administrativas e logísticas, organização de informações, controle de registros, emissão de
          documentos e acompanhamento de processos. </p>
        <p> Busca oportunidade como Desenvolvedor Júnior ou Analista de Sistemas Júnior
          para aplicar conhecimentos técnicos, aprender com a equipe e contribuir para a entrega e melhoria de soluções.</p>
      </div>
    </section>

    <!-- Competências Técnicas -->
    <section id="competencias" class="section">
      <h2 class="section-title">Competências Técnicas</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-icon">💻</div>
          <h3>Front-end</h3>
          <p>Vue.js, HTML5, CSS3, JavaScript (ES6+), Responsive Web Design, Chart.js</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">⚙️</div>
          <h3>Back-end & APIs</h3>
          <p>Java / Spring Boot, Python, APIs RESTful, Microserviços, Maven</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">📊</div>
          <h3>Dados & BI</h3>
          <p>PostgreSQL, SQL, Modelagem de Dados, ETL, OLAP, Power BI, Apache Airflow</p>
        </div>
        <div class="skill-card">
          <div class="skill-icon">🐳</div>
          <h3>Infraestrutura & IA</h3>
          <p>Docker, Git/GitHub, Visão Computacional (YOLO), IA/Image Processing</p>
        </div>
      </div>
    </section>

    <!-- Projetos em Destaque -->
    <section id="projetos" class="section">
      <h2 class="section-title">Projetos em Destaque</h2>
      <div class="projects-grid">
        
        <!-- Projeto 1: Portal Serverless -->
        <div class="project-card featured">
          <div class="project-tag">Destaque Full-Stack / Serverless</div>
          <h3>Portal Web Serverless de Gestão</h3>
          <p>
            Plataforma para gestão de logística reversa (devoluções/garantias) e controle de compras em massa. 
            Integração com Google Apps Script, spinners de carregamento, dashboard analítico (Chart.js) e exportação para Excel e PDF.
          </p>
          <div class="tech-stack">
            <span>HTML5/CSS3</span><span>JavaScript ES6+</span><span>Google Apps Script</span><span>Chart.js</span>
          </div>
          <div class="project-links">
            <a href="https://caac1984.github.io/meuportifolio/" target="_blank" class="btn-card">Acessar App</a>
          </div>
        </div>

        <!-- Projeto 2: API Spring Boot -->
        <div class="project-card">
          <h3>API RESTful Spring Boot</h3>
          <p>
            Estrutura backend desenvolvida em Java com Spring Boot, Maven e suporte a conteinerização via Dockerfile para implantação simplificada.
          </p>
          <div class="tech-stack">
            <span>Java</span><span>Spring Boot</span><span>Maven</span><span>Docker</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/Caac1984" target="_blank" class="btn-card-outline">Repositório</a>
          </div>
        </div>

        <!-- Projeto 3: Rota Segura (YOLO + Kotlin) -->
        <div class="project-card">
          <h3>Rota Segura - Monitoramento de Sonolência</h3>
          <p>
            Projeto interdisciplinar Android em Kotlin utilizando modelos YOLO para detecção e identificação em tempo real de sinais faciais de sonolência ao volante.
          </p>
          <div class="tech-stack">
            <span>Kotlin</span><span>YOLO</span><span>Visão Computacional</span><span>Android</span>
          </div>
        </div>

        <!-- Projeto 4: Data Warehouse & Airflow -->
        <div class="project-card">
          <h3>Data Warehouse, ETL & Apache Airflow</h3>
          <p>
            Engenharia de dados completa com infraestrutura baseada em Docker, cargas incrementais via Python, PostgreSQL e orquestração automatizada de DAGs com Airflow.
          </p>
          <div class="tech-stack">
            <span>Python</span><span>SQL</span><span>PostgreSQL</span><span>Docker</span><span>Airflow</span>
          </div>
        </div>

        <!-- Projeto 5: BI & Analytics -->
        <div class="project-card">
          <h3>Dashboard Analítico BI</h3>
          <p>
            Projeto de inteligência de negócios com modelagem de dados CSV, construção de métricas KPI e relatórios visuais no Power BI (.pbix).
          </p>
          <div class="tech-stack">
            <span>Power BI</span><span>ETL</span><span>DAX</span><span>Análise de Dados</span>
          </div>
        </div>

        <!-- Projeto 6: Visão Computacional (EPI) -->
        <div class="project-card">
          <h3>Detecção de EPI com YOLO</h3>
          <p>
            Aplicação de IA para identificação automatizada de Equipamentos de Proteção Individual em ambiente de trabalho através de análise de imagem.
          </p>
          <div class="tech-stack">
            <span>Python</span><span>YOLO</span><span>OpenCV</span><span>Deep Learning</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Experiência Profissional -->
    <section id="experiencia" class="section">
      <h2 class="section-title">Experiência Profissional</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-header">
            <h3>Auxiliar de Logística</h3>
          </div>
          <div>
            <span class="timeline-company">Kamell Comércio Global</span>
          </div>
            <span class="timeline-date">02/2023 - Atual</span>
          <ul>
            <li>Atendimento ao cliente, suporte em processos operacionais e acompanhamento de entregas.</li>
            <li>Controle de estoque, expedição, emissão de notas fiscais e documentação logística.</li>
          </ul>
        </div>

        <div class="timeline-item">
          <div class="timeline-header">
            <h3>Encarregado de Serviços Gerais / Auxiliar de Escritório</h3>
          </div>
          <div>
            <span class="timeline-company">Vila Service & J. Batista de Souza</span>
          </div>
            <span class="timeline-date">2013 - 2020</span>
          <ul>
            <li>Elaboração de orçamentos, planilhas administrativas, gestão de suprimentos e suporte a compras.</li>
          </ul>
        </div>
      </div>
    </section>

   <!-- Contato -->
    <section id="contato" class="section">
<div class="contact-cards">
  <a href="mailto:christoag@gmail.com" class="contact-card">
    <img src="@/img/e-mail.png" alt="E-mail" class="contact-icon" />
    <span>christoag@gmail.com</span>
  </a>
  <a href="https://github.com/Caac1984" target="_blank" class="contact-card">
    <img src="@/img/github.png" alt="GitHub" class="contact-icon" />
    <span>GitHub</span>
  </a>
  <a href="https://www.instagram.com/" target="_blank" class="contact-card">
    <img src="@/img/instagram.png" alt="Instagram" class="contact-icon" />
    <span>Instagram</span>
  </a>
  <a href="https://www.linkedin.com/in/carlos-alexandre-8025661ba/" target="_blank" class="contact-card">
    <img src="@/img/linkedin.png" alt="LinkedIn" class="contact-icon" />
    <span>LinkedIn</span>
  </a>
</div>
</section>

    <footer class="footer">
      <p>© {{ currentYear }} Carlos Alexandre. Construído com Vue.js.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
/* CSS Moderno / Dark Mode Elegante */
:root {
  --bg-primary: #0f172a;
  --bg-card: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #f8fafc;
  --accent: #38bdf8;
  --accent-hover: #0284c7;
  --border: #334155;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  line-height: 1.6;
}

.portfolio-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background-color: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(8px);
  z-index: 100;
}

.site-logo {
  height: 35px;
  width: auto;
  vertical-align: middle;
  margin-right: 10px;
}

.contact-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;
}

.logo-accent {
  color: var(--accent);
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.2s;
  font-size: 0.95rem;
}

.nav-links a:hover {
  color: var(--accent);
}

/* Hero */
.hero-section {
  padding: 80px 0 60px 0;
  text-align: center;
}

.badge {
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.hero-section h1 {
  font-size: 2.8rem;
  margin: 20px 0 10px 0;
  font-weight: 800;
}

.hero-section h2 {
  font-size: 1.25rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 20px;
}

.hero-section p {
  max-width: 700px;
  margin: 0 auto 30px auto;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn-primary, .btn-primary-sm {
  background-color: var(--accent);
  color: #0f172a;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}

.btn-primary:hover, .btn-primary-sm:hover {
  background-color: var(--accent-hover);
}

.btn-outline {
  border: 1px solid var(--border);
  color: var(--text-main);
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  transition: border 0.2s;
}

.btn-outline:hover {
  border-color: var(--accent);
}

/* Sections */
.section {
  padding: 60px 0;
  border-bottom: 1px solid var(--border);
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 30px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background-color: var(--accent);
  margin-top: 8px;
}

.card-about {
  background-color: var(--bg-card);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.card-about p {
  margin-bottom: 15px;
  color: var(--text-muted);
}

.card-about p:last-child {
  margin-bottom: 0;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.skill-card {
  background-color: var(--bg-card);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--border);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.skill-card h3 {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.skill-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: var(--bg-card);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card.featured {
  border-color: var(--accent);
}

.project-tag {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.project-card h3 {
  margin-bottom: 10px;
}

.project-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-stack span {
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 4px;
  color: var(--accent);
}

.btn-card, .btn-card-outline {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 600;
}

.btn-card {
  background-color: var(--accent);
  color: #0f172a;
}

.btn-card-outline {
  border: 1px solid var(--border);
  color: var(--text-main);
}

/* Timeline */
.timeline-item {
  background-color: var(--bg-card);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--border);
  margin-bottom: 15px;
}

.timeline-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.timeline-company {
  color: var(--accent);
  font-weight: 600;
}

.timeline-date {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.timeline-item ul {
  padding-left: 20px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Contact */
.contact-section {
  text-align: center;
}

.contact-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.contact-card {
  background-color: var(--bg-card);
  padding: 15px 25px;
  border-radius: 8px;
  border: 1px solid var(--border);
  color: var(--text-main);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: border 0.2s;
}

.contact-card:hover {
  border-color: var(--accent);
}

.footer {
  padding: 30px 0;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  .navbar {
    flex-direction: column;
    gap: 15px;
  }
  .nav-links a {
    margin: 0 10px;
  }
}
</style>