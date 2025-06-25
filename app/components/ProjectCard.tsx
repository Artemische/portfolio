import Image from 'next/image'

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  actionLink?: string;
  actionText?: string;
  large?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  actionLink,
  actionText,
  large
}: ProjectCardProps) {
  const defaultClass = "flex flex-col lg:w-[420px] overflow-hidden items-start gap-4 rounded-xl border border-gray-700 hover:border-teal-400 transition";
  const largeClass = "flex flex-col lg:flex-row overflow-hidden items-start gap-4 rounded-xl border border-gray-700 hover:border-teal-400 transition";

  return (
    <div className={large ? largeClass : defaultClass}>
      {/* Image */}
      <Image
        width={420}
        height={200}
        className="cover"
        src={imageSrc}
        alt={title}
      />

      {/* Content */}
      <div className="flex flex-col justify-between p-5 flex-1 h-[100%]">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 mt-2 text-xl whitespace-pre-line">{description}</p>
        </div>

        <div className={`flex gap-3 mt-4`}>
          {actionLink && (
            <a
              aria-label="Project action link"
              href={actionLink}
              target="_blank"
              className="px-4 py-2 rounded-md border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition"
            >
              {actionText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
