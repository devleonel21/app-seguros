export type CardProps = {
    title: string;
    description: string;
    icon: string;
    checked?: boolean;
    testId?: string;
    onChange?: () => void;
  };