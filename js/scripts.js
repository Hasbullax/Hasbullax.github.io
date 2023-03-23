const modsData = [
    {
        title: 'Just Enough Items',
        date: '2023-03-22',
        downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/jei/download/3903068',
        description: 'Este MOD permite ver el crafteo de cualquier ITEM'
    },
    {
        title: 'Mod 2',
        date: '2023-03-19',
        downloadLink: 'https://example.com/mod2',
        description: 'Descripción Mod 2'
    },
    {
        title: 'Mod 3',
        date: '2023-03-21',
        downloadLink: 'https://example.com/mod3',
        description: 'Descripción Mod 3'
    }
];

let sortDescending = true;

function renderMods(mods) {
    const tbody = document.getElementById('mods');
    tbody.innerHTML = '';

    mods.forEach(mod => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mod.title}</td>
            <td>${mod.date}</td>
            <td><a href="${mod.downloadLink}" target="_blank" title="${mod.description}"><button>Descargar</button></a></td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById('sortDate').addEventListener('click', () => {
    let sortedMods = [...modsData];
    sortedMods.sort((a, b) => {
        return sortDescending
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date);
    });

    sortDescending = !sortDescending;
    renderMods(sortedMods);
});

renderMods(modsData);


function typeWriter(element, text, delay = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

const infoText = document.getElementById('infoText');
const infoMessage = 'Si quieres ver una pequeña descripción del mod deja el cursor del mouse encima del botón de descargar pero sin darle click...';

typeWriter(infoText, infoMessage);
function typeWriter(element, text, delay = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else {
            element.classList.add('blink');
        }
    }
    type();
}
document.getElementById('title').addEventListener('click', async () => {
    const titleText = document.getElementById('title').textContent;
    try {
        await navigator.clipboard.writeText(titleText);
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.textContent = 'Se ha copiado con éxito la IP!';
        copyMessage.classList.remove('hidden');
        setTimeout(() => {
            copyMessage.classList.add('hidden');
        }, 3000);
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
    }
});