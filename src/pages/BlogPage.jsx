import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { blogArticles } from '../data/blogArticles';

function BlogPage() {
  return (
    <>
      <section className="page-header blog-page-header">
        <div className="container">
          <p className="eyebrow">Health Education</p>
          <h1>Physiotherapy Insights for Better Recovery</h1>
          <p>
            Read practical guidance from our care team to manage pain, improve
            mobility, and recover safely at home.
          </p>
        </div>
      </section>

      <section className="section blog-page-section">
        <div className="container blog-page-shell">
          <div className="blog-list">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="blog-list-item"
              >
                <div
                  className="blog-list-item__media"
                  style={{
                    backgroundColor: article.imageBackground || undefined,
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    style={{
                      objectFit: article.imageFit || 'cover',
                      objectPosition: article.imagePosition || 'center',
                    }}
                  />
                </div>
                <div className="blog-list-item__body">
                  <span className="blog-list-item__category">{article.category}</span>
                  <h2>{article.title}</h2>
                  <span className="blog-list-item__arrow" aria-hidden="true">
                    Read article
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default BlogPage;
