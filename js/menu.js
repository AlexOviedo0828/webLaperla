"use strict";

/* ==========================================================
   FÁBRICA DE EMPANADAS LA PERLA
   MENU.JS — VERSIÓN 4.0

   Catálogo dinámico
   Filtros por categoría
   Buscador
   Detalle de productos
   Selector de cantidades
   Integración con carrito
   Productos recomendados

   IMPORTANTE:
   PRODUCTS, currentCategory, currentSearch,
   selectedProduct y selectedQuantity
   están definidos en app.js.

   addToCart() está definido en cart.js.
========================================================== */


/* ==========================================================
   01. CONFIGURACIÓN DEL CATÁLOGO
========================================================== */

const MENU_CONFIG = {

  IMAGE_LOADING: "lazy",

  SHOW_DESCRIPTION: true,

  SHOW_CATEGORY_TAG: true,

  MAX_QUANTITY: 999,

  MAX_RECOMMENDATIONS: 4

};


/* ==========================================================
   02. ICONOS DE CATEGORÍAS
========================================================== */

function getCategoryIcon(category) {

  const icons = {

    horneadas: "bi-fire",

    fritas: "bi-egg-fried",

    "masa-hoja": "bi-layers",

    mayor: "bi-box-seam",

    bebidas: "bi-cup-straw"

  };

  return icons[category] || "bi-bag";

}


/* ==========================================================
   03. CLASES DE CATEGORÍAS
========================================================== */

function getCategoryBadgeClass(category) {

  const classes = {

    horneadas: "badge-horneadas",

    fritas: "badge-fritas",

    "masa-hoja": "badge-masa-hoja",

    mayor: "badge-mayor",

    bebidas: "badge-bebidas"

  };

  return classes[category] || "";

}


/* ==========================================================
   04. NORMALIZAR TEXTO
========================================================== */

function normalizeSearchText(text) {

  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

}


/* ==========================================================
   05. OBTENER PRODUCTOS FILTRADOS
========================================================== */

function getVisibleProducts() {

  const search = normalizeSearchText(
    currentSearch
  );

  return PRODUCTS.filter(product => {

    const matchesCategory =
      currentCategory === "all" ||
      product.category === currentCategory;

    const searchableText = normalizeSearchText(
      `
                ${product.title}
                ${product.desc}
                ${product.category}
                ${product.tag}
            `
    );

    const matchesSearch = !search ||
      searchableText.includes(search);

    return matchesCategory && matchesSearch;

  });

}


/* ==========================================================
   06. CREAR TARJETA DE PRODUCTO
========================================================== */

function createProductCard(product) {

  const productId = escapeHTML(product.id);

  const productTitle = escapeHTML(product.title);

  const productDescription = escapeHTML(
    product.desc || ""
  );

  const productImage = escapeHTML(
    safeImage(product)
  );

  const productPrice = formatCLP(
    product.price
  );

  const categoryName = escapeHTML(
    categoryLabel(product.category)
  );

  const categoryIcon = getCategoryIcon(
    product.category
  );

  const badgeClass = getCategoryBadgeClass(
    product.category
  );


  return `

        <article class="product-card">

            <!-- IMAGEN -->

            <button
                type="button"
                class="product-image product-detail-trigger"
                data-menu-detail="${productId}"
                aria-label="Ver detalles de ${productTitle}"
            >

                <img
                    src="${productImage}"
                    alt="${productTitle}"
                    loading="${MENU_CONFIG.IMAGE_LOADING}"
                    onerror="
                        this.onerror=null;
                        this.src='${escapeHTML(CONFIG.FALLBACK_IMG)}';
                    "
                >

                ${
                    MENU_CONFIG.SHOW_CATEGORY_TAG
                        ? `
                            <span class="product-category-badge ${badgeClass}">
                                <i class="bi ${categoryIcon}"></i>
                                ${categoryName}
                            </span>
                        `
                        : ""
                }

            </button>


            <!-- INFORMACIÓN -->

            <div class="product-info">

                <!-- TÍTULO -->

                <button
                    type="button"
                    class="product-title-btn product-detail-trigger"
                    data-menu-detail="${productId}"
                >

                    <h3 class="product-title">
                        ${productTitle}
                    </h3>

                </button>


                <!-- DESCRIPCIÓN -->

                ${
                    MENU_CONFIG.SHOW_DESCRIPTION
                        ? `
                            <p class="product-description">
                                ${productDescription}
                            </p>
                        `
                        : ""
                }


                <!-- PRECIO Y BOTÓN -->

                <div class="product-footer">

                    <strong class="product-price">
                        ${productPrice}
                    </strong>

                    <button
                        type="button"
                        class="product-add-btn"
                        data-menu-add="${productId}"
                        aria-label="Agregar ${productTitle} al carrito"
                    >

                        <i class="bi bi-cart-plus"></i>

                        <span>Agregar</span>

                    </button>

                </div>

            </div>

        </article>

    `;

}


