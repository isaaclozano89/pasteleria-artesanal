# Nombre de tu Pastelería - Landing Page

Esta es la Single Page Application (SPA) para "Nombre de tu Pastelería", diseñada con estándares de desarrollo web moderno, optimización para el rendimiento y una estética elegante y vibrante (Glassmorphism, colores pasteles y animaciones suaves).

## Estructura del Proyecto

El proyecto está diseñado de forma completamente estática y sin dependencias pesadas para asegurar máxima velocidad e integración sencilla.

- `index.html`: Estructura semántica, Hero section, Navbar, Footer y espacio para el catálogo dinámico.
- `styles.css`: Estilos personalizados utilizando variables de CSS, Flexbox/Grid, Animaciones y Media Queries para un diseño 100% responsivo (Mobile-First).
- `script.js`: Lógica en JavaScript Puro (Vanilla JS) para manejar el scroll suave, el renderizado dinámico del catálogo y las animaciones mediante `IntersectionObserver`.

## Cómo Agregar Más Productos

El código está diseñado para ser **escalable**. Para añadir más productos a la carta, simplemente abre el archivo `script.js` e inserta un nuevo objeto dentro del arreglo `productos`:

```javascript
{
    id: 10,
    nombre: "Nuevo Postre Delicioso",
    descripcion: "Descripción corta y atractiva del postre.",
    precio: "$30.00",
    imagen: "URL_DE_LA_IMAGEN",
    categoria: "Pastel"
}
```
El sistema detectará automáticamente el nuevo producto y lo renderizará en la página principal con todos sus estilos y animaciones.

---

## 🚀 Guía de Despliegue (Deployment)

Al ser un proyecto estático (HTML, CSS, JS puros), el despliegue es extremadamente rápido y gratuito en varias plataformas. A continuación se presentan las instrucciones para las mejores opciones:

### Opción 1: Vercel (Recomendado)
Vercel es ideal para despliegues instantáneos de proyectos frontend.

1. Crea una cuenta gratuita en [Vercel](https://vercel.com/).
2. Tienes dos opciones para subir el código:
   - **Vía GitHub:** Sube esta carpeta a un nuevo repositorio en tu cuenta de GitHub. En Vercel, haz clic en "Add New..." > "Project", selecciona tu repositorio de GitHub y haz clic en "Deploy".
   - **Vía Vercel CLI:** Si tienes instalada la herramienta de comandos de Vercel, navega a esta carpeta en la terminal y simplemente ejecuta el comando `vercel`. Sigue las instrucciones predeterminadas.
3. ¡Tu sitio estará en vivo en menos de un minuto!

### Opción 2: Netlify
Netlify es excelente y muy sencillo para sitios estáticos, permitiendo arrastrar y soltar carpetas.

1. Crea una cuenta gratuita en [Netlify](https://www.netlify.com/).
2. Ve a la sección **"Sites"**.
3. En la parte inferior verás una sección que dice **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**.
4. ¡Arrastra la carpeta que contiene tus archivos (`index.html`, `styles.css`, `script.js`) allí!
5. Netlify generará una URL aleatoria que puedes personalizar en las configuraciones del sitio ("Site settings" > "Change site name").

### Opción 3: GitHub Pages
Ideal si ya utilizas GitHub para almacenar tu código.

1. Crea un nuevo repositorio público en [GitHub](https://github.com/) (ej. `mi-pasteleria`).
2. Sube todos los archivos (`index.html`, `styles.css`, `script.js`, `README.md`) al repositorio de la rama `main` o `master`.
3. En tu repositorio en GitHub, ve a **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
4. En **"Build and deployment"**, bajo **"Source"**, selecciona "Deploy from a branch".
5. Selecciona la rama `main` y haz clic en **"Save"**.
6. En unos minutos, recarga la página de configuración y verás el enlace a tu sitio publicado (usualmente `https://tu-usuario.github.io/mi-pasteleria/`).

---

### Rendimiento y PageSpeed
El código está optimizado con:
- `loading="lazy"` en las imágenes para no bloquear el renderizado inicial.
- JavaScript con el atributo `defer` para evitar bloqueos del DOM.
- Fuentes de Google asíncronas vía `rel="preconnect"`.
- Estructura pura sin librerías pesadas como jQuery o React para una carga en microsegundos.
