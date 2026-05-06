const CONFIG = {
    BUSINESS_NAME: "Fábrica de Empanadas La Perla",
    CITY: "Antofagasta",
    PHONE_E164: "+56961589674",
    FALLBACK_IMG: "assets/img/logo.png",
    DELIVERY_FEE: 2000,
};
const PRODUCTS = [
    // 🟡 HORNEADAS
    {
        id: "horneada-pino",
        title: "Empanada de Pino",
        tag: "Horneada",
        category: "horneadas",
        price: 2000,
        desc: "Nuestra empanada de pino destaca por su relleno generoso, sabor casero y ese toque tradicional que conquista desde el primer bocado.",
        img: "assets/empanadasHorno/pino.jpeg",
    },
    {
        id: "horneada-pollo-queso",
        title: "Pollo Queso",
        tag: "Horneada",
        category: "horneadas",
        price: 2000,
        desc: "Pollo sazonado con queso mozzarella fundido en una masa dorada y equilibrada.",
        img: "assets/empanadasHorno/pollo.jpeg",
    },
    {
        id: "horneada-mechada-queso",
        title: "Carne Mechada Queso",
        tag: "Horneada",
        category: "horneadas",
        price: 2200,
        desc: "Carne mechada cocinada lentamente con queso fundido, suave y llena de sabor.",
        img: "assets/empanadasHorno/mechada.jpeg",
    },
    {
        id: "horneada-napolitana",
        title: "Napolitana",
        tag: "Horneada",
        category: "horneadas",
        price: 1800,
        desc: "Jamón, queso y salsa de tomate en una mezcla suave y aromática.",
        img: "assets/empanadasHorno/napolitana.jpeg",
    },
    {
        id: "horneada-mixta",
        title: "Empanada Mixta",
        tag: "Horneada",
        category: "horneadas",
        price: 2500,
        desc: "Mezcla de pollo y carne en un relleno abundante y sabroso.",
        img: "assets/empanadasHorno/mixta.jpeg",
    },
    {
        id: "horneada-tocino",
        title: "Tocino",
        tag: "Horneada",
        category: "horneadas",
        price: 2800,
        desc: "Tocino dorado con queso fundido, intenso y equilibrado.",
        img: "assets/empanadasHorno/tocino.jpeg",
    },
    {
        id: "horneada-pastel-choclo",
        title: "Pastel de Choclo",
        tag: "Horneada",
        category: "horneadas",
        price: 3500,
        desc: "Versión en empanada del clásico pastel de choclo chileno.",
        img: "assets/empanadasHorno/pastechoclo.jpeg",
    },
    {
        id: "horneada-chaparrita",
        title: "Chaparrita",
        tag: "Horneada",
        category: "horneadas",
        price: 1800,
        desc: "Masa dorada con relleno clásico de salchicha.",
        img: "assets/empanadasHorno/chaparrita.jpeg",
    },
    {
        id: "horneada-dobladita-queso",
        title: "Dobladita con queso",
        tag: "Horneada",
        category: "horneadas",
        price: 1000,
        desc: "Dobladita con queso derretido.",
        img: "assets/empanadasHorno/dobladita.jpeg",
    },
    {
        id: "horneada-dobladita-sin-queso",
        title: "Dobladita sin queso",
        tag: "Horneada",
        category: "horneadas",
        price: 500,
        desc: "Dobladita tradicional sin queso.",
        img: "assets/empanadasHorno/dobladitasinqueso.jpeg",
    },

    // 🔴 FRITAS
    {
        id: "frita-camaron-queso",
        title: "Camarón Queso",
        tag: "Frita",
        category: "fritas",
        price: 3200,
        desc: "Camarones salteados con queso fundido en masa crujiente.",
        img: "assets/empanadasfritas/fritacamaron.png",
    },
    {
        id: "frita-queso",
        title: "Queso",
        tag: "Frita",
        category: "fritas",
        price: 2000,
        desc: "Queso fundido en una empanada dorada y crujiente.",
        img: "assets/empanadasfritas/queso-solo-fritas.jpg",
    },
    {
        id: "frita-jamon-queso",
        title: "Jamón Queso",
        tag: "Frita",
        category: "fritas",
        price: 2000,
        desc: "Jamón y queso derretido en una masa crujiente.",
        img: "assets/empanadasfritas/jamonqueso.jpg",
    },
    {
        id: "frita-pollo-queso",
        title: "Pollo Queso",
        tag: "Frita",
        category: "fritas",
        price: 2300,
        desc: "Pollo sazonado con queso fundido.",
        img: "assets/empanadasfritas/Receta-empanadas-de-mariscos-chilenos.jpg",
    },
    {
        id: "frita-carne-queso",
        title: "Carne Queso",
        tag: "Frita",
        category: "fritas",
        price: 2500,
        desc: "Carne sazonada con queso derretido.",
        img: "assets/empanadasfritas/Empanadamechadaqueso2_1000x.webp",
    },
    {
        id: "frita-tocino-queso",
        title: "Tocino Queso",
        tag: "Frita",
        category: "fritas",
        price: 2500,
        desc: "Tocino dorado con queso fundido.",
        img: "assets/empanadasfritas/close-up-of-a-fried-empanada-with-lime-wedges-and-a-small-bowl-of-red-sauce-on-parchment-paper-photo.jpg",
    },
    {
        id: "frita-choclo-queso",
        title: "Choclo Queso",
        tag: "Frita",
        category: "fritas",
        price: 2500,
        desc: "Choclo dulce con queso fundido.",
        img: "assets/empanadasfritas/bajar-Editadas_Sazon-032_57b45f2a-573e-4139-b10b-d7234248f468.webp",
    },
    {
        id: "frita-champinon-queso",
        title: "Champiñón Queso",
        tag: "Frita",
        category: "fritas",
        price: 2500,
        desc: "Champiñones salteados con queso fundido.",
        img: "assets/empanadasfritas/empanadas-fritas-de-pollo-3193-0.jpg",
    },

    // 🟢 BEBIDAS
    {
        id: "bebida-cocacola-light",
        title: "Coca-Cola Light",
        tag: "Bebida",
        category: "bebidas",
        price: 1300,
        desc: "Coca-Cola Light en lata.",
        img: "assets/bebidas/cocacolaligth.jpeg",
    },
    {
        id: "bebida-agua-gas",
        title: "Agua con Gas",
        tag: "Bebida",
        category: "bebidas",
        price: 1300,
        desc: "Agua con gas.",
        img: "assets/bebidas/aguacongas.jpeg",
    },
    {
        id: "bebida-agua-500ml",
        title: "Agua 500ml",
        tag: "Bebida",
        category: "bebidas",
        price: 1500,
        desc: "Agua mineral 500ml.",
        img: "assets/bebidas/agua.jpeg",
    },
    {
        id: "bebida-monster",
        title: "Monster",
        tag: "Bebida",
        category: "bebidas",
        price: 2500,
        desc: "Bebida energética.",
        img: "assets/bebidas/monster.jpeg",
    },
    // 🔵 POR MAYOR
    {
        id: "mayor-pino",
        title: "Empanada de Pino (Mayor)",
        tag: "Por mayor",
        category: "mayor",
        price: 1400,
        desc: "Empanada de pino en formato por mayor, con relleno abundante y sabor casero ideal para pedidos grandes.",
        img: "assets/empanadasHorno/pino.jpeg",
    },
    {
        id: "mayor-pollo",
        title: "Empanada de Pollo (Mayor)",
        tag: "Por mayor",
        category: "mayor",
        price: 1400,
        desc: "Empanada de pollo sazonado con excelente equilibrio de sabor, pensada para pedidos en volumen.",
        img: "assets/empanadasHorno/pollo.jpeg",
    },
    {
        id: "mayor-mechada",
        title: "Empanada de Mechada (Mayor)",
        tag: "Por mayor",
        category: "mayor",
        price: 1700,
        desc: "Carne mechada cocinada lentamente, ideal para pedidos grandes con sabor intenso y casero.",
        img: "assets/empanadasHorno/mechada.jpeg",
    },
    {
        id: "mayor-chaparrita",
        title: "Empanada de Chaparrita (Mayor)",
        tag: "Por mayor",
        category: "mayor",
        price: 1400,
        desc: "Chaparrita en formato por mayor, práctica y sabrosa para pedidos múltiples.",
        img: "assets/empanadasHorno/chaparrita.jpeg",
    },
    {
        id: "mayor-napolitana",
        title: "Empanada Napolitana (Mayor)",
        tag: "Por mayor",
        category: "mayor",
        price: 1400,
        desc: "Jamón, queso y tomate en versión por mayor, perfecta para eventos o pedidos grandes.",
        img: "assets/empanadasHorno/napolitana.jpeg",
    },

];





