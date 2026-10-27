const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function generateAssets() {
  const publicDir = path.join(__dirname, "..", "public");

  const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#090a0f"/>
  
  <!-- Subtle Grid Pattern -->
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
    <radialGradient id="emeraldGlow" cx="0.8" cy="0.2" r="0.6">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cyanGlow" cx="0.1" cy="0.9" r="0.5">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#emeraldGlow)"/>
  <rect width="1200" height="630" fill="url(#cyanGlow)"/>

  <!-- Border Frame -->
  <rect x="30" y="30" width="1140" height="570" rx="24" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>

  <!-- Header Area -->
  <g transform="translate(80, 80)">
    <!-- Logo Icon Box -->
    <rect width="52" height="52" rx="16" fill="url(#logoGrad)"/>
    <!-- Inner Shield Motif -->
    <path d="M26 14L37 19V29C37 36 26 41 26 41C26 41 15 36 15 29V19L26 14Z" fill="#090a0f" stroke="#10b981" stroke-width="2" stroke-linejoin="round"/>
    
    <!-- Title Text -->
    <text x="70" y="37" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="800" letter-spacing="-0.5">Acctx</text>
    
    <!-- Version Pill -->
    <rect x="175" y="14" width="170" height="28" rx="14" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
    <circle cx="192" cy="28" r="4" fill="#10b981"/>
    <text x="204" y="33" fill="#10b981" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="0.5">DESKTOP VAULT v1.0</text>
    
    <!-- Right Pill -->
    <rect x="790" y="12" width="220" height="32" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="810" y="33" fill="#a1a1aa" font-family="sans-serif" font-size="13" font-weight="600">100% Offline &amp; Air-Gapped</text>
  </g>

  <!-- Headline -->
  <g transform="translate(80, 210)">
    <text fill="#ffffff" font-family="sans-serif" font-size="48" font-weight="800" letter-spacing="-1">
      <tspan x="0" dy="0">Private, Offline-First Personal Finance</tspan>
      <tspan x="0" dy="62" fill="#34d399">&amp; Smart Bill Management</tspan>
    </text>
    
    <!-- Subtitle -->
    <text x="0" y="160" fill="#a1a1aa" font-family="sans-serif" font-size="20" font-weight="400">
      <tspan x="0" dy="0">Secure local offline encryption. Master 6-digit PIN lockout.</tspan>
      <tspan x="0" dy="32">Zero cloud tracking. Complete data sovereignty for Windows, macOS, and Linux.</tspan>
    </text>
  </g>

  <!-- Feature Tags Row -->
  <g transform="translate(80, 490)">
    <!-- Tag 1 -->
    <rect x="0" y="0" width="180" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="20" y="27" fill="#e4e4e7" font-family="sans-serif" font-size="14" font-weight="600">✓ Encrypted Vault</text>
    
    <!-- Tag 2 -->
    <rect x="200" y="0" width="210" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="220" y="27" fill="#e4e4e7" font-family="sans-serif" font-size="14" font-weight="600">✓ Master PIN Lockout</text>
    
    <!-- Tag 3 -->
    <rect x="430" y="0" width="210" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="450" y="27" fill="#e4e4e7" font-family="sans-serif" font-size="14" font-weight="600">✓ Smart Bill Cycles</text>

    <!-- Tag 4 -->
    <rect x="660" y="0" width="180" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="680" y="27" fill="#e4e4e7" font-family="sans-serif" font-size="14" font-weight="600">✓ Zero Cloud Sync</text>

    <!-- Platforms -->
    <text x="1000" y="28" text-anchor="end" fill="#71717a" font-family="sans-serif" font-size="15" font-weight="700">Windows • macOS • Linux</text>
  </g>
</svg>
`;

  await sharp(Buffer.from(ogSvg))
    .png({ quality: 95 })
    .toFile(path.join(publicDir, "og-image.png"));
  console.log("Created public/og-image.png (1200x630)");

  const iconSvg = `
<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="40" fill="#090a0f"/>
  <rect x="2" y="2" width="176" height="176" rx="38" stroke="rgba(16,185,129,0.3)" stroke-width="4"/>
  <path d="M90 35L135 55V95C135 125 90 148 90 148C90 148 45 125 45 95V55L90 35Z" fill="#10b981" stroke="#34d399" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="90" cy="85" r="14" fill="#090a0f"/>
  <rect x="85" y="85" width="10" height="22" rx="4" fill="#090a0f"/>
</svg>
`;

  await sharp(Buffer.from(iconSvg))
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("Created public/apple-touch-icon.png (180x180)");
}

generateAssets().catch((err) => {
  console.error(err);
  process.exit(1);
});
