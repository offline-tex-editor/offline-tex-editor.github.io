// Copy buttons for the install command and the code blocks. Everything else on the page works without script.
function copyButton(button, text) {
  button.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(text()); button.textContent = 'Copied'; }
    catch { button.textContent = 'Select and press Ctrl+C'; }
    setTimeout(() => { button.textContent = 'Copy'; }, 1800);
  });
}
for (const b of document.querySelectorAll('button[data-copy]'))
  copyButton(b, () => document.getElementById(b.dataset.copy).textContent.trim());
for (const pre of document.querySelectorAll('.paper pre')) {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'copy'; b.textContent = 'Copy';
  b.setAttribute('aria-label', 'Copy this code');
  copyButton(b, () => pre.querySelector('code').textContent.trim());
  pre.append(b);
}
