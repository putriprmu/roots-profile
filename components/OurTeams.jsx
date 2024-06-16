import Image from "next/image";

export default function OurTeams({ team }) {
  const { name, position, duration, description, featuredImage } = team.fields;

  if (
    !featuredImage ||
    !featuredImage.fields ||
    !featuredImage.fields.file ||
    !featuredImage.fields.file.url
  ) {
    return <div>No image available</div>;
  }

  return (
    <div className="mx-auto py-12 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg flex flex-col md:flex-row md:col-start-2 md:col-end-4 border border-black">
            <div
              className="w-full md:w-1/2 relative h-0"
              style={{ paddingBottom: "56.25%" }}
            >
              <Image
                src={`https:${featuredImage.fields.file.url}`}
                alt="Featured image teams"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <div className="p-4 flex flex-col justify-center md:w-1/2">
              <h3 className="text-red font-bold mb-2">{name}</h3>
              <h4 className="text-navy mb-2">{position}</h4>
              <p className="text-red font-bold mb-4">{duration}</p>
              <p className="text-navy">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
