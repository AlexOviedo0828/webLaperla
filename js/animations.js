"use strict";

/* ==========================================================
   FÁBRICA DE EMPANADAS LA PERLA
   ANIMATIONS.JS — VERSIÓN 4.0

   Animaciones visuales
   Efectos de interacción
   Animaciones del catálogo
   Efectos del carrito
   Header dinámico
   Mobile First

   IMPORTANTE:
   Este archivo NO administra productos,
   categorías, pedidos ni carrito.

   Solo controla efectos visuales.

   Compatible con:
   app.js
   cart.js
   menu.js
========================================================== */


/* ==========================================================
   01. CONFIGURACIÓN
========================================================== */

const ANIMATION_CONFIG = {

    REVEAL_THRESHOLD: 0.12,

    REVEAL_ROOT_MARGIN: "0px 0px -40px 0px",

    REVEAL_DELAY: 70,

    HEADER_SCROLL: 35,

    CART_BOUNCE_DURATION: 550,

    BUTTON_FEEDBACK_DURATION: 350,

    PRODUCT_ANIMATION_DURATION: 450

};


/* ==========================================================
   02. DETECTAR MOVIMIENTO REDUCIDO
========================================================== */

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);


function animationsEnabled() {

    return !prefersReducedMotion.matches;

}


/* ==========================================================
   03. AGREGAR ESTILOS DE ANIMACIÓN
========================================================== */

function injectAnimationStyles() {

    if (document.getElementById("lp-animation-styles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "lp-animation-styles";

    style.textContent = `

        /* ==========================================
           ANIMACIONES GENERALES
        ========================================== */

        .lp-reveal {

            opacity: 0;

            transform: translateY(24px);

            transition:
                opacity 0.65s ease,
                transform 0.65s ease;

            will-change: opacity, transform;

        }


        .lp-reveal.lp-visible {

            opacity: 1;

            transform: translateY(0);

        }


        /* ==========================================
           TARJETAS DE PRODUCTOS
        ========================================== */

        .product-card {

            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;

        }


        @media (hover: hover) {

            .product-card:hover {

                transform: translateY(-5px);

                box-shadow:
                    0 14px 35px rgba(0, 0, 0, 0.12);

            }

        }


        /* ==========================================
           IMÁGENES
        ========================================== */

        .product-card .product-image img {

            transition: transform 0.5s ease;

        }


        @media (hover: hover) {

            .product-card:hover .product-image img {

                transform: scale(1.045);

            }

        }


        /* ==========================================
           BOTONES AGREGAR
        ========================================== */

        .product-add-btn {

            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease;

        }


        .product-add-btn:active {

            transform: scale(0.95);

        }


        .product-add-btn.added {

            animation: lpAdded 0.45s ease;

        }


        @keyframes lpAdded {

            0% {
                transform: scale(1);
            }

            45% {
                transform: scale(1.1);
            }

            100% {
                transform: scale(1);
            }

        }


        /* ==========================================
           CARRITO
        ========================================== */

        .cart-bounce {

            animation: lpCartBounce 0.55s ease;

        }


        @keyframes lpCartBounce {

            0% {
                transform: scale(1);
            }

            30% {
                transform: scale(1.18);
            }

            60% {
                transform: scale(0.94);
            }

            100% {
                transform: scale(1);
            }

        }


        /* ==========================================
           CONTADORES
        ========================================== */

        .lp-badge-pop {

            animation: lpBadgePop 0.35s ease;

        }


        @keyframes lpBadgePop {

            0% {
                transform: scale(1);
            }

            45% {
                transform: scale(1.35);
            }

            100% {
                transform: scale(1);
            }

        }


        /* ==========================================
           BOTONES GENERALES
        ========================================== */

        .lp-button-feedback {

            animation: lpButtonFeedback 0.35s ease;

        }


        @keyframes lpButtonFeedback {

            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(0.94);
            }

            100% {
                transform: scale(1);
            }

        }


        /* ==========================================
           CATEGORÍAS
        ========================================== */

        .category-card {

            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;

        }


        @media (hover: hover) {

            .category-card:hover {

                transform: translateY(-5px);

                box-shadow:
                    0 15px 35px rgba(0, 0, 0, 0.16);

            }

        }


        .category-card:active {

            transform: scale(0.98);

        }


        /* ==========================================
           FILTROS
        ========================================== */

        .filter-btn {

            transition:
                transform 0.2s ease,
                background-color 0.2s ease,
                color 0.2s ease;

        }


        .filter-btn:active {

            transform: scale(0.94);

        }


        /* ==========================================
           ACTUALIZACIÓN DEL CATÁLOGO
        ========================================== */

        .menu-updated {

            animation: lpMenuFade 0.4s ease;

        }


        @keyframes lpMenuFade {

            from {
                opacity: 0.55;
                transform: translateY(8px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }

        }


        /* ==========================================
           HEADER DINÁMICO
        ========================================== */

        #mainHeader {

            transition:
                box-shadow 0.3s ease,
                background-color 0.3s ease;

        }


        #mainHeader.lp-header-scrolled {

            box-shadow:
                0 6px 24px rgba(0, 0, 0, 0.18);

        }


        /* ==========================================
           ACCESIBILIDAD
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

            .lp-reveal {

                opacity: 1 !important;

                transform: none !important;

                transition: none !important;

            }

            .product-card,
            .category-card,
            .product-add-btn,
            .filter-btn,
            .menu-updated,
            .cart-bounce,
            .lp-badge-pop,
            .lp-button-feedback {

                animation: none !important;

                transition: none !important;

            }

        }

    `;

    document.head.appendChild(style);

}


/* ==========================================================
   04. OBSERVADOR DE ELEMENTOS
========================================================== */

let lpRevealObserver = null;


function createRevealObserver() {

    if (!animationsEnabled()) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        return;
    }

    lpRevealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "lp-visible"
                );

                lpRevealObserver.unobserve(
                    entry.target
                );

            });

        },

        {

            threshold: ANIMATION_CONFIG.REVEAL_THRESHOLD,

            rootMargin: ANIMATION_CONFIG.REVEAL_ROOT_MARGIN

        }

    );

}


