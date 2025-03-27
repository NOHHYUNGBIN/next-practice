type Props = {
  params: Promise<{ slug: string }>;
};
export default async function PantsPage({ params }: Props) {
  const { slug } = await params;
  return <h1>{slug}페이지~</h1>;
}
