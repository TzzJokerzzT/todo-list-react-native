export interface MainProps {
  status: string;
  task: string;
  description: string;
  type: string;
  id: string | number;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export interface ContextProps {
  formData: MainProps;
  tasks: MainProps[];
  onChange: (name: string, value: string) => void;
  onSubmit: () => void;
  onDelete: (id: string | number) => void;
  tasksSetter: (arr: MainProps[], id: string | number, items: string) => void;
  taskStatus: string[];
  pending: number;
  working: number;
  finish: number;
}

export interface FormProps {
  data?: string;
  value?: string;
  onChange: (name: string, value: string) => void;
  label?: string;
}

export interface PickerProps {
  formData: MainProps;
  onChange: (name: string, value: string) => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  icon?: string;
  mode?: "text" | "contained" | "outlined" | "elevated" | "contained-tonal";
  buttonColor?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  type: string;
}

export interface CheckboxProps {
  index: number;
  items: string;
  status: string;
  tasks: MainProps[];
  id: string | number;
  tasksSetter: Function;
  color: string;
}
