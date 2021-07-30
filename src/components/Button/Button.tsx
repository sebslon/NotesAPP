import "./Button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  type,
  ...rest
}) => {
  return (
    <button onClick={onClick} className={className} {...rest} type={type}>
      {children}
    </button>
  );
};
