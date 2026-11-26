import type { MouseEvent } from 'react';
import './Home.css';

export interface HomeProps {
  projectName?: string;
  catalogPath?: string;
  onNavigate?: (path: string) => void;
}

interface CollectionPreview {
  number: string;
  title: string;
  description: string;
}

const COLLECTION_PREVIEWS: CollectionPreview[] = [
  {
    number: '01',
    title: 'Живопись и графика',
    description:
      'Полотна, эскизы, гравюры и редкие акварели XVIII–XX веков с описанием техники и авторства.',
  },
  {
    number: '02',
    title: 'Археология и быт',
    description:
      'Предметы материальной культуры, керамика, утварь и находки из региональных экспедиций.',
  },
  {
    number: '03',
    title: 'Редкие документы',
    description:
      'Рукописи, карты, архивные фотографии и печатные издания, переведённые в цифровой вид.',
  },
  {
    number: '04',
    title: 'Декоративное искусство',
    description:
      'Художественный металл, фарфор, текстиль и ювелирные изделия из основных музейных фондов.',
  },
];

export function Home({
  projectName = 'Цифровая картотека музея',
  catalogPath = '/catalog',
  onNavigate,
}: HomeProps) {
  const handleCatalogClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      event.preventDefault();
      onNavigate(catalogPath);
    }
  };

  return (
    <div className="museum-home">
      <main>
        {/* Приветственный блок */}
        <section className="museum-home__hero">
          <div className="museum-home__container">
            <div className="museum-home__hero-grid">
              <div>
                <span className="museum-home__eyebrow">
                  <span
                    className="museum-home__eyebrow-dot"
                    aria-hidden="true"
                  />
                  Электронный музейный фонд
                </span>

                <h1 className="museum-home__title">{projectName}</h1>

                <p className="museum-home__lead">
                  Открытый цифровой архив музейных коллекций. Изучайте
                  экспонаты, их историю, датировку и происхождение — вся
                  картотека собрана в едином удобном каталоге.
                </p>

                <div className="museum-home__actions">
                  <a
                    href={catalogPath}
                    className="museum-home__btn museum-home__btn--primary"
                    onClick={handleCatalogClick}
                  >
                    Перейти в каталог
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="#about"
                    className="museum-home__btn museum-home__btn--secondary"
                  >
                    О проекте
                  </a>
                </div>

                <div className="museum-home__metrics">
                  <div>
                    <span className="museum-home__metric-value">4 фонда</span>
                    <span className="museum-home__metric-label">
                      Основные тематические коллекции
                    </span>
                  </div>
                  <div>
                    <span className="museum-home__metric-value">24 / 7</span>
                    <span className="museum-home__metric-label">
                      Свободный доступ к описаниям
                    </span>
                  </div>
                  <div>
                    <span className="museum-home__metric-value">Поиск</span>
                    <span className="museum-home__metric-label">
                      Быстрая фильтрация экспонатов
                    </span>
                  </div>
                </div>
              </div>

              <div className="museum-home__showcase">
                <div className="museum-home__frame">
                  <div className="museum-home__frame-visual">
                    <span className="museum-home__frame-tag">
                      Единый реестр фондов
                    </span>

                    <div
                      className="museum-home__frame-emblem"
                      aria-hidden="true"
                    >
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
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
                    </div>

                    <p className="museum-home__frame-caption">
                      Сохраняем культурное наследие в современном цифровом
                      формате
                    </p>
                  </div>

                  <div className="museum-home__frame-meta">
                    <span className="museum-home__frame-code">
                      АРХИВ • ОНЛАЙН
                    </span>
                    <span>Карточки экспонатов и атрибуция</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* О проекте */}
        <section id="about" className="museum-home__section">
          <div className="museum-home__container">
            <div className="museum-home__section-header">
              <span className="museum-home__section-kicker">
                Возможности картотеки
              </span>
              <h2 className="museum-home__section-title">
                Удобная работа с музейным собранием
              </h2>
              <p className="museum-home__section-desc">
                Платформа объединяет учётные сведения, фотографии и исторические
                справки в понятном интерфейсе для исследователей и посетителей.
              </p>
            </div>

            <div className="museum-home__features">
              <article className="museum-home__feature-card">
                <div className="museum-home__feature-icon" aria-hidden="true">
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
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3 className="museum-home__feature-title">
                  Точный поиск и фильтры
                </h3>
                <p className="museum-home__feature-text">
                  Находите нужные предметы по названию, эпохе, категории или
                  материалу изготовления за несколько секунд.
                </p>
              </article>

              <article className="museum-home__feature-card">
                <div className="museum-home__feature-icon" aria-hidden="true">
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
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="museum-home__feature-title">
                  Подробные карточки
                </h3>
                <p className="museum-home__feature-text">
                  Каждый экспонат сопровождается инвентарным номером,
                  датировкой, историческим контекстом и описанием сохранности.
                </p>
              </article>

              <article className="museum-home__feature-card">
                <div className="museum-home__feature-icon" aria-hidden="true">
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
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3 className="museum-home__feature-title">
                  Доступ с любого экрана
                </h3>
                <p className="museum-home__feature-text">
                  Картотека одинаково аккуратно отображается на мониторах,
                  планшетах и смартфонах — удобно пользоваться прямо в залах
                  музея.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Разделы фондов */}
        <section
          id="collections"
          className="museum-home__section museum-home__section--tinted"
        >
          <div className="museum-home__container">
            <div className="museum-home__section-header">
              <span className="museum-home__section-kicker">
                Структура собрания
              </span>
              <h2 className="museum-home__section-title">
                Основные разделы коллекции
              </h2>
              <p className="museum-home__section-desc">
                Ознакомьтесь с ключевыми направлениями фонда и перейдите в
                каталог для детального просмотра экспонатов.
              </p>
            </div>

            <div className="museum-home__collections">
              {COLLECTION_PREVIEWS.map((collection) => (
                <a
                  key={collection.number}
                  href={catalogPath}
                  className="museum-home__collection-card"
                  onClick={handleCatalogClick}
                >
                  <div>
                    <span className="museum-home__collection-num">
                      ФОНД {collection.number}
                    </span>
                    <h3 className="museum-home__collection-title">
                      {collection.title}
                    </h3>
                    <p className="museum-home__collection-desc">
                      {collection.description}
                    </p>
                  </div>

                  <span className="museum-home__collection-link">
                    Смотреть в каталоге →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Финальный призыв к действию */}
        <section className="museum-home__section">
          <div className="museum-home__container">
            <div className="museum-home__cta-box">
              <div className="museum-home__cta-content">
                <h2 className="museum-home__cta-title">
                  Готовы открыть музейный каталог?
                </h2>
                <p className="museum-home__cta-text">
                  Перейдите к полному списку оцифрованных экспонатов, чтобы
                  воспользоваться поиском и открыть подробные карточки
                  предметов.
                </p>
              </div>

              <a
                href={catalogPath}
                className="museum-home__btn museum-home__btn--light"
                onClick={handleCatalogClick}
              >
                Открыть каталог
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="museum-home__footer">
        <div className="museum-home__container">
          <div className="museum-home__footer-inner">
            <span className="museum-home__footer-brand">{projectName}</span>
            <span>
              © {new Date().getFullYear()} Электронный каталог музейных фондов
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;