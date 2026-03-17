function BlogCard({ article }) {
  return (
    <article className="blog-card">
      <div className="blog-media">
        <img src={article.image} alt={article.imageAlt} loading="lazy" />
      </div>
      <div className="blog-content">
        <p className="blog-tag">{article.category}</p>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <button
          type="button"
          className="text-button"
          aria-label={`Read more about ${article.title}`}
        >
          Read More
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
