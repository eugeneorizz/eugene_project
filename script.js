// =====================================================
// 1. NIGERIAN PRODUCTS DATA
// (Replace the img: 'images/...' links with your actual picture filenames)
// =====================================================

const categories = [
    { name: 'Groceries', img: 'image/egg.jpg', page: 'groceries' },
    { name: 'Fresh Produce', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80', page: 'fresh' },
    { name: 'Home & Kitchen', img: 'image/Air fryer.jpg', page: 'homekitchen' }
];

const groceriesProducts = [
    { id: 101, name: 'Morning Fresh 450ml', price: 1550, was: 2000, unit: 'Per bottle', sub: 'Groceries', badge: 'Save 15%', img: 'image/mofresh.jpg', popular: 10 },
    { id: 102, name: 'Honeywell Macaroni 500g', price: 1000, was: null, unit: 'Per sachet', sub: 'Groceries', badge: null, img: 'image/maca.jpg', popular: 9 },
    { id: 103, name: 'Checkers Custard Vanilla', price: 4100, was: null, unit: 'Per keg', sub: 'Groceries', badge: null, img: 'image/custard.jpg', popular: 8 },
    { id: 104, name: 'Checkers Custard Milk', price: 5000, was: 6200, unit: 'Per keg', sub: 'Groceries', badge: 'Save 17%', img: 'image/milk cus.jpg', popular: 7 },
    { id: 105, name: 'Mama Lemon 1.1L', price: 2985, was: 3200, unit: 'Per bottle', sub: 'Groceries', badge: 'Save 10%', img: 'image/mama lemon.jpg', popular: 6 },
    { id: 106, name: 'Bournvita', price: 2400, was: 3500, unit: 'Per bag', sub: 'Groceries', badge: 'Save 13%', img: 'image/bourn.jpg', popular: 7 },
    { id: 107, name: 'Mama Gold Rice 50kg', price: 68500, was: 82000, unit: 'Per bag', sub: 'Rice & Grains', badge: 'Save ₦13,500', img: 'image/rice.jpg', popular: 10 },
    { id: 108, name: 'Kings Vegetable Oil 5L', price: 14500, was: 17500, unit: 'Per keg', sub: 'Oil & Cooking', badge: 'Save 17%', img: 'image/kings oil.jpg', popular: 9 },
    { id: 109, name: 'Peak Milk Powder 900g', price: 7200, was: 8500, unit: 'Per tin', sub: 'Dairy & Eggs', badge: 'Save 15%', img: 'image/peak.jpg', popular: 8 },
    { id: 110, name: 'Indomie Noodles (Carton)', price: 11500, was: 12500, unit: 'Per carton', sub: 'Noodles & Pasta', badge: 'New', img: 'image/indomie.jpg', popular: 9 },
    { id: 111, name: 'Golden Penny Semovita 2kg', price: 3400, was: 3900, unit: 'Per bag', sub: 'Flour & Baking', badge: 'Save 13%', img: 'image/semo 2kg.jpg', popular: 7 },
    { id: 112, name: 'Honeywell Spaghetti (Pack of 20)', price: 9800, was: 11500, unit: 'Per pack', sub: 'Noodles & Pasta', badge: 'Save 15%', img: 'image/honeywell.jpg', popular: 6 },
    { id: 113, name: 'Dangote Sugar 50kg', price: 52000, was: 58000, unit: 'Per bag', sub: 'Sugar & Sweeteners', badge: 'Save 10%', img: 'image/sugar.jpg', popular: 7 },
    { id: 114, name: 'Titus Sardine (Pack of 10)', price: 11800, was: 12800, unit: 'Per pack', sub: 'Canned & Packaged', badge: 'Save 15%', img: 'image/titus.jpg', popular: 5 },
    { id: 115, name: 'Golden Morn Cereal 1kg', price: 4200, was: null, unit: 'Per pack', sub: 'Breakfast & Cereal', badge: null, img: 'image/gmorn.jpg', popular: 6 },
    { id: 116, name: 'Maggi Cubes (Pack of 50)', price: 3200, was: 3800, unit: 'Per pack', sub: 'Spices & Seasoning', badge: 'Save 16%', img: 'image/maggie.jpg', popular: 5 },
    { id: 117, name: 'Local Beans (Oloyin) 5kg', price: 8500, was: null, unit: 'Per bag', sub: 'Beans & Legumes', badge: null, img: 'image/beans.jpg', popular: 6 },
    { id: 118, name: 'Garri (Ijebu) 10kg', price: 6500, was: 7500, unit: 'Per bag', sub: 'Flour & Baking', badge: 'Save 13%', img: 'image/garri.jpg', popular: 8 },
    { id: 119, name: 'Cway Water 75cl (Pack of 12)', price: 2400, was: null, unit: 'Per pack', sub: 'Water', badge: null, img: 'image/cway.jpg', popular: 4 },
    { id: 120, name: 'Power Oil 2.5L', price: 8900, was: 10500, unit: 'Per keg', sub: 'Oil & Cooking', badge: 'Save 15%', img: 'image/power oil.jpg', popular: 7 },
    { id: 121, name: 'Basmati Rice', price: 8900, was: 10500, unit: 'Per bag', sub: 'Rice & Grains', badge: 'Save 15%', img: 'image/basmati rice.jpg', popular: 7 },
    { id: 122, name: 'Geisha', price: 11000, was: 11600, unit: 'Per pack', sub: 'Canned & Packaged', badge: 'Save 15%', img: 'image/geisha.jpg', popular: 7 },
    { id: 123, name: 'Big Bull Rice 50kg', price: 68500, was: 82000, unit: 'Per bag', sub: 'Rice & Grains', badge: 'Save ₦13,500', img: 'image/big bull rice.jpg', popular: 10 },
    { id: 124, name: 'Tiger Curry', price: 2200, was: 2280, unit: 'Per pack', sub: 'Spices & Seasoning', badge: 'Save 18%', img: 'image/curry.jpg', popular: 5 },
    { id: 125, name: 'Tiger Thyme', price: 2200, was: 2280, unit: 'Per pack', sub: 'Spices & Seasoning', badge: 'Save 18%', img: 'image/thyme.jpg', popular: 5},
    { id: 126, name: 'Knorr Cube', price: 3200, was: 3800, unit: 'Per pack', sub: 'Spices & Seasoning', badge: 'Save 16%', img: 'image/knoe.jpg', popular: 5},
    { id: 127, name: 'Hot Pepper', price: 200, was: 300, unit: 'Per sachet', sub: 'Spices & Seasoning', badge: 'Save 16%', img: 'image/hot pepper.jpg', popular: 5},
    { id: 128, name: 'Egg', price: 9500, was: null, unit: 'Per carton', sub: 'Dairy & Eggs', badge: 'null', img: 'image/egg.jpg', popular: 8 },
    { id: 129, name: 'Peak Milk Tin', price: 680, was: 800, unit: 'Per pack', sub: 'Breakfast & Cereal', badge: 'Save 15%', img: 'image/peak tin.jpg', popular: 6 },
    { id: 130, name: 'Three Crown Milk', price: 680, was: 800, unit: 'Per pack', sub: 'Breakfast & Cereal', badge: 'Save 15%', img: 'image/3crown tin.jpg', popular: 6 },
    { id: 131, name: 'Sunripe Sweetcorn', price: 1600, was: 2200, unit: 'Per pack', sub: 'Canned & Packaged', badge: 'Save 15%', img: 'image/sweetcorn.jpg', popular: 5 },
    { id: 132, name: 'Sunripe Greenpeas', price: 1600, was: 2000, unit: 'Per pack', sub: 'Canned & Packaged', badge: 'Save 15%', img: 'image/peas.jpg', popular: 5 },
    { id: 133, name: 'Kelloggs Cereal', price: 8200, was: null, unit: 'Per pack', sub: 'Breakfast & Cereal', img: 'image/kelloggs.jpg', popular: 6 },
    { id: 134, name: 'Dangote Salt ', price: 800, was: 1000, unit: 'Per pack', sub: 'Spices & Seasoning', badge: 'Save 18%', img: 'image/dangote salt.jpg', popular: 5 },
    { id: 135, name: 'Mr, ChefSalt ', price: 800, was: 1000, unit: 'Per pack', sub: 'Spices & Seasoning', badge: 'Save 18%', img: 'image/chef salt.jpg', popular: 5 },
    { id: 136, name: 'Blue Band', price: 2720, was: null, unit: 'Per pack', sub: 'Breakfast & Cereal', badge: null, img: 'image/blue.jpg', popular: 6 },

];

const freshProducts = [
    { id: 204, name: 'Fresh Tomatoes 1kg', price: 2500, was: 3000, unit: 'Per kg', sub: 'Vegetables', badge: 'Save 17%', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80', popular: 9 },
    { id: 205, name: 'Fresh Bananas (Bunch)', price: 1200, was: null, unit: 'Per bunch', sub: 'Fruits', badge: null, img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80', popular: 8 },
    { id: 206, name: 'Sweet Oranges (1kg)', price: 1800, was: 2200, unit: 'Per kg', sub: 'Fruits', badge: 'Save 18%', img: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80', popular: 7 },
    { id: 207, name: 'Fresh Spinach Bunch', price: 800, was: null, unit: 'Per bunch', sub: 'Vegetables', badge: null, img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80', popular: 6 },
    { id: 208, name: 'Red Apples (Pack of 6)', price: 2400, was: 3000, unit: 'Per pack', sub: 'Fruits', badge: 'Save 20%', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80', popular: 9 },
    { id: 209, name: 'Fresh Carrots 1kg', price: 1500, was: null, unit: 'Per kg', sub: 'Vegetables', badge: null, img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80', popular: 7 },
    { id: 210, name: 'Avocado (Pack of 3)', price: 2200, was: 2800, unit: 'Per pack', sub: 'Fruits', badge: 'Save 21%', img: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=400&q=80', popular: 8 },
    { id: 211, name: 'Green Bell Peppers 500g', price: 1400, was: null, unit: 'Per pack', sub: 'Vegetables', badge: null, img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80', popular: 6 },
    { id: 212, name: 'Fresh Ginger 500g', price: 1800, was: 2200, unit: 'Per pack', sub: 'Herbs & Roots', badge: 'Save 18%', img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80', popular: 5 },
    { id: 213, name: 'Irish Potatoes 2kg', price: 3500, was: null, unit: 'Per bag', sub: 'Vegetables', badge: null, img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80', popular: 7 },
    { id: 214, name: 'Sweet Corn (Pack of 4)', price: 1600, was: 2000, unit: 'Per pack', sub: 'Vegetables', badge: 'Save 20%', img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80', popular: 6 },
    { id: 215, name: 'Fresh Pineapple', price: 1500, was: null, unit: 'Each', sub: 'Fruits', badge: null, img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80', popular: 8 }
];

const homeKitchenProducts = [
    { id: 301, name: 'Lg Micro wave 25L', price: 167000, was: 196000, unit: 'Each', sub: 'Home & Kitchen', badge: 'Save 17%', img: 'image/microwavw.jpg', popular: 8 },
    { id: 302, name: 'Maxi Microwave 20L', price: 550000, was: 660000, unit: 'Each', sub: 'Home & Kitchen', badge: 'Save 16%', img: 'image/microwave 2.jpg', popular: 7 },
    { id: 303, name: 'Cutlery Set', price: 5950, was: 8000, unit: 'Per set', sub: 'Home & Kitchen', badge: 'Save 15%', img: 'image/cutlery.jpg', popular: 6 },
    { id: 301, name: 'Non-Stick Frying Pan 28cm', price: 12500, was: 15000, unit: 'Each', sub: 'Cookware', badge: 'Save 17%', img: 'image/pan.jpg', popular: 9 },
    { id: 302, name: 'Stainless Steel Pot Set (5pcs)', price: 28500, was: 35000, unit: 'Per set', sub: 'Cookware', badge: 'Save 19%', img: 'image/5 piece pot.jpg', popular: 8 },
    { id: 303, name: 'Glass Food Storage Set (6pcs)', price: 9800, was: 12000, unit: 'Per set', sub: 'Storage', badge: 'Save 18%', img: 'image/glass food storage.jpg', popular: 7 },
    { id: 304, name: 'Ceramic Dinner Plates (Set of 6)', price: 15600, was: 18000, unit: 'Per set', sub: 'Dinnerware', badge: 'Save 13%', img: 'image/late.jpg', popular: 6 },
    { id: 305, name: 'Electric Kettle 1.7L', price: 18500, was: 22000, unit: 'Each', sub: 'Appliances', badge: 'Save 16%', img: 'image/binatone elecric kettle.jpg', popular: 9 },
    { id: 306, name: 'Electric Kettle 1.7L', price: 18500, was: 22000, unit: 'Each', sub: 'Appliances', badge: 'Save 16%', img: 'image/electric kettle.jpg', popular: 9 },
    { id: 307, name: 'Skyrun 200L Double Door Fridge', price: 312790, was: null, unit: 'Each', sub: 'Home & Kitchen', badge: null, img: 'image/fridge.jpg', popular: 6 },
    { id: 308, name: 'Mop & Bucket Set', price: 8900, was: 11000, unit: 'Per set', sub: 'Cleaning', badge: 'Save 19%', img: 'image/mop.jpg', popular: 7 },
    { id: 309, name: 'Broom & Dustpan Set', price: 4500, was: null, unit: 'Per set', sub: 'Cleaning', badge: null, img: 'image/broom.jpg', popular: 5 },
    { id: 310, name: 'Blender 1.5L', price: 32500, was: 38000, unit: 'Each', sub: 'Appliances', badge: 'Save 14%', img: 'image/maxi blender.jpg', popular: 8 },
    { id: 311, name: 'Storage Basket (Woven)', price: 5500, was: 7000, unit: 'Each', sub: 'Storage', badge: 'Save 21%', img: 'image/basket.jpg', popular: 6 },
    { id: 312, name: 'Bath Towel Set (4pcs)', price: 9800, was: null, unit: 'Per set', sub: 'Bath', badge: null, img: 'image/ath towel set.jpg', popular: 5 },
    { id: 313, name: 'Decorative Throw Pillow', price: 6500, was: 8000, unit: 'Each', sub: 'Décor', badge: 'Save 19%', img: 'image/standard pillow.jpg', popular: 6 },
    { id: 314, name: 'Air Fryer', price: 60000, was: null, unit: 'Each', sub: 'Home & Kitchen', badge: null, img: 'image/Air fryer.jpg', popular: 6 },
    { id: 315, name: 'Hisense Fridge', price: 799000, was: null, unit: 'Each', sub: 'Home & Kitchen', badge: null, img: 'image/hisense fridge.jpg', popular: 6 },
];

const allProducts = [...groceriesProducts, ...freshProducts, ...homeKitchenProducts];

const storesList = [
    { name: 'Lagos - Ikeja', addr: '12 Allen Avenue, Ikeja', hours: '8am – 10pm', status: 'open' },
    { name: 'Lagos - Lekki', addr: 'Admiralty Way, Lekki', hours: '8am – 10pm', status: 'open' },
    { name: 'Abuja - Wuse', addr: 'Plot 45 Aminu Kano Cres', hours: '8am – 10pm', status: 'open' }
];

const faqs = [
    { q: 'How fast is delivery?', a: 'Same-day in Lagos, Abuja, PH & Ibadan.' },
    { q: 'Can I pay on delivery?', a: 'Yes, available in all cities.' }
];

// =====================================================
// 2. STATE & HELPERS
// =====================================================
let fulfillmentMode = 'delivery';
let deliveryAddress = '';
let pickupStore = '';
let currentUser = null;
let cart = [];

const naira = n => '₦' + n.toLocaleString('en-NG');
const $ = id => document.getElementById(id);

function showToast(msg, type = 'info') {
    const t = $('toast');
    if (!t) return;
    t.className = 'toast show ' + type;
    t.innerHTML = msg;
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// =====================================================
// 3. NAVIGATION & PAGES
// =====================================================
function showPage(pageId, { silent = false } = {}) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = $('page-' + pageId);
    if (!target) return;
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.main-nav a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === pageId);
    });

    if (pageId === 'home') renderHome();
    if (pageId === 'groceries') renderGrid(groceriesProducts, 'groceriesGrid');
    if (pageId === 'fresh') renderGrid(freshProducts, 'freshGrid');
    if (pageId === 'homekitchen') renderGrid(homeKitchenProducts, 'homekitchenGrid');
    if (pageId === 'deals') renderGrid(allProducts.filter(p => p.badge), 'dealsPageGrid');
    if (pageId === 'departments') renderDepartments();

    if (!silent) showToast('→ Opened ' + pageId, 'success');
}

function handleHeaderSearch(query) {
    if (!query.trim()) return;
    showPage('departments', { silent: true });
    $('deptTitle').textContent = `Search results for "${query}"`;
    const matches = allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    renderGrid(matches, 'deptProducts');
    showToast(`🔍 Found ${matches.length} results`, 'info');
}

// =====================================================
// 4. RENDERING (6 per row)
// =====================================================
function createProductCard(p) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-img">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
        </div>
        <div class="product-info">
            <div class="product-price">${naira(p.price)} ${p.was ? `<span class="product-was">${naira(p.was)}</span>` : ''}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-unit">${p.unit}</div>
            <button class="add-btn">Add to Cart</button>
        </div>
    `;
    card.querySelector('.add-btn').addEventListener('click', function() {
        addToCart(p);
        this.textContent = '✓ Added';
        this.style.background = '#008a43';
        setTimeout(() => { this.textContent = 'Add to Cart'; this.style.background = ''; }, 1200);
    });
    return card;
}

function renderGrid(list, targetId) {
    const grid = $(targetId);
    if (!grid) return;
    grid.innerHTML = '';
    if (!list || !list.length) { grid.innerHTML = '<p style="padding:20px">No products found.</p>'; return; }
    list.forEach(p => grid.appendChild(createProductCard(p)));
}

function renderDepartments() {
    const sidebar = $('deptSidebar');
    if (!sidebar) return;
    sidebar.innerHTML = `<li><a href="#" class="active">All Departments</a></li>`;
    const depts = [...new Set(allProducts.map(p => p.cat))];
    depts.forEach(d => {
        sidebar.innerHTML += `<li><a href="#">${d}</a></li>`;
    });
    renderGrid(allProducts, 'deptProducts');
}

function renderHome() {
    const catGrid = $('homeCategories');
    if (catGrid) {
        catGrid.innerHTML = '';
        categories.forEach(c => {
            const item = document.createElement('div');
            item.className = 'cat-item';
            item.innerHTML = `<img src="${c.img}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/50'"><span>${c.name}</span>`;
            item.addEventListener('click', () => showPage(c.page));
            catGrid.appendChild(item);
        });
    }
    renderGrid(allProducts.slice(0, 6), 'homeDeals');
    renderGrid(allProducts.slice(6, 12), 'homeTrending');
}

// =====================================================
// 5. CART
// =====================================================
function toggleCart() {
    closeAppModal();
    const drawer = $('cartDrawer');
    const overlay = $('cartOverlay');
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('show');
    }
}

function addToCart(product) {
    const existing = cart.find(c => c.id === product.id);
    if (existing) existing.qty++;
    else cart.push({ ...product, qty: 1 });
    updateCartUI();
    showToast(`🛒 Added to cart`, 'success');
}

function updateCartUI() {
    const countEl = $('cartCount');
    if (countEl) countEl.textContent = cart.reduce((s, i) => s + i.qty, 0);
    
    const body = $('cartBody'), footer = $('cartFooter');
    if (!body || !footer) return;
    
    if (!cart.length) { body.innerHTML = '<p class="cart-empty">Your cart is empty.</p>'; footer.style.display = 'none'; return; }
    footer.style.display = 'block';
    body.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <img src="${item.img}" onerror="this.src='https://via.placeholder.com/60'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${naira(item.price)} × ${item.qty}</div>
            </div>
            <button onclick="cart.splice(${i},1); updateCartUI();" style="color:#e63946; cursor:pointer; background:none; border:none; font-size:1.2rem;">✕</button>
        </div>
    `).join('');
    
    const sub = $('cartSubtotal');
    if (sub) sub.textContent = naira(cart.reduce((s, i) => s + i.price * i.qty, 0));
}

function checkout() { showToast('✅ Order placed!', 'success'); cart = []; updateCartUI(); setTimeout(toggleCart, 700); }

// =====================================================
// 6. MODALS (Store, Track, Help, Auth, Fulfillment)
// =====================================================
function openAppModal(html) {
    const content = $('appModalContent'), overlay = $('appModalOverlay');
    if (!content || !overlay) return;
    content.innerHTML = html;
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeAppModal() {
    const overlay = $('appModalOverlay');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
}

document.addEventListener('click', e => { if (e.target.id === 'appModalOverlay') closeAppModal(); });

function openStoreLocator() {
    openAppModal(`
        <div class="modal-head"><div class="modal-icon">📍</div><div><h2>Store Locator</h2><p>Find a BALF near you.</p></div></div>
        <div class="store-list">
            ${storesList.map(s => `
                <div class="store-item" style="border:1px solid #ccc; padding:10px; margin-bottom:10px; border-radius:8px;">
                    <strong>${s.name}</strong> <span style="color:${s.status==='open'?'#00a651':'#e63946'}">● ${s.status}</span>
                    <div style="font-size:0.8rem; color:#555;">${s.addr} · ${s.hours}</div>
                    <button class="btn-primary" style="margin-top:8px; padding:6px 12px; font-size:0.8rem;" onclick="selectStoreForPickup('${s.name}')">Use this store</button>
                </div>
            `).join('')}
        </div>
    `);
}

function selectStoreForPickup(name) {
    pickupStore = name;
    const bqs = $('branchQuickSelect');
    if (bqs) bqs.value = name;
    const ft = $('fulfillmentText');
    if (ft) ft.textContent = `📍 Store set: ${name}`;
    closeAppModal();
    showToast(`Location updated`, 'success');
}

function openTrackOrder() {
    openAppModal(`
        <div class="modal-head"><div class="modal-icon">📦</div><div><h2>Track Order</h2></div></div>
        <label class="fm-label">Order Number</label>
        <input type="text" id="trackInput" class="fm-input" placeholder="e.g. BALF-1234">
        <button class="btn-primary full-width" style="margin-top:18px" onclick="closeAppModal(); showToast('Order is out for delivery', 'success')">Track</button>
    `);
}

function openHelp() {
    openAppModal(`
        <div class="modal-head"><div class="modal-icon">❓</div><div><h2>Help Center</h2></div></div>
        <p style="margin-bottom:18px; font-size:0.9rem;">Need assistance? Check our FAQs or contact us.</p>
        <button class="btn-primary full-width" onclick="closeAppModal(); showToast('Connecting to support...', 'info')">Chat with Support</button>
    `);
}

function openAuth(mode) {
    if (currentUser) {
        openAppModal(`<h2>Hi, ${currentUser.name}!</h2><button class="btn-primary full-width" style="margin-top:18px" onclick="signOut()">Sign out</button>`);
        return;
    }
    openAppModal(`
        <div class="modal-head"><div class="modal-icon">👤</div><div><h2>${mode === 'create' ? 'Create Account' : 'Sign In'}</h2></div></div>
        ${mode === 'create' ? '<label class="fm-label">Name</label><input type="text" id="authName" class="fm-input" placeholder="Ada Obi">' : ''}
        <label class="fm-label">Email</label><input type="email" id="authEmail" class="fm-input" placeholder="you@example.com">
        <label class="fm-label">Password</label><input type="password" id="authPass" class="fm-input" placeholder="••••••••">
        <button class="btn-primary full-width" style="margin-top:18px" onclick="submitAuth('${mode}')">${mode === 'create' ? 'Create Account' : 'Sign In'}</button>
    `);
}

function submitAuth(mode) {
    const email = $('authEmail').value, pass = $('authPass').value;
    if (!email || !pass) return showToast('Fill all fields', 'error');
    currentUser = { name: mode === 'create' ? $('authName').value : 'Shopper', email };
    const authArea = $('authArea');
    if (authArea) authArea.innerHTML = `<span>🇳🇬 NGN</span> <a onclick="openAuth('signin')">Hi, ${currentUser.name.split(' ')[0]}</a> <a class="btn-create" style="background:#ff6a00" onclick="signOut()">Sign out</a>`;
    closeAppModal();
    showToast('Welcome to BALF!', 'success');
}

function signOut() {
    currentUser = null;
    const authArea = $('authArea');
    if (authArea) authArea.innerHTML = `<span>🇳🇬 NGN</span> <a onclick="openAuth('signin')">Sign In</a> <a class="btn-create" onclick="openAuth('create')">Create Account</a>`;
    closeAppModal();
    showToast('Signed out', 'info');
}

function openFulfillment(mode) {
    fulfillmentMode = mode;
    if (mode === 'delivery') {
        openAppModal(`
            <div class="modal-head"><div class="modal-icon">🚚</div><div><h2>Delivery</h2><p>Where should we deliver?</p></div></div>
            <label class="fm-label">Address</label>
            <input type="text" id="fmAddress" class="fm-input" placeholder="e.g. 12 Allen Avenue" value="${deliveryAddress}">
            <button class="btn-primary full-width" style="margin-top:18px" onclick="saveFulfillment()">Save Address</button>
        `);
    } else {
        openAppModal(`
            <div class="modal-head"><div class="modal-icon">🏬</div><div><h2>Pickup</h2><p>Choose a store</p></div></div>
            <select id="fmStore" class="fm-input">${storesList.map(s => `<option>${s.name}</option>`).join('')}</select>
            <button class="btn-primary full-width" style="margin-top:18px" onclick="saveFulfillment()">Save Store</button>
        `);
    }
}

function saveFulfillment() {
    if (fulfillmentMode === 'delivery') {
        deliveryAddress = $('fmAddress').value || 'Lagos';
        const ft = $('fulfillmentText');
        if (ft) ft.textContent = `🚚 Delivering to: ${deliveryAddress}`;
    } else {
        pickupStore = $('fmStore').value;
        const ft = $('fulfillmentText');
        if (ft) ft.textContent = `🏬 Pickup at ${pickupStore}`;
    }
    $('btnDelivery').classList.toggle('active', fulfillmentMode === 'delivery');
    $('btnPickup').classList.toggle('active', fulfillmentMode === 'pickup');
    closeAppModal();
    showToast('Fulfillment updated', 'success');
}

function reopenFulfillment() { openFulfillment(fulfillmentMode); }

// =====================================================
// 7. INIT
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    showPage('home', { silent: true });
});