// Datos del Catálogo
const productos = [
    {
        id: 1,
        nombre: "Cheesecake de Frutos Rojos",
        descripcion: "Cremoso pastel de queso horneado al estilo NY con un coulis artesanal de fresas y frambuesas frescas.",
        precio: "$45.00",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
        categoria: "Postre"
    },
    {
        id: 2,
        nombre: "Lemon Pie",
        descripcion: "Clásica tarta con base crujiente, relleno suave de crema de limón y un merengue suizo perfectamente tostado.",
        precio: "$38.00",
        imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
        categoria: "Tarta"
    },
    {
        id: 3,
        nombre: "Sourdough Clásico",
        descripcion: "Pan de masa madre con 48 horas de fermentación, corteza rústica y miga alveolada. Horneado en piedra.",
        precio: "$15.00",
        imagen: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=800",
        categoria: "Panadería"
    },
    {
        id: 4,
        nombre: "Pan de Banana",
        descripcion: "Esponjoso y húmedo, elaborado con plátanos maduros, un toque de canela y nueces pecadas tostadas.",
        precio: "$20.00",
        imagen: "https://images.unsplash.com/photo-1621236378699-8587fab6ca10?auto=format&fit=crop&q=80&w=800",
        categoria: "Pan Dulce"
    },
    {
        id: 5,
        nombre: "Pastel de Zanahoria",
        descripcion: "Bizcocho especiado de zanahoria, relleno y cubierto con nuestro característico frosting de queso crema.",
        precio: "$42.00",
        imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800",
        categoria: "Pastel"
    },
    {
        id: 6,
        nombre: "Pan de Maíz",
        descripcion: "Tradicional pan de maíz sureño, ligeramente dulce con una textura suave y esponjosa, ideal para acompañar.",
        precio: "$12.00",
        imagen: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800",
        categoria: "Panadería"
    },
    {
        id: 7,
        nombre: "Semitas Artesanales",
        descripcion: "Pan dulce tradicional, suave por dentro y crujiente por fuera, coronado con nuez y un toque de anís.",
        precio: "$8.00",
        imagen: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=800",
        categoria: "Pan Dulce"
    },
    {
        id: 8,
        nombre: "Pastel de 3 Leches",
        descripcion: "Bizcocho de vainilla sumergido en nuestra mezcla secreta de tres leches, cubierto de crema batida y fruta.",
        precio: "$40.00",
        imagen: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800",
        categoria: "Pastel"
    },
    {
        id: 9,
        nombre: "Roles de Canela",
        descripcion: "Masa brioche extra suave, rellenos de azúcar morena y canela, glaseados con crema de queso.",
        precio: "$25.00",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
        categoria: "Pan Dulce"
    }
];

// Función para renderizar el catálogo
function renderizarCatalogo() {
    const contenedor = document.getElementById('catalog-container');
    
    if (!contenedor) return;

    productos.forEach((producto, index) => {
        // Crear elemento de tarjeta
        const card = document.createElement('article');
        card.className = 'product-card fade-up';
        // Añadir algo de delay para el efecto cascada
        card.style.transitionDelay = `${(index % 3) * 0.1}s`;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <span class="tag">${producto.categoria}</span>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="card-image" loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <span class="card-price">${producto.precio}</span>
                </div>
                <p class="card-description">${producto.descripcion}</p>
                <div class="card-footer">
                    <button class="btn-add" onclick="agregarAlCarrito(${producto.id})">Añadir al Pedido</button>
                </div>
            </div>
        `;
        
        contenedor.appendChild(card);
    });
}

// Lógica de UI e interacciones
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Renderizar productos
    renderizarCatalogo();

    // 2. Efecto de Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Intersection Observer para Animaciones Fade-Up
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);

    // Observar elementos con clase .fade-up
    setTimeout(() => { // Pequeño delay para asegurar que el DOM dinámico esté listo
        const elementosAnimados = document.querySelectorAll('.fade-up');
        elementosAnimados.forEach(el => observer.observe(el));
    }, 100);

    // 4. Actualizar año en el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Función simulada para el botón
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if(producto) {
        // Aquí iría la lógica del carrito. Por ahora solo un alert estilizado o consola.
        alert(`¡${producto.nombre} añadido a tu pedido!`);
    }
}
