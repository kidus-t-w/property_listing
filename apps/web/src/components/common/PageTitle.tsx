interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return <h1 className="font-semibold text-2xl">{title}</h1>;
}
