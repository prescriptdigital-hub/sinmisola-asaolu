import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Blog",
  description:
    "Reflections on faith, family, leadership and service from Firstlady Sinmisola Juliet Asaolu.",
};

const posts = [
  {
    date: "May 2026",
    category: "Reflections",
    title: "The Quiet Strength of a Devoted Home",
    excerpt:
      "Why the most powerful leadership often begins not on a stage, but in the steady, daily love we pour into our families.",
  },
  {
    date: "April 2026",
    category: "Community",
    title: "Lifting Women, Building Communities",
    excerpt:
      "When one woman is empowered, a whole community feels it. A look at why investing in women changes everything.",
  },
  {
    date: "March 2026",
    category: "Faith",
    title: "Service as a Way of Life",
    excerpt:
      "Service is not an event or a season. It is a posture of the heart that shapes how we treat everyone we meet.",
  },
  {
    date: "February 2026",
    category: "Style",
    title: "Elegance With a Purpose",
    excerpt:
      "On dignity, presentation and the quiet confidence that comes from carrying yourself with grace.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageBanner
        eyebrow="Words & Reflections"
        title="The Blog"
        intro="Thoughts on faith, family, leadership and the things that make life meaningful."
        crumb="Blog"
      />

      <section className="section">
        <div className="shell">
          <div className="grid cols-2">
            {posts.map((post, i) => (
              <Reveal delay={(i % 2) * 120} key={post.title}>
                <article className="post">
                  <Frame
                    src={`/images/blog-${i + 1}.jpg`}
                    alt={post.title}
                    ratio="3-2"
                    label={post.category}
                    zoom
                  />
                  <div className="post-body">
                    <div className="meta">
                      {post.category} &nbsp;&middot;&nbsp; {post.date}
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-foot">
                      <Link href="/blog" className="text-link">
                        Read Article <Arrow width={15} height={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="center" style={{ marginTop: "64px" }}>
            <p style={{ marginBottom: "20px" }}>
              More reflections are on the way. Subscribe to be the first to read
              them.
            </p>
            <Link href="/contact" className="btn">
              Stay Updated <Arrow width={16} height={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