/* ==========================================================
   07. ACTUALIZAR INFORMACIÓN DEL CATÁLOGO
========================================================== */

function updateMenuInformation(products) {

  const countElement = document.getElementById(
    "productsCount"
  );

  const titleElement = document.getElementById(
    "menuTitle"
  );

  const subtitleElement = document.getElementById(
    "menuSubtitle"
  );


  /* CONTADOR */

  if (countElement) {

    countElement.textContent =
      products.length;

  }


  /* INFORMACIÓN DE CATEGORÍA */

  const categoryInfo =
    CATEGORIES[currentCategory] ||
    CATEGORIES.all;


  if (titleElement) {

    titleElement.textContent =
      categoryInfo.title;

  }


  if (subtitleElement) {

    subtitleElement.textContent =
      currentSearch.trim() ?
      `Resultados para "${currentSearch.trim()}"` :
      categoryInfo.subtitle;

  }

}


/* ==========================================================
   08. RENDERIZAR CATÁLOGO
========================================================== */

function renderMenu() {

  const menuGrid = document.getElementById(
    "menuGrid"
  );

  const emptyProducts = document.getElementById(
    "emptyProducts"
  );

  if (!menuGrid) {

    console.error(
      "No se encontró el contenedor #menuGrid."
    );

    return;

  }


  const products = getVisibleProducts();


  /* ACTUALIZAR CONTADOR Y TÍTULOS */

  updateMenuInformation(products);


  /* SIN PRODUCTOS */

  if (products.length === 0) {

    menuGrid.innerHTML = "";

    emptyProducts?.classList.remove(
      "d-none"
    );

    return;

  }


  /* MOSTRAR PRODUCTOS */

  emptyProducts?.classList.add(
    "d-none"
  );


  menuGrid.innerHTML = products
    .map(createProductCard)
    .join("");


  /* ANIMACIÓN */

  menuGrid.classList.remove(
    "menu-updated"
  );

  void menuGrid.offsetWidth;

  menuGrid.classList.add(
    "menu-updated"
  );

}


/* ==========================================================
   09. ABRIR DETALLE DEL PRODUCTO
========================================================== */

