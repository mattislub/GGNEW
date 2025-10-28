import { useMemo, useState } from 'react';

const heroBackground = 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg';

const baseItemClass =
  'hero-smart-header__item transition-all duration-300 ease-in-out overflow-hidden rounded-3xl shadow-lg text-white';

function SmartHeaderItem({ category, state, onEnter }) {
  const wrapperClass = useMemo(() => {
    if (state === 'big') return `${baseItemClass} hero-smart-header__item--big`;
    if (state === 'thin') return `${baseItemClass} hero-smart-header__item--thin`;
    return `${baseItemClass} hero-smart-header__item--normal`;
  }, [state]);

  return (
    <div className={wrapperClass} onMouseEnter={onEnter}>
      <div
        className="hero-smart-header__image"
        style={{ backgroundImage: `${category.overlay}, url(${category.image})` }}
      >
        <div className={`hero-smart-header__content ${state === 'big' ? 'flex' : 'hidden'}`}>
          <p className="text-2xl font-light sm:text-3xl">{category.name}</p>
          <p className="max-w-xs text-sm opacity-90 hidden xl:block">{category.description}</p>
          <button className="hero-smart-header__cta" type="button">
            <span className="hero-smart-header__cta-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </span>
            <span className="text-lg font-bold">{category.cta}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ content, categories }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const getStateForIndex = (index) => {
    if (activeIndex === null) return 'normal';
    return activeIndex === index ? 'big' : 'thin';
  };

  return (
    <section className="hero-section">
      <div
        className="hero-section__background"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          <div className="hidden sm:block col-span-12 lg:col-span-8">
            <div
              className="hero-smart-header"
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="hero-smart-header__bg" />
              {categories.map((category, index) => (
                <SmartHeaderItem
                  key={category.name}
                  category={category}
                  state={getStateForIndex(index)}
                  onEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-end text-white text-end py-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-lg">
              {content.title}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl leading-relaxed drop-shadow">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
