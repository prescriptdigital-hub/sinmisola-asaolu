import Link from "next/link";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import {
  Crown,
  Diamond,
  Family,
  Heart,
  People,
  Calendar,
  Pin,
  Arrow,
} from "@/components/Icons";

const pillars = [
  {
    icon: <Diamond width={30} height={30} />,
    title: "A Woman of Dignity & Grace",
    text: "Upholding integrity, faith and excellence in all she does.",
  },
  {
    icon: <Family width={30} height={30} />,
    title: "Devoted Wife & Loving Mother",
    text: "Building a home anchored on love, values and wisdom.",
  },
  {
    icon: <Heart width={30} height={30} />,
    title: "Philanthropist at Heart",
    text: "Passionate about impacting lives and empowering others.",
  },
  {
    icon: <Crown width={30} height={30} />,
    title: "Leader & Role Model",
    text: "Inspiring change and building stronger communities.",
  },
];

const focus = [
  {
    icon: <Heart width={24} height={24} />,
    title: "Philanthropy & Community Impact",
    text: "Empowering lives and supporting initiatives that bring hope and lasting transformation.",
    href: "/foundation",
    cta: "Learn More",
  },
  {
    icon: <People width={24} height={24} />,
    title: "Leadership & Advocacy",
    text: "Promoting values, raising leaders and building stronger, more confident communities.",
    href: "/about",
    cta: "Learn More",
  },
  {
    icon: <Diamond width={24} height={24} />,
    title: "Fashion & Entrepreneurship",
    text: "Chief Executive of Firstlady Collections, inspiring style, elegance and excellence.",
    href: "/collections",
    cta: "Shop Collections",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-photo-bleed">
          <img src="/images/hero-portrait.jpg" alt="Firstlady Sinmisola Juliet Asaolu" />
        </div>
        <div className="shell">
          <Reveal className="hero-content">
            <span className="hero-eyebrow">
              <i className="rule" />
              <Crown width={26} height={26} />
              <span className="label">Firstlady</span>
              <i className="rule" />
            </span>
            <h1 className="hero-name">
              Sinmisola
              <span className="line-2">Asaolu</span>
            </h1>
            <p className="hero-tagline">
              Wife. Mother. Leader. Philanthropist.
              <br />
              Committed to family. Devoted to humanity.
            </p>
            <div className="hero-actions">
              <Link href="/about" className="btn btn--solid">
                Discover My Story <Arrow width={16} height={16} />
              </Link>
              <Link href="/foundation" className="btn btn--ghost">
                The Foundation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="section--tight">
        <div className="shell">
          <Reveal>
            <div className="pillars">
              {pillars.map((p) => (
                <div className="pillar" key={p.title}>
                  <span className="icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* About preview */}
      <section className="section section--panel">
        <div className="shell split">
          <Reveal className="split-copy">
            <span className="eyebrow">About</span>
            <h2 className="display-lg" style={{ marginTop: "16px" }}>
              A Life of Purpose.
              <br />A Heart of Service.
            </h2>
            <Ornament style={{ marginTop: "24px" }} />
            <div className="stack" style={{ marginTop: "26px" }}>
              <p className="lead">
                Firstlady Sinmisola Juliet Asaolu was born on the 20th of May,
                1974. She is a devoted wife, a loving mother and a woman of
                dignity and grace who is deeply committed to family values and
                service to humanity.
              </p>
              <p>
                Her life reflects strength, compassion and leadership, together
                with a quiet, steady passion for the growth of her family and
                the development of her community.
              </p>
            </div>
            <div style={{ marginTop: "34px" }}>
              <Link href="/about" className="btn">
                Read More <Arrow width={16} height={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150} className="split-media">
            <div className="fact-card">
              <div className="fact">
                <span className="ic">
                  <Calendar width={26} height={26} />
                </span>
                <div>
                  <div className="label">Born</div>
                  <div className="value">20th May, 1974</div>
                </div>
              </div>
              <div className="fact">
                <span className="ic">
                  <Family width={26} height={26} />
                </span>
                <div>
                  <div className="label">Family</div>
                  <div className="value">Married with Children</div>
                </div>
              </div>
              <div className="fact">
                <span className="ic">
                  <Pin width={26} height={26} />
                </span>
                <div>
                  <div className="label">Based in</div>
                  <div className="value">Ile Ife, Osun State, Nigeria</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section">
        <div className="shell">
          <Reveal className="center">
            <Ornament center />
            <h2 className="display-md" style={{ marginTop: "20px" }}>
              Serving. Inspiring. Impacting.
            </h2>
          </Reveal>

          <div className="grid cols-3" style={{ marginTop: "54px" }}>
            {focus.map((f, i) => (
              <Reveal delay={i * 120} key={f.title}>
                <article className="feature-card">
                  <span className="bg" />
                  <span className="veil" />
                  <div className="body">
                    <span className="icon">{f.icon}</span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                    <Link href={f.href} className="text-link">
                      {f.cta} <Arrow width={15} height={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section cta-band">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Let us connect</span>
            <h2 style={{ marginTop: "18px" }}>
              Together we can build stronger families and brighter communities.
            </h2>
            <div
              className="hero-actions"
              style={{ justifyContent: "center", marginTop: "34px" }}
            >
              <Link href="/contact" className="btn btn--solid">
                Get in Touch <Arrow width={16} height={16} />
              </Link>
              <Link href="/foundation" className="btn btn--ghost">
                Support the Cause
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
