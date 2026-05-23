import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Social, Mail, Globe, Pin } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-quote">
          <span className="mark">&ldquo;</span>
          <p>
            My purpose is to uplift, inspire and leave a lasting legacy of love,
            service and faith.
          </p>
          <span className="sig">Sinmisola Asaolu</span>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>{site.business.role}, {site.business.name}</h4>
            <p style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <Pin width={18} height={18} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "4px" }} />
              {site.business.address}
            </p>
            <div className="socials">
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

          <div className="footer-col">
            <h4>Explore</h4>
            <div className="stack-sm">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <div className="stack-sm">
              <a href={`mailto:${site.email}`} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Mail width={18} height={18} style={{ color: "var(--gold)" }} />
                {site.email}
              </a>
              <a href={`https://${site.domain}`} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Globe width={18} height={18} style={{ color: "var(--gold)" }} />
                {site.domain}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-base">
          <span>
            &copy; {year} {site.fullName}. All rights reserved.
          </span>
          <span>Faith. Family. Impact.</span>
        </div>
      </div>
    </footer>
  );
}
