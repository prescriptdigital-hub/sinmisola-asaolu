import Link from "next/link";
import Ornament from "@/components/Ornament";
import { Arrow } from "@/components/Icons";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="page-banner" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="shell">
        <span className="eyebrow">Error 404</span>
        <h1 style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}>Page Not Found</h1>
        <Ornament center style={{ margin: "26px auto 0" }} />
        <p>
          The page you are looking for has moved or no longer exists. Let us
          guide you back home.
        </p>
        <div style={{ marginTop: "32px" }}>
          <Link href="/" className="btn btn--solid">
            Return Home <Arrow width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
