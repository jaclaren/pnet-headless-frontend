import Link from "next/link";

export function Navigation() {
  return (
    <nav className="navigation navigation--main">
      <Link href="/">Etusivu</Link>
      <Link href="/koosteet">Koosteet</Link>
    </nav>
  );
}
