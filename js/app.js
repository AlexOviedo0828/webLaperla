"use strict";

/* ==========================================================
   FÁBRICA DE EMPANADAS LA PERLA
   APP.JS — VERSIÓN 4.0

   Configuración general
   Catálogo de productos
   Categorías
   Buscador
   Estado del carrito
   Pedidos por WhatsApp

   COMPATIBLE CON:
   index.html
   cart.js
   menu.js
   animations.js
========================================================== */


/* ==========================================================
   01. CONFIGURACIÓN GENERAL
========================================================== */

const CONFIG = {

    BUSINESS_NAME: "Fábrica de Empanadas La Perla",

    CITY: "Antofagasta",

    PHONE_E164: "+56961589674",

    ADDRESS: "14 de Febrero 2532, Antofagasta",

    FALLBACK_IMG: "assets/img/E9168D6F-FA48-4831-943C-2D9803BEB269.png",

    DELIVERY_FEE: 2000,

    WHOLESALE_MINIMUM: 20,

    CURRENCY: "CLP",

    LOCALE: "es-CL",

    STORAGE_CART: "laperla_cart_v4",

    STORAGE_ORDER: "laperla_order_v4"

};


/* ==========================================================
   02. CATÁLOGO DE PRODUCTOS
========================================================== */

const PRODUCTS = [

    /* ======================================================
       EMPANADAS HORNEADAS
    ====================================================== */

    {
        id: "horneada-pino",
        title: "Empanada de Pino",
        desc: "Tradicional empanada horneada de pino.",
        category: "horneadas",
        tag: "Horneada",
        price: 2200,
        img: "assets/empanadasHorno/pinohorneada.png"
    },

    {
        id: "horneada-pollo-queso",
        title: "Empanada de Pollo",
        desc: "Empanada horneada con relleno de pollo.",
        category: "horneadas",
        tag: "Horneada",
        price: 2200,
        img: "assets/empanadasHorno/pollouesoHorno.png"
    },

    {
        id: "horneada-chaparrita",
        title: "Chaparrita",
        desc: "Clásica chaparrita horneada.",
        category: "horneadas",
        tag: "Horneada",
        price: 2000,
        img: "assets/empanadasHorno/chaparritaHorno.png"
    },

    {
        id: "horneada-napolitana",
        title: "Empanada Napolitana",
        desc: "Empanada horneada estilo napolitano.",
        category: "horneadas",
        tag: "Horneada",
        price: 1800,
        img: "assets/empanadasHorno/napolitanaHorno.png"
    },

    {
        id: "horneada-mechada-queso",
        title: "Mechada Queso",
        desc: "Empanada horneada de carne mechada y queso.",
        category: "horneadas",
        tag: "Horneada",
        price: 2500,
        img: "assets/empanadasHorno/carnemechadaHorno.png"
    },

    {
        id: "horneada-mixta",
        title: "Empanada Mixta",
        desc: "Empanada horneada con relleno mixto.",
        category: "horneadas",
        tag: "Horneada",
        price: 2700,
        img: "assets/empanadasHorno/Mixta.png"
    },

    {
        id: "horneada-tocino",
        title: "Empanada de Tocino",
        desc: "Empanada horneada con tocino.",
        category: "horneadas",
        tag: "Horneada",
        price: 2800,
        img: "assets/empanadasHorno/tocinoHorno.png"
    },

    {
        id: "horneada-pastel-choclo",
        title: "Pastel de Choclo",
        desc: "Especialidad de pastel de choclo.",
        category: "horneadas",
        tag: "Horneada",
        price: 3500,
        img: "assets/empanadasHorno/pasteldechoclo.png"
    },

    {
        id: "horneada-dobladita-queso",
        title: "Dobladita con queso",
        desc: "Dobladita horneada rellena de queso.",
        category: "horneadas",
        tag: "Horneada",
        price: 1000,
        img: "assets/empanadasHorno/dobladitoconQueso.png"
    },

    {
        id: "horneada-dobladita-sin-queso",
        title: "Dobladita sin queso",
        desc: "Tradicional dobladita horneada.",
        category: "horneadas",
        tag: "Horneada",
        price: 500,
        img: "assets/empanadasHorno/dobladitoconQueso.png"
    },


    /* ======================================================
       EMPANADAS FRITAS
    ====================================================== */

    {
        id: "frita-camaron-queso",
        title: "Camarón Queso",
        desc: "Empanada frita de camarón y queso.",
        category: "fritas",
        tag: "Frita",
        price: 3200,
        img: "assets/empanadasfritas/camaron.png"
    },

    {
        id: "frita-queso",
        title: "Empanada de Queso",
        desc: "Empanada frita rellena de queso.",
        category: "fritas",
        tag: "Frita",
        price: 2000,
        img: "assets/empanadasfritas/camaron.png"
    },

    {
        id: "frita-jamon-queso",
        title: "Jamón Queso",
        desc: "Empanada frita de jamón y queso.",
        category: "fritas",
        tag: "Frita",
        price: 2000,
        img: "assets/empanadasfritas/camaron.png"
    },

    {
        id: "frita-pollo-queso",
        title: "Pollo Queso",
        desc: "Empanada frita de pollo y queso.",
        category: "fritas",
        tag: "Frita",
        price: 2300,
        img: "assets/empanadasfritas/camaron.png"
    },

    {
        id: "frita-carne-queso",
        title: "Carne Queso",
        desc: "Empanada frita de carne y queso.",
        category: "fritas",
        tag: "Frita",
        price: 2500,
        img: "assets/empanadasfritas/camaron.png"
    },

    {
        id: "frita-tocino-queso",
        title: "Tocino Queso",
        desc: "Empanada frita de tocino y queso.",
        category: "fritas",
        tag: "Frita",
        price: 2500,
        img: "assets/empanadasfritas/camaron.png"
    },

    {
        id: "frita-choclo-queso",
        title: "Choclo Queso",
        desc: "Empanada frita de choclo y queso.",
        category: "fritas",
        tag: "Frita",
        price: 2500,
        img: "assets/empanadasfritas/camaron.png"
    },

    {
        id: "frita-champinon-queso",
        title: "Champiñón Queso",
        desc: "Empanada frita de champiñón y queso.",
        category: "fritas",
        tag: "Frita",
        price: 2500,
        img: "assets/empanadasfritas/camaron.png"
    },


    /* ======================================================
       EMPANADAS EN MASA DE HOJA
    ====================================================== */

    {
        id: "hoja-pollo-queso",
        title: "Pollo Queso en Masa de Hoja",
        desc: "Empanada de masa de hoja rellena de pollo y queso.",
        category: "masa-hoja",
        tag: "Masa de hoja",
        price: 2000,
        img: "assets/img/masadehojapollo.png"
    },

    {
        id: "hoja-carne-queso",
        title: "Carne Queso en Masa de Hoja",
        desc: "Empanada de masa de hoja rellena de carne y queso.",
        category: "masa-hoja",
        tag: "Masa de hoja",
        price: 2900,
        img: "assets/img/carnequesoenhoja.png"
    },

    {
        id: "hoja-todas-las-carnes",
        title: "Todas las Carnes en Masa de Hoja",
        desc: "Empanada de masa de hoja con variedad de carnes.",
        category: "masa-hoja",
        tag: "Masa de hoja",
        price: 3000,
        img: "assets/img/carnequesoenhoja.png"
    },

    {
        id: "hoja-chaparrita",
        title: "Chaparrita en Masa de Hoja",
        desc: "Chaparrita preparada con masa de hoja.",
        category: "masa-hoja",
        tag: "Masa de hoja",
        price: 2700,
        img: "assets/empanadasHorno/chaparritaHorno.png"
    },


    /* ======================================================
       EMPANADAS POR MAYOR
    ====================================================== */

    {
        id: "mayor-pino",
        title: "Empanada de Pino (Mayor)",
        desc: "Empanada de pino para pedidos por mayor.",
        category: "mayor",
        tag: "Por mayor",
        price: 1600,
        img: "assets/empanadasHorno/pinohorneada.png"
    },

    {
        id: "mayor-pollo",
        title: "Empanada de Pollo (Mayor)",
        desc: "Empanada de pollo para pedidos por mayor.",
        category: "mayor",
        tag: "Por mayor",
        price: 1600,
        img: "assets/empanadasHorno/pollouesoHorno.png"
    },

    {
        id: "mayor-mechada",
        title: "Empanada de Mechada (Mayor)",
        desc: "Empanada de mechada para pedidos por mayor.",
        category: "mayor",
        tag: "Por mayor",
        price: 1800,
        img: "assets/empanadasHorno/carnemechadaHorno.png"
    },

    {
        id: "mayor-chaparrita",
        title: "Empanada de Chaparrita (Mayor)",
        desc: "Chaparrita para pedidos por mayor.",
        category: "mayor",
        tag: "Por mayor",
        price: 1600,
        img: "assets/empanadasHorno/chaparritaHorno.png"
    },

    {
        id: "mayor-napolitana",
        title: "Empanada Napolitana (Mayor)",
        desc: "Empanada napolitana para pedidos por mayor.",
        category: "mayor",
        tag: "Por mayor",
        price: 1600,
        img: "assets/empanadasHorno/napolitanaHorno.png"
    },

    {
        id: "mayor-solo-queso",
        title: "Empanada Solo Queso (Mayor)",
        desc: "Empanada de queso para pedidos por mayor.",
        category: "mayor",
        tag: "Por mayor",
        price: 1600,
        img: "assets/empanadasHorno/pollouesoHorno.png"
    },


    /* ======================================================
       BEBIDAS
    ====================================================== */

    {
        id: "bebida-cocacola-light",
        title: "Coca-Cola Light",
        desc: "Bebida Coca-Cola Light.",
        category: "bebidas",
        tag: "Bebida",
        price: 1300,
        img: "assets/bebidas/coca-zero.png"
    },

    {
        id: "bebida-agua-gas",
        title: "Agua con Gas",
        desc: "Agua mineral con gas.",
        category: "bebidas",
        tag: "Bebida",
        price: 1300,
        img: "assets/bebidas/agua-congas.png"
    },

    {
        id: "bebida-agua-500ml",
        title: "Agua 500 ml",
        desc: "Agua mineral de 500 ml.",
        category: "bebidas",
        tag: "Bebida",
        price: 1500,
        img: "assets/bebidas/agua_sin_gas.png"
    },

    {
        id: "bebida-monster",
        title: "Monster",
        desc: "Bebida energética Monster.",
        category: "bebidas",
        tag: "Bebida",
        price: 2500,
        img: "assets/bebidas/monster.png"
    },
    {
        id: "coca-cola1.5",
        title: "Monster",
        desc: "Coca cola 1.5 ml.",
        category: "bebidas",
        tag: "Bebida",
        price: 2500,
        img: "assets/bebidas/cocola1-5.png"
    },
    {
        id: "redbull",
        title: "Monster",
        desc: "Redbull",
        category: "bebidas",
        tag: "Bebida",
        price: 2500,
        img: "assets/bebidas/redbull.png"
    },
    {
        id: "coca-cola500ml",
        title: "Monster",
        desc: "Coca cola 500 ml.",
        category: "bebidas",
        tag: "Bebida",
        price: 2500,
        img: "assets/bebidas/cocacola-500.png"
    },
    {
        id: "whatts300",
        title: "Monster",
        desc: "Whatts de naranja",
        category: "bebidas",
        tag: "Bebida",
        price: 2500,
        img: "assets/bebidas/watss300.png"
    },
    {
        id: "whatts300",
        title: "Monster",
        desc: "Whatts de frutilla",
        category: "bebidas",
        tag: "Bebida",
        price: 2500,
        img: "assets/bebidas/whattsfrutilla.png"
    },
    {
        id: "coca-cola500ml",
        title: "Monster",
        desc: "Coca cola en lata",
        category: "bebidas",
        tag: "Bebida",
        price: 2500,
        img: "assets/bebidas/cocaenlata.png"
    },

];


