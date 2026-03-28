# Quantic - IA y Datos para PYMEs

Sitio web moderno y profesional para Quantic, una startup de automatización e inteligencia de datos.

## Requisitos
- Node.js 18+
- npm

## Setup Local
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear archivo `.env` basado en `.env.example`
4. Iniciar servidor de desarrollo: `npm run dev`

## Variables de Entorno
- `PUBLIC_FORMSPREE_ID`: ID de tu formulario en [Formspree](https://formspree.io/)
- `PUBLIC_WA_NUMBER`: Número de WhatsApp en formato internacional (ej: 59170000000)

## Estructura
- `src/components`: Componentes modulares de la landing page.
- `src/hooks`: Hooks personalizados (IntersectionObserver para animaciones).
- `src/index.css`: Configuración de Tailwind 4 y estilos globales.

## Despliegue
El sitio está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions al hacer push a la rama `main`.

### Conectar dominio con Cloudflare
1. Agrega tu dominio en Cloudflare.
2. Cambia los nameservers en tu registrador por los de Cloudflare.
3. En Cloudflare DNS: Crea un CNAME `www` apuntando a `tu-usuario.github.io` (Proxy ON).
4. En GitHub Settings -> Pages: Agrega tu dominio personalizado.
