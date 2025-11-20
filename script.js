function filterExtensions() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const rows = document.querySelectorAll('#extensionsTable tbody tr');
  let visibleCount = 0;
  rows.forEach(row => {
    const contact = row.cells[0].textContent.toLowerCase();
    const extension = row.cells[1].textContent.toLowerCase();
    if (contact.includes(input) || extension.includes(input)) {
      row.classList.remove('hidden');
      visibleCount++;
    } else if (visibleCount >= 12 && input === '') {
      row.classList.add('hidden');
    } else if (input !== '') {
      row.classList.add('hidden');
    }
  });
}

const bookmarkFileInput = document.getElementById('bookmarkFile');
const bookmarkList = document.getElementById('bookmarkList');
const clearBookmarksBtn = document.getElementById('clearBookmarksBtn');

function loadBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
  bookmarkList.innerHTML = '';
  bookmarks.forEach((bookmark, index) => {
    if (bookmark.url && bookmark.name) {
      const li = document.createElement('li');
      li.className = 'bookmark-item';
      const a = document.createElement('a');
      a.href = bookmark.url;
      a.textContent = bookmark.name;
      a.className = 'bookmark-link';
      a.target = '_blank';
      const img = document.createElement('img');
      img.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(bookmark.url)}`;
      img.alt = '';
      img.onerror = () => { img.src = 'https://via.placeholder.com/16'; };
      a.prepend(img);
      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = 'X';
      deleteBtn.className = 'delete-bookmark';
      deleteBtn.onclick = () => deleteBookmark(index);
      li.appendChild(a);
      li.appendChild(deleteBtn);
      bookmarkList.appendChild(li);
    }
  });
  console.log(`Marcadores cargados: ${bookmarks.length}`);
}

function parseBookmarkHTML(html) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const bookmarks = [];

    function extractBookmarks(nodes) {
      Array.from(nodes).forEach(node => {
        if (node.tagName === 'A') {
          const url = node.getAttribute('href');
          const name = node.textContent.trim() || url;
          if (url && url.startsWith('http')) {
            bookmarks.push({ name, url });
          } else {
            console.warn(`Bookmark ignorado: URL inválida (${url})`);
          }
        } else if (node.tagName === 'DL' || node.tagName === 'DT') {
          extractBookmarks(node.children);
        }
      });
    }

    const dl = doc.querySelector('dl') || doc.body;
    if (!dl) {
      throw new Error('No se encontró la estructura de marcadores (DL) en el archivo HTML');
    }
    extractBookmarks(dl.children);
    if (bookmarks.length === 0) {
      throw new Error('No se encontraron marcadores válidos en el archivo');
    }
    return bookmarks;
  } catch (error) {
    console.error('Error al parsear el archivo HTML:', error);
    throw error;
  }
}

bookmarkFileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log(`Archivo seleccionado: ${file.name}, tipo: ${file.type}, tamaño: ${file.size} bytes`);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const bookmarks = parseBookmarkHTML(e.target.result);
        console.log(`Marcadores extraídos: ${bookmarks.length}`, bookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        loadBookmarks();
        alert(`Se cargaron ${bookmarks.length} marcadores con éxito.`);
      } catch (error) {
        console.error('Error al procesar el archivo:', error);
        alert('Error al cargar el archivo de marcadores. Asegúrate de que sea un archivo HTML válido exportado desde Edge o Chrome.');
      }
    };
    reader.onerror = () => {
      console.error('Error al leer el archivo:', reader.error);
      alert('Error al leer el archivo. Por favor, intenta de nuevo.');
    };
    reader.readAsText(file);
  } else {
    console.warn('No se seleccionó ningún archivo');
    alert('Por favor, selecciona un archivo HTML de marcadores.');
  }
});

function clearBookmarks() {
  if (confirm('¿Estás seguro de que deseas limpiar todos los marcadores?')) {
    localStorage.removeItem('bookmarks');
    bookmarkList.innerHTML = '';
    console.log('Marcadores eliminados de localStorage');
    alert('Marcadores limpiados con éxito.');
  }
}

function deleteBookmark(index) {
  if (confirm('¿Deseas eliminar este marcador?')) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    loadBookmarks();
    console.log(`Marcador eliminado en índice ${index}`);
    alert('Marcador eliminado con éxito.');
  }
}

clearBookmarksBtn.addEventListener('click', clearBookmarks);

const notepad = document.getElementById('notepad');

function loadNotes() {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notepad.value = savedNotes;
  }
}

notepad.addEventListener('input', () => {
  localStorage.setItem('notes', notepad.value);
});

function updateParallax() {
  const parallax = document.getElementById('imageParallax');
  const images = parallax.getElementsByClassName('parallax-image');
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 10000); // Cambia cada 10 segundos
}

document.addEventListener('DOMContentLoaded', () => {
  filterExtensions();
  loadBookmarks();
  loadNotes();
  updateParallax();
  // Inicializar la primera imagen como activa
  document.querySelector('.parallax-image').classList.add('active');
});