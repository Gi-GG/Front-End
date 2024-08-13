interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface FormGroup extends InputProps {
  name: string;
  error?: string;
}