/* ==========================================================
   03. CATEGORÍAS
========================================================== */

const CATEGORIES = {

    all: {
        title: "Nuestros productos",
        subtitle: "Descubre todos nuestros sabores."
    },

    horneadas: {
        title: "Empanadas horneadas",
        subtitle: "El sabor tradicional de La Perla."
    },

    fritas: {
        title: "Empanadas fritas",
        subtitle: "Crujientes y deliciosas."
    },

    "masa-hoja": {
        title: "Empanadas en masa de hoja",
        subtitle: "Especialidades preparadas con masa de hoja."
    },

    mayor: {
        title: "Empanadas por mayor",
        subtitle: "Pedidos desde 20 unidades surtidas."
    },

    bebidas: {
        title: "Bebidas",
        subtitle: "El acompañamiento perfecto."
    }

};


/* ==========================================================
   04. FUNCIONES GENERALES
========================================================== */

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return Array.from(document.querySelectorAll(selector));
}


function formatCLP(value) {

    const amount = Number(value) || 0;

    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(amount);

}


function cleanPhone(phone) {

    return String(phone || "")
        .replace(/\D/g, "");

}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}


function safeImage(product) {

    return product?.img || CONFIG.FALLBACK_IMG;

}


function getProductById(productId) {

    return PRODUCTS.find(
        product => product.id === productId
    ) || null;

}


