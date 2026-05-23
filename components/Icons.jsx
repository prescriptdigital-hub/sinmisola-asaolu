// Lightweight inline SVG icon set. Stroke inherits currentColor so icons
// pick up the gold accent wherever they are placed.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Crown(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7l4 4 5-6 5 6 4-4-2 12H5L3 7z" />
      <path d="M5 19h14" />
    </svg>
  );
}

export function Diamond(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
      <path d="M3 8h18M9 3 7 8l5 13 5-13-2-5" />
    </svg>
  );
}

export function Hands(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 9.5c0-1.2-1-2.2-2.2-2.2S7.6 8.3 7.6 9.5c0 2 2.2 3.4 4.4 5.2 2.2-1.8 4.4-3.2 4.4-5.2 0-1.2-1-2.2-2.2-2.2S12 8.3 12 9.5z" />
      <path d="M4 15c0 3 3.6 5 8 5s8-2 8-5" />
    </svg>
  );
}

export function People(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8" />
      <path d="M17 15c2.4.5 4 2.3 4 5" />
    </svg>
  );
}

export function Heart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.4-9.2-8.5C1.3 8.4 2.6 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.4 0 4.7 3.4 3.2 6.5C19 15.6 12 20 12 20z" />
    </svg>
  );
}

export function Calendar(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  );
}

export function Family(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="7" r="2.4" />
      <circle cx="17" cy="7" r="2.4" />
      <path d="M3 20c0-2.6 1.8-4.4 4-4.4S11 17.4 11 20" />
      <path d="M13 20c0-2.6 1.8-4.4 4-4.4s4 1.8 4 4.4" />
    </svg>
  );
}

export function Pin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 0 0-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Mail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3 6.5 9 6 9-6" />
    </svg>
  );
}

export function Globe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
    </svg>
  );
}

export function Phone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L17 13l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function Arrow(props) {
  return (
    <svg {...base} {...props} className={`arrow ${props.className || ""}`}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <path d="M12 9l1.5 1.5L15 12l-1.5 1.5L12 15l-1.5-1.5L9 12l1.5-1.5L12 9z" />
    </svg>
  );
}

const socialPaths = {
  facebook: "M14 8.5h2.2V5.6h-2.4c-2 0-3.3 1.3-3.3 3.5v1.6H8.4v2.9h2.1V20h3v-6.4h2.2l.4-2.9h-2.6V9.3c0-.6.3-.8.9-.8z",
  instagram: null,
  youtube: "M21.6 8.3a2.5 2.5 0 0 0-1.7-1.8C18.3 6 12 6 12 6s-6.3 0-7.9.5A2.5 2.5 0 0 0 2.4 8.3 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.7 2.5 2.5 0 0 0 1.7 1.8C5.7 18 12 18 12 18s6.3 0 7.9-.5a2.5 2.5 0 0 0 1.7-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.7zM10 15V9l5 3-5 3z",
  linkedin: "M6.5 9H4v11h2.5V9zM5.2 4.5A1.5 1.5 0 1 0 5.2 7.5a1.5 1.5 0 0 0 0-3zM20 13.4c0-2.6-1.4-3.8-3.3-3.8-1.5 0-2.2.8-2.6 1.4V9H11.6v11H14v-6c0-1.3.6-2 1.6-2s1.5.8 1.5 2.1V20H20v-6.6z",
};

export function WhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function Social({ name, ...props }) {
  if (name === "instagram") {
    return (
      <svg {...base} {...props}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" {...props}>
      <path d={socialPaths[name]} />
    </svg>
  );
}
