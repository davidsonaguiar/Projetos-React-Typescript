interface Info {
  text: string;
  number: number;
}

function Info(props: Info) {
  return(
    <li className="w-max flex flex-col items-center gap-1">
      <span className="text-green-500 font-bold text-sm">{ props.number }</span>
      <span className="text-purple-50 text-xs">{ props.text }</span>
    </li>
  );
}

export default Info;