function categoryLabel(category) {

    const labels = {

        all: "Todos",

        horneadas: "Horneadas",

        fritas: "Fritas",

        "masa-hoja": "Masa de hoja",

        mayor: "Por mayor",

        bebidas: "Bebidas"

    };

    return labels[category] || "Productos";

}


function normalizeText(text) {

    return String(text || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* ==========================================================
   05. ESTADO GENERAL
========================================================== */

const cart = new Map();

let currentCategory = "all";

let currentSearch = "";

let selectedProduct = null;

let selectedQuantity = 1;


const orderData = {

    deliveryType: "retiro",

    name: "",

    phone: "",

    address: "",

    receiver: "",

    notes: ""

};


/* ==========================================================
   06. GUARDAR DATOS DEL PEDIDO
========================================================== */

function saveOrderData() {

    try {

        localStorage.setItem(
            CONFIG.STORAGE_ORDER,
            JSON.stringify(orderData)
        );

    } catch (error) {

        console.error(
            "Error guardando datos del pedido:",
            error
        );

    }

}


function loadOrderData() {

    try {

        const saved = localStorage.getItem(
            CONFIG.STORAGE_ORDER
        );

        if (!saved) return;

        const data = JSON.parse(saved);

        if (data && typeof data === "object") {

            Object.assign(orderData, data);

        }

    } catch (error) {

        console.error(
            "Error recuperando datos del pedido:",
            error
        );

    }

}


/* ==========================================================
   07. OPERACIONES GENERALES DEL CARRITO

   Las funciones:
   saveCart()
   loadCart()
   addToCart()
   updateCartQuantity()
   removeFromCart()
   refreshCart()

   están definidas en cart.js.
========================================================== */


/* ==========================================================
   08. CÁLCULOS DEL CARRITO
========================================================== */

function cartSubtotal() {

    let subtotal = 0;

    for (const item of cart.values()) {

        const product = getProductById(item.id);

        if (!product) continue;

        subtotal += product.price * Number(item.qty);

    }

    return subtotal;

}


function cartCount() {

    let count = 0;

    for (const item of cart.values()) {

        count += Number(item.qty) || 0;

    }

    return count;

}


function wholesaleQuantity() {

    let count = 0;

    for (const item of cart.values()) {

        const product = getProductById(item.id);

        if (product?.category === "mayor") {

            count += Number(item.qty) || 0;

        }

    }

    return count;

}


function deliveryCost() {

    if (cart.size === 0) return 0;

    return orderData.deliveryType === "delivery" ?
        CONFIG.DELIVERY_FEE :
        0;

}


function cartTotal() {

    return cartSubtotal() + deliveryCost();

}


/* ==========================================================
   09. VALIDACIONES
========================================================== */

function validateWholesaleMinimum() {

    const hasWholesale = Array.from(
        cart.values()
    ).some(item => {

        const product = getProductById(item.id);

        return product?.category === "mayor";

    });

    if (!hasWholesale) return true;

    const quantity = wholesaleQuantity();

    if (quantity < CONFIG.WHOLESALE_MINIMUM) {

        showToast(
            `El pedido por mayor requiere mínimo ${CONFIG.WHOLESALE_MINIMUM} unidades.`,
            "warning"
        );

        return false;

    }

    return true;

}


function validateCart() {

    if (cart.size === 0) {

        showToast(
            "Tu carrito está vacío",
            "warning"
        );

        return false;

    }

    return validateWholesaleMinimum();

}


/* ==========================================================
   10. ACTUALIZAR CONTADOR DEL CARRITO
========================================================== */

function updateCartBadge() {

    const count = cartCount();

    const badges = [

        document.getElementById("cartCountBadge"),

        document.getElementById("floatingCartBadge")

    ];

    badges.forEach(badge => {

        if (!badge) return;

        badge.textContent = count;

        badge.hidden = count === 0;

    });

}


/* ==========================================================
   11. FILTRAR PRODUCTOS
========================================================== */

function filteredProducts() {

    return PRODUCTS.filter(product => {

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;

        const search = normalizeText(currentSearch);

        const searchableText = normalizeText(
            `${product.title} ${product.desc} ${product.category}`
        );

        const matchesSearch = !search || searchableText.includes(search);

        return matchesCategory && matchesSearch;

    });

}


/* ==========================================================
   12. APLICAR CATEGORÍA
========================================================== */

function applyCategory(category) {

    if (!CATEGORIES[category]) {
        category = "all";
    }

    currentCategory = category;

    updateCategoryUI();

    if (typeof renderMenu === "function") {
        renderMenu();
    }

}


function updateCategoryUI() {

    document.querySelectorAll(
        ".filter-btn[data-category]"
    ).forEach(button => {

        const isActive =
            button.dataset.category === currentCategory;

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });

}


/* ==========================================================
   13. BUSCADOR
========================================================== */

function searchProducts(query) {

    currentSearch = String(query || "");

    if (typeof renderMenu === "function") {
        renderMenu();
    }

}


/* ==========================================================
   14. GENERAR IDENTIFICADOR DEL PEDIDO
========================================================== */

function generateOrderId() {

    const date = new Date();

    const year = date.getFullYear();

    const month = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        date.getDate()
    ).padStart(2, "0");

    const random = Math.floor(
        1000 + Math.random() * 9000
    );

    return `LP-${year}${month}${day}-${random}`;

}


/* ==========================================================
   15. GENERAR MENSAJE DE WHATSAPP
========================================================== */

function buildWhatsAppMessage() {

    const lines = [];

    const orderId = generateOrderId();

    lines.push(
        `*${CONFIG.BUSINESS_NAME}*`
    );

    lines.push("");

    lines.push(
        `*Pedido:* ${orderId}`
    );

    lines.push("");

    lines.push(
        "*PRODUCTOS*"
    );

    lines.push("");


    for (const item of cart.values()) {

        const product = getProductById(item.id);

        if (!product) continue;

        const quantity = Number(item.qty);

        const subtotal = product.price * quantity;

        lines.push(
            `• ${quantity} x ${product.title}`
        );

        lines.push(
            `  ${formatCLP(subtotal)}`
        );

    }


    lines.push("");

    lines.push(
        `*Subtotal:* ${formatCLP(cartSubtotal())}`
    );

    lines.push(
        `*Despacho:* ${formatCLP(deliveryCost())}`
    );

    lines.push(
        `*TOTAL:* ${formatCLP(cartTotal())}`
    );

    lines.push("");

    lines.push(
        "*DATOS DEL CLIENTE*"
    );

    lines.push(
        `Nombre: ${orderData.name || "No indicado"}`
    );

    lines.push(
        `Teléfono: ${orderData.phone || "No indicado"}`
    );

    lines.push(
        `Entrega: ${
            orderData.deliveryType === "delivery"
                ? "Delivery"
                : "Retiro en local"
        }`
    );


    if (orderData.deliveryType === "delivery") {

        lines.push(
            `Dirección: ${orderData.address || "No indicada"}`
        );

        if (orderData.receiver) {

            lines.push(
                `Recibe: ${orderData.receiver}`
            );

        }

    }


    const notesInput = document.getElementById(
        "orderNotes"
    );

    const notes = notesInput?.value.trim() ||
        orderData.notes;


    if (notes) {

        lines.push("");

        lines.push(
            `*Indicaciones:* ${notes}`
        );

    }


    lines.push("");

    lines.push(
        "Pedido sujeto a confirmación."
    );

    return lines.join("\n");

}


/* ==========================================================
   16. ABRIR WHATSAPP
========================================================== */

function openWhatsApp(validate = true) {

    if (validate && !validateCart()) {
        return false;
    }

    const message = buildWhatsAppMessage();

    const phone = cleanPhone(
        CONFIG.PHONE_E164
    );

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    const opened = window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

    return Boolean(opened);

}


/* ==========================================================
   17. NOTIFICACIONES
========================================================== */

function showToast(message, icon = "success") {

    if (typeof Swal !== "undefined") {

        Swal.fire({

            toast: true,

            position: "top-end",

            icon,

            title: message,

            showConfirmButton: false,

            timer: 2200,

            timerProgressBar: true

        });

    } else {

        console.log(message);

    }

}


/* ==========================================================
   18. ANIMACIÓN DEL CARRITO
========================================================== */

function animateCartButtons() {

    const buttons = [

        document.getElementById("btnCartTop"),

        document.getElementById("floatingCartBtn")

    ];

    buttons.forEach(button => {

        if (!button) return;

        button.classList.remove(
            "cart-bounce"
        );

        void button.offsetWidth;

        button.classList.add(
            "cart-bounce"
        );

        setTimeout(() => {

            button.classList.remove(
                "cart-bounce"
            );

        }, 500);

    });

}


/* ==========================================================
   19. EVENTOS DE CATEGORÍAS
========================================================== */

function wireCategoryFilters() {

    document.querySelectorAll(
        ".filter-btn[data-category]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                applyCategory(
                    button.dataset.category
                );

            }
        );

    });

}


