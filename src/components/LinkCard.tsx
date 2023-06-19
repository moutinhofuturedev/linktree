import Image from 'next/image'
import { LinkCardProps } from '@/types/type';
import Link from 'next/link';

export function LinkCard({ href, title, image }: LinkCardProps) {
    return (
      <Link
        href={href}
        passHref
        target="_blank"
        className="flex 
        w-80 
        md:w-[480px]
        lg:w-[520px] 
        p-1 
        rounded-md 
        hover:scale-105 
        transition-all 
        border 
        border-gray-300 
        mb-3 
        bg-gray-100"
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
              priority={true}
            />
          )}
          <h2 className="font-semibold w-full text-center text-gray-700">
            {title}
          </h2>
        </div>
      </Link>
    );
}