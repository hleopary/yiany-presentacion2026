# Bitácora de Desarrollo: Presentación "El Rol del Estado"

Este documento registra el proceso de creación de la página web interactiva para la presentación de la beca del Instituto Balseiro.

---

### **Entrada 1: Inicio del Proyecto y Fase 1 (Maquetación Inicial)**

*   **Fecha:** 24 de Junio de 2026
*   **Responsable:** Asistente de IA (Gemini Code Assist)
*   **Descripción:**
    Se dio inicio al proyecto estableciendo una estructura de archivos ligera y una maquetación base. El objetivo fue crear el esqueleto funcional de la página sin dependencias complejas.

*   **Acciones Realizadas:**
    1.  **Creación de Estructura de Archivos:**
        *   `index.html`: Archivo principal para el contenido.
        *   `script.js`: Archivo para la futura interactividad.
        *   `assets/`: Carpeta para recursos gráficos.
    2.  **Maquetación en `index.html`:**
        *   Se incluyó Tailwind CSS a través de su CDN para un estilizado rápido.
        *   Se definió un layout principal usando Flexbox, con un `<aside>` fijo para el menú lateral y un `<main>` para el contenido principal.
        *   Se crearon las secciones (`<section>`) con sus respectivos IDs (`#sabato`, `#tecnologias`, `#entrevista`) para permitir la navegación por anclas desde el menú.

---

### **Entrada 2: Fase 2 (Integración de Contenido)**

*   **Fecha:** 24 de Junio de 2026
*   **Responsable:** Asistente de IA (Gemini Code Assist)
*   **Descripción:**
    Se tomó toda la información de los archivos de investigación (`investigacion de tecnologias.md` y `gemini-code-1782309205535.md`) y se integró en la estructura HTML.

*   **Acciones Realizadas:**
    1.  **Volcado de Contenido en `index.html`:**
        *   **Sección Tecnologías:** Se crearon "nubes" (contenedores `div` estilizados con `bg-white`, `rounded-2xl`, `shadow-md`) para cada tecnología del CONICET.
        *   **Sección Entrevista:** Se utilizó una grilla (`grid`) para mostrar las preguntas y respuestas en formato de "tarjetas".
        *   **Sección Triángulo de Sabato:** Se preparó la estructura de dos columnas y se añadieron los botones "Regula sin escuchar".
    2.  **Primera Interactividad (Inline JS):**
        *   Se añadió una función `toggleVisibility(id)` directamente en una etiqueta `<script>` dentro del `index.html` para dar funcionalidad inmediata a los botones que muestran/ocultan las advertencias.

---

### **Entrada 3: Fase 3 (Implementación del Carrusel)**

*   **Fecha:** 24 de Junio de 2026
*   **Responsable:** Asistente de IA (Gemini Code Assist)
*   **Descripción:**
    Se añadió la lógica de JavaScript para el elemento interactivo principal: el carrusel de imágenes del Triángulo de Sabato.

*   **Acciones Realizadas en `script.js`:**
    1.  **Lógica del Carrusel:**
        *   Se definió un array `triangleModels` con las rutas a las imágenes.
        *   Se utilizó `document.getElementById` para obtener referencias al `<img>` del triángulo y al botón `next-model-btn`.
        *   Se añadió un `addEventListener('click', ...)` al botón para que, al ser presionado, actualice el `src` de la imagen, ciclando a través del array `triangleModels` usando el operador módulo (`%`).

---

### **Entrada 4: Fase 4 (Pulido Final, Responsividad y Despliegue)**

*   **Fecha:** 24 de Junio de 2026
*   **Responsable:** Asistente de IA (Gemini Code Assist)
*   **Descripción:**
    Se realizaron los ajustes finales para asegurar una experiencia de usuario profesional en cualquier dispositivo y se preparó el proyecto para su publicación en línea.

*   **Acciones Realizadas:**
    1.  **Mejora de Responsividad (`index.html` y `script.js`):**
        *   Se implementó un menú lateral colapsable para móviles (menú "hamburguesa").
        *   Se añadió el botón de menú y se modificaron las clases de Tailwind CSS para que el `aside` se oculte en pantallas pequeñas (`-translate-x-full`).
        *   Se añadió la lógica en `script.js` para controlar la visibilidad del menú al hacer clic en el botón y en los enlaces.
    2.  **Actualización de Recursos:**
        *   Se actualizaron las rutas de las imágenes en `script.js` para que apunten a los archivos locales dentro de la carpeta `assets/`.
    3.  **Guía de Despliegue:**
        *   Se proporcionó un manual paso a paso para subir el projecto a un repositorio de GitHub y activar GitHub Pages, generando un enlace público para la presentación.

---

### **Entrada 5: Fase 5 (Generación de Imágenes y Mejora Visual)**

*   **Fecha:** 24 de Junio de 2026
*   **Responsable:** Asistente de IA (Gemini Code Assist)
*   **Descripción:**
    A petición del usuario, se generaron las imágenes faltantes y se mejoró el aspecto visual general de la página para que pareciera "perfecta".

*   **Acciones Realizadas:**
    1.  **Generación de Imágenes SVG para el "Triángulo de Sabato":**
        *   Se creó un directorio `assets`.
        *   Se generaron tres archivos SVG (`triangulo-1.svg`, `triangulo-2.svg`, `triangulo-3.svg`) que representan los diferentes modelos del Triángulo de Sabato, basados en los bocetos dibujados a mano por el usuario.
        *   Se actualizó `script.js` para utilizar los nuevos archivos `.svg` en lugar de los marcadores de posición `.png` anteriores.
        *   Se actualizó `index.html` para mostrar el primer modelo SVG por defecto.
    2.  **Colocación de Imágenes para Otras Secciones:**
        *   Se modificó la sección "Tecnologías" a un diseño de cuadrícula de dos columnas, añadiendo imágenes de marcador de posición de `source.unsplash.com` para cada tecnología (SAOCOM, HB4, Biocombustibles, Tayná).
        *   Se añadió una imagen de cabecera a la sección "Entrevista", también utilizando `source.unsplash.com`.
    3.  **Mejora Visual con CSS:**
        *   Se creó un nuevo archivo `style.css`.
        *   Se importó una nueva fuente (`Inter`) para una mejor tipografía.
        *   Se añadió una imagen de fondo a la cabecera principal con una superposición oscura para mejorar la legibilidad del texto.
        *   Se añadieron efectos "hover" a los enlaces de la barra lateral.
        *   Se enlazó el archivo `style.css` a `index.html`.
