import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import Frame from "@/components/Frame";

export const metadata = {
  title: "Gallery",
  description:
    "Moments of service, leadership and celebration. A visual gallery of Firstlady Sinmisola Juliet Asaolu.",
};

const photos = [
  { label: "Portrait", ratio: "4-5" },
  { label: "Portrait", ratio: "4-5" },
  { label: "Royal Lace & Ankara", ratio: "4-5" },
  { label: "White Lace & Gele", ratio: "4-5" },
  { label: "Emerald Ankara Ensemble", ratio: "4-5" },
  { label: "Rose Blossom Gown", ratio: "4-5" },
  { label: "Heritage Ankara & Gele", ratio: "4-5" },
  { label: "Contemporary Style", ratio: "4-5" },
];

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        eyebrow="Moments"
        title="Gallery"
        intro="A glimpse into a life of service, leadership, family and celebration."
        crumb="Gallery"
      />

      <section className="section">
        <div className="shell">
          <Reveal className="center section-head" style={{ marginBottom: "48px" }}>
            <Ornament center />
            <p style={{ marginTop: "24px" }}>
              Moments of service, celebration, leadership and love. A living
              record of a life poured out for family and community.
            </p>
          </Reveal>

          <div className="gallery-grid">
            {photos.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <Frame
                  src={`/images/gallery-${i + 1}.jpg`}
                  alt={p.label}
                  ratio={p.ratio}
                  label={p.label}
                  zoom
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
