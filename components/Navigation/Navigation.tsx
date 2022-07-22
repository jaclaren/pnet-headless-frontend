import Link from "next/link";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { SiteLogo } from "../SiteLogo/SiteLogo";

export function Navigation() {
  return (
    <nav className="navigation navigation--main">
      <a href="/" className="sitelogo sitelogo--navigation navigation__column">        
          <SiteLogo />        
      </a>
      <ul className="navigation__links navigation__column">
        <li className="navigation__link">
          <Link href="/">Etusivu</Link>
        </li>
        <li className="navigation__link">
          <Link href="/koosteet">Koosteet</Link>
        </li>
        <li className="navigation__link">
          <Link href="/tiedot">Tiedot</Link>
        </li>
        <div className="navigation__link navigation__search">
          <button className="b-btn b-btn--transparent">
            <SearchIcon />
          </button>
        </div>
      </ul>
    </nav>
  );
}
