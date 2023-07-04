interface Props {
  text: string;
}

function Title({ text }: Props) {
  return(
    <h1 className="w-[190px] text-text text-2xl font-bold">
      { text }
    </h1>
  );
}

export default Title;