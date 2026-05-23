"use client";

import { useState } from "react";

// An elegant media frame. Pass a real photo with `src`; until that file exists
// it gracefully shows a tasteful gold placeholder instead of a broken image.
// Drop the matching file into /public/images and it appears automatically.
//
//   <Frame src="/images/about-portrait.jpg" alt="Sinmisola Asaolu"
//          ratio="4-5" label="Portrait" />
//
export default function Frame({
  src,
  alt = "",
  ratio = "4-5",
  label = "Photograph",
  zoom = false,
  className = "",
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <figure className={`frame ratio-${ratio} ${zoom ? "zoom" : ""} ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="placeholder">
          <span>
            <span className="ph-mark">SA</span>
            {label}
          </span>
        </span>
      )}
    </figure>
  );
}
