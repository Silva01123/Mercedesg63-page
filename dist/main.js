"use strict";
// 2️⃣ Objeto com informações de cada botão
const detalhes = {
    motor: "Motor V8 Biturbo 4.0L com 577 hp e torque impressionante.",
    teto: "Teto solar panorâmico com acionamento elétrico.",
    rodas: "Rodas aro 22 polegadas com design exclusivo AMG.",
    escapamento: "Sistema de escapamento esportivo com som inconfundível."
};
// Função para atualizar o conteúdo do destaque
function atualizarDestaque(titulo, texto) {
    const destaque = document.querySelector(".highlight-box");
    if (destaque) {
        destaque.innerHTML = `
      <h3>${titulo}</h3>
      <p>${texto}</p>
    `;
        destaque.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
// 3️⃣ Função que exibe a informação do topo (botões superiores)
function mostrarDetalhe(tipo) {
    const titulo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    const texto = detalhes[tipo];
    atualizarDestaque(titulo, texto);
}
// 4️⃣ Adicionando eventos aos botões superiores
document.querySelectorAll(".car-part-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        var _a;
        const texto = (_a = btn.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        switch (texto) {
            case "motor":
                mostrarDetalhe("motor");
                break;
            case "teto solar":
                mostrarDetalhe("teto");
                break;
            case "rodas":
                mostrarDetalhe("rodas");
                break;
            case "escapamento":
                mostrarDetalhe("escapamento");
                break;
        }
    });
});
// 6️⃣ Informações dos botões laterais
const infoLateral = {
    performance: "Acelera de 0 a 100 km/h em apenas 4,5 segundos.",
    design: "Design robusto e elegante, com linhas marcantes.",
    seguranca: "Tecnologia de segurança avançada com múltiplos airbags.",
    luxo: "Interior luxuoso com acabamentos em couro e madeira.",
    multimidia: "Sistema de infotainment MBUX com tela sensível ao toque."
};
// 7️⃣ Função para exibir as infos laterais
function mostrarLateral(tipo) {
    const titulo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    const texto = infoLateral[tipo];
    atualizarDestaque(titulo, texto);
}
// 8️⃣ Eventos nos botões laterais
document.querySelectorAll(".side-menu button").forEach((btn) => {
    btn.addEventListener("click", () => {
        var _a;
        const texto = (_a = btn.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        switch (texto) {
            case "performance":
                mostrarLateral("performance");
                break;
            case "design":
                mostrarLateral("design");
                break;
            case "seguranca":
                mostrarLateral("seguranca");
                break;
            case "luxo":
                mostrarLateral("luxo");
                break;
            case "multimidia":
                mostrarLateral("multimidia");
                break;
        }
    });
});
