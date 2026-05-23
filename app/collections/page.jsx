import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import Frame from "@/components/Frame";
import { Pin, Arrow } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Collections",
  description:
    "Firstlady Collections, curated by Sinmisola Asaolu. Elegant fashion and accessories from Obafemi Awolowo University Central Market, Ile Ife, Osun State, Nigeria.",
};

const categories = ["All", "Aso Ebi & Lace", "Ready to Wear", "Bridal"];

const items = [
  { name: "Royal Lace & Ankara Set", kind: "Aso Ebi & Lace", price: "On Request" },
  { name: "Contemporary Power Suit", kind: "Ready to Wear", price: "On Request" },
  { name: "Rose Blossom Gown", kind: "Bridal", price: "On Request" },
  { name: "White Lace & Gele Set", kind: "Aso Ebi & Lace", price: "On Request" },
  { name: "Heritage Ankara & Gele", kind: "Aso Ebi & Lace", price: "On Request" },
  { name: "Emerald Ankara Ensemble", kind: "Aso Ebi & Lace", price: "On Request" },
];

export default function CollectionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Fashion & Entrepreneurship"
        title="Firstlady Collections"
        intro="Inspiring style, elegance and excellence. Curated pieces for the woman who carries herself with grace."
        crumb="Collections"
      />

      {/* Intro */}
      <section className="section--tight">
        <div className="shell center section-head">
          <Reveal>
            <Ornament center />
            <p className="lead" style={{ marginTop: "26px" }}>
              Firstlady Collections is the fashion house led by Sinmisola
              Asaolu, where heritage and modern elegance meet. Each piece is
              chosen with an eye for quality, detail and the quiet confidence of
              a woman who knows her worth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section--tight">
        <div className="shell">
          <Reveal>
            <div className="tags">
              {categories.map((c, i) => (
                <span key={c} className={`tag ${i === 0 ? "active" : ""}`}>
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid cols-3" style={{ marginTop: "48px" }}>
            {items.map((item, i) => (
              <Reveal delay={(i % 3) * 100} key={item.name}>
                <article className="product">
                  <Frame
                    src={`/images/collection-${i + 1}.jpg`}
                    alt={item.name}
                    ratio="4-5"
                    label={item.kind}
                    zoom
                  />
                  <div className="caption">
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price}</span>
                  </div>
                  <span className="kind">{item.kind}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store banner */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="store-banner">
              <Frame
                src="/images/store.jpg"
                alt="Firstlady Collections store"
                ratio="4-3"
                label="Our Store"
              />
              <div className="pad">
                <span className="eyebrow">Visit Us</span>
                <h2 className="display-md" style={{ margin: "16px 0 20px" }}>
                  Come and shop in person
                </h2>
                <p style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <Pin
                    width={22}
                    height={22}
                    style={{ color: "var(--gold)", flexShrink: 0, marginTop: "4px" }}
                  />
                  {site.business.address}
                </p>
                <div style={{ marginTop: "30px" }}>
                  <Link href="/contact" className="btn">
                    Enquire About a Piece <Arrow width={16} height={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