function openProductDetail(productId) {

  const product = getProductById(
    productId
  );

  if (!product) {

    console.error(
      "Producto no encontrado:",
      productId
    );

    return;

  }


  /* GUARDAR PRODUCTO SELECCIONADO */

  selectedProduct = product;

  selectedQuantity = 1;


  /* ELEMENTOS DEL MODAL */

  const modalElement = document.getElementById(
    "productModal"
  );

  const imageElement = document.getElementById(
    "productModalImg"
  );

  const titleElement = document.getElementById(
    "productModalTitle"
  );

  const descriptionElement = document.getElementById(
    "productModalDescription"
  );

  const priceElement = document.getElementById(
    "productModalPrice"
  );

  const categoryElement = document.getElementById(
    "productModalCategory"
  );


  /* IMAGEN */

  if (imageElement) {

    imageElement.src = safeImage(
      product
    );

    imageElement.alt =
      product.title;

  }


  /* TÍTULO */

  if (titleElement) {

    titleElement.textContent =
      product.title;

  }


  /* DESCRIPCIÓN */

  if (descriptionElement) {

    descriptionElement.textContent =
      product.desc || "";

  }


  /* PRECIO */

  if (priceElement) {

    priceElement.textContent =
      formatCLP(product.price);

  }


  /* CATEGORÍA */

  if (categoryElement) {

    categoryElement.textContent =
      categoryLabel(product.category);

  }


  /* CANTIDAD */

  updateProductQuantityUI();


  /* RECOMENDACIONES */

  renderRecommendedProducts(
    product
  );


  /* ABRIR MODAL */

  if (modalElement) {

    const modal =
      bootstrap.Modal.getOrCreateInstance(
        modalElement
      );

    modal.show();

  }

}


/* ==========================================================
   10. ACTUALIZAR CANTIDAD EN MODAL
========================================================== */

function updateProductQuantityUI() {

  const quantityElement = document.getElementById(
    "productQuantity"
  );

  const decreaseButton = document.getElementById(
    "btnDecreaseQuantity"
  );

  const increaseButton = document.getElementById(
    "btnIncreaseQuantity"
  );


  if (quantityElement) {

    quantityElement.textContent =
      selectedQuantity;

  }


  if (decreaseButton) {

    decreaseButton.disabled =
      selectedQuantity <= 1;

  }


  if (increaseButton) {

    increaseButton.disabled =
      selectedQuantity >= MENU_CONFIG.MAX_QUANTITY;

  }

}


/* ==========================================================
   11. CAMBIAR CANTIDAD
========================================================== */

function changeProductQuantity(difference) {

  const newQuantity =
    selectedQuantity + Number(difference);

  if (
    newQuantity < 1 ||
    newQuantity > MENU_CONFIG.MAX_QUANTITY
  ) {

    return;

  }

  selectedQuantity = newQuantity;

  updateProductQuantityUI();

}


/* ==========================================================
   12. AGREGAR PRODUCTO DEL MODAL
========================================================== */

function addDetailProductToCart() {

  if (!selectedProduct) return;

  if (typeof addToCart !== "function") {

    console.error(
      "La función addToCart() no existe."
    );

    return;

  }


  const added = addToCart(
    selectedProduct.id,
    selectedQuantity
  );


  if (!added) return;


  /* CERRAR MODAL */

  const modalElement = document.getElementById(
    "productModal"
  );

  if (modalElement) {

    const modal =
      bootstrap.Modal.getInstance(
        modalElement
      );

    modal?.hide();

  }

}


/* ==========================================================
   13. PRODUCTOS RECOMENDADOS
========================================================== */

function getRecommendedProducts(product) {

  return PRODUCTS
    .filter(item => {

      return (
        item.id !== product.id &&
        item.category === product.category
      );

    })
    .slice(
      0,
      MENU_CONFIG.MAX_RECOMMENDATIONS
    );

}


/* ==========================================================
   14. MOSTRAR RECOMENDACIONES
========================================================== */

function renderRecommendedProducts(product) {

  const container = document.getElementById(
    "recommendedProducts"
  );

  if (!container) return;


  const recommended = getRecommendedProducts(
    product
  );


  if (recommended.length === 0) {

    container.innerHTML = "";

    return;

  }


  container.innerHTML = `

        <h4 class="recommended-title">
            También te puede gustar
        </h4>

        <div class="recommended-grid">

            ${recommended.map(item => `

                <button
                    type="button"
                    class="recommended-item"
                    data-menu-recommended="${escapeHTML(item.id)}"
                >

                    <img
                        src="${escapeHTML(safeImage(item))}"
                        alt="${escapeHTML(item.title)}"
                        loading="lazy"
                    >

                    <span>

                        <strong>
                            ${escapeHTML(item.title)}
                        </strong>

                        <small>
                            ${formatCLP(item.price)}
                        </small>

                    </span>

                </button>

            `).join("")}

        </div>

    `;

}


