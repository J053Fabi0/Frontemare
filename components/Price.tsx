import { numberWithCommas } from "@/utils/numbersString.ts";

interface Props {
  price: number;
  description?: string;
}

export default function Price({ price, description }: Props) {
  const priceToShow = `$${numberWithCommas(price)} MXN`;

  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-[0.18em] text-nowrap text-stone-500 uppercase">
            Renta mensual
          </p>
          <p className="text-3xl font-semibold text-nowrap text-stone-900">
            {priceToShow}
          </p>
        </div>

        {description ?? (
          <p className="max-w-md text-sm text-stone-600">{description}</p>
        )}
      </div>
    </div>
  );
}
