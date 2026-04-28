const presets = [
  { name: "Ocean Blue", colors: ["#2E3192", "#1BFFFF"] },
  { name: "Sunset", colors: ["#FF512F", "#F09819"] },
  { name: "Purple Love", colors: ["#cc2b5e", "#753a88"] },
  { name: "Fresh Mint", colors: ["#00d2ff", "#3a7bd5"] },
  { name: "Peach", colors: ["#ED4264", "#FFEDBC"] },
  { name: "Mojito", colors: ["#1D976C", "#93F9B9"] },
  { name: "Cherry", colors: ["#EB3349", "#F45C43"] },
  { name: "Sky", colors: ["#00c6ff", "#0072ff"] },
  { name: "Grapefruit", colors: ["#e96443", "#904e95"] },
  { name: "Instagram", colors: ["#833ab4", "#fd1d1d", "#fcb045"] },
  { name: "Emerald", colors: ["#348F50", "#56B4D3"] },
  { name: "Royal", colors: ["#141E30", "#243B55"] }
];

const gallery = document.getElementById('gallery');
const direction = document.getElementById('direction');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const livePreview = document.getElementById('livePreview');
const liveCode = document.getElementById('liveCode');
const copyLive = document.getElementById('copyLive');
const toast = document.getElementById('toast');

function updateLivePreview() {
  const dir = direction.value;
  const c1 = color1.value;
  const c2 = color2.value;
  const gradient = `linear-gradient(${dir}, ${c1}, ${c2})`;
  livePreview.style.background = gradient;
  liveCode.textContent = `background: ${gradient};`;
}

function showToast() {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  });
}

function renderGallery() {
  gallery.innerHTML = '';
  presets.forEach(preset => {
    const colors = preset.colors.join(', ');
    const gradient = `linear-gradient(135deg, ${colors})`;
    const cssText = `background: ${gradient};`;
    
    const card = document.createElement('div');
    card.className = 'gradient-card';
    card.style.background = gradient;
    card.innerHTML = `<div class="info">${preset.name}<br>${cssText}</div>`;
    
    card.addEventListener('click', () => copyToClipboard(cssText));
    gallery.appendChild(card);
  });
}

direction.addEventListener('change', updateLivePreview);
color1.addEventListener('input', updateLivePreview);
color2.addEventListener('input', updateLivePreview);
copyLive.addEventListener('click', () => copyToClipboard(liveCode.textContent));

updateLivePreview();
renderGallery();
