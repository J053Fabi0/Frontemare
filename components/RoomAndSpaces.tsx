import { JSX } from "preact/jsx-dev-runtime";
import ResponsiveImage from "@/components/ResponsiveImage.tsx";

interface MediaImage {
  type: "image";
  src: string;
}

interface MediaVideo {
  type: "video";
  src: string;
}

export interface RoomOrSpace {
  title: string;
  media: (MediaImage | MediaVideo)[];
  description?: string | JSX.Element | string[];
}

interface Props {
  roomOrSpaces: RoomOrSpace[];
}

const variants = [480, 960, 1440, 1920];

export default function RoomAndSpaces({ roomOrSpaces }: Props) {
  return (
    <div className="mt-16 mb-16 flex flex-col gap-16">
      {roomOrSpaces.map((roomOrSpace) => (
        <div>
          <div className="container px-6 md:pl-16">
            <div className="flex max-w-150 flex-col gap-4 font-sans">
              <header>
                <h2 className="text-2xl font-semibold">{roomOrSpace.title}</h2>
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
  );
}
