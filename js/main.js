/**
 * Comportamento do site — menu mobile, header no scroll, animações
 * discretas e preenchimento das seções a partir de js/data.js.
 */

(() => {
  var STAR_SVG =
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5l2.59 5.24 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.66.99-5.77L1.62 7.58l5.79-.84L10 1.5z"/></svg>';

  document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initMobileNav();
    initReveal();
    initWhatsAppLinks();
    initDirections();
    initRatingStars();
    initTratamentos();
    initProfissionais();
    initDiferenciais();
    initFooterYear();
  });

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileNav() {
    var toggle = document.getElementById("menu-toggle");
    var closeBtn = document.getElementById("mobile-nav-close");
    var nav = document.getElementById("mobile-nav");
    if (!toggle || !nav) return;

    function open() {
      nav.classList.add("is-open");
      nav.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var firstLink = nav.querySelector("a");
      if (firstLink) firstLink.focus();
    }

    function close() {
      nav.classList.remove("is-open");
      nav.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggle.focus();
    }

    toggle.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) close();
    });
  }

  function initReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    targets.forEach((el) => {
      observer.observe(el);
    });
  }

  function initWhatsAppLinks() {
    if (typeof CLINICA_DATA === "undefined") return;
    var mensagem = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta no Paraíso do Sorriso.",
    );
    var link = CLINICA_DATA.negocio.whatsappLink + "?text=" + mensagem;

    [
      "cta-header",
      "cta-hero",
      "cta-mobile-nav",
      "cta-tratamentos",
      "cta-final",
      "footer-whatsapp",
      "local-whatsapp",
      "mobile-bar-whatsapp",
      "mobile-bar-agendar",
    ].forEach((id) => {
      var el = document.getElementById(id);
      if (el) el.href = link;
    });
  }

  function initDirections() {
    if (typeof CLINICA_DATA === "undefined") return;
    var e = CLINICA_DATA.negocio.endereco;
    var destino = encodeURIComponent(e.linha1 + " - " + e.linha2 + ", " + e.linha3 + ", " + e.cep);
    var url = "https://www.google.com/maps/dir/?api=1&destination=" + destino;
    var mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + destino;

    var como = document.getElementById("cta-como-chegar");
    if (como) como.href = url;
    var maps = document.getElementById("footer-maps");
    if (maps) maps.href = mapsUrl;
  }

  function buildStars(container, nota) {
    if (!container) return;
    var percent = Math.max(0, Math.min(1, nota / 5)) * 100;
    var empty = document.createElement("span");
    empty.style.position = "relative";
    empty.style.display = "inline-flex";
    empty.style.color = "rgba(22, 48, 90, 0.2)";
    empty.innerHTML = STAR_SVG.repeat(5);

    var filled = document.createElement("span");
    filled.style.position = "absolute";
    filled.style.inset = "0";
    filled.style.overflow = "hidden";
    filled.style.width = percent + "%";
    filled.style.display = "inline-flex";
    filled.style.color = "var(--star-gold)";
    filled.innerHTML = STAR_SVG.repeat(5);

    empty.appendChild(filled);
    container.innerHTML = "";
    container.appendChild(empty);
  }

  function initRatingStars() {
    if (typeof CLINICA_DATA === "undefined") return;
    var nota = CLINICA_DATA.avaliacao.nota;
    ["hero-rating", "avaliacoes-stars"].forEach((id) => {
      var el = document.getElementById(id);
      if (!el) return;
      var target = el.classList.contains("rating__stars") ? el : el.querySelector(".rating__stars");
      buildStars(target, nota);
    });
  }

  function initTratamentos() {
    if (typeof CLINICA_DATA === "undefined") return;
    var grid = document.getElementById("tratamentos-grid");
    if (!grid) return;

    grid.innerHTML = CLINICA_DATA.tratamentos
      .map(
        (t) =>
          '<div class="tratamento-item">' +
          '<p class="tratamento-item__nome">' +
          t.nome +
          "</p>" +
          '<p class="tratamento-item__desc">' +
          t.descricao +
          "</p>" +
          "</div>",
      )
      .join("");
  }

  function initProfissionais() {
    if (typeof CLINICA_DATA === "undefined") return;
    var list = document.getElementById("profissionais-list");
    if (!list) return;

    list.innerHTML = CLINICA_DATA.profissionais
      .map((p) => {
        var foto = p.foto
          ? '<div class="photo-real" style="aspect-ratio:4/5;"><img src="' +
            p.foto +
            '" alt="Foto de ' +
            p.nome +
            '" loading="lazy" decoding="async" onload="this.classList.add(\'is-loaded\'); this.parentElement.classList.add(\'is-loaded\');" /></div>'
          : '<div class="photo-slot" style="aspect-ratio:4/5;"><p class="photo-slot__label">Foto de ' +
            p.nome +
            "</p></div>";
        return (
          '<div class="profissional-feature reveal">' +
          '<div class="profissional-feature__photo">' +
          foto +
          "</div>" +
          "<div>" +
          '<h3 class="profissional-feature__nome">' +
          p.nome +
          "</h3>" +
          '<p class="profissional-feature__especialidade">' +
          p.especialidade +
          "</p>" +
          '<p class="profissional-feature__texto">' +
          p.apresentacao +
          "</p>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    initReveal();
  }

  function initDiferenciais() {
    if (typeof CLINICA_DATA === "undefined") return;
    var list = document.getElementById("diferenciais-list");
    if (!list) return;

    list.innerHTML = CLINICA_DATA.diferenciais
      .map(
        (d) =>
          '<div class="diferencial-item">' +
          '<p class="diferencial-item__titulo">' +
          d.titulo +
          "</p>" +
          '<p class="diferencial-item__texto">' +
          d.texto +
          "</p>" +
          "</div>",
      )
      .join("");
  }

  function initFooterYear() {
    var el = document.getElementById("ano-atual");
    if (el) el.textContent = new Date().getFullYear();
  }
})();
