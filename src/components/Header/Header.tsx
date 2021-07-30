import "./Header.css";

import { Link } from "../Link/Link";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <Link href="/">Notes APP</Link>
    </header>
  );
};
