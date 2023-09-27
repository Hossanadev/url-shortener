export interface ChildrenProps {
  children?: JSX.Element;
}

export interface CardProps<T> {
  icon: T;
  title: string;
  totalClicks: string;
  className?: string;
}