/* ==========================================================
   05. ANIMAR ELEMENTOS AL APARECER
========================================================== */

function revealElements() {

    const selectors = [

        ".catalog-heading",

        ".section-heading",

        ".category-card",

        ".factory-content",

        ".benefit-card",

        ".feature-card",

        ".contact-card",

        ".wholesale-card"

    ];


    const elements = document.querySelectorAll(
        selectors.join(",")
    );


    elements.forEach((element, index) => {

        if (element.dataset.lpReveal === "true") {
            return;
        }

        element.dataset.lpReveal = "true";


        if (!animationsEnabled() || !lpRevealObserver) {

            element.classList.add(
                "lp-visible"
            );

            return;

        }


        element.classList.add(
            "lp-reveal"
        );


        element.style.transitionDelay =
            `${Math.min(index % 5, 4) *
                ANIMATION_CONFIG.REVEAL_DELAY}ms`;


        lpRevealObserver.observe(
            element
        );

    });

}


/* ==========================================================
   06. ANIMACIÓN DE NUEVOS PRODUCTOS
========================================================== */

function animateNewProducts() {

    const products = document.querySelectorAll(
        "#menuGrid .product-card"
    );


    if (!animationsEnabled()) {
        return;
    }


    products.forEach((product, index) => {

        if (product.dataset.lpAnimated === "true") {
            return;
        }

        product.dataset.lpAnimated = "true";

        product.style.animationDelay =
            `${Math.min(index, 8) * 45}ms`;

    });

}


/* ==========================================================
   07. ANIMACIÓN DEL CONTADOR
========================================================== */

function animateBadge(badge) {

    if (!badge || !animationsEnabled()) {
        return;
    }


    badge.classList.remove(
        "lp-badge-pop"
    );

    void badge.offsetWidth;

    badge.classList.add(
        "lp-badge-pop"
    );


    setTimeout(() => {

        badge.classList.remove(
            "lp-badge-pop"
        );

    }, 350);

}


/* ==========================================================
   08. OBSERVAR CAMBIOS EN CONTADORES
========================================================== */

function observeCartBadges() {

    const badgeIds = [

        "cartCountBadge",

        "floatingCartBadge"

    ];


    badgeIds.forEach(id => {

        const badge = document.getElementById(id);

        if (!badge) {
            return;
        }


        const observer = new MutationObserver(
            mutations => {

                const changed = mutations.some(
                    mutation =>
                    mutation.type === "childList" ||
                    mutation.type === "characterData"
                );

                if (!changed) {
                    return;
                }

                animateBadge(badge);

            }
        );


        observer.observe(badge, {

            childList: true,

            characterData: true,

            subtree: true

        });

    });

}


