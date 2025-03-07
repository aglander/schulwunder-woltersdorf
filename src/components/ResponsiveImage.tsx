import React from "react";

export interface ViteImageToolsImage {
  img: { src: string; w: number; h: number };
  sources?: Record<string, string>;
}

interface ResponsiveImageProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

const imageModules = import.meta.glob<{ default: ViteImageToolsImage }>(
  "/src/assets/**/*",
  {
    eager: true,
    query: "?w=300;500;700;1200;1600&format=webp;avif;jpg&as=picture",
  }
);

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  imageUrl,
  alt = "",
  className = "",
}) => {
  const image = imageModules[`/src/${imageUrl}`]?.default;

  if (!image) {
    console.error(`❌ ResponsiveImage: Image not found: /src/${imageUrl}`);
    return <span>Image not found</span>;
  }

  // Get sorted images by size
  const srcSetEntries = Object.entries(image.sources || {})
    .flatMap(([format, srcSet]) =>
      srcSet.split(", ").map((src) => ({
        format,
        src: src.split(" ")[0],
        width: parseInt(src.split(" ")[1]),
      }))
    )
    .sort((a, b) => a.width - b.width);

  // Keep only unique widths
  const filteredSrcSet = srcSetEntries.filter(
    (img, index, self) =>
      self.findIndex((t) => t.width === img.width) === index
  );

  // **Updated Breakpoints for More Accurate Scaling**
  const breakpoints = [
    { minWidth: 1200, width: 1600 }, // Large desktops
    { minWidth: 1024, width: 1200 }, // Regular desktops
    { minWidth: 768, width: 700 }, // Tablets
    { minWidth: 480, width: 500 }, // Large phones
    { minWidth: 0, width: 300 }, // Small phones
  ];

  return (
    <picture>
      {breakpoints.map(({ minWidth, width }) => {
        const match = filteredSrcSet.find((img) => img.width === width);
        return match ? (
          <source
            key={width}
            media={`(min-width: ${minWidth}px)`}
            srcSet={match.src}
            type={`image/${match.format}`}
          />
        ) : null;
      })}
      <img
        src={filteredSrcSet[0]?.src || image.img.src} // Smallest image fallback
        decoding="async"
        alt={alt}
        className={`max-w-full h-auto ${className}`}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      />
    </picture>
  );
};

export default ResponsiveImage;
