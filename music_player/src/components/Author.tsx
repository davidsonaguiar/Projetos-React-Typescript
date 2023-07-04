interface Props {
  text: string;
}

function Author({ text }: Props) {
  return(
    <h2 className="w-[190px] text-textSecondary text-xl">
      { text }
    </h2>
  );
}

export default Author;