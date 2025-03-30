import Counter from "@/components/Counter";

export default function Home() {
  console.debug("서버");
  return (
    <>
      <h1>홈페이지!</h1>
      <Counter />
    </>
  );
}
