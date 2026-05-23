import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import Frame from "@/components/Frame";
import { Diamond, Heart, Family, Crown, Arrow } from "@/components/Icons";

export const metadata = {
  title: "About",
  description:
    "The story of Firstlady Sinmisola Juliet Asaolu, a devoted wife, loving mother, leader and philanthropist from Ile Ife, Osun State, Nigeria.",
};

const values = [
  {
    icon: <Family width={30} height={30} />,
    title: "Family First",
    text: "A home built on love, patience and shared values is the foundation of everything she stands for.",
  },
  {
    icon: <Heart width={30} height={30} />,
    title: "Service to Humanity",
    text: "She gives generously of her time and heart, believing that lifting others is a calling, not a favour.",
  },
  {
    icon: <Diamond width={30} height={30} />,
    title: "Faith & Integrity",
    text: "Her decisions are guided by faith and a quiet insistence on doing what is right, even when it is hard.",
  },
  {
    icon: <Crown width={30} height={30} />,
    title: "Graceful Leadership",
    text: "She leads by example, with warmth and dignity, and draws the very best out of those around her.",
  },
];

const journey = [
  {
    year: "1974",
    label: "A Beginning",
    text: "Born on the 20th of May, into a life that would come to be defined by faith, family and service.",
  },
  {
    year: "Family",
    label: "Wife & Mother",
    text: "Building a marriage and raising children with devotion, becoming the anchor and heartbeat of her home.",
  },
  {
    year: "Community",
    label: "A Heart for Others",
    text: "Stepping into the lives of those around her with practical help, mentorship and steady encouragement.",
  },
  {
    year: "Today",
    label: "Leader & Entrepreneur",
    text: "Chief Executive of Firstlady Collections in Ile Ife, while championing the growth and wellbeing of her community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="A Life of Purpose"
        intro="Strength, compassion and leadership, woven into a life devoted to family and service."
        crumb="About"
      />

      {/* Intro split */}
      <section className="section">
        <div className="shell split">
          <Reveal className="split-media">
            <Frame
              src="/images/about-portrait.jpg"
              alt="Firstlady Sinmisola Juliet Asaolu"
              ratio="4-5"
              label="About Portrait"
              zoom
            />
          </Reveal>
          <Reveal delay={120} className="split-copy">
            <span className="eyebrow">Her Story</span>
            <h2 className="display-md" style={{ marginTop: "16px" }}>
              Grace in every chapter
            </h2>
            <Ornament style={{ marginTop: "22px" }} />
            <div className="stack" style={{ marginTop: "26px" }}>
              <p className="lead">
                Firstlady Sinmisola Juliet Asaolu was born on the 20th of May,
                1974. She is a devoted wife, a loving mother and a woman of
                dignity and grace who is deeply committed to family values and
                service to humanity.
              </p>
              <p>
                As a married woman blessed with children, she has continually
                demonstrated strength, wisdom, compassion and dedication in both
                her home and her community life. Known for her caring nature and
                inspiring personality, she upholds integrity, faith and
                excellence in all she does.
              </p>
              <p>
                She is passionate about impacting lives positively and
                supporting the growth and wellbeing of those around her. Her
                life reflects commitment, leadership and a deep belief in the
                importance of family and community development.
              </p>
            </div>
            <p className="signature-line" style={{ marginTop: "30px" }}>
              Sinmisola Asaolu
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section section--panel">
        <div className="shell">
          <Reveal className="center section-head">
            <span className="eyebrow">What She Stands For</span>
            <h2 className="display-md" style={{ marginTop: "16px" }}>
              The values that shape a life
            </h2>
          </Reveal>
          <div className="grid cols-4" style={{ marginTop: "54px" }}>
            {values.map((v, i) => (
              <Reveal delay={i * 100} key={v.title}>
                <div className="value-card">
                  <span className="icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="shell split">
          <Reveal className="split-copy">
            <span className="eyebrow">The Journey</span>
            <h2 className="display-md" style={{ marginTop: "16px" }}>
              A path marked by devotion
            </h2>
            <Ornament style={{ marginTop: "22px" }} />
            <p style={{ marginTop: "24px", maxWidth: "440px" }}>
              From a quiet beginning to a life of visible impact, every season
              has been shaped by the same convictions: love your family, serve
              your people and never lose your grace.
            </p>
          </Reveal>
          <Reveal delay={120} className="split-media">
            <div className="timeline">
              {journey.map((j) => (
                <div className="timeline-item" key={j.label}>
                  <div className="year">{j.year}</div>
                  <h4>{j.label}</h4>
                  <p>{j.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="section cta-band">
        <div className="shell">
          <Reveal className="quote-block">
            <Ornament center />
            <p style={{ marginTop: "26px" }}>
              &ldquo;True leadership begins at home and grows through service.
              When you pour into others with love, you leave something that
              outlives you.&rdquo;
            </p>
            <div style={{ marginTop: "34px" }}>
              <Link href="/foundation" className="btn">
                Explore the Foundation <Arrow width={16} height={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
