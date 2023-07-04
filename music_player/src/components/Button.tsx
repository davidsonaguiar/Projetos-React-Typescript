import { ElementType } from "react"

interface Props {
  children: ElementType;
  handleClick?: () => void;
}

function Button({ children: Icon, handleClick }: Props) {
  return(
    <button onClick={handleClick}>
      <Icon color="#E1E1E6" width={30} height={30}/>
    </button>
  );
}

export default Button;