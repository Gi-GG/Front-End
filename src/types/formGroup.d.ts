interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    validation: (...props: string[]) => boolean;
    errorMessage: string;
}

export interface FormGroup extends InputProps {
    name: string;
    error?: string;
}
