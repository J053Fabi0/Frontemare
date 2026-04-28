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
        <meta
          name="description"
          content="Casa en renta, completamente amueblada en Fraccionamiento Frontemare, con 3 recámaras, 2 baños completos, patio, balcón, alberca, área de trabajo y excelente ubicación cerca de Walmart y Chedraui."
        />
        <meta
          name="keywords"
          content="Renta de casa en Frontemare, casa amueblada, renta casa Cancún, casa con alberca, Fraccionamiento Frontemare, 3 recámaras, home office"
        />
        <meta name="author" content="Jose Fabio" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Renta casa en Frontemare" />
        <meta property="og:title" content="Renta casa en Frontemare #169" />
        <meta
          property="og:description"
          content="Casa en renta, completamente amueblada en Frontemare, con espacios amplios, alberca, balcón, patio y una ubicación práctica junto a servicios esenciales."
        />
        <meta
          property="og:image"
          content="https://frontemare.josefabio.com/frontemare/living-room-02-960.webp"
        />
        <meta
          property="og:image:alt"
          content="Sala de estar de la casa en Frontemare"
        />
        <meta property="og:url" content="https://frontemare.josefabio.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Casa en Frontemare #169" />
        <meta
          name="twitter:description"
          content="Casa en renta, completamente amueblada en Fraccionamiento Frontemare, con 3 recámaras, alberca, patio, balcón y excelente ubicación."
        />
        <meta
          name="twitter:image"
          content="https://frontemare.josefabio.com/frontemare/living-room-02-960.webp"
        />
        <meta name="theme-color" content="#fdfdfd" />
      </Head>

      <div className="container px-6 pt-16 md:pl-16">
        <h1 className="m-0 mb-8 text-3xl font-normal">
          <span className="text-4xl">Renta de casa en Frontemare</span>
          <br />
          #169
        </h1>
      </div>

      <section className="container px-6 pb-10 md:pl-16">
        <div className="max-w-3xl space-y-4 font-sans text-base leading-relaxed">
          <p>
            Casa completamente amueblada en Fraccionamiento Frontemare, ideal
            para quienes buscan comodidad, tranquilidad y espacios amplios para
            vivir.
          </p>
          <p>
            La propiedad cuenta con 3 recamaras, 2 baños completos y 1 baño, con
            capacidad cómoda para hasta 6 personas. Sus espacios son amplios,
            iluminados y acogedores, perfectos para disfrutar de un ambiente
            tranquilo y confortable.
          </p>

          <div>
            <h2 className="text-xl font-semibold">Caracteristicas</h2>
            <ul className="mt-2 ml-5 list-disc space-y-1">
              <li>Totalmente amueblada</li>
              <li>Aire acondicionado</li>
              <li>Internet</li>
              <li>Cocina equipada</li>
              <li>Lavadora y secadora</li>
              <li>TV</li>
              <li>Escritorio para home office</li>
              <li>Patio y jardin</li>
              <li>Balcon</li>
              <li>Alberca</li>
              <li>Estacionamiento</li>
              <li>Entrada independiente</li>
              <li>Agua caliente</li>
              <li>Seguridad y vigilancia</li>
            </ul>
          </div>

          <p>
            Excelente ubicacion: justo afuera de la privada está Walmart,
            Chedraui y diversas tiendas y servicios esenciales.
          </p>
        </div>
      </section>

      <section className="container px-6 pb-10 md:pl-16">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold">Contacto</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=526141210171"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-900 px-5 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/josefabio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-900 px-5 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
            >
              Telegram
            </a>
            <a
              href="mailto:senorbinario@tuta.io"
              className="rounded-full border border-gray-900 px-5 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
            >
              Correo
            </a>
            <a
              href="tel:+526141210171"
              className="rounded-full border border-gray-900 px-5 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
            >
              6141210171
            </a>
          </div>
        </div>
      </section>

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
