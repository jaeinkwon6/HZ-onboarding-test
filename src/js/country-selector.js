(function () {
  function createEl(tag, attrs, children) {
    const el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(k => {
      if (k === 'style') Object.assign(el.style, attrs[k]);
      else if (k === 'class') el.className = attrs[k];
      else el.setAttribute(k, attrs[k]);
    });
    if (children) children.forEach(c => {
      if (typeof c === 'string') el.insertAdjacentHTML('beforeend', c);
      else if (c) el.appendChild(c);
    });
    return el;
  }

  const FLAG_MAP = {
    'Sweden': '../Asset/Sweden.svg',
    'Norway': '../Asset/Norway.svg',
    'Denmark': '../Asset/Denmark.svg',
    'Finland': '../Asset/Finland.svg',
    'Germany': '../Asset/Germany.png'
  };
  const GLOBAL_FLAG = '../Asset/Global.svg';
  const COUNTRY_LIST = [
    'Afghanistan','Albania','Algeria','Andorra','Angola','Argentina','Armenia','Australia','Austria','Azerbaijan',
    'Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi',
    'Cambodia','Cameroon','Canada','Cape Verde','Central African Republic','Chad','Chile','China','Colombia','Comoros','Costa Rica','Côte d\'Ivoire','Croatia','Cuba','Cyprus','Czechia',
    'Denmark','Djibouti','Dominica','Dominican Republic',
    'Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia',
    'Fiji','Finland','France',
    'Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana',
    'Haiti','Honduras','Hungary',
    'Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy',
    'Jamaica','Japan','Jordan',
    'Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan',
    'Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg',
    'Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar',
    'Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway',
    'Oman',
    'Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal',
    'Qatar',
    'Romania','Russia','Rwanda',
    'Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria',
    'Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu',
    'Uganda','Ukraine','United Arab Emirates','United Kingdom','Uruguay','Uzbekistan',
    'Vanuatu','Vatican City','Venezuela','Vietnam',
    'Yemen',
    'Zambia','Zimbabwe'
  ];

  function getFlag(name) {
    return FLAG_MAP[name] || GLOBAL_FLAG;
  }

  function buildSheet(container) {
    const overlay = createEl('div', { id: 'country-sheet-ds', class: 'absolute inset-0 z-50 hidden', style: { background: 'rgba(0,0,0,0.3)', transition: 'opacity 200ms ease' } });
    const panel = createEl('div', { class: 'absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl', style: { padding: '32px 16px', boxShadow: '0px -8px 24px rgba(0,0,0,0.2)', transform: 'translateY(100%)', transition: 'transform 250ms ease', height: '582px', display: 'flex', flexDirection: 'column' } });
    const searchWrap = createEl('div', { id: 'country-search-wrap-ds', class: 'flex items-center', style: { gap: '8px', height: '48px', padding: '0 12px', background: 'var(--color-bg-medium)', borderRadius: '8px', marginBottom: '16px' } }, [
      '<div class="w-5 h-5 flex items-center justify-center" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5" style="color: var(--color-text-weak);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>'
    ]);
    const input = createEl('input', { id: 'country-search-ds', type: 'text', placeholder: 'Search', style: { background: 'transparent', border: 'none', outline: 'none', width: '100%', color: 'var(--color-text-default)', fontSize: 'var(--font-size-secondary)', lineHeight: 'var(--line-height-secondary)', caretColor: 'var(--color-text-default)' } });
    searchWrap.appendChild(input);
    const list = createEl('div', { id: 'country-list-ds', class: 'flex flex-col', style: { gap: '0', flex: '1', overflowY: 'auto', WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' } });
    const actions = createEl('div', { class: 'w-full flex items-center justify-between', style: { marginTop: '16px', gap: '16px' } }, [
      '<button id="country-cancel-ds" type="button" class="btn btn-secondary" style="flex:1; height:48px; border-radius:24px;">Cancel</button>',
      '<button id="country-confirm-ds" type="button" class="btn btn-primary" style="flex:1; height:48px; border-radius:24px;">Confirm</button>'
    ]);
    panel.appendChild(searchWrap);
    panel.appendChild(list);
    panel.appendChild(actions);
    overlay.appendChild(panel);
    container.appendChild(overlay);
    return { overlay, panel, input, list, cancelBtn: actions.querySelector('#country-cancel-ds'), confirmBtn: actions.querySelector('#country-confirm-ds') };
  }

  function CountrySelectorSheet(options) {
    const mobileContainer = options.container || document.querySelector('#mobile-container') || document.querySelector('.max-w-sm');
    const { overlay, panel, input, list, cancelBtn, confirmBtn } = buildSheet(mobileContainer);
    let selected = new Set(options.selected || []);
    let bodyScrollY = 0;
    let prevMainScrollTop = 0;

    const SUGGESTED = ['Finland','Sweden','Norway','Denmark'];

    function appendHeader(label) {
      const h = createEl('div', { style: { padding: '12px 0 0 0' } }, [ `<span class="text-xs" style="color: var(--color-text-weak);">${label}</span>` ]);
      list.appendChild(h);
    }

    function appendRow(name) {
      const isSelected = selected.has(name);
      const row = createEl('button', { type: 'button', class: 'w-full flex items-center justify-between rounded-lg' });
      Object.assign(row.style, { background: 'var(--color-bg-default)', padding: '12px 8px 12px 0px', minHeight: '52px', maxHeight: '52px', width: '100%', borderBottom: '1px solid var(--color-border-weak)' });
      row.setAttribute('data-country', name);
      row.innerHTML = `
        <div class="flex items-center" style="gap: 8px;">
          <img src="${getFlag(name)}" alt="${name} flag" class="w-4 h-4 rounded-sm"/>
          <span class="typography-secondary-bold">${name}</span>
        </div>
        ${isSelected
          ? `<span class="inline-flex items-center justify-center" style="width: 20px; height: 20px; border-radius: 10px; background: var(--color-icon-default);">
               <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" width="12" height="12"><polyline points="20 6 9 17 4 12" /></svg>
             </span>`
          : `<span class="inline-flex" style="width: 20px; height: 20px; border-radius: 10px; border: 2px solid #C8C8C8;"></span>`}
      `;
      row.addEventListener('click', () => {
        if (selected.has(name)) selected.delete(name); else selected.add(name);
        if (input.value.trim() !== '') input.value = '';
        render();
        list.scrollTop = 0;
      });
      list.appendChild(row);
    }

    function render() {
      const query = (input.value || '').trim().toLowerCase();
      list.innerHTML = '';
      const matches = COUNTRY_LIST.filter(n => n.toLowerCase().includes(query));
      const chosen = matches.filter(n => selected.has(n)).sort((a,b)=>a.localeCompare(b));
      if (chosen.length) { appendHeader('Chosen'); chosen.forEach(appendRow); }
      const suggested = matches.filter(n => SUGGESTED.includes(n) && !selected.has(n)).sort((a,b)=>a.localeCompare(b));
      if (suggested.length) { appendHeader('Might like'); suggested.forEach(appendRow); }
      const used = new Set([...chosen, ...suggested]);
      const remaining = matches.filter(n => !used.has(n)).sort((a,b)=>a.localeCompare(b));
      if (remaining.length) {
        let currentLetter = '';
        remaining.forEach(n => {
          const letter = n.charAt(0).toUpperCase();
          if (letter !== currentLetter) {
            currentLetter = letter;
            const alphaHeader = createEl('div', { style: { padding: '12px 0 0 0' } }, [ `<span class="text-xs" style="color: var(--color-text-weak);">${currentLetter}</span>` ]);
            list.appendChild(alphaHeader);
          }
          appendRow(n);
        });
      }
    }

    function open() {
      overlay.classList.remove('hidden');
      overlay.style.opacity = '0';
      bodyScrollY = window.scrollY || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${bodyScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      panel.style.willChange = 'transform';
      panel.style.transform = 'translate3d(0, 100%, 0)';
      panel.style.transition = 'transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1)';
      requestAnimationFrame(() => { overlay.style.opacity = '1'; panel.style.transform = 'translate3d(0,0,0)'; });
      setTimeout(() => { try { input.focus({ preventScroll: true }); } catch (_) { input.focus(); } const v=input.value; input.setSelectionRange(v.length,v.length); }, 0);
      render();
    }

    function close() {
      overlay.style.opacity = '0';
      panel.style.transform = 'translate3d(0, 100%, 0)';
      setTimeout(() => {
        overlay.classList.add('hidden');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        window.scrollTo(0, bodyScrollY);
      }, 220);
    }

    input.addEventListener('input', render);
    cancelBtn.addEventListener('click', () => { close(); options.onCancel && options.onCancel(Array.from(selected)); });
    confirmBtn.addEventListener('click', () => { close(); options.onConfirm && options.onConfirm(Array.from(selected)); });

    return { open, close, setSelected: (arr) => { selected = new Set(arr || []); render(); } };
  }

  window.CountrySelectorSheet = CountrySelectorSheet;
})();