const $ = (selector) => document.querySelector(selector);

function formatCLP(value) {
<<<<<<< HEAD

    return Number(value || 0).toLocaleString("es-CL", {

        style: "currency",

        currency: "CLP",

        maximumFractionDigits: 0,

    });

}

function cleanPhone(value) {

    return String(value || "").replace(/[^\d]/g, "");

}

function escapeHTML(text) {

    return String(text ?? "")

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}

function safeImage(product) {

    return product?.img || CONFIG.FALLBACK_IMG;

}

// ================================

// PRODUCTOS

// ================================

function getProductById(id) {

    return PRODUCTS.find((p) => p.id === id);

}

function categoryLabel(category) {

    const map = {

        all: "Todo",

        horneadas: "Empanadas Horneadas",

        fritas: "Empanadas Fritas",

        mayor: "Empanadas por Mayor",

        bebidas: "Bebidas",

    };

    return map[category] ?? "Todo";

}

// ================================

// ESTADO GLOBAL

// ================================

const cart = new Map();

let currentCategory = "all";

const orderData = {

    deliveryType: "retiro",

    name: "",

    phone: "",

    address: "",

    receiver: "",

    notes: "",

};

// ================================

// ORDER DATA

// ================================

function resetOrderData() {

    orderData.deliveryType = "retiro";

    orderData.name = "";

    orderData.phone = "";

    orderData.address = "";

    orderData.receiver = "";

    orderData.notes = "";

}

