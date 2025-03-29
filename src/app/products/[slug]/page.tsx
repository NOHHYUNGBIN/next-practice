import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PantsPage({ params }: Props) {
  const { slug } = await params;
  return <h1>{slug}페이지~</h1>;
}

//다이나믹 라우트에서 특정한 경로의 페이지를 미리만들어 놓기위하여..
//generateStaticParams next에서 정해놓은 이름의 함수를 사용해야함.
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({ slug: product }));
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${(await params).slug}`,
  };
}
