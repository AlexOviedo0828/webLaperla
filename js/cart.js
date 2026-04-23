function addToCart(productId) {
  const existing = cart.get(productId);

  if (!existing) {
    cart.set(productId, {
      id: productId,
      qty: 1,
    });
  } else {
    existing.qty += 1;
  }

  renderCart();
  animateCartButtons();

  const product = getProductById(productId);
  Swal.fire({
    icon: "success",
    title: "Agregado",
    text: `${product?.title ?? "Producto"} agregado al carrito`,
    timer: 900,
    showConfirmButton: false,
  });
}

function removeOne(productId) {
  const item = cart.get(productId);
  if (!item) return;

  if (item.qty <= 1) {
    cart.delete(productId);
  } else {
    item.qty -= 1;
  }

  renderCart();
}

function renderCart() {
  const list = $("#cartList");
  const subtotalEl = $("#cartSubtotal");
  const feeEl = $("#deliveryFee");
  const totalEl = $("#cartTotal");
  const sendBtn = $("#btnSendOrder");
  const clearBtn = $("#btnClearCart");

  if (!list || !subtotalEl || !feeEl || !totalEl) return;

  subtotalEl.textContent = formatCLP(cartSubtotal());
  feeEl.textContent = formatCLP(deliveryCost());
  totalEl.textContent = formatCLP(cartTotal());

  updateCartBadge();

  if (cart.size === 0) {
    list.innerHTML = `<li class="list-group-item text-muted">Aún no agregas nada</li>`;
    if (sendBtn) sendBtn.disabled = true;
    if (clearBtn) clearBtn.disabled = true;
    return;
  }

  if (sendBtn) sendBtn.disabled = false;
  if (clearBtn) clearBtn.disabled = false;

  const html = [];

  for (const [key, item] of cart.entries()) {
    const product = getProductById(item.id);
    if (!product) continue;

    const lineTotal = Number(product.price || 0) * Number(item.qty || 0);

    html.push(`
      <li class="list-group-item">
        <div class="d-flex align-items-start gap-3">
          <img
            class="cart-thumb"
            src="${safeImage(product)}"
            alt="${escapeHTML(product.title)}"
            loading="lazy"
            onerror="this.onerror=null;this.src='${CONFIG.FALLBACK_IMG}';"
          />
          <div class="flex-grow-1">
            <div class="fw-semibold">${escapeHTML(product.title)}</div>
            <div class="text-muted small">Unitario: <strong>${formatCLP(product.price)}</strong></div>
            <div class="text-muted small">Cantidad: ${item.qty}</div>
            <div class="small fw-bold">${formatCLP(lineTotal)}</div>
          </div>
          <div class="d-flex flex-column gap-2">
            <button class="btn btn-outline-light btn-sm" data-plus="${key}" title="Agregar uno">
              <i class="bi bi-plus"></i>
            </button>
            <button class="btn btn-outline-secondary btn-sm" data-minus="${key}" title="Quitar uno">
              <i class="bi bi-dash"></i>
            </button>
          </div>
        </div>
      </li>
    `);
  }

  list.innerHTML = html.join("");

  list.onclick = (event) => {
    const plus = event.target.closest("[data-plus]");
    if (plus) {
      addToCart(plus.getAttribute("data-plus"));
      return;
    }

    const minus = event.target.closest("[data-minus]");
    if (minus) {
      removeOne(minus.getAttribute("data-minus"));
    }
  };
}