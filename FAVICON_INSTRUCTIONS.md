# High-Definition Favicon.ico Genereren

Om een high-definition favicon.ico te maken met meerdere resoluties, heb je twee opties:

## Optie 1: Online Tool (Aanbevolen - Eenvoudigst)

1. Ga naar https://realfavicongenerator.net/
2. Upload je `web-app-manifest-512x512.png` bestand
3. Configureer de instellingen:
   - Selecteer alle platforms
   - Kies voor "Multi-resolution ICO"
4. Download de gegenereerde bestanden
5. Kopieer `favicon.ico` naar:
   - `public/favicon.ico`
   - `public/assets/favicons/favicon.ico`

## Optie 2: Lokaal Script

Als je Node.js packages hebt geïnstalleerd:

```bash
npm install --save-dev sharp to-ico
npm run generate-favicon
```

Dit genereert automatisch een multi-resolution ICO met de volgende resoluties:
- 16x16
- 32x32
- 48x48
- 64x64
- 128x128
- 256x256

## Waarom High-Definition?

Een multi-resolution ICO bestand bevat meerdere afbeeldingen in verschillende groottes. Browsers en besturingssystemen kiezen automatisch de beste resolutie voor hun context:
- **16x16**: Browser tabbladen
- **32x32**: Desktop shortcuts (Windows)
- **48x48**: Desktop shortcuts (Windows, hoge DPI)
- **64x64**: Desktop shortcuts (macOS)
- **128x128**: Desktop shortcuts (macOS, hoge DPI)
- **256x256**: Moderne displays, hoge resolutie

Dit zorgt voor scherpe favicons op alle apparaten en schermen!

