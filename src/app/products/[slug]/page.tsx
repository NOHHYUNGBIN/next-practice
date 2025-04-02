import { getProduct, getProducts } from "@/api/products";
import GoProductsButton from "@/components/GoProductsButton";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};
export const revalidate = 3;

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) {
    redirect("/products");
  }

  return (
    <>
      <h1>{product.name}페이지~</h1>;
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
      <GoProductsButton />
    </>
  );
}

//다이나믹 라우트에서 특정한 경로의 페이지를 미리만들어 놓기위하여..
//generateStaticParams next에서 정해놓은 이름의 함수를 사용해야함.
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${(await params).slug}`,
  };
}
