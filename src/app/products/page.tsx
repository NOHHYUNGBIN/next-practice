import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>프로덕트 페이지</h1>
      <ul>
        <li>
          <Link href="/products/shirt">shirt</Link>
        </li>
        <li>
          <Link href="/products/pants">pants</Link>
        </li>
        <li>
          <Link href="/products/skirt">skirt</Link>
        </li>
        <li>
          <Link href="/products/shoes">shoes</Link>
        </li>
      </ul>
    </>
  );
}