/* ==========================================================
   20. EVENTOS DEL BUSCADOR
========================================================== */

function wireSearch() {

    const input = document.getElementById(
        "productSearch"
    );

    const clearButton = document.getElementById(
        "clearSearch"
    );

    if (input) {

        input.addEventListener(
            "input",
            event => {

                searchProducts(
                    event.target.value
                );

            }
        );

    }


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            () => {

                if (input) {
                    input.value = "";
                }

                searchProducts("");

                input?.focus();

            }
        );

    }

}


/* ==========================================================
   21. ABRIR CHECKOUT
========================================================== */

function openCheckout() {

    if (!validateCart()) return;

    const cartElement = document.getElementById(
        "cartOffcanvas"
    );

    const checkoutElement = document.getElementById(
        "checkoutOffcanvas"
    );

    if (!checkoutElement) return;

    const cartInstance =
        bootstrap.Offcanvas.getInstance(
            cartElement
        );

    cartInstance?.hide();


    const nameInput = document.getElementById(
        "customerName"
    );

    const phoneInput = document.getElementById(
        "customerPhone"
    );

    if (nameInput) {
        nameInput.value = orderData.name;
    }

    if (phoneInput) {
        phoneInput.value = orderData.phone;
    }


    updateCheckoutDeliveryFields();

    updateCheckoutTotal();


    const checkoutInstance =
        bootstrap.Offcanvas.getOrCreateInstance(
            checkoutElement
        );

    checkoutInstance.show();

}


