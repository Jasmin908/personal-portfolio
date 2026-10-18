// Small progressive enhancements. The site works without any of this.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Scroll reveal ---------- */
const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((el) => el.classList.add('is-in'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        revealObserver.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealItems.forEach((el) => revealObserver.observe(el));
}

/* ---------- Navigation indicator + scroll spy ---------- */
const navList = document.querySelector<HTMLElement>('[data-nav-list]');
const indicator = navList?.querySelector<HTMLElement>('[data-nav-indicator]');

if (navList && indicator) {
  const links = [...navList.querySelectorAll<HTMLAnchorElement>('a[data-nav]')];
  let active = links.find((link) => link.hasAttribute('aria-current')) ?? null;

  const moveTo = (link: HTMLElement | null) => {
    if (!link) {
      indicator.style.opacity = '0';
      return;
    }
    indicator.style.opacity = '1';
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.transform = `translateX(${link.offsetLeft}px)`;
  };

  const setActive = (link: HTMLAnchorElement | null) => {
    if (active === link) return;
    active?.removeAttribute('aria-current');
    active = link;
    active?.setAttribute('aria-current', 'location');
    moveTo(active);
  };

  links.forEach((link) => {
    link.addEventListener('pointerenter', () => moveTo(link));
    link.addEventListener('focus', () => moveTo(link));
  });
  navList.addEventListener('pointerleave', () => moveTo(active));
  navList.addEventListener('focusout', () => moveTo(active));
  window.addEventListener('resize', () => moveTo(active));
  document.fonts?.ready.then(() => moveTo(active));
  moveTo(active);

  // Highlight the section that crosses the middle of the viewport.
  const sections = links
    .map((link) => document.getElementById(link.dataset.nav ?? ''))
    .filter((section): section is HTMLElement => section !== null);

  if (sections.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const link = links.find((l) => l.dataset.nav === entry.target.id) ?? null;
          if (entry.isIntersecting) setActive(link);
          else if (active === link) setActive(null);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => spy.observe(section));
  }
}

/* ---------- Mobile menu ---------- */
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

if (menuButton && menu) {
  const setOpen = (open: boolean) => {
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute(
      'aria-label',
      (open ? menuButton.dataset.labelClose : menuButton.dataset.labelOpen) ?? '',
    );
  };

  menuButton.addEventListener('click', () => setOpen(Boolean(menu.hidden)));
  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', (event) => {
    const target = event.target as Node;
    if (!menu.hidden && !menu.contains(target) && !menuButton.contains(target)) setOpen(false);
  });
}

/* ---------- Language switcher ---------- */
// Remember an explicit choice and keep the current section when switching.
document.querySelectorAll<HTMLAnchorElement>('a[data-lang]').forEach((link) => {
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', link.dataset.lang ?? '');
    } catch {
      // Storage can be blocked; the link still works.
    }
    link.hash = window.location.hash;
  });
});

/* ---------- Project card spotlight ---------- */
if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll<HTMLElement>('[data-spot]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}

/* ---------- Project filter ---------- */
// Without JavaScript the filter bar stays hidden and every project is shown.
const filterBar = document.querySelector<HTMLElement>('[data-project-filters]');

if (filterBar) {
  const buttons = [...filterBar.querySelectorAll<HTMLButtonElement>('button[data-filter]')];
  const groups = [...document.querySelectorAll<HTMLElement>('[data-project-group]')];
  const status = document.querySelector<HTMLElement>('[data-filter-status]');

  const apply = (filter: string) => {
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    let shown = 0;
    for (const group of groups) {
      const cards = [...group.querySelectorAll<HTMLElement>('[data-project-card]')];
      const visible = cards.filter((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
        card.removeAttribute('data-wide');
        return !card.hidden;
      });
      group.hidden = visible.length === 0;
      // A single card left over in a two-column row spans the full width.
      if (group.querySelector('[data-balance]') && visible.length % 2 === 1) {
        visible[visible.length - 1].setAttribute('data-wide', '');
      }
      shown += visible.length;
    }
    if (status) status.textContent = (status.dataset.template ?? '').replace('{n}', String(shown));
  };

  buttons.forEach((button) => button.addEventListener('click', () => apply(button.dataset.filter ?? 'all')));
  filterBar.hidden = false;
}
