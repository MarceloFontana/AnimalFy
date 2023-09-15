window.alert("Olá bem vindo ao trabalho.")
if (window.location.pathname.includes("index.html")) {
    // Exibe uma janela de confirmação ao acessar a página
    const resposta = window.confirm("Deseja realmente visitar o ininio do trabalho?");

    // Se o usuário cancelar a ação, volta para a página anterior
    if (!resposta) {
        window.history.back();
    }
}