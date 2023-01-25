import Head from 'next/head'
import Image from 'next/image'
import { LinkCard } from '@/components/LinkCard';
import data from "../../data.json"

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
      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map((link, index) => (
        <LinkCard key={index} {...link}/>
      ))}
    </div>
  );
}
