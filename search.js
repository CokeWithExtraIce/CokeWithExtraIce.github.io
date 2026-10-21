function initSearch() {
    const searchContainer = document.getElementById('search-box-container');
    if (!searchContainer) return;

    searchContainer.innerHTML = `
        <div class="mb-3">
            <input type="text" id="doc-search-input" class="form-control form-control-sm" placeholder="" onkeyup="handleSearch(this.value)">
        </div>
    `;
}

function handleSearch(keyword) {
    const query = keyword.trim().toLowerCase();
    const categories = document.querySelectorAll('#tree-menu .category');

    categories.forEach(categoryEl => {
        const fileItems = categoryEl.querySelectorAll('.file-item');
        let hasMatch = false;

        fileItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (query === '' || text.includes(query)) {
                item.style.display = 'block';
                hasMatch = true;
            } else {
                item.style.display = 'none';
            }
        });

        if (hasMatch) {
            categoryEl.style.display = 'block';
            if (query !== '') categoryEl.classList.add('open');
        } else {
            categoryEl.style.display = query === '' ? 'block' : 'none';
        }
    });
}