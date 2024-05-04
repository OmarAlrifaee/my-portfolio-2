import { Link, useLocation } from "react-router-dom";
import footerData from "./footerData";
export const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className="md:px-32 px-6 py-3 bg-main-bg-light dark:bg-main-bg-dark border-t border-t-dark-text-muted dark:border-light-text-muted">
      <div className="flex md:flex-row flex-col md:justify-center md:items-start items-center gap-10 mt-5">
        <ul className="flex flex-col items-center gap-3">
          <p className="dark:text-light-text text-dark-text font-Poetsen">
            Site Links
          </p>
          {footerData.links.map(({ name, url }) => (
            <li key={url}>
              <Link
                to={url}
                className={` transition hover:text-primary hover:dark:text-primary ${
                  pathname === url
                    ? "text-primary dark:text-primary"
                    : "dark:text-light-text-muted text-dark-text-muted"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-center gap-3">
          <p className="dark:text-light-text text-dark-text font-Poetsen">
            Personal Links
          </p>
          {footerData.elseWhare.map(({ name, url }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                className="dark:text-light-text-muted text-dark-text-muted transition hover:text-primary hover:dark:text-primary"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="font-semibold text-light-text-muted dark:text-dark-text-muted mx-auto text-center text-[16px] pt-10 pb-5">
        @Copy Right For Omar Alrifaee 2024
      </p>
    </footer>
  );
};
