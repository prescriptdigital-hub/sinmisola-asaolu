import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import Frame from "@/components/Frame";
import { Heart, People, Family, Diamond, Arrow } from "@/components/Icons";

export const metadata = {
  title: "Foundation",
  description:
    "The Sinmisola Asaolu initiative for philanthropy and community development. Empowering women, supporting families and raising the next generation of leaders in Osun State and beyond.",
};

const programmes = [
  {
    icon: <Family width={26} height={26} />,
    title: "Family & Wellbeing",
    text: "Standing with families through practical support, encouragement and resources that keep homes strong and hopeful.",
  },
  {
    icon: <People width={26} height={26} />,
    title: "Women Empowerment",
    text: "Equipping women with skills, mentorship and confidence to build businesses and lead in their communities.",
  },
  {
    icon: <Heart width={26} height={26} />,
    title: "Care for the Vulnerable",
    text: "Reaching the elderly, widows and children in need with compassion, dignity and steady, hands-on care.",
  },
  {
    icon: <Diamond width={26} height={26} />,
    title: "Youth & Mentorship",
    text: "Raising young people of character through guidance, opportunity and a belief in their God-given potential.",
  },
];

const stats = [
  { num: "20+", cap: "Years of Service" },
  { num: "1,000s", cap: "Lives Touched" },
  { num: "4", cap: "Focus Programmes" },
  { num: "1", cap: "Shared Purpose" },
];

export default function FoundationPage() {
  return (
    <>
      <PageBanner
        eyebrow="Philanthropy & Community"
        title="The Foundation"
        intro="Empowering lives and supporting initiatives that bring hope, dignity and lasting transformation."
        crumb="Foundation"
      />

      {/* Mission */}
      <section className="section">
        <div className="shell split">
          <Reveal className="split-copy">
            <span className="eyebrow">Our Mission</span>
            <h2 className="display-md" style={{ marginTop: "16px" }}>
              Lifting people, one life at a time
            </h2>
            <Ornament style={{ marginTop: "22px" }} />
            <div className="stack" style={{ marginTop: "26px" }}>
              <p className="lead">
                The heart behind this work is simple. Every person deserves to
                be seen, supported and given a fair chance to flourish.
              </p>
              <p>
                Guided by faith and a deep love for community, Firstlady
                Sinmisola Juliet Asaolu channels her time and resources into
                practical service. The aim is not to be noticed, but to make a
                real and lasting difference in the everyday lives of families
                across Ile Ife, Osun State and beyond.
              </p>
            </div>
            <div style={{ marginTop: "32px" }}>
              <Link href="/contact" className="btn">
                Partner With Us <Arrow width={16} height={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="split-media">
            <Frame
              src="/images/foundation-banner.jpg"
              alt="Community service and outreach"
              ratio="4-5"
              label="Foundation"
              zoom
            />
          </Reveal>
        </div>
      </section>

      {/* Programmes */}
      <section className="section section--panel">
        <div className="shell">
          <Reveal className="center section-head">
            <span className="eyebrow">What We Do</span>
            <h2 className="display-md" style={{ marginTop: "16px" }}>
              Programmes built on compassion
            </h2>
          </Reveal>
          <div className="grid cols-2" style={{ marginTop: "54px" }}>
            {programmes.map((p, i) => (
              <Reveal delay={i * 100} key={p.title}>
                <div className="value-card">
                  <span className="icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section">
        <div className="shell">
          <Reveal className="center">
            <Ornament center />
            <h2 className="display-md" style={{ marginTop: "20px" }}>
              The measure of our work
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="stats" style={{ marginTop: "54px" }}>
              {stats.map((s) => (
                <div className="stat" key={s.cap}>
                  <div className="num">{s.num}</div>
                  <div className="cap">{s.cap}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Get involved */}
      <section className="section cta-band">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Get Involved</span>
            <h2 style={{ marginTop: "18px" }}>
              Every helping hand writes a story of hope.
            </h2>
            <p style={{ maxWidth: "560px", margin: "20px auto 0" }}>
              Whether through partnership, volunteering or support, there is a
              place for you in this work. Reach out and let us build something
              that lasts.
            </p>
            <div
              className="hero-actions"
              style={{ justifyContent: "center", marginTop: "34px" }}
            >
              <Link href="/contact" className="btn btn--solid">
                Support the Cause <Arrow width={16} height={16} />
              </Link>
              <Link href="/about" className="btn btn--ghost">
                Meet Sinmisola
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
