import Hero from './components/Hero.jsx';
import SearchBlock from './components/SearchBlock.jsx';
import ProductSection from './components/ProductSection.jsx';
import CategoryGrid from './components/CategoryGrid.jsx';
import AdvertisingHighlights from './components/AdvertisingHighlights.jsx';
import PopularQueries from './components/PopularQueries.jsx';
import {
  advertisingHighlights,
  heroContent,
  highlightedCategories,
  popularProducts,
  popularQueries,
  searchFilters,
  smartCategories,
} from './data.js';

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container mx-auto px-6">
          <div className="app-header__inner">
            <div className="app-header__brand">
              <img src="/media/logo.webp" alt="Graphics Gallery" className="app-header__logo" />
              <div className="app-header__titles">
                <span className="app-header__title">Graphics Gallery</span>
                <span className="app-header__subtitle">החנות הדיגיטלית ליוצרים</span>
              </div>
            </div>
            <nav className="app-header__nav">
              <a href="#products">מוצרים</a>
              <a href="#categories">קטגוריות</a>
              <a href="#queries">חיפושים</a>
              <a href="#contact">צור קשר</a>
            </nav>
            <button type="button" className="app-header__cta">התחברות</button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero content={heroContent} categories={smartCategories} />
        <SearchBlock filters={searchFilters} />
        <div id="products">
          <ProductSection products={popularProducts} />
        </div>
        <div id="categories">
          <CategoryGrid categories={highlightedCategories} />
        </div>
        <AdvertisingHighlights items={advertisingHighlights} />
        <div id="queries">
          <PopularQueries queries={popularQueries} />
        </div>
      </main>

      <footer className="app-footer" id="contact">
        <div className="container mx-auto px-6">
          <div className="app-footer__grid">
            <div>
              <h3 className="app-footer__heading">בואו נשמור על קשר</h3>
              <p className="app-footer__text">
                הצטרפו לניוזלטר של גלריית גרפיקס וקבלו עדכונים על קולקציות חדשות והטבות בלעדיות.
              </p>
            </div>
            <form className="app-footer__form">
              <label htmlFor="newsletter" className="sr-only">
                דוא"ל
              </label>
              <input id="newsletter" type="email" required placeholder="הקלידו דוא\"ל" className="app-footer__input" />
              <button type="submit" className="app-footer__button">
                להצטרפות
              </button>
            </form>
          </div>
          <div className="app-footer__bottom">
            <span>© {new Date().getFullYear()} Graphics Gallery</span>
            <div className="app-footer__links">
              <a href="#">תנאי שימוש</a>
              <a href="#">מדיניות פרטיות</a>
              <a href="#">עזרה</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
