document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DEL CARRUSEL ---
    
    // 1. Definir las imágenes locales para el carrusel.
    // Asegúrate de que estas rutas coincidan con tus archivos en la carpeta /assets.
    const triangleModels = [
        'assets/triangulo-1b.jpeg', // Modelo regular
        'assets/triangulo-2b.jpeg', // Modelo modificado
        'assets/triangulo-3b.jpeg'  // Modelo deformado
    ];

    const triangleImage = document.getElementById('triangle-image');
    const nextModelBtn = document.getElementById('next-model-btn');
    const modelDescription = document.querySelector('#sabato p.text-sm.text-gray-500');

    let currentModelIndex = 0;

    const updateModel = () => {
        if (triangleImage) {
            triangleImage.src = triangleModels[currentModelIndex];
            modelDescription.textContent = `Mostrando Modelo ${currentModelIndex + 1} de ${triangleModels.length}`;
        }
    };

    if (nextModelBtn) {
        nextModelBtn.addEventListener('click', () => {
            currentModelIndex = (currentModelIndex + 1) % triangleModels.length;
            updateModel();
        });
        // Carga inicial del modelo
        updateModel();
    }

    // --- LÓGICA DEL MENÚ MÓVIL ---

    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Abrir/cerrar menú con el botón
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    // Cerrar menú al hacer clic en un enlace (para móviles)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) { // 768px es el breakpoint 'md' de Tailwind
                sidebar.classList.add('-translate-x-full');
            }
        });
    });
});