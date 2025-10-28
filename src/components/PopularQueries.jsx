export default function PopularQueries({ queries }) {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="popular-queries">
          <h2 className="popular-queries__title">חיפושים מובילים</h2>
          <div className="popular-queries__list">
            {queries.map((query) => (
              <span key={query} className="popular-queries__item">
                #{query}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
