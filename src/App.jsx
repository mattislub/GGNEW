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
              <div className="app-header__logo-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                  <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
              </div>
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
              <input id="newsletter" type="email" required placeholder='הקלידו דוא"ל' className="app-footer__input" />
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
