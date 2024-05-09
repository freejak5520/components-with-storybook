import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "default";
type ButtonSize = "xs" | "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
};

const Button = ({
  variant = "default",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    props.block && styles.block,
    props.className,
  ].join(" ");

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
