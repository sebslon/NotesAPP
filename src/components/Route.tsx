import { usePath } from "../hooks/use-path";

interface RouteProps {
  path: string;
  children: JSX.Element;
} 

export const Route = ({ path, children }: RouteProps) => {
  const { currentPath } = usePath();

  return currentPath === path ? children : null;
};
