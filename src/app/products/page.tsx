import { getProducts } from "@/api/products";
import Meow from "@/components/Meow";
import Link from "next/link";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  // revalidate 0이면 SSR로 동작
  // revalidate 가 있으면 ISR로 동작
  // 옵션이 없다면 SSG
  // const res = await fetch("https://meowfacts.herokuapp.com", {
  //   next: { revalidate: 0 },
  // });
  // const data = await res.json();
  // const text = data.data[0];
  return (
    <>
      <h1>프로덕트 페이지</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Meow />
    </>
  );
}
