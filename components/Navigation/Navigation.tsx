import Link from "next/link";

export function Navigation() {
  return (
    <nav className="navigation navigation--main">
      <div className="sitelogo sitelogo--primary">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.281 524.407">
            <defs>
                <style>
                </style>
            </defs>
            <path id="left_bottom_foot" className="sitelogo-side-1" d="M33.719,380.13l86.058,46.836V563.935L33.719,517.1V380.13Z" transform="translate(-33.719 -40.063)"></path>
            <path id="left_bottom_foot_shade" data-name="left_bottom_foot shade" className="sitelogo-side-2" d="M119.719,426.969l103.307-57.814V506.124L119.719,563.938V426.969Z" transform="translate(-33.719 -40.063)"></path>
            <path id="cube_left_outer" className="sitelogo-side-1" d="M281,298L34,170V435.518l247,128V298Z" transform="translate(-33.719 -40.063)"></path>
            <path id="cube_left_inner" className="sitelogo-side-3" d="M283.15,297.464L119.766,212.8V388.429L283.15,473.1V297.464Z" transform="translate(-33.719 -40.063)"></path>
            <path id="cube_top_outer" className="sitelogo-side-4" d="M281.465,40.067L528.933,170.593,281.465,298.106,34,170.593" transform="translate(-33.719 -40.063)"></path>
            <path id="cube_top_inner" className="sitelogo-side-5" d="M282.5,127.667l162.959,86.109L282.5,297.9l-162.96-84.123" transform="translate(-33.719 -40.063)"></path>
            <path id="cube_right_outer" className="sitelogo-side-6" d="M281.406,298.308L529,170V436.156L281.406,564.464V298.308Z" transform="translate(-33.719 -40.063)"></path>
            <path id="cube_right_inner" className="sitelogo-side-7" d="M281,297.652l162.632-84.279V388.2L281,472.477V297.652Z" transform="translate(-33.719 -40.063)"></path>
            </svg>
        
      </div>
      <ul className="navigation__links">
        <li className="navigation__link">
          <Link href="/">Etusivu</Link>
        </li>
        <li className="navigation__link">
          <Link href="/koosteet">Koosteet</Link>
        </li>
      </ul>
    </nav>
  );
}
