// ============================================================
// Lima Store — Interações da página
// ============================================================

// Menu mobile: abre e fecha ao tocar no botão de menu
const menuButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.getElementById("menu-mobile");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Fecha o menu depois de escolher um link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Desenha os ícones (WhatsApp, estrelas, mapa etc.)
if (window.lucide) {
  lucide.createIcons();
}
