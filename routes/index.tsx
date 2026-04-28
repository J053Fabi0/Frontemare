import { Head } from "fresh/runtime";
import { JSX } from "preact/jsx-runtime";
import ResponsiveImage from "@/components/ResponsiveImage.tsx";

interface MediaImage {
  type: "image";
  src: string;
}

interface MediaVideo {
  type: "video";
  src: string;
}

interface RoomOrSpace {
  title: string;
  media: (MediaImage | MediaVideo)[];
  description?: string | JSX.Element | string[];
}

const variants = [480, 960, 1440, 1920];

const roomOrSpaces: RoomOrSpace[] = [
  {
    title: "Sala de estar",
    media: [
      { type: "image", src: "./frontemare/living-room-01.webp" },
      { type: "image", src: "./frontemare/living-room-02.webp" },
      { type: "image", src: "./frontemare/living-room-03.webp" },
      { type: "image", src: "./frontemare/living-room-04.webp" },
    ],
  },
  {
    title: "Cocina completa",
    media: [
      { type: "image", src: "./frontemare/full-kitchen-01.webp" },
      { type: "image", src: "./frontemare/full-kitchen-02.webp" },
      { type: "image", src: "./frontemare/full-kitchen-03.webp" },
      { type: "image", src: "./frontemare/full-kitchen-04.webp" },
      { type: "image", src: "./frontemare/full-kitchen-05.webp" },
    ],
  },
  {
    title: "Comedor",
    media: [
      { type: "image", src: "./frontemare/dining-area-01.webp" },
      { type: "image", src: "./frontemare/dining-area-02.webp" },
    ],
  },
  {
    title: "Baño de abajo",
    media: [
      { type: "image", src: "./frontemare/half-bathroom-01.webp" },
      { type: "image", src: "./frontemare/half-bathroom-02.webp" },
    ],
  },
  {
    title: "Cuarto principal",
    media: [
      { type: "image", src: "./frontemare/bedroom-1-01.webp" },
      { type: "image", src: "./frontemare/bedroom-1-02.webp" },
      { type: "image", src: "./frontemare/bedroom-1-03.webp" },
      { type: "image", src: "./frontemare/bedroom-1-04.webp" },
      { type: "image", src: "./frontemare/bedroom-1-05.webp" },
    ],
  },
  {
    title: "Baño del cuarto principal",
    media: [
      { type: "image", src: "./frontemare/full-bathroom-1-01.webp" },
      { type: "image", src: "./frontemare/full-bathroom-1-02.webp" },
      { type: "image", src: "./frontemare/full-bathroom-1-03.webp" },
      { type: "image", src: "./frontemare/full-bathroom-1-04.webp" },
    ],
  },
  {
    title: "Balcón",
    media: [
      { type: "image", src: "./frontemare/balcony-01.webp" },
      { type: "image", src: "./frontemare/balcony-02.webp" },
    ],
  },
  {
    title: "Cuarto 2",
    media: [
      { type: "image", src: "./frontemare/bedroom-2-01.webp" },
      { type: "image", src: "./frontemare/bedroom-2-02.webp" },
      { type: "image", src: "./frontemare/bedroom-2-03.webp" },
    ],
  },
  {
    title: "Cuarto 3",
    media: [
      { type: "image", src: "./frontemare/bedroom-3-01.webp" },
      { type: "image", src: "./frontemare/bedroom-3-02.webp" },
      { type: "image", src: "./frontemare/bedroom-3-03.webp" },
    ],
  },
  {
    title: "Baño completo de arriba",
    media: [
      { type: "image", src: "./frontemare/full-bathroom-2-01.webp" },
      { type: "image", src: "./frontemare/full-bathroom-2-02.webp" },
      { type: "image", src: "./frontemare/full-bathroom-2-03.webp" },
    ],
  },
  {
    title: "Área de trabajo",
    media: [
      { type: "image", src: "./frontemare/workspace-01.webp" },
      { type: "image", src: "./frontemare/workspace-02.webp" },
      { type: "image", src: "./frontemare/workspace-03.webp" },
    ],
  },
  {
    title: "Patio",
    media: [
      { type: "image", src: "./frontemare/backyard-01.webp" },
      { type: "image", src: "./frontemare/backyard-02.webp" },
      { type: "image", src: "./frontemare/backyard-03.webp" },
    ],
  },
  {
    title: "Área de lavado",
    media: [
      { type: "image", src: "./frontemare/laundry-area-01.webp" },
      { type: "image", src: "./frontemare/laundry-area-02.webp" },
    ],
  },
  {
    title: "Exterior de la casa",
    media: [
      { type: "image", src: "./frontemare/exterior-1-01.webp" },
      { type: "image", src: "./frontemare/exterior-1-04.webp" },
    ],
  },
  {
    title: "La privada",
    media: [
      { type: "image", src: "./frontemare/exterior-1-02.webp" },
      { type: "image", src: "./frontemare/exterior-1-03.webp" },
      { type: "image", src: "./frontemare/exterior-2-01.webp" },
      { type: "image", src: "./frontemare/exterior-2-02.webp" },
      { type: "image", src: "./frontemare/exterior-2-03.webp" },
    ],
  },
  {
    title: "Alberca y área de eventos",
    media: [
      { type: "image", src: "./frontemare/pool-01.webp" },
      { type: "image", src: "./frontemare/pool-02.webp" },
      { type: "image", src: "./frontemare/pool-03.webp" },
      { type: "image", src: "./frontemare/event-room-02.webp" },
      { type: "image", src: "./frontemare/event-room-01.webp" },
      { type: "image", src: "./frontemare/pool-04.webp" },
      { type: "image", src: "./frontemare/event-room-03.webp" },
    ],
  },
  {
    title: "Servicios cercanos",
    media: [
      { type: "image", src: "./frontemare/exterior-3-01.webp" },
      { type: "image", src: "./frontemare/exterior-3-02.webp" },
      { type: "image", src: "./frontemare/exterior-3-03.webp" },
      { type: "image", src: "./frontemare/exterior-3-04.webp" },
      { type: "image", src: "./frontemare/exterior-3-05.webp" },
      { type: "image", src: "./frontemare/exterior-3-06.webp" },
      { type: "image", src: "./frontemare/exterior-3-07.webp" },
      { type: "image", src: "./frontemare/exterior-3-08.webp" },
      { type: "image", src: "./frontemare/exterior-3-09.webp" },
      { type: "image", src: "./frontemare/exterior-3-10.webp" },
      { type: "image", src: "./frontemare/exterior-3-11.webp" },
      { type: "image", src: "./frontemare/exterior-3-12.webp" },
      { type: "image", src: "./frontemare/exterior-3-13.webp" },
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

      <div className="w-full">
        <div className="relative h-0 overflow-hidden pb-[61.54%]">
          <iframe
            src="https://maps.google.com/maps?width=650&height=400&hl=en&q=20.670658%2C%20-87.065804&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            className="absolute top-0 left-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="line text-[10px]/[10px] opacity-75">
        <a
          href="https://www.embedgooglemap.net/?utm_source=embed&utm_medium=referral&utm_campaign=map_embed"
          target="_blank"
          rel="noopener"
        >
          Embed Google Map
        </a>
      </div>

      <div className="mb-16 flex flex-col gap-16">
        {roomOrSpaces.map((roomOrSpace) => (
          <div>
            <div className="container px-6 md:pl-16">
              <div className="flex max-w-150 flex-col gap-4 font-sans">
                <header>
                  <h2 className="text-2xl font-semibold">
                    {roomOrSpace.title}
                  </h2>
                </header>
                {typeof roomOrSpace.description === "string" ? (
                  <p>{roomOrSpace.description}</p>
                ) : Array.isArray(roomOrSpace.description) ? (
                  <ul className="ml-5 list-disc">
                    {roomOrSpace.description.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>
                ) : (
                  (roomOrSpace.description ?? null)
                )}
              </div>
            </div>

            <div className="no-scrollbar mt-4 flex snap-x items-start gap-4 overflow-x-auto pl-4">
              {roomOrSpace.media.map((media) => {
                switch (media.type) {
                  case "image":
                    return (
                      <figure className="-ml-px snap-center last:mr-16">
                        <ResponsiveImage
                          src={media.src}
                          variants={variants}
                          alt={roomOrSpace.title}
                          className="block max-h-[50vh] w-auto max-w-[80dvw] border border-gray-900 object-contain"
                          sizesAttr="(min-width: 1024px) 50vw, 100vw"
                        />
                      </figure>
                    );
                  case "video":
                    return (
                      <figure className="-ml-px max-w-3xl min-w-[min(100%,900px)] snap-center last:mr-16">
                        <video
                          src={media.src}
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
