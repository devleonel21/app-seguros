export type CardProps = {
    title: string;
    description: string;
    icon: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: () => void;
  };