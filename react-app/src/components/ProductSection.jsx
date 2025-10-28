export default function ProductSection({ products }) {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-end gap-6">
          <h2 className="section-title">
            <span className="text-blue">המוצרים הפופולריים</span>
            <span className="text-orange"> של הקהילה</span>
          </h2>
          <div className="grid gap-6 w-full md:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <span className="product-card__badge">{product.badge}</span>
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__description">{product.description}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.price}</span>
                  <button type="button" className="product-card__action">
                    <span>לפרטים</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
