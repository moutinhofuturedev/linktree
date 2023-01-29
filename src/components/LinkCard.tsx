import Image from 'next/image'
import { LinkCardProps } from '@/types/type';

export function LinkCard({ href, title, image }: LinkCardProps) {
    return (
      <a
        href={href}
        target="_blank"
        className="flex w-full p-1 rounded-md hover:scale-105 transition-all border border-gray-300 mb-3 bg-gray-100"
        rel="noreferrer"
      >
        <div className="flex items-center text-center w-full h-10">
          {image && (
            <Image
              className="rounded-sm max-h-10"
              src={image}
              alt={title}
              width="40"
              height="40"
            />
          )}
          <h2 className="font-semibold w-full text-center text-gray-700">
            {title}
          </h2>
        </div>
      </a>
    );
}