function clearAllAfterSend() {

    cart.clear();

    resetOrderData();

    renderCart();

}

// ================================

// CART

// ================================

function cartSubtotal() {

    let total = 0;

    for (const item of cart.values()) {

        const product = getProductById(item.id);

        if (!product) continue;

        total += Number(product.price || 0) * Number(item.qty || 0);

    }

    return total;

}

function deliveryCost() {

    return orderData.deliveryType === "delivery"

        ?
        CONFIG.DELIVERY_FEE

        :
        0;

}

function cartTotal() {

    return cartSubtotal() + deliveryCost();

}

function cartCount() {

    let count = 0;

    for (const item of cart.values()) {

        count += Number(item.qty || 0);

    }

    return count;

}

// ================================

// VALIDACIÓN MAYORISTA

// ================================

function validateWholesaleMinimum() {

    let wholesaleQty = 0;

    for (const item of cart.values()) {

        const product = getProductById(item.id);

        if (!product) continue;

        if (product.category === "mayor") {

            wholesaleQty += Number(item.qty || 0);

        }

    }

    return wholesaleQty >= 20 || wholesaleQty === 0;

}

// ================================

// BADGES CARRITO

// ================================

function updateCartBadge() {

    const topBadge = document.getElementById("cartCountBadge");

    const floatingBadge = document.getElementById("floatingCartBadge");

=======
    return Number(value || 0).toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    });
}

function getProductById(id) {
    return PRODUCTS.find((p) => p.id === id);
}

function safeImage(product) {
    return product?.img || CONFIG.FALLBACK_IMG;
}

function cleanPhone(value) {
    return String(value || "").replace(/[^\d]/g, "");
}

