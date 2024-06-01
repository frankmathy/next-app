import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link className="link" href="/users">
        Users
      </Link>
      <ProductCard />
    </main>
  );
}
