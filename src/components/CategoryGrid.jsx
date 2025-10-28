export default function CategoryGrid({ categories }) {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className={`category-card ${category.accent}`}>
              <div className="category-card__content">
                <span className="category-card__count">{category.count}+</span>
                <h3 className="category-card__title">{category.name}</h3>
                <p className="category-card__subtitle">אוספים מוכנים לפרויקט הבא שלכם</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
