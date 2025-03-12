import { ButtonHTMLAttributes } from "react";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function StyledButton({
  children,
  variant = "primary",
  className,
  onClick,
  ...props
}: StyledButtonProps) {
  const baseStyles = {
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "var(--primary-color)",
      color: "white",
      "&:hover": {
        backgroundColor: "var(--primary-color-dark)",
      },
    },
    secondary: {
      backgroundColor: "var(--gray-alpha-100)",
      color: "var(--text-color)",
      "&:hover": {
        backgroundColor: "var(--gray-alpha-200)",
      },
    },
  };

  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  return (
    <button style={styles} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
