import { JSX } from "preact/jsx-dev-runtime";

export enum ContactType {
  whatsapp = "WhatsApp",
  telegram = "Telegram",
  phone = "Teléfono",
  email = "Correo",
}

export interface ContactData {
  type: ContactType;
  data: string;
}

interface Props {
  contactData: ContactData[];
}

const colors: Record<ContactType, string> = {
  [ContactType.whatsapp]:
    "border-emerald-500 bg-emerald-500 hover:border-emerald-600 hover:bg-emerald-600",
  [ContactType.telegram]:
    "border-sky-500 bg-sky-500 hover:border-sky-600 hover:bg-sky-600",
  [ContactType.email]:
    "border-amber-500 bg-amber-500 hover:border-amber-600 hover:bg-amber-600",
  [ContactType.phone]:
    "border-stone-500 bg-stone-500 hover:border-stone-600 hover:bg-stone-600",
};

function getUrl(contactData: ContactData): string {
  switch (contactData.type) {
    case ContactType.whatsapp:
      return `https://api.whatsapp.com/send?phone=52${contactData.data}`;
    case ContactType.telegram:
      return `https://t.me/${contactData.data}`;
    case ContactType.phone:
      return `tel:+52${contactData.data}`;
    case ContactType.email:
      return `mailto:${contactData.data}`;
  }
}

export default function ContactButtons({ contactData }: Props) {
  const buttons: JSX.Element[] = [];

  for (const c of contactData)
    buttons.push(
      <a
        key={c.data + c.type}
        href={getUrl(c)}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "rounded-full border px-5 py-2 font-sans text-sm font-medium text-white shadow-sm transition hover:shadow-md " +
          colors[c.type]
        }
      >
        {c.type}
      </a>,
    );

  return (
    <section className="container px-6 pb-10 md:pl-16">
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <div className="mt-4 flex flex-wrap gap-3">{buttons}</div>
      </div>
    </section>
  );
}
