interface Props {
  children: string;
  color?: "primary" | "info" | "danger" | "success" | " secondary";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "secondary" }: Props) => {
  return (
    <button color='react' className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
