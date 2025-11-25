# Somstyle Website

Een moderne one-page website voor Somstyle, gebouwd met Next.js, TypeScript en Tailwind CSS!

## Features

- 🎨 Modern, clean design met Somstyle huisstijl
- 📱 Volledig responsive (mobiel, tablet, desktop)
- ⚡ Snelle laadtijden met Next.js optimalisaties
- 🎯 Smooth scroll navigatie
- ♿ Toegankelijke componenten
- 🌐 SEO-vriendelijk

## Technologie Stack

- **Next.js 14+** - React framework met App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Google Fonts voor typography

## Project Setup

### Vereisten

- Node.js 18+ 
- npm of yarn

### Installatie

1. Installeer dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in je browser.

### Build voor productie

```bash
npm run build
npm start
```

## Project Structuur

```
├── app/
│   ├── layout.tsx          # Root layout met metadata
│   ├── page.tsx             # Hoofdpagina
│   ├── globals.css          # Global styles
│   ├── privacy/             # Privacyverklaring pagina
│   └── disclaimer/          # Disclaimer pagina
├── components/
│   ├── Header.tsx           # Navigatie header
│   ├── Hero.tsx             # Hero sectie
│   ├── About.tsx            # Over Somstyle sectie
│   ├── Products.tsx         # Productcategorieën
│   ├── Contact.tsx          # Contact sectie
│   ├── FAQ.tsx              # Veelgestelde vragen
│   ├── Footer.tsx           # Footer component
│   └── Logo.tsx             # Logo placeholder
└── public/                  # Static assets
```

## Design Systeem

### Kleuren

- **Primaire kleur (Somstyle Blauw)**: `#04E4FF`
- **Lichtgrijs**: `#F5F5F5`
- **Donkergrijs**: `#333333`

### Typography

- **Font**: Inter (Google Fonts)
- **Base size**: 16px
- **Responsive typography**: Schaalbaar van mobiel naar desktop

## Aanpassingen

### Logo vervangen

Vervang de `Logo.tsx` component met je eigen logo component of voeg een logo image toe in `public/images/` en update de component.

### Afbeeldingen

De productcategorie afbeeldingen gebruiken momenteel Unsplash placeholders. Vervang deze met je eigen afbeeldingen:

1. Voeg afbeeldingen toe aan `public/images/`
2. Update de `imageUrl` in `components/Products.tsx`

### Content aanpassen

Alle content is te vinden in de component bestanden:
- Teksten: Direct in de componenten
- Contactgegevens: `components/Contact.tsx` en `components/Footer.tsx`
- FAQ items: `components/FAQ.tsx`

## Browser Support

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)

## Licentie

© 2024 Easycheck Com B.V. – Somstyle. Alle rechten voorbehouden.