/* ==========================================================
   09. EFECTO DE BOTONES
========================================================== */

function buttonFeedback(button) {

    if (!button || !animationsEnabled()) {
        return;
    }


    button.classList.remove(
        "lp-button-feedback"
    );

    void button.offsetWidth;

    button.classList.add(
        "lp-button-feedback"
    );


    setTimeout(() => {

        button.classList.remove(
            "lp-button-feedback"
        );

    }, ANIMATION_CONFIG.BUTTON_FEEDBACK_DURATION);

}


/* ==========================================================
   10. ANIMACIÓN AL AGREGAR PRODUCTOS
========================================================== */

function animateAddButton(button) {

    if (!button || !animationsEnabled()) {
        return;
    }


    button.classList.remove(
        "added"
    );

    void button.offsetWidth;

    button.classList.add(
        "added"
    );


    setTimeout(() => {

        button.classList.remove(
            "added"
        );

    }, ANIMATION_CONFIG.PRODUCT_ANIMATION_DURATION);

}


/* ==========================================================
   11. EFECTOS VISUALES DE INTERACCIÓN
========================================================== */

function initButtonEffects() {

    document.addEventListener(
        "click",
        event => {

            const button = event.target.closest(
                "button"
            );

            if (!button) {
                return;
            }


            /* BOTONES GENERALES */

            buttonFeedback(button);


            /* BOTÓN AGREGAR */

            if (
                button.matches(
                    ".product-add-btn"
                )
            ) {

                animateAddButton(button);

            }

        }
    );

}


/* ==========================================================
   12. HEADER DINÁMICO
========================================================== */

function initHeader() {

    const header = document.getElementById(
        "mainHeader"
    );

    if (!header) {
        return;
    }


    const updateHeader = () => {

        const scrolled =
            window.scrollY >
            ANIMATION_CONFIG.HEADER_SCROLL;

        header.classList.toggle(
            "lp-header-scrolled",
            scrolled
        );

    };


    window.addEventListener(
        "scroll",
        updateHeader, {
            passive: true
        }
    );


    updateHeader();

}


/* ==========================================================
   13. NAVEGACIÓN MÓVIL
========================================================== */

function initMobileNavigation() {

    const menuElement = document.getElementById(
        "mainMenu"
    );

    if (!menuElement) {
        return;
    }


    menuElement.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (
                    typeof bootstrap === "undefined" ||
                    !bootstrap.Offcanvas
                ) {

                    return;

                }


                const instance =
                    bootstrap.Offcanvas.getInstance(
                        menuElement
                    );


                instance?.hide();

            }
        );

    });

}


/* ==========================================================
   14. DESPLAZAMIENTO SUAVE
========================================================== */

function initSmoothScroll() {

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target = document.getElementById(
                    targetId.substring(1)
                );

                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: animationsEnabled() ?
                        "smooth" :
                        "auto",

                    block: "start"

                });

            }
        );

    });

}


/* ==========================================================
   15. OBSERVAR NUEVOS PRODUCTOS
========================================================== */

function initDynamicObservers() {

    const menuGrid = document.getElementById(
        "menuGrid"
    );

    if (!menuGrid) {
        return;
    }


    const observer = new MutationObserver(
        () => {

            animateNewProducts();

        }
    );


    observer.observe(menuGrid, {

        childList: true

    });


    animateNewProducts();

}


/* ==========================================================
   16. ACCESIBILIDAD
========================================================== */

function initAccessibility() {

    /* CAMBIOS EN PREFERENCIAS DE MOVIMIENTO */

    const handleMotionChange = event => {

        if (event.matches) {

            document.querySelectorAll(
                ".lp-reveal"
            ).forEach(element => {

                element.classList.add(
                    "lp-visible"
                );

            });

        }

    };


    if (
        typeof prefersReducedMotion.addEventListener ===
        "function"
    ) {

        prefersReducedMotion.addEventListener(
            "change",
            handleMotionChange
        );

    }

}


/* ==========================================================
   17. INICIALIZACIÓN
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        injectAnimationStyles();

        createRevealObserver();

        revealElements();

        animateNewProducts();

        observeCartBadges();

        initButtonEffects();

        initHeader();

        initMobileNavigation();

        initSmoothScroll();

        initDynamicObservers();

        initAccessibility();


        console.info(
            "La Perla: animaciones inicializadas."
        );

    }
);