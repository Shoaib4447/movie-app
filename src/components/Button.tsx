interface Props {
  children: string;
  color?: "primary" | "Secondary" | "info";
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button type='button' className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
