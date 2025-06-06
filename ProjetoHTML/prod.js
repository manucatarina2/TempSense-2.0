// Configuração do Tailwind
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'ocean-blue': '#0077b6',
          'light-blue': '#F5DEB3',
          'navy-blue': 'F5DEB3',
          'sand-beige': '#f5e1b9',
          'pure-white': '#ffffff'
        },
        fontFamily: {
          'sans': ['Montserrat', 'sans-serif'],
        },
      }
    }
  };

  // Função para alternar o menu mobile
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });

  // Função para abrir o modal da imagem
  function abrirModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("imgModal");
    modal.classList.remove("hidden");
    modalImg.src = img.src;
  }

  // Função para fechar o modal da imagem
  function fecharModal() {
    document.getElementById("modal").classList.add("hidden");
  }
