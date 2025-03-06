import React from "react";

export interface ViteImageToolsImage {
  img: { src: string; w: number; h: number };
  sources?: Record<string, string>;
}

interface ResponsiveImageProps {
  imageUrl: string; // Bildpfad mit Query-Parametern, z. B. "assets/image.png?w=300;500;700;1600&format=webp;avif;jpg&as=picture"
  alt?: string;
  className?: string;
  sizes?: string; // Optionale `sizes`-Angabe
}

// 🔥 Alle Bilder zur **Build-Zeit** mit Query-Parametern importieren
const imageModules = import.meta.glob<{ default: ViteImageToolsImage }>("/src/assets/**/*", {
  eager: true,
  query: "?w=300;500;700;1600&format=webp;avif;jpg&as=picture",
});

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ imageUrl, alt = "", className = "", sizes }) => {
  const image = imageModules[`/src/${imageUrl}`]?.default;

  if (!image) {
    console.error(`❌ ResponsiveImage: Image not found: /src/${imageUrl}`);
    return <span>Image not found</span>;
  }

  // 📌 `srcSet` aus den geladenen Größen generieren
  const srcSet = Object.entries(image.sources || {})
    .flatMap(([format, srcSet]) =>
      srcSet
        .split(", ")
        .map((src) => ({ src: src.split(" ")[0], width: src.split(" ")[1] }))
    )
    .sort((a, b) => parseInt(a.width) - parseInt(b.width)) // Nach Größe sortieren
    .map((img) => `${img.src} ${img.width}`);

  return (
    <picture>
      {image.sources &&
        Object.entries(image.sources).map(([format, srcSet]) => (
          <source key={format} srcSet={srcSet} type={`image/${format}`} />
        ))}
      <img
        src={image.img.src}
        srcSet={srcSet.join(", ")}
        sizes={sizes || "(max-width: 600px) 300px, (max-width: 1024px) 700px, 1600px"}
        alt={alt}
        width={image.img.w}
        height={image.img.h}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;
