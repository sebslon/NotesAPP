import "./Link.css";

interface LinkProps {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.history.pushState({}, "", href);

    const changeURLEvent = new PopStateEvent("popstate");
    window.dispatchEvent(changeURLEvent);
  };

  return (
    <a href={href} onClick={handleOnClick} className="link">
      {children}
    </a>
  );
};
