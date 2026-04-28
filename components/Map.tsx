import StringWithSuggestions from "@/types/stringWithSuggestions.type.ts";

interface Props {
  coordinates: StringWithSuggestions<"20.670658, -87.065804">;
  zoom?: number;
}

export default function Map({ coordinates, zoom = 14 }: Props) {
  const src = new URL("https://maps.google.com/maps");
  src.searchParams.set("width", "650");
  src.searchParams.set("height", "400");
  src.searchParams.set("hl", "en");
  src.searchParams.set("q", coordinates);
  src.searchParams.set("z", zoom.toString());
  src.searchParams.set("ie", "UTF8");
  src.searchParams.set("iwloc", "B");
  src.searchParams.set("output", "embed");
  // "https://maps.google.com/maps?width=650&height=400&hl=en&q=20.670658%2C%20-87.065804&t=&z=14&ie=UTF8&iwloc=B&output=embed"

  return (
    <div className="w-full">
      <div className="relative h-[min(61.54vw,60vh)] w-full overflow-hidden">
        <iframe
          src={src.toString()}
          className="absolute top-0 left-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
