import { Head } from "fresh/runtime";
import { JSX } from "preact/jsx-runtime";
import icons, { Icons, isIcon } from "@/utils/icons.tsx";
import StringWithSuggestions from "@/types/stringWithSuggestions.type.ts";

interface RoomOrSpace {
  title: string;
  media: { type: "image" | "video"; src: string }[];
  description?: string | JSX.Element | string[];
  icons?: StringWithSuggestions<Icons>[];
}

const roomOrSpaces: RoomOrSpace[] = [
  {
    title: "Sala de estar",
    media: [
      { type: "image", src: "./frontemare/living-room-01.jpg" },
      { type: "image", src: "./frontemare/living-room-02.jpg" },
      { type: "image", src: "./frontemare/living-room-03.jpg" },
      { type: "image", src: "./frontemare/living-room-04.jpg" },
    ],
  },
  {
    title: "Cocina completa",
    media: [
      { type: "image", src: "./frontemare/full-kitchen-01.jpg" },
      { type: "image", src: "./frontemare/full-kitchen-02.jpg" },
      { type: "image", src: "./frontemare/full-kitchen-03.jpg" },
      { type: "image", src: "./frontemare/full-kitchen-04.jpg" },
      { type: "image", src: "./frontemare/full-kitchen-05.jpg" },
    ],
  },
  {
    title: "Comedor",
    media: [
      { type: "image", src: "./frontemare/dining-area-01.jpg" },
      { type: "image", src: "./frontemare/dining-area-02.jpg" },
    ],
  },
  {
    title: "Baño de abajo",
    media: [
      { type: "image", src: "./frontemare/half-bathroom-01.jpg" },
      { type: "image", src: "./frontemare/half-bathroom-02.jpg" },
    ],
  },
  {
    title: "Cuarto principal",
    media: [
      { type: "image", src: "./frontemare/bedroom-1-01.jpg" },
      { type: "image", src: "./frontemare/bedroom-1-02.jpg" },
      { type: "image", src: "./frontemare/bedroom-1-03.jpg" },
      { type: "image", src: "./frontemare/bedroom-1-04.jpg" },
      { type: "image", src: "./frontemare/bedroom-1-05.jpg" },
    ],
  },
  {
    title: "Baño del cuarto principal",
    media: [
      { type: "image", src: "./frontemare/full-bathroom-1-01.jpg" },
      { type: "image", src: "./frontemare/full-bathroom-1-02.jpg" },
      { type: "image", src: "./frontemare/full-bathroom-1-03.jpg" },
      { type: "image", src: "./frontemare/full-bathroom-1-04.jpg" },
    ],
  },
  {
    title: "Balcón",
    media: [
      { type: "image", src: "./frontemare/balcony-01.jpg" },
      { type: "image", src: "./frontemare/balcony-02.jpg" },
    ],
  },
  {
    title: "Cuarto 2",
    media: [
      { type: "image", src: "./frontemare/bedroom-2-01.jpg" },
      { type: "image", src: "./frontemare/bedroom-2-02.jpg" },
      { type: "image", src: "./frontemare/bedroom-2-03.jpg" },
    ],
  },
  {
    title: "Cuarto 3",
    media: [
      { type: "image", src: "./frontemare/bedroom-3-01.jpg" },
      { type: "image", src: "./frontemare/bedroom-3-02.jpg" },
      { type: "image", src: "./frontemare/bedroom-3-03.jpg" },
    ],
  },
  {
    title: "Baño completo de arriba",
    media: [
      { type: "image", src: "./frontemare/full-bathroom-2-01.jpg" },
      { type: "image", src: "./frontemare/full-bathroom-2-02.jpg" },
      { type: "image", src: "./frontemare/full-bathroom-2-03.jpg" },
    ],
  },
  {
    title: "Área de trabajo",
    media: [
      { type: "image", src: "./frontemare/workspace-01.jpg" },
      { type: "image", src: "./frontemare/workspace-02.jpg" },
      { type: "image", src: "./frontemare/workspace-03.jpg" },
    ],
  },
  {
    title: "Patio",
    media: [
      { type: "image", src: "./frontemare/backyard-01.jpg" },
      { type: "image", src: "./frontemare/backyard-02.jpg" },
      { type: "image", src: "./frontemare/backyard-03.jpg" },
    ],
  },
  {
    title: "Área de lavado",
    media: [
      { type: "image", src: "./frontemare/laundry-area-01.jpg" },
      { type: "image", src: "./frontemare/laundry-area-02.jpg" },
    ],
  },
  {
    title: "Exterior de la casa",
    media: [
      { type: "image", src: "./frontemare/exterior-1-01.jpg" },
      { type: "image", src: "./frontemare/exterior-1-04.jpg" },
    ],
  },
  {
    title: "La privada",
    media: [
      { type: "image", src: "./frontemare/exterior-1-02.jpg" },
      { type: "image", src: "./frontemare/exterior-1-03.jpg" },
      { type: "image", src: "./frontemare/exterior-2-01.jpg" },
      { type: "image", src: "./frontemare/exterior-2-02.jpg" },
      { type: "image", src: "./frontemare/exterior-2-03.jpg" },
    ],
  },
  {
    title: "Alberca y área de eventos",
    media: [
      { type: "image", src: "./frontemare/pool-01.jpg" },
      { type: "image", src: "./frontemare/pool-02.jpg" },
      { type: "image", src: "./frontemare/pool-03.jpg" },
      { type: "image", src: "./frontemare/event-room-02.jpg" },
      { type: "image", src: "./frontemare/event-room-01.jpg" },
      { type: "image", src: "./frontemare/pool-04.jpg" },
      { type: "image", src: "./frontemare/event-room-03.jpg" },
    ],
  },
  {
    title: "Servicios cercanos",
    media: [
      { type: "image", src: "./frontemare/exterior-3-01.jpg" },
      { type: "image", src: "./frontemare/exterior-3-02.jpg" },
      { type: "image", src: "./frontemare/exterior-3-03.jpg" },
      { type: "image", src: "./frontemare/exterior-3-04.jpg" },
      { type: "image", src: "./frontemare/exterior-3-05.jpg" },
      { type: "image", src: "./frontemare/exterior-3-06.jpg" },
      { type: "image", src: "./frontemare/exterior-3-07.jpg" },
      { type: "image", src: "./frontemare/exterior-3-08.jpg" },
      { type: "image", src: "./frontemare/exterior-3-09.jpg" },
      { type: "image", src: "./frontemare/exterior-3-10.jpg" },
      { type: "image", src: "./frontemare/exterior-3-11.jpg" },
      { type: "image", src: "./frontemare/exterior-3-12.jpg" },
      { type: "image", src: "./frontemare/exterior-3-13.jpg" },
    ],
  },
];

