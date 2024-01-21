interface Day {
  day: string;
  image: string;
  min: string;
  max: string;
}

function Day({ day, image, min, max }: Day) {
  return(
    <div 
      className="
        flex flex-col justify-center items-center gap-4
      ">
      <h4 className="text-purple-100 text-sm font-medium p-1">{ day }</h4>
      <img src={ image }/>
      <p className="text-base">
        <span className="text-white">{ min }</span> 
        <span className="text-purple-100"> { max }</span>
      </p>
    </div>
  )
}

export default Day;