function escapeHTML(text) {
    return String(text ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function categoryLabel(category) {
    const map = {
        all: "Todo",
        horneadas: "Empanadas Horneadas",
        fritas: "Empanadas Fritas",
        mayor: "Empanadas por mayor",
        bebidas: "Bebidas",
    };
    return map[category] ?? "Todo";
}

const cart = new Map();
let currentCategory = "all";

const orderData = {
    deliveryType: "retiro",
    name: "",
    phone: "",
    address: "",
    receiver: "",
    notes: "",
};

function resetOrderData() {
    orderData.deliveryType = "retiro";
    orderData.name = "";
    orderData.phone = "";
    orderData.address = "";
    orderData.receiver = "";
    orderData.notes = "";
}

function clearAllAfterSend() {
    cart.clear();
    resetOrderData();
    renderCart();
}

function cartSubtotal() {
    let total = 0;
    for (const item of cart.values()) {
        const product = getProductById(item.id);
        if (!product) continue;
        total += Number(product.price || 0) * Number(item.qty || 0);
    }
    return total;
}

function deliveryCost() {
    return orderData.deliveryType === "delivery" ? CONFIG.DELIVERY_FEE : 0;
}

function cartTotal() {
    return cartSubtotal() + deliveryCost();
}

function cartCount() {
    let count = 0;
    for (const item of cart.values()) {
        count += Number(item.qty || 0);
    }
    return count;
}

function updateCartBadge() {
    const topBadge = document.getElementById("cartCountBadge");
    const floatingBadge = document.getElementById("floatingCartBadge");
>>>>>>> ef36872c9d2ac341d7a02e326bdfd3d710664ecc
    const floatingBtn = document.getElementById("floatingCartBtn");

    const count = cartCount();

    if (topBadge) {
<<<<<<< HEAD

        topBadge.textContent = String(count);

        topBadge.style.display = count > 0 ? "grid" : "none";

    }

    if (floatingBadge) {

        floatingBadge.textContent = String(count);

        floatingBadge.style.display = count > 0 ? "grid" : "none";

    }

    if (floatingBtn) {

        floatingBtn.classList.toggle("cart-pulse", count > 0);

    }

}

// ================================

// FILTROS

// ================================

function filteredProducts() {

    if (currentCategory === "all") return PRODUCTS;

    return PRODUCTS.filter((p) => p.category === currentCategory);

}

function updateCategoryUI(category) {

    const subtitle = $("#menuSubtitle");

    if (subtitle) {

        subtitle.textContent = `Mostrando: ${categoryLabel(category)}`;

    }

    document.querySelectorAll(".filter-btn").forEach((btn) => {

        btn.classList.toggle(

            "active",

            btn.dataset.category === category

        );

    });

}

function applyCategory(category, doScroll = false) {

    currentCategory = category;

    updateCategoryUI(category);

    renderMenu();

    if (doScroll) {

        document.querySelector("#menu")?.scrollIntoView({

            behavior: "smooth",

            block: "start",

        });

    }

}

// ================================

// OFFCANVAS

// ================================

function getCartOffcanvasEl() {

    return document.getElementById("cartOffcanvas");

}

function closeCartOffcanvas() {

    return new Promise((resolve) => {

        const el = getCartOffcanvasEl();

        if (!el || typeof bootstrap === "undefined") {

            return resolve();

        }

        const instance = bootstrap.Offcanvas.getInstance(el);

        if (!instance) return resolve();

        const done = () => {

            el.removeEventListener("hidden.bs.offcanvas", done);

            resolve();

        };

        el.addEventListener("hidden.bs.offcanvas", done, {

            once: true,

        });

        instance.hide();

    });

}

// ================================

// FORMULARIO PEDIDO

// ================================

function buildOrderFormHTML() {

    return `

    

    <div class="text-start">

        <div class="mb-3">

            <label class="form-label fw-semibold">

                Tipo de entrega

            </label>

            <div class="d-flex flex-column gap-2">

                <label class="form-check">

                    <input 

                        class="form-check-input" 

                        type="radio" 

                        name="deliveryType" 

                        value="retiro"

                        ${orderData.deliveryType === "retiro" ? "checked" : ""}

                    >

                    <span class="form-check-label">

                        Retiro en la Fábrica

                    </span>

                </label>

                <label class="form-check">

                    <input 

                        class="form-check-input" 

                        type="radio" 

                        name="deliveryType" 

                        value="delivery"

                        ${orderData.deliveryType === "delivery" ? "checked" : ""}

                    >

                    <span class="form-check-label">

                        Delivery (+ ${formatCLP(CONFIG.DELIVERY_FEE)})

                    </span>

                </label>

            </div>

        </div>

    </div>

    `;

}

// ================================

// WHATSAPP

// ================================

function buildWhatsAppMessage() {

    const lines = [];

    lines.push(`Hola, quiero pedir en ${CONFIG.BUSINESS_NAME}`);

    lines.push(`Ciudad: ${CONFIG.CITY}`);

    lines.push("");

    lines.push(

        `Entrega: ${

            orderData.deliveryType === "delivery"

                ? "Delivery"

                : "Retiro"

        }`

    );

    lines.push(`Nombre: ${orderData.name}`);

    lines.push(`Contacto: ${orderData.phone}`);

    if (orderData.deliveryType === "delivery") {

        lines.push(`Recibe: ${orderData.receiver}`);

        lines.push(`Dirección: ${orderData.address}`);

    }

    if (orderData.notes) {

        lines.push(`Notas: ${orderData.notes}`);

    }

    lines.push("");

    lines.push("Pedido:");

    for (const item of cart.values()) {

        const product = getProductById(item.id);

        if (!product) continue;

        lines.push(

            `- ${item.qty} x ${product.title} (${formatCLP(product.price)})`

        );

    }

    lines.push("");

    lines.push(`Subtotal: ${formatCLP(cartSubtotal())}`);

    if (deliveryCost() > 0) {

        lines.push(`Despacho: ${formatCLP(deliveryCost())}`);

    }

    lines.push(`Total: ${formatCLP(cartTotal())}`);

    return encodeURIComponent(lines.join("\n"));

}

function openWhatsApp(withCart) {

    const phone = cleanPhone(CONFIG.PHONE_E164);

    if (!phone) {

        Swal.fire({

            icon: "warning",

            title: "Número inválido",

            text: "Configura correctamente el teléfono.",

        });

        return;

    }

    const message =

        withCart && cart.size > 0

        ?
        buildWhatsAppMessage()

        :
        encodeURIComponent(

            `Hola, quiero pedir en ${CONFIG.BUSINESS_NAME}`

        );

    window.open(

        `https://wa.me/${phone}?text=${message}`,

        "_blank"

    );

}

// ================================

// BOTONES

// ================================

function wireButtons() {

    const send = $("#btnSendOrder");

    const clear = $("#btnClearCart");

    if (send) {

        send.addEventListener("click", async () => {

            if (cart.size === 0) {

                Swal.fire({

                    icon: "info",

                    title: "Carrito vacío",

                    text: "Agrega productos antes de continuar.",

                    confirmButtonColor: "#f59e0b",

                });

                return;

            }

            if (!validateWholesaleMinimum()) {

                Swal.fire({

                    icon: "warning",

                    title: "Pedido mínimo por mayor 🥟",

                    html: `

                        <div style="font-size:18px; line-height:1.8;">

                            Los pedidos por mayor requieren un mínimo de 

                            <strong>20 unidades</strong>.

                        </div>

                    `,

                    confirmButtonColor: "#f59e0b",

                });

                return;

=======
        topBadge.textContent = String(count);
        topBadge.style.display = count > 0 ? "grid" : "none";
    }

    if (floatingBadge) {
        floatingBadge.textContent = String(count);
        floatingBadge.style.display = count > 0 ? "grid" : "none";
    }

    if (floatingBtn) {
        floatingBtn.classList.toggle("cart-pulse", count > 0);
    }
}

function filteredProducts() {
    if (currentCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === currentCategory);
}

function updateCategoryUI(category) {
    const subtitle = $("#menuSubtitle");
    if (subtitle) subtitle.textContent = `Mostrando: ${categoryLabel(category)}`;

    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.category === category);
    });
}

function applyCategory(category, doScroll = false) {
    currentCategory = category;
    updateCategoryUI(category);
    renderMenu();

    if (doScroll) {
        document.querySelector("#menu")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}

function getCartOffcanvasEl() {
    return document.getElementById("cartOffcanvas");
}

function closeCartOffcanvas() {
    return new Promise((resolve) => {
        const el = getCartOffcanvasEl();
        if (!el || typeof bootstrap === "undefined") return resolve();

        const instance = bootstrap.Offcanvas.getInstance(el);
        if (!instance) return resolve();

        const done = () => {
            el.removeEventListener("hidden.bs.offcanvas", done);
            resolve();
        };

        el.addEventListener("hidden.bs.offcanvas", done, {
            once: true
        });
        instance.hide();
    });
}

function buildOrderFormHTML() {
    return `
      <div class="text-start">
        <div class="mb-3">
          <label class="form-label fw-semibold">Tipo de entrega</label>
          <div class="d-flex flex-column gap-2">
            <label class="form-check">
              <input class="form-check-input" type="radio" name="deliveryType" value="retiro" ${
                orderData.deliveryType === "retiro" ? "checked" : ""
              }>
              <span class="form-check-label">Retiro en la Fabrica</span>
            </label>
            <label class="form-check">
              <input class="form-check-input" type="radio" name="deliveryType" value="delivery" ${
                orderData.deliveryType === "delivery" ? "checked" : ""
              }>
              <span class="form-check-label">Delivery a domicilio (+ ${formatCLP(CONFIG.DELIVERY_FEE)})</span>
            </label>
          </div>
        </div>
  
        <div class="mb-3">
          <label class="form-label fw-semibold">Datos del cliente</label>
          <input id="od_name" class="form-control mb-2" placeholder="Tu nombre" value="${escapeHTML(orderData.name)}">
          <input id="od_phone" class="form-control" placeholder="Teléfono de contacto" value="${escapeHTML(orderData.phone)}">
        </div>
  
        <div id="deliveryFields" class="mb-3" style="${orderData.deliveryType === "delivery" ? "" : "display:none;"}">
          <label class="form-label fw-semibold">Datos delivery</label>
          <input id="od_receiver" class="form-control mb-2" placeholder="Nombre de quien recibe" value="${escapeHTML(orderData.receiver)}">
          <input id="od_address" class="form-control" placeholder="Dirección de entrega" value="${escapeHTML(orderData.address)}">
        </div>
  
        <div class="mb-3">
          <label class="form-label fw-semibold">Notas (opcional)</label>
          <textarea id="od_notes" class="form-control" rows="3" placeholder="Ej: Calientes o frias ">${escapeHTML(orderData.notes)}</textarea>
        </div>
  
        <div class="p-3 rounded-3 bg-light border">
          <div class="d-flex justify-content-between">
            <span class="text-muted">Subtotal:</span>
            <strong id="od_subtotal">${formatCLP(cartSubtotal())}</strong>
          </div>
          <div class="d-flex justify-content-between">
            <span class="text-muted">Despacho:</span>
            <strong id="od_fee">${formatCLP(deliveryCost())}</strong>
          </div>
          <div class="d-flex justify-content-between mt-1">
            <span class="fw-semibold">Total:</span>
            <strong id="od_total">${formatCLP(cartTotal())}</strong>
          </div>
        </div>
      </div>
    `;
}

function updateOrderModalTotals() {
    const sub = document.getElementById("od_subtotal");
    const fee = document.getElementById("od_fee");
    const total = document.getElementById("od_total");

    if (sub) sub.textContent = formatCLP(cartSubtotal());
    if (fee) fee.textContent = formatCLP(deliveryCost());
    if (total) total.textContent = formatCLP(cartTotal());
}

async function openOrderForm() {
    const result = await Swal.fire({
        title: "Datos del pedido",
        html: buildOrderFormHTML(),
        showCancelButton: true,
        confirmButtonText: "Enviar por WhatsApp",
        cancelButtonText: "Cancelar",
        focusConfirm: false,
        didOpen: () => {
            document.querySelectorAll('input[name="deliveryType"]').forEach((radio) => {
                radio.addEventListener("change", () => {
                    const value = document.querySelector('input[name="deliveryType"]:checked')?.value || "retiro";
                    orderData.deliveryType = value === "delivery" ? "delivery" : "retiro";

                    const deliveryFields = document.getElementById("deliveryFields");
                    if (deliveryFields) {
                        deliveryFields.style.display = orderData.deliveryType === "delivery" ? "" : "none";
                    }

                    updateOrderModalTotals();
                    renderCart();
                });
            });
        },
        preConfirm: () => {
            orderData.name = document.getElementById("od_name")?.value?.trim() || "";
            orderData.phone = document.getElementById("od_phone")?.value?.trim() || "";
            orderData.receiver = document.getElementById("od_receiver")?.value?.trim() || "";
            orderData.address = document.getElementById("od_address")?.value?.trim() || "";
            orderData.notes = document.getElementById("od_notes")?.value?.trim() || "";

            if (!orderData.name) {
                Swal.showValidationMessage("Escribe tu nombre.");
                return false;
            }

            if (!orderData.phone) {
                Swal.showValidationMessage("Escribe tu teléfono.");
                return false;
            }

            if (orderData.deliveryType === "delivery") {
                if (!orderData.receiver) {
                    Swal.showValidationMessage("Escribe el nombre de quien recibe.");
                    return false;
                }
                if (!orderData.address) {
                    Swal.showValidationMessage("Escribe la dirección de entrega.");
                    return false;
                }
            }

            return true;
        },
    });

    if (!result.isConfirmed) return;

    openWhatsApp(true);
    clearAllAfterSend();

    setTimeout(() => {
        Swal.fire({
            icon: "success",
            title: "¡Gracias por tu compra! 🥟",
            text: "Tu pedido fue preparado para enviarse por WhatsApp.",
            confirmButtonText: "Listo",
        });
    }, 250);
}

function buildWhatsAppMessage() {
    const lines = [];
    lines.push(`Hola, quiero pedir en ${CONFIG.BUSINESS_NAME}`);
    lines.push(`Ciudad: ${CONFIG.CITY}`);
    lines.push("");
    lines.push(`Entrega: ${orderData.deliveryType === "delivery" ? "Delivery a domicilio" : "Retiro en tienda"}`);
    lines.push(`Nombre: ${orderData.name}`);
    lines.push(`Contacto: ${orderData.phone}`);

    if (orderData.deliveryType === "delivery") {
        lines.push(`Recibe: ${orderData.receiver}`);
        lines.push(`Dirección: ${orderData.address}`);
    }

    if (orderData.notes) {
        lines.push(`Notas: ${orderData.notes}`);
    }

    lines.push("");
    lines.push("Pedido:");

    for (const item of cart.values()) {
        const product = getProductById(item.id);
        if (!product) continue;
        lines.push(`- ${item.qty} x ${product.title} (${formatCLP(product.price)} c/u)`);
    }

    lines.push("");
    lines.push(`Subtotal: ${formatCLP(cartSubtotal())}`);
    if (deliveryCost() > 0) lines.push(`Despacho: ${formatCLP(deliveryCost())}`);
    lines.push(`Total aprox: ${formatCLP(cartTotal())}`);

    return encodeURIComponent(lines.join("\n"));
}

function openWhatsApp(withCart) {
    const phone = cleanPhone(CONFIG.PHONE_E164);

    if (!phone) {
        Swal.fire({
            icon: "warning",
            title: "Falta el número de WhatsApp",
            text: "Edita CONFIG.PHONE_E164 en js/app.js",
        });
        return;
    }

    const message =
        withCart && cart.size > 0 ?
        buildWhatsAppMessage() :
        encodeURIComponent(`Hola, quiero pedir en ${CONFIG.BUSINESS_NAME}`);

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function wireButtons() {
    const send = $("#btnSendOrder");
    const clear = $("#btnClearCart");

    if (send) {
        send.addEventListener("click", async () => {
            if (cart.size === 0) {
                Swal.fire({
                    icon: "info",
                    title: "Carrito vacío",
                    text: "Agrega un producto primero.",
                });
                return;
>>>>>>> ef36872c9d2ac341d7a02e326bdfd3d710664ecc
            }

            await closeCartOffcanvas();

            setTimeout(async () => {
<<<<<<< HEAD

                await openOrderForm();

            }, 80);

        });

    }

    if (clear) {

        clear.addEventListener("click", async () => {

            if (cart.size === 0) return;

            const result = await Swal.fire({

                icon: "warning",

                title: "¿Vaciar carrito?",

                text: "Se eliminarán todos los productos.",

                showCancelButton: true,

                confirmButtonText: "Sí, vaciar",

                cancelButtonText: "Cancelar",

                confirmButtonColor: "#dc3545",

            });

            if (result.isConfirmed) {

                cart.clear();

                renderCart();

                Swal.fire({

                    icon: "success",

                    title: "Listo",

                    text: "Carrito vaciado.",

                    timer: 900,

                    showConfirmButton: false,

                });

            }

        });

    }

}

// ================================

// MODAL IMÁGENES

// ================================

function wireImageModal() {

    const modalEl = document.getElementById("imageModal");

=======
                await openOrderForm();
            }, 80);
        });
    }

    if (clear) {
        clear.addEventListener("click", async () => {
            if (cart.size === 0) return;

            const result = await Swal.fire({
                icon: "warning",
                title: "¿Vaciar carrito?",
                text: "Se eliminarán todos los productos.",
                showCancelButton: true,
                confirmButtonText: "Sí, vaciar",
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#dc3545",
            });

            if (result.isConfirmed) {
                cart.clear();
                renderCart();
                Swal.fire({
                    icon: "success",
                    title: "Listo",
                    text: "Carrito vaciado.",
                    timer: 800,
                    showConfirmButton: false,
                });
            }
        });
    }
}

