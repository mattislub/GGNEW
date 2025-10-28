+106
-0

import { useState } from 'react';

function Selector({ label, options, selected, onSelect }) {
  return (
    <div className="search-block__selector">
      <span className="search-block__selector-label">{label}</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {options.map((option) => {
          const isActive = option === selected;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`search-block__pill ${isActive ? 'search-block__pill--active' : ''}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function SearchBlock({ filters }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(filters.categories[0]);
  const [orientation, setOrientation] = useState(filters.orientations[0]);
  const [licenseType, setLicenseType] = useState(filters.license[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const placeholder = 'מה תרצו לעצב היום?';

  return (
    <section className="search-block">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="search-block__card">
          <div className="search-block__input-row">
            <button type="button" className="search-block__icon-button" aria-label="חיפוש">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <div
              className="search-block__dropdown"
              tabIndex={-1}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setMenuOpen(false);
                }
              }}
            >
              <button
                type="button"
                className="search-block__dropdown-button"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="hidden md:inline">בחירת קטגוריה</span>
                <span className="md:hidden">{category}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {menuOpen && (
                <div className="search-block__dropdown-menu">
                  <ul>
                    {filters.categories.map((option) => (
                      <li key={option}>
                        <button
                          type="button"
                          className={`search-block__dropdown-item ${option === category ? 'is-active' : ''}`}
                          onClick={() => {
                            setCategory(option);
                            setMenuOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={placeholder}
              className="search-block__input"
            />
            <button type="button" className="search-block__submit">חיפוש</button>
          </div>
          <div className="search-block__filters">
            <Selector label="כיוון" options={filters.orientations} selected={orientation} onSelect={setOrientation} />
            <Selector label="רישיון" options={filters.license} selected={licenseType} onSelect={setLicenseType} />
          </div>
          <p className="search-block__hint">
            {`חיפוש: ${searchTerm || 'ללא'} · קטגוריה: ${category} · כיוון: ${orientation} · רישיון: ${licenseType}`}
          </p>
        </div>
      </div>
    </section>
  );
}
