import { useState, type MouseEvent } from 'react';
import './Header.css';

export interface NavItem {
  label: string;
  path: string;
  isCta?: boolean;
}

export interface HeaderProps {
  projectName?: string;
  projectSubtitle?: string;
  activePath?: string;
  navItems?: NavItem[];
  onNavigate?: (path: string) => void;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Главная', path: '/' },
  { label: 'О музее', path: '/#about' },
  { label: 'Фонды', path: '/#collections' },
  { label: 'Каталог', path: '/catalog', isCta: true },
];

export function Header({
  projectName = 'Цифровая картотека',
  projectSubtitle = 'Музейный архив',
  activePath = '/',
  navItems = DEFAULT_NAV_ITEMS,
  onNavigate,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    setIsMenuOpen(false);

    if (onNavigate && !path.startsWith('/#')) {
      event.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <header className="museum-header">
      <div className="museum-header__container">
        <a
          href="/"
          className="museum-header__brand"
          onClick={(event) => handleLinkClick(event, '/')}
          aria-label={`${projectName} — на главную`}
        >
          <span className="museum-header__logo" aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21h18" />
              <path d="M5 21V10" />
              <path d="M9 21V10" />
              <path d="M15 21V10" />
              <path d="M19 21V10" />
              <path d="M2 10h20" />
              <path d="M12 3L2 10h20L12 3z" />
            </svg>
          </span>

          <span className="museum-header__brand-text">
            <span className="museum-header__title">{projectName}</span>
            <span className="museum-header__subtitle">{projectSubtitle}</span>
          </span>
        </a>

        <button
          type="button"
          className={`museum-header__burger ${
            isMenuOpen ? 'museum-header__burger--open' : ''
          }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          aria-controls="museum-navigation"
        >
          <span className="museum-header__burger-line" />
          <span className="museum-header__burger-line" />
          <span className="museum-header__burger-line" />
        </button>

        <nav
          id="museum-navigation"
          className={`museum-header__nav ${
            isMenuOpen ? 'museum-header__nav--open' : ''
          }`}
          aria-label="Основная навигация"
        >
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            const linkClasses = [
              'museum-header__link',
              isActive ? 'museum-header__link--active' : '',
              item.isCta ? 'museum-header__link--cta' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <a
                key={item.path}
                href={item.path}
                className={linkClasses}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handleLinkClick(event, item.path)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;