/* ==========================================================
   15. RESTABLECER FILTROS
========================================================== */

function resetMenuFilters() {

  const searchInput = document.getElementById(
    "productSearch"
  );

  if (searchInput) {

    searchInput.value = "";

  }

  currentSearch = "";

  applyCategory("all");

}


/* ==========================================================
   16. EVENTOS DEL CATÁLOGO
========================================================== */

function wireMenuEvents() {

  document.addEventListener(
    "click",
    event => {

      /* ======================================
         AGREGAR PRODUCTO
      ====================================== */

      const addButton = event.target.closest(
        "[data-menu-add]"
      );

      if (addButton) {

        event.preventDefault();

        const productId =
          addButton.dataset.menuAdd;

        const product = getProductById(
          productId
        );

        if (!product) {

          console.error(
            "Producto no encontrado:",
            productId
          );

          return;

        }


        if (typeof addToCart !== "function") {

          console.error(
            "No existe addToCart()."
          );

          return;

        }


        const added = addToCart(
          productId,
          1
        );


        if (!added) return;


        /* EFECTO VISUAL */

        addButton.classList.add(
          "added"
        );

        const label = addButton.querySelector(
          "span"
        );

        if (label) {

          label.textContent =
            "¡Agregado!";

        }


        setTimeout(() => {

          addButton.classList.remove(
            "added"
          );

          if (label) {

            label.textContent =
              "Agregar";

          }

        }, 1200);


        return;

      }


      /* ======================================
         VER DETALLE
      ====================================== */

      const detailButton = event.target.closest(
        "[data-menu-detail]"
      );

      if (detailButton) {

        event.preventDefault();

        openProductDetail(
          detailButton.dataset.menuDetail
        );

        return;

      }


      /* ======================================
         PRODUCTO RECOMENDADO
      ====================================== */

      const recommendedButton = event.target.closest(
        "[data-menu-recommended]"
      );

      if (recommendedButton) {

        event.preventDefault();

        openProductDetail(
          recommendedButton.dataset.menuRecommended
        );

        return;

      }

    }
  );


  /* ==========================================
     BOTONES DEL MODAL
  ========================================== */

  document.getElementById(
    "btnDecreaseQuantity"
  )?.addEventListener(
    "click",
    () => changeProductQuantity(-1)
  );


  document.getElementById(
    "btnIncreaseQuantity"
  )?.addEventListener(
    "click",
    () => changeProductQuantity(1)
  );


  document.getElementById(
    "btnAddProductToCart"
  )?.addEventListener(
    "click",
    addDetailProductToCart
  );


  /* ==========================================
     RESTABLECER FILTROS
  ========================================== */

  document.getElementById(
    "btnResetFilters"
  )?.addEventListener(
    "click",
    resetMenuFilters
  );

}


/* ==========================================================
   17. EVENTOS DE TARJETAS DE CATEGORÍAS
========================================================== */

function wireCategoryCards() {

  document.querySelectorAll(
    ".category-card[data-category]"
  ).forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const category =
          card.dataset.category;

        applyCategory(category);


        /* DESPLAZAR AL CATÁLOGO */

        const menuSection = document.getElementById(
          "menu"
        );

        menuSection?.scrollIntoView({

          behavior: "smooth",

          block: "start"

        });

      }
    );

  });

}


/* ==========================================================
   18. INICIALIZACIÓN
========================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    wireMenuEvents();

    wireCategoryCards();

    renderMenu();

    console.info(
      `Catálogo inicializado: ${PRODUCTS.length} productos.`
    );

  }
);