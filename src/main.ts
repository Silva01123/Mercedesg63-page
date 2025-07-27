// 1️⃣ Interface descrevendo os tipos possíveis
interface InfoDetalhe {
  motor: string;
  teto: string;
  rodas: string;
  escapamento: string;
}

// 2️⃣ Objeto com informações de cada botão
const detalhes: InfoDetalhe = {
  motor: "Motor V8 Biturbo 4.0L com 577 hp e torque impressionante.",
  teto: "Teto solar panorâmico com acionamento elétrico.",
  rodas: "Rodas aro 22 polegadas com design exclusivo AMG.",
  escapamento: "Sistema de escapamento esportivo com som inconfundível."
};

// Função para atualizar o conteúdo do destaque
function atualizarDestaque(titulo: string, texto: string): void {
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
function mostrarDetalhe(tipo: keyof InfoDetalhe): void {
  const titulo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
  const texto = detalhes[tipo];
  atualizarDestaque(titulo, texto);
}

// 4️⃣ Adicionando eventos aos botões superiores
document.querySelectorAll(".car-part-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const texto = btn.textContent?.toLowerCase();
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

// --- Parte 2: botões laterais ---

// 5️⃣ Interface dos botões laterais
interface InfoLateral {
  performance: string;
  design: string;
  seguranca: string;
  luxo: string;
  multimidia: string;
}

// 6️⃣ Informações dos botões laterais
const infoLateral: InfoLateral = {
  performance: "Acelera de 0 a 100 km/h em apenas 4,5 segundos.",
  design: "Design robusto e elegante, com linhas marcantes.",
  seguranca: "Tecnologia de segurança avançada com múltiplos airbags.",
  luxo: "Interior luxuoso com acabamentos em couro e madeira.",
  multimidia: "Sistema de infotainment MBUX com tela sensível ao toque."
};

// 7️⃣ Função para exibir as infos laterais
function mostrarLateral(tipo: keyof InfoLateral): void {
  const titulo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
  const texto = infoLateral[tipo];
  atualizarDestaque(titulo, texto);
}

// 8️⃣ Eventos nos botões laterais
document.querySelectorAll(".side-menu button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const texto = btn.textContent
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
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
