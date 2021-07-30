import "./Link.css";

import { changePath } from "utils/change-path";

interface LinkProps {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    changePath(href);
  };

  return (
    <a href={href} onClick={handleOnClick} className="link">
      {children}
    </a>
  );
};
