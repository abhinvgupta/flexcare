import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';

const articles = [
  {
    title: 'How Home Physiotherapy Helps Recovery',
    excerpt:
      'Learn how regular sessions at home can improve consistency, comfort, and long-term outcomes.',
    category: 'Recovery',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Physiotherapist helping a patient with guided therapy exercise',
  },
  {
    title: 'Best Exercises for Knee Pain',
    excerpt:
      'Safe strengthening and mobility exercises that support knee stability and reduce discomfort.',
    category: 'Knee Care',
    image:
      'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Patient doing guided knee exercise with support',
  },
  {
    title: 'When Should You Start Physiotherapy After Surgery?',
    excerpt:
      'Understand ideal timelines, early precautions, and how rehabilitation planning affects outcomes.',
    category: 'Post-Surgery',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Healthcare professional reviewing a postoperative recovery plan',
  },
  {
    title: 'Neck Pain Relief Tips at Home',
    excerpt:
      'Simple habits for posture correction, movement breaks, and pain relief in daily life.',
    category: 'Pain Relief',
    image:
      'https://images.unsplash.com/photo-1594824388853-d0c6e4f5b17b?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Woman performing neck stretches under physiotherapy guidance',
  },
  {
    title: 'How to Improve Mobility in Old Age',
    excerpt:
      'Practical mobility strategies for seniors, focused on balance, strength, and safer movement.',
    category: 'Elderly Care',
    image:
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Elderly patient walking with physiotherapist support at home',
  },
];

function BlogPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Health Education</p>
          <h1>Physiotherapy Insights for Better Recovery</h1>
          <p>
            Read practical guidance from our care team to manage pain, improve
            mobility, and recover safely at home.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article) => (
              <BlogCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default BlogPage;
