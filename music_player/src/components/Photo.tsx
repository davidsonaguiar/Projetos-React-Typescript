interface Props {
  url: string;
}

function Photo({ url }: Props) {
  return(
    <div className="w-[190px] sm:w-[84px] aspect-square transition-all duration-500">
      <img className="h-full object-cover rounded-md transition-all duration-500" src={url}/>
    </div>
  );
}

export default Photo;