import { Link, Navigate, useParams } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { getBlogArticleBySlug } from '../data/blogArticles';

function BlogArticlePage() {
  const { slug } = useParams();
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <section className="page-header blog-article-header">
        <div className="container">
          <Link to="/blog" className="back-link">
            Back to Blog
          </Link>
          <p className="eyebrow">{article.category}</p>
          <p className="blog-article-meta">FlexCare Insights</p>
          <h1>{article.title}</h1>
          <p>{article.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container blog-article-layout">
          <article className="blog-article-card">
            <div
              className="blog-article-image"
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
            {article.sections.map((section, index) => (
              <div key={`${article.slug}-${index}`} className="blog-article-block">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list?.length ? (
                  <ul className="blog-article-list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div className="blog-takeaway">
              <strong>{article.takeaway}</strong>
            </div>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default BlogArticlePage;