export default function Index() {
  return (
    <>
      <Head>
        <title>Casa en Frontemare</title>
      </Head>
      <div className="container px-6 pt-16 md:pl-16">
        <h1 className="m-0 mb-8 text-3xl font-normal">
          <span className="text-4xl">Casa en Frontemare</span>
          <br />
          #169
        </h1>
      </div>

      <div className="mb-16 flex flex-col gap-16">
        {roomOrSpaces.map((p) => (
          <div>
            <div className="container px-6 md:pl-16">
              <div className="flex max-w-150 flex-col gap-4 font-sans">
                <header>
                  <h2 className="text-2xl font-semibold">{p.title}</h2>
                </header>
                {typeof p.description === "string" ? (
                  <p>{p.description}</p>
                ) : Array.isArray(p.description) ? (
                  <ul className="ml-5 list-disc">
                    {p.description.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>
                ) : (
                  (p.description ?? null)
                )}
                {p.icons === undefined || p.icons.length === 0 ? null : (
                  <div className="flex flex-wrap gap-1">
                    {p.icons.map((i) => {
                      const icon = isIcon(i) ? icons[i] : null;
                      return (
                        <span
                          key={i}
                          class="flex items-center rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-nowrap text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                        >
                          {icon && <span className="me-1.5">{icon}</span>}
                          {i}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="no-scrollbar mt-4 flex snap-x items-start gap-4 overflow-x-auto pl-4">
              {p.media.map(({ type, src }) => {
                switch (type) {
                  case "image":
                    return (
                      <figure className="-ml-px snap-center last:mr-16">
                        <img
                          src={src}
                          className="block max-h-[50vh] w-auto max-w-[80dvw] border border-gray-900 object-contain"
                        />
                      </figure>
                    );
                  case "video":
                    return (
                      <figure className="-ml-px max-w-3xl min-w-[min(100%,900px)] snap-center last:mr-16">
                        <video
                          src={src}
                          controls
                          className="block h-auto max-h-[calc(100vh-200px)] w-full border border-gray-900 object-contain"
                        />
                      </figure>
                    );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
