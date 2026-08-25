const search = document.querySelector('#timeline-search');
const entries = [...document.querySelectorAll('.timeline-entry')];
const status = document.querySelector('#search-status');
const noResults = document.querySelector('#no-results');

function filterTimeline() {
  if (!search) return;
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;

  const searchable = entries.length ? entries : [...document.querySelectorAll('.catalog-card')];
  for (const entry of searchable) {
    const matches = !query || entry.dataset.search.includes(query);
    entry.hidden = !matches;
    if (matches) visible += 1;
  }

  status.textContent = query
    ? `${visible} landmark ${visible === 1 ? 'entry' : 'entries'} found.`
    : `Showing ${searchable.length} ${entries.length ? 'landmark entries' : 'reels'}.`;
  noResults.hidden = visible !== 0;
}

if (search) search.addEventListener('input', filterTimeline);

for (const button of document.querySelectorAll('.details-toggle')) {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    details.hidden = expanded;
  });
}
