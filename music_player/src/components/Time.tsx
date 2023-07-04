interface Props {
  text: string;
}

function Time({ text }: Props) {
  return(
    <span className="text-textSecondary">{ text }</span>
  );
}

export default Time;