function wireImageModal() {
    const modalEl = document.getElementById("imageModal");
>>>>>>> ef36872c9d2ac341d7a02e326bdfd3d710664ecc
    if (!modalEl || typeof bootstrap === "undefined") return;

    const modal = new bootstrap.Modal(modalEl);

    document.addEventListener("click", (event) => {
<<<<<<< HEAD

        const img = event.target.closest(".product-img");

        if (!img) return;

        const title = img.dataset.title || "";

        const src = img.dataset.img || "";

        const modalTitle = document.getElementById("imageModalTitle");

        const modalImg = document.getElementById("imageModalImg");

        if (modalTitle) modalTitle.textContent = title;

        if (modalImg) modalImg.src = src;

        modal.show();

    });

}

// ================================

// FILTROS BOTONES

// ================================

function wireCategoryFilters() {

    document

        .querySelectorAll(".filter-btn[data-category]")

        .forEach((btn) => {

            btn.addEventListener("click", () => {

                const category =

                    btn.dataset.category || "all";

                applyCategory(category, true);

            });

        });

    updateCategoryUI(currentCategory);

}

// ================================

// ANIMACIONES

// ================================

function animateCartButtons() {

    const topBtn = document.getElementById("btnCartTop");

    const floatingBtn = document.getElementById("floatingCartBtn");

    const topBadge = document.getElementById("cartCountBadge");

    const floatingBadge = document.getElementById("floatingCartBadge");

    [topBtn, floatingBtn].forEach((el) => {

        if (!el) return;

        el.classList.remove("cart-bounce");

        void el.offsetWidth;

        el.classList.add("cart-bounce");

    });

    [topBadge, floatingBadge].forEach((el) => {

        if (!el) return;

        el.classList.remove("badge-pop");

        void el.offsetWidth;

        el.classList.add("badge-pop");

    });

}

// ================================

// INIT APP

// ================================

document.addEventListener("DOMContentLoaded", () => {

    Swal.fire({

        icon: "info",

        title: "Pedidos por Mayor ",

        html: `

            <div style="font-size:18px; line-height:1.9;">

                Los pedidos por mayor se realizan desde 

                <strong>20 empanadas</strong>.

                <br><br>

                Puedes armarlas <strong>surtidas</strong>.

                <br><br>

                Ideal para almacenes, reuniones y eventos.

            </div>

        `,

        confirmButtonText: "Ver menú",

        confirmButtonColor: "#f59e0b",

        backdrop: "rgba(0,0,0,0.65)",

        background: "#fffdf8",

    });

    renderMenu();

    renderCart();

    wireButtons();

    wireImageModal();

    wireCategoryFilters();

    updateCartBadge();

});
=======
        const img = event.target.closest(".product-img");
        if (!img) return;

        const title = img.dataset.title || "";
        const src = img.dataset.img || "";

        const modalTitle = document.getElementById("imageModalTitle");
        const modalImg = document.getElementById("imageModalImg");

        if (modalTitle) modalTitle.textContent = title;
        if (modalImg) modalImg.src = src;

        modal.show();
    });
}

function wireCategoryFilters() {
    document.querySelectorAll(".filter-btn[data-category]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const category = btn.dataset.category || "all";
            applyCategory(category, true);
        });
    });

    updateCategoryUI(currentCategory);
}

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    renderCart();
    wireButtons();
    wireImageModal();
    wireCategoryFilters();
    updateCartBadge();
});

function animateCartButtons() {
    const topBtn = document.getElementById("btnCartTop");
    const floatingBtn = document.getElementById("floatingCartBtn");
    const topBadge = document.getElementById("cartCountBadge");
    const floatingBadge = document.getElementById("floatingCartBadge");

    [topBtn, floatingBtn].forEach((el) => {
        if (!el) return;
        el.classList.remove("cart-bounce");
        void el.offsetWidth;
        el.classList.add("cart-bounce");
    });

    [topBadge, floatingBadge].forEach((el) => {
        if (!el) return;
        el.classList.remove("badge-pop");
        void el.offsetWidth;
        el.classList.add("badge-pop");
    });
}
>>>>>>> ef36872c9d2ac341d7a02e326bdfd3d710664ecc
