interface Props {
  max: string;
  value: string;
}

function ProgessBar({ max, value }: Props) {
  return(
    <progress className="w-full max-w-[300px] h-2" max={max} value={value} />
  );
}

export default ProgessBar;