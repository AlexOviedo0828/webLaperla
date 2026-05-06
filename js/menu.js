function renderMenu() {
    const grid = $("#menuGrid");
    if (!grid) return;

    const items = filteredProducts();

    grid.innerHTML = items
        .map(
            (product, index) => `
          <div data-aos="fade-up" data-aos-delay="${Math.min(index * 60, 360)}">
            <div class="card h-100 shadow-sm">
              <img
                src="${safeImage(product)}"
                class="card-img-top product-img"
                alt="${escapeHTML(product.title)}"
                loading="lazy"
                data-title="${escapeHTML(product.title)}"
                data-img="${safeImage(product)}"
                onerror="this.onerror=null;this.src='${CONFIG.FALLBACK_IMG}';"
              />
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
                  <h5 class="card-title mb-0">${escapeHTML(product.title)}</h5>
                  ${product.tag ? `<span class="badge bg-warning text-dark">${escapeHTML(product.tag)}</span>` : ""}
                </div>
  
                <p class="card-text small text-muted mb-2">${escapeHTML(product.desc)}</p>
  
                <div class="mt-auto d-flex justify-content-between align-items-center">
                  <span class="fw-bold">${formatCLP(product.price)}</span>
                  <button class="btn btn-warning btn-sm fw-semibold" data-add="${product.id}">
                    <i class="bi bi-cart-plus"></i> Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        `
        )
        .join("");

    grid.onclick = (event) => {
        const btn = event.target.closest("[data-add]");
        if (!btn) return;

        const productId = btn.getAttribute("data-add");
        const product = getProductById(productId);
        if (!product) return;

        addToCart(productId);
    };

    if (window.AOS && typeof AOS.refreshHard === "function") {
        AOS.refreshHard();
    }
}