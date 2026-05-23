import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Mail, Pin, Globe, Social } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the office of Firstlady Sinmisola Juliet Asaolu and Firstlady Collections, Ile Ife, Osun State, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Let Us Connect"
        intro="For enquiries, partnerships, speaking invitations or a word of encouragement, you are warmly welcome."
        crumb="Contact"
      />

      <section className="section">
        <div className="shell split">
          <Reveal className="split-copy">
            <span className="eyebrow">Send a Message</span>
            <h2 className="display-md" style={{ margin: "16px 0 30px" }}>
              We would love to hear from you
            </h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="split-media stack">
            <div className="info-tile">
              <span className="ic">
                <Mail width={24} height={24} />
              </span>
              <div>
                <div className="label">Email</div>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <div className="info-tile">
              <span className="ic">
                <Globe width={24} height={24} />
              </span>
              <div>
                <div className="label">Website</div>
                <a href={`https://${site.domain}`}>{site.domain}</a>
              </div>
            </div>

            <div className="info-tile">
              <span className="ic">
                <Pin width={24} height={24} />
              </span>
              <div>
                <div className="label">{site.business.name}</div>
                <p style={{ color: "var(--ivory)" }}>{site.business.address}</p>
              </div>
            </div>

            <div className="info-tile" style={{ alignItems: "center" }}>
              <div>
                <div className="label" style={{ marginBottom: "14px" }}>
                  Follow Along
                </div>
                <div className="socials" style={{ marginTop: 0 }}>
                  {site.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Social name={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
