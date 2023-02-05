import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { LinkCard } from '@/components/LinkCard';
import data from "../../data.json"
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-16 mb-40 px-14">
      <Head>
        <title>Linktree | Paulo Moutinho</title>
        <meta name="description" content="Linktree Paulo Moutinho" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        title={data.name}
        width="100"
        height="100"
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
      <p className="mb-8 text-sm">{data.jobTitle}</p>
      {data.links.map((link, index) => (
        <LinkCard key={index} {...link}/>
      ))}
      <div className="flex ite gap-4 mt-6">
        {data.socials.map((social, index) => {
          if (social.title.includes("Instagram")) {
            return (
              <Link href={social.href} passHref target="_blank" key={index} 
                className="hover:scale-105 transition-all"
              >
                <InstagramIcon />
              </Link>
            )
          }
          if (social.title.includes("LinkedIn")) {
            return (
              <Link href={social.href} passHref target="_blank" key={index}
                className="hover:scale-105 transition-all"
              >
                <LinkedinIcon />
              </Link>
            )
          }
        })}
      </div>
      <p className="mt-32 text-sm">{data.footer}</p>
    </div>
  );
}
