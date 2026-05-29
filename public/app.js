import { ARCHIVE_MANIFEST } from './data.js';

const terminalInput = document.getElementById('terminal-command');
const output = document.getElementById('output-screen');

function updateManifest() {
    const tbody = document.querySelector('#manifest-table tbody');
    tbody.innerHTML = ARCHIVE_MANIFEST.map(c => 
        `<tr><td>${c.name}</td><td>${c.role}</td><td>${c.profile}</td></tr>`
    ).join('');
}

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        output.innerText += `\n> ${cmd}`;
        if (cmd === 'manifest') {
            updateManifest();
            output.innerText += "\nManifest loaded.";
        }
        terminalInput.value = '';
    }
});