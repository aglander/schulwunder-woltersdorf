import React from "react";

export interface ViteImageToolsImage {
  img: { src: string; w: number; h: number };
  sources?: Record<string, string>;
}

interface ResponsiveImageProps {
  imageUrl: string; // Bildpfad mit Query-Parametern, z. B. "assets/image.png?w=300;500;700&format=webp;avif;jpg&as=picture"
  alt?: string;
  className?: string;
}

// 🔥 Alle Bilder zur **Build-Zeit** mit Query-Parametern importieren
const imageModules = import.meta.glob<{ default: ViteImageToolsImage }>("/src/assets/**/*", {
  eager: true,
  query: "?w=300;500;700;1600&format=webp;avif;jpg&as=picture",
});

console.log(imageModules);

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ imageUrl, alt = "", className = "" }) => {
  const image = imageModules[`/src/${imageUrl}`]?.default;

  if (!image) {
    console.error(`❌ ResponsiveImage: Image not found: /src/${imageUrl}`);
    return <span>Image not found</span>;
  }

  return (
    <picture>
      {image.sources &&
        Object.entries(image.sources).map(([format, srcSet]) => (
          <source key={format} srcSet={srcSet} type={`image/${format}`} />
        ))}
      <img src={image.img.src} alt={alt} width={image.img.w} height={image.img.h} className={className} />
    </picture>
  );
};

export default ResponsiveImage;
