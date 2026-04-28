import { parse } from "@std/path";

interface BuildSrcSetReturned {
  /** The srcSet string that will be used as is */
  srcSet: string;
  /** The largest src variant */
  src: string;
}

export default function buildSrcSet(
  src: string,
  variants: number[],
): BuildSrcSetReturned {
  const { dir, name, ext } = parse(src);

  const srcSet: string[] = [];

  for (const variant of variants) {
    const path = `${dir}/${name}-${variant}${ext}`;
    // ¿aquí está bien usar la variant de esta forma? la foto puede ser vertical u horizontal, por lo que la variant
    // solo define el tamaño máximo de el height o width, no se sabe cuál es
    srcSet.push(`${path} ${variant}w`);
  }

  const largestSrc = `${dir}/${name}-${Math.max(...variants)}${ext}`;

  return { srcSet: srcSet.join(", "), src: largestSrc };
}
