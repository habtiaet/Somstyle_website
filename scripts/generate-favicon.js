const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

// Input PNG bestand (gebruik de hoogste resolutie die je hebt)
const inputFile = path.join(__dirname, '../public/assets/favicons/web-app-manifest-512x512.png');
const outputFile = path.join(__dirname, '../public/favicon.ico');
const outputFile2 = path.join(__dirname, '../public/assets/favicons/favicon.ico');

// Resoluties voor de ICO (multi-resolution ICO)
const sizes = [16, 32, 48, 64, 128, 256];

async function generateFavicon() {
  try {
    console.log('Generating high-definition favicon.ico with multiple resolutions...');
    
    // Check if input file exists
    if (!fs.existsSync(inputFile)) {
      console.error(`Input file not found: ${inputFile}`);
      console.log('Trying alternative: favicon-96x96.png');
      const altFile = path.join(__dirname, '../public/assets/favicons/favicon-96x96.png');
      if (fs.existsSync(altFile)) {
        await generateFromPNG(altFile);
        return;
      }
      throw new Error('No suitable input file found');
    }

    await generateFromPNG(inputFile);
    
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

async function generateFromPNG(inputFile) {
  console.log(`Using source file: ${inputFile}`);
  
  // Genereer PNG's in alle benodigde resoluties
  const buffers = await Promise.all(
    sizes.map(async (size) => {
      const buffer = await sharp(inputFile)
        .resize(size, size, { 
          fit: 'contain', 
          background: { r: 255, g: 255, b: 255, alpha: 0 } 
        })
        .png()
        .toBuffer();
      console.log(`✓ Generated ${size}x${size} PNG`);
      return buffer;
    })
  );

  // Converteer naar multi-resolution ICO
  console.log('Converting to multi-resolution ICO...');
  const ico = await toIco(buffers);
  
  // Schrijf ICO bestanden
  fs.writeFileSync(outputFile, ico);
  fs.writeFileSync(outputFile2, ico);
  
  console.log(`✓ Generated high-definition favicon.ico at ${outputFile}`);
  console.log(`✓ Generated high-definition favicon.ico at ${outputFile2}`);
  console.log(`✓ ICO contains ${sizes.length} resolutions: ${sizes.join('x, ')}x`);
}

generateFavicon();
