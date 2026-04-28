import Map from "@/components/Map.tsx";
import Price from "@/components/Price.tsx";
import ContactButtons, { ContactType } from "@/components/ContactButtons.tsx";
import RoomAndSpaces, { RoomOrSpace } from "@/components/RoomAndSpaces.tsx";

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
      <div className="container px-6 pt-16 md:pl-16">
        <h1 className="m-0 mb-8 font-sans text-4xl">
          Renta de casa en Frontemare
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

          <Price
            price={21000}
            description="Ocupación máxima para 6 personas, sin mascotas."
          />

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

      <ContactButtons
        contactData={[
          { type: ContactType.whatsapp, data: "6141210171" },
          { type: ContactType.telegram, data: "josefabio" },
          { type: ContactType.email, data: "jf@josefabio.com" },
          { type: ContactType.phone, data: "6141210171" },
        ]}
      />

      <Map coordinates="20.670658, -87.065804" />

      <RoomAndSpaces roomOrSpaces={roomOrSpaces} />
    </>
  );
}
