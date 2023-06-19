import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { LinkCard } from '@/components/LinkCard';
import { InstagramIcon, TwitterIcon } from '@/components/SocialIcons';
import { get } from '@vercel/edge-config';
import { OneProps } from '@/types/type';

import type { GetServerSideProps } from 'next'
 
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await get("linktree");
  return { props: { data } }
}

export default function Home({ data }: OneProps) {

  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-16 mb-40 px-14">
      <Head>
        <title>Linktree | Paulo Moutinho</title>
        <meta name="google-site-verification" content="4on3Ax2OR-BtXre94Wg3N7yZ0OoXYFPRCxle-bWVeAo" />
        <meta name="description" content="Linktree Paulo Moutinho" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://linktree-moutinho.vercel.app/"/>
        <link rel="alternate" media="only screen and (max-width: 640px)" href="https://linktree-moutinho.vercel.app/"/>
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
      {data.links.map((link) => (
        <LinkCard key={link.title} {...link}/>
      ))}
      <div className="flex ite gap-4 mt-6">
        {data.socials.map((social) => {
          if (social.title.includes("Instagram")) {
            return (
              <Link href={social.href} passHref target="_blank" key={social.title}  title="Instagram"
                className="hover:scale-105 transition-all"
              >
                <InstagramIcon key="Instagram"/>
              </Link>
            )
          }
          if (social.title.includes("Twitter")) {
            return (
              <Link href={social.href} passHref target="_blank" key={social.title} title="Twitter"
                className="hover:scale-105 transition-all"
              >
                <TwitterIcon key="Twitter"/>
              </Link>
            )
          }
        })}
      </div>
      <footer className="mx-auto">
        <p className="mt-32 text-xs">{data.footer}</p>
      </footer>
    </div>
  );
}
