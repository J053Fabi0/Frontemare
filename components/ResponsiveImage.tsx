import buildSrcSet from "@/utils/buildSrcSet.ts";

interface Props {
  /** The path that includes the file directory, name and extension, but does not exist, only when calculating the variants */
  src: string;
  alt?: string;
  sizesAttr: string;
  className?: string;
  variants: number[];
  loading?: "lazy" | "eager";
}

export default function ResponsiveImage({
  src,
  alt = "",
  variants,
  sizesAttr,
  className = "",
  loading = "lazy",
}: Props) {
  const srcSet = buildSrcSet(src, variants);

  return (
    <img
      alt={alt}
      src={srcSet.src}
      decoding="async"
      sizes={sizesAttr}
      loading={loading}
      className={className}
      srcSet={srcSet.srcSet}
    />
  );
}
