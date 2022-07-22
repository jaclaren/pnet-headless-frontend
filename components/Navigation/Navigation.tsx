import Link from "next/link";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { SiteLogo } from "../SiteLogo/SiteLogo";

export function Navigation() {
  return (
    <nav className="navigation navigation--main">
      <div className="sitelogo sitelogo--primary">
        <SiteLogo />
      </div>
      <ul className="navigation__links">
        <li className="navigation__link">
          <Link href="/">Etusivu</Link>
        </li>
        <li className="navigation__link">
          <Link href="/koosteet">Koosteet</Link>
        </li>
        <div className="navigation__link navigation__search">
          <SearchIcon />
        </div>
      </ul>
    </nav>
  );
}
