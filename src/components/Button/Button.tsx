import "./Button.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
