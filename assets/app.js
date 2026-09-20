function badgeClass(kat) {
  switch (kat) {
    case 'Sangat Baik': return 'bg-success-50 text-success-600';
    case 'Baik': return 'bg-brand-50 text-brand-600';
    case 'Cukup': return 'bg-warning-50 text-warning-600';
    case 'Perlu Perbaikan': return 'bg-orange-50 text-orange-600';
    default: return 'bg-error-50 text-error-600';
  }
}
function esc(s) {
  const d = document.createElement('div');
  d.textContent = s == null ? '' : String(s);
  return d.innerHTML;
}
// Palet warna dipakai konsisten di semua chart
const COLOR_ACCENT = '#2F6F5E';
const COLOR_WARN = '#B4472B';

function barColors(values, threshold) {
  return values.map(v => v < threshold ? COLOR_WARN : COLOR_ACCENT);
}

// --- Sidebar terpusat: ubah menu/icon/logo cukup di sini, kepake di semua halaman ---
const MENU = [
  { href: 'index.html', label: 'Overview',
    icon: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>' },
  { href: 'pembelajaran.html', label: 'Monev Pembelajaran',
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
  { href: 'suasana_mahasiswa.html', label: 'Suasana Akademik: Mahasiswa',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
  { href: 'suasana_dosen.html', label: 'Suasana Akademik: Dosen',
    icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { href: 'perbandingan.html', label: 'Perbandingan',
    icon: '<path d="M12 3v18M8 21h8M5 8l-3 6a3 3 0 0 0 6 0zM19 8l-3 6a3 3 0 0 0 6 0zM5 8h4l3-3 3 3h4"/>' },
];

function renderSidebar(activeHref) {
  const items = MENU.map(m => {
    const active = m.href === activeHref;
    return `
          <li>
            <a href="${m.href}" class="menu-item group ${active ? 'menu-item-active' : 'menu-item-inactive'}">
              <svg class="${active ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">${m.icon}</svg>
              <span class="menu-item-text">${m.label}</span>
            </a>
          </li>`;
  }).join('');

  document.getElementById('sidebar').innerHTML = `
    <div class="flex items-center gap-2.5 pt-8 pb-7">
      <img src="assets/logo-uho.png" alt="Logo UHO" style="width:36px;height:36px;object-fit:contain;flex-shrink:0;">
      <div class="flex flex-col leading-tight">
        <strong class="text-gray-800">Monev TI</strong>
        <span class="text-xs text-gray-400">Univ. Halu Oleo</span>
      </div>
    </div>
    <nav class="mb-6">
      <ul class="flex flex-col gap-1">${items}</ul>
    </nav>
    <div class="mt-auto pb-6 text-xs text-gray-400 border-t border-gray-100 pt-4">
      Program Studi Teknik Informatika
    </div>`;
}
