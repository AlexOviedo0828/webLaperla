"use strict";

/* ==========================================================
   FÁBRICA DE EMPANADAS LA PERLA
   CART.JS — VERSIÓN 4.0

   Gestión de productos
   Contador del carrito
   Modificar cantidades
   Eliminar productos
   Guardar carrito
   Actualizar totales
========================================================== */


/* ==========================================================
   01. CONFIGURACIÓN
========================================================== */

const CART_CONFIG = {
  MAX_QUANTITY: 999,
  STORAGE_KEY: "laperla_cart_v4"
};


/* ==========================================================
   02. GUARDAR CARRITO
========================================================== */

function saveCart() {

  try {

    const items = Array.from(cart.values());

    localStorage.setItem(
      CART_CONFIG.STORAGE_KEY,
      JSON.stringify(items)
    );

  } catch (error) {

    console.error(
      "Error guardando carrito:",
      error
    );

  }

}


/* ==========================================================
   03. RECUPERAR CARRITO
========================================================== */

function loadCart() {

  try {

    const saved = localStorage.getItem(
      CART_CONFIG.STORAGE_KEY
    );

    if (!saved) return;

    const items = JSON.parse(saved);

    if (!Array.isArray(items)) return;

    cart.clear();

    items.forEach(item => {

      const product = getProductById(item.id);

      const quantity = Number(item.qty);

      if (
        product &&
        Number.isInteger(quantity) &&
        quantity > 0
      ) {

        cart.set(item.id, {
          id: item.id,
          qty: Math.min(
            quantity,
            CART_CONFIG.MAX_QUANTITY
          )
        });

      }

    });

  } catch (error) {

    console.error(
      "Error recuperando carrito:",
      error
    );

  }

}


/* ==========================================================
   04. AGREGAR PRODUCTOS
========================================================== */

function addToCart(productId, quantity = 1) {

  const product = getProductById(productId);

  if (!product) {

    console.error(
      "Producto no encontrado:",
      productId
    );

    return false;

  }

  const quantityToAdd = Number(quantity);

  if (
    !Number.isInteger(quantityToAdd) ||
    quantityToAdd < 1
  ) {

    return false;

  }

  const existing = cart.get(productId);

  const currentQuantity = existing ?
    Number(existing.qty) :
    0;

  const newQuantity = Math.min(
    currentQuantity + quantityToAdd,
    CART_CONFIG.MAX_QUANTITY
  );

  cart.set(productId, {
    id: productId,
    qty: newQuantity
  });

  refreshCart();

  if (typeof showToast === "function") {

    showToast(
      `${product.title} agregado al carrito`,
      "success"
    );

  }

  if (typeof animateCartButtons === "function") {
    animateCartButtons();
  }

  console.log(
    "Producto agregado:",
    product.title,
    "Cantidad:",
    newQuantity
  );

  return true;

}


/* ==========================================================
   05. MODIFICAR CANTIDADES
========================================================== */

function updateCartQuantity(productId, quantity) {

  const item = cart.get(productId);

  if (!item) return;

  const newQuantity = Number(quantity);

  if (
    !Number.isInteger(newQuantity) ||
    newQuantity <= 0
  ) {

    removeFromCart(productId);
    return;

  }

  item.qty = Math.min(
    newQuantity,
    CART_CONFIG.MAX_QUANTITY
  );

  cart.set(productId, item);

  refreshCart();

}


function changeCartQuantity(productId, difference) {

  const item = cart.get(productId);

  if (!item) return;

  updateCartQuantity(
    productId,
    Number(item.qty) + Number(difference)
  );

}


/* ==========================================================
   06. ELIMINAR PRODUCTO
========================================================== */

function removeFromCart(productId) {

  if (!cart.has(productId)) return;

  cart.delete(productId);

  refreshCart();

}


/* ==========================================================
   07. VACIAR CARRITO
========================================================== */

function emptyCart() {

  cart.clear();

  refreshCart();

}


/* ==========================================================
   08. ACTUALIZAR CARRITO
========================================================== */

function refreshCart() {

  saveCart();

  renderCart();

  updateCartBadge();

  if (typeof updateCheckout === "function") {
    updateCheckout();
  }

}


/* ==========================================================
   09. CREAR PRODUCTO DEL CARRITO
========================================================== */

function createCartItemHTML(item) {

  const product = getProductById(item.id);

  if (!product) return "";

  const quantity = Number(item.qty);

  const subtotal = product.price * quantity;

  const productId = escapeHTML(product.id);

  const productTitle = escapeHTML(product.title);

  const productImage = escapeHTML(
    safeImage(product)
  );

  return `

        <li class="cart-item">

            <img
                src="${productImage}"
                alt="${productTitle}"
                class="cart-item-image"
                loading="lazy"
            >

            <div class="cart-item-info">

                <h3 class="cart-item-name">
                    ${productTitle}
                </h3>

                <span class="cart-item-price">
                    ${formatCLP(product.price)} c/u
                </span>

                <div class="cart-item-actions">

                    <div class="quantity-control">

                        <button
                            type="button"
                            data-cart-action="decrease"
                            data-product-id="${productId}"
                            aria-label="Disminuir cantidad"
                        >
                            <i class="bi bi-dash"></i>
                        </button>

                        <span>${quantity}</span>

                        <button
                            type="button"
                            data-cart-action="increase"
                            data-product-id="${productId}"
                            aria-label="Aumentar cantidad"
                        >
                            <i class="bi bi-plus"></i>
                        </button>

                    </div>

                    <button
                        type="button"
                        class="btn btn-sm btn-outline-danger"
                        data-cart-action="remove"
                        data-product-id="${productId}"
                        aria-label="Eliminar producto"
                    >
                        <i class="bi bi-trash"></i>
                    </button>

                </div>

            </div>

            <strong class="cart-item-subtotal">
                ${formatCLP(subtotal)}
            </strong>

        </li>

    `;

}


/* ==========================================================
   10. CARRITO VACÍO
========================================================== */

function createEmptyCartHTML() {

  return `

        <li class="empty-cart-state">

            <div class="empty-cart-icon">
                <i class="bi bi-bag-x"></i>
            </div>

            <h3>
                Tu carrito está vacío
            </h3>

            <p>
                Explora nuestro catálogo y agrega
                tus empanadas favoritas.
            </p>

            <button
                type="button"
                class="btn btn-outline-dark rounded-pill"
                data-bs-dismiss="offcanvas"
            >
                <i class="bi bi-arrow-left me-2"></i>
                Seguir comprando
            </button>

        </li>

    `;

}


/* ==========================================================
   11. MOSTRAR CARRITO
========================================================== */

function renderCart() {

  const cartList = document.getElementById(
    "cartList"
  );

  if (cartList) {

    if (cart.size === 0) {

      cartList.innerHTML = createEmptyCartHTML();

    } else {

      cartList.innerHTML = Array.from(
          cart.values()
        )
        .map(createCartItemHTML)
        .join("");

    }

  }

  const subtotalElement = document.getElementById(
    "cartSubtotal"
  );

  const deliveryElement = document.getElementById(
    "deliveryFee"
  );

  const totalElement = document.getElementById(
    "cartTotal"
  );

  if (subtotalElement) {
    subtotalElement.textContent = formatCLP(
      cartSubtotal()
    );
  }

  if (deliveryElement) {
    deliveryElement.textContent = formatCLP(
      deliveryCost()
    );
  }

  if (totalElement) {
    totalElement.textContent = formatCLP(
      cartTotal()
    );
  }

  const isEmpty = cart.size === 0;

  const clearButton = document.getElementById(
    "btnClearCart"
  );

  const checkoutButton = document.getElementById(
    "btnGoCheckout"
  );

  if (clearButton) {
    clearButton.disabled = isEmpty;
  }

  if (checkoutButton) {
    checkoutButton.disabled = isEmpty;
  }

  updateCartBadge();

}


/* ==========================================================
   12. EVENTOS DEL CARRITO
========================================================== */

function wireCartEvents() {

  const cartList = document.getElementById(
    "cartList"
  );

  if (!cartList) return;

  cartList.addEventListener("click", event => {

    const button = event.target.closest(
      "[data-cart-action]"
    );

    if (!button) return;

    const action = button.dataset.cartAction;

    const productId = button.dataset.productId;

    if (!productId) return;

    switch (action) {

      case "increase":
        changeCartQuantity(productId, 1);
        break;

      case "decrease":
        changeCartQuantity(productId, -1);
        break;

      case "remove":
        removeFromCart(productId);
        break;

    }

  });

}


/* ==========================================================
   13. INICIALIZACIÓN
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  loadCart();

  wireCartEvents();

  renderCart();

  console.info(
    "Carrito inicializado correctamente"
  );

});