/* ==========================================================
   22. ACTUALIZAR CAMPOS DELIVERY
========================================================== */

function updateCheckoutDeliveryFields() {

    const selected = document.querySelector(
        'input[name="deliveryType"]:checked'
    );

    const deliveryType =
        selected?.value || "retiro";

    orderData.deliveryType = deliveryType;

    const container = document.getElementById(
        "deliveryAddressContainer"
    );

    if (container) {

        container.hidden =
            deliveryType !== "delivery";

    }

    saveOrderData();

    updateCheckoutTotal();

    if (typeof renderCart === "function") {
        renderCart();
    }

}


/* ==========================================================
   23. ACTUALIZAR TOTAL DEL CHECKOUT
========================================================== */

function updateCheckoutTotal() {

    const totalElement = document.getElementById(
        "checkoutTotal"
    );

    if (totalElement) {

        totalElement.textContent =
            formatCLP(cartTotal());

    }

}


/* ==========================================================
   24. FINALIZAR PEDIDO
========================================================== */

function submitCheckout(event) {

    event?.preventDefault();

    if (!validateCart()) return;


    const name = document.getElementById(
        "customerName"
    )?.value.trim() || "";


    const phone = document.getElementById(
        "customerPhone"
    )?.value.trim() || "";


    const address = document.getElementById(
        "deliveryAddress"
    )?.value.trim() || "";


    if (name.length < 2) {

        showToast(
            "Ingresa tu nombre",
            "warning"
        );

        return;

    }


    if (cleanPhone(phone).length < 8) {

        showToast(
            "Ingresa un teléfono válido",
            "warning"
        );

        return;

    }


    if (
        orderData.deliveryType === "delivery" &&
        address.length < 5
    ) {

        showToast(
            "Ingresa una dirección válida",
            "warning"
        );

        return;

    }


    Object.assign(orderData, {

        name,

        phone,

        address

    });

    saveOrderData();

    openWhatsApp(false);

}


/* ==========================================================
   25. EVENTOS GENERALES
========================================================== */

function wireButtons() {

    document.getElementById(
        "btnGoCheckout"
    )?.addEventListener(
        "click",
        openCheckout
    );


    document.getElementById(
        "checkoutForm"
    )?.addEventListener(
        "submit",
        submitCheckout
    );


    document.getElementById(
        "btnClearCart"
    )?.addEventListener(
        "click",
        () => {

            if (typeof emptyCart === "function") {

                emptyCart();

            }

        }
    );


    document.querySelectorAll(
        'input[name="deliveryType"]'
    ).forEach(radio => {

        radio.addEventListener(
            "change",
            updateCheckoutDeliveryFields
        );

    });

}


/* ==========================================================
   26. INICIALIZACIÓN GENERAL
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadOrderData();

        wireCategoryFilters();

        wireSearch();

        wireButtons();

        updateCategoryUI();

        updateCartBadge();

        if (typeof renderMenu === "function") {

            renderMenu();

        }

        console.info(
            `${CONFIG.BUSINESS_NAME}: ${PRODUCTS.length} productos cargados.`
        );

    }
);