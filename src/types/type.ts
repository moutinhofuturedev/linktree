export type LinkCardProps = {
  href: string;
  title: string;
  image?: string;
}

type DataProps = {
  name: string
  jobTitle: string
  avatar: string
  links: {
    title: string
    href: string
    image: string
  }[],
  socials: {
    title: string,
    href: string
  }[],
  footer: string
}

export type OneProps = {
  data: DataProps
}
