import Link from "next/link";
import Ornament from "@/components/Ornament";

// Consistent banner used at the top of every inner page.
export default function PageBanner({ eyebrow, title, intro, crumb }) {
  return (
    <section className="page-banner">
      <div className="shell">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
        <Ornament center className="reveal in" style={{ margin: "26px auto 0" }} />
        {intro ? <p>{intro}</p> : null}
        <p className="breadcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; {crumb || title}
        </p>
      </div>
    </section>
  );
}
