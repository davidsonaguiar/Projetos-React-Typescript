import { ElementType } from "react";

interface Stats {
  icon: ElementType;
  label: string;
  value: string;
  unit: string;
}

function Stats({icon: Icon, label, value, unit}: Stats) {
  return (
    <div
      className="
        w-max px-4 py-3 backdrop-blur-0  rounded-md
        bg-purple-trans font-sans-serif text-purple-100
        flex gap-3 item-center flex-grow
      "
    >
      <div className="flex justify-end items-center text-3xl">
          <Icon sx={{ fontSize: 32 }}/>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xs">{label}</span>
        <span className="text-lg">
          {value} <span className="text-sm">{unit}</span>
        </span>
      </div>
    </div>
  );
}

export default Stats;
