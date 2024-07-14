<template>
    <div class="container-fluid mb-3 p-3 bg">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/">
                    <img src="@/assets/logo.png" alt="Logo" class="navbar-brand" />
                </a>
            </nav>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Cadastro
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><router-link class="dropdown-item" to="/cadProfessor">Professor</router-link></li>
                                <li><router-link class="dropdown-item" to="/cadVisitante">Visitante</router-link></li>
                                <li><router-link class="dropdown-item" to="/cadAluno">Aluno</router-link></li>
                                <li><router-link class="dropdown-item" to="/cadCurso">Curso</router-link></li>
                                <li><router-link class="dropdown-item" to="/CadProjeto">Projeto</router-link></li>
                                <li><router-link class="dropdown-item" to="/cadQuesito">Quesito</router-link></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Cadastrados
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <li><router-link class="dropdown-item" to="/tabela">Cadastrados</router-link></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Avaliação
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <li><router-link class="dropdown-item" to="/avaliacao">Avaliação</router-link></li>
                                <li><router-link class="dropdown-item" to="/Finalistas">Finalistas</router-link></li>
                                <li><router-link class="dropdown-item" to="/resFinal">Resultado Final</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<style scoped>
.navbar {
    border-radius: 10px;
    font-size: 18px;
    /* Define o tamanho do texto para 18 pixels */
}

.navbar-brand {
    width: 110px;
    /* Largura da logo */
    height: 40px;
    /* Altura automática para manter a proporção */
    margin-right: 50px;
    /* Espaçamento para esquerda */
    margin-left: 20px;
    /* Espaçamento para direita */
}

/* Estilos para o menu suspenso */
.dropdown-menu {
    background-color: #0031f6 !important;
    box-shadow: 0px 8px 16px rgba(1, 1, 1, 1) !important;
    text-wrap: green;

}

.dropdown-item {
    color: #dee8da !important;
    /* Cor do texto dos itens do menu suspenso */
}

.dropdown-item:hover {
    background-color: #0101015f !important;
    color: rgb(197, 178, 7) !important;
}

body {
    background: rgb(14, 0, 255);
    background: linear-gradient(90deg, rgba(0, 164, 255, 1) 0%, rgba(14, 0, 255, 1) 50%, rgba(0, 164, 255, 1) 100%);
    height: 100%;
    width: 100%;

}
</style>