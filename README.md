# NOVALT — Landing Page para Productor Musical

Landing page moderna, responsive y enfocada en la identidad visual de **NOVALT**, productor musical especializado en trap, beats, grabación, mezcla y mastering.

El proyecto fue desarrollado como una experiencia web visual y dinámica, combinando una interfaz minimalista con animaciones suaves, contenido multimedia e integración con plataformas externas.

## Demo

**Sitio en producción:** https://novalt-landing.vercel.app/

## Funcionalidades

- Diseño responsive para desktop, tablet y móvil.
- Menú de navegación con versión hamburguesa en dispositivos móviles.
- Animaciones de entrada y scroll utilizando GSAP y ScrollTrigger.
- Sección de servicios musicales.
- Producciones integradas mediante contenido de YouTube.
- Galería de beats destacados.
- Integración de playlist de Spotify.
- Sección de presentación del productor.
- Botón de contacto directo mediante WhatsApp.
- Navegación por secciones mediante anclas.
- Efectos hover y transiciones visuales.
- Organización modular de estilos y scripts.

## Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=000)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Stack principal

- HTML5
- CSS3
- JavaScript Vanilla
- Vite
- GSAP
- ScrollTrigger
- Git / GitHub
- Vercel

## Estructura del proyecto

```text
novalt-landing/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── src/
    ├── assets/
    ├── css/
    │   ├── base/
    │   ├── components/
    │   ├── sections/
    │   └── responsive.css
    ├── js/
    │   ├── modules/
    │   └── animations/
    └── main.js
```

## Instalación local

Clona el repositorio:

```bash
git clone https://github.com/JostynM/novalt-landing.git
```

Ingresa al proyecto:

```bash
cd novalt-landing
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Build de producción

Para generar la versión optimizada del proyecto:

```bash
npm run build
```

Para previsualizar el build localmente:

```bash
npm run preview
```

## Animaciones

Las animaciones principales fueron desarrolladas con **GSAP** y **ScrollTrigger**. Se utilizan para controlar entradas progresivas del hero, servicios, producciones y beats a medida que el usuario navega por la página.

## Responsive Design

La interfaz fue adaptada para diferentes tamaños de pantalla mediante media queries y ajustes específicos en navegación, hero, tarjetas de servicios, galería de beats, contenido multimedia, sección Sobre mí y footer.

## Objetivo del proyecto

El objetivo fue construir una presencia digital moderna para un productor musical y, al mismo tiempo, aplicar fundamentos de desarrollo frontend en un proyecto real: estructura semántica, estilos modulares, responsive design, interacción con JavaScript, animaciones e integraciones multimedia.

## Autor

Desarrollado por **JostynM**.

GitHub: https://github.com/JostynM

---

Proyecto desarrollado con fines de portafolio y presencia digital para NOVALT.
