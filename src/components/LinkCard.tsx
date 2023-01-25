import Image from 'next/image'

interface LinkCardProps {
    href: string;
    title: string;
    image?: string;
}

export function LinkCard({ href, title, image }: LinkCardProps) {
    return (
      <a
        href={href}
        target="_blank"
        className="flex w-full p-1 rounded-md hover:scale-105 transition-all border border-gray-300 mb-3" rel="noreferrer"
      >
        <div className="flex items-center text-center w-full">
          {image && (
            <Image className="rounded-sm" src={image} alt={title} width="40" height="40"/>
          )}  
          <h2 className="font-semibold w-full text-center">{title}</h2>
        </div>
      </a>
    );
}