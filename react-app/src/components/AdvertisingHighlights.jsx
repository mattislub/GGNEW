export default function AdvertisingHighlights({ items }) {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="highlight-card">
              <img src={item.icon} alt="" className="highlight-card__icon" />
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
