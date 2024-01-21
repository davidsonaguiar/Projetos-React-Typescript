import AirIcon from '@mui/icons-material/Air';
import Drop from '@mui/icons-material/WaterDrop';
import Cloud from '@mui/icons-material/Thunderstorm';
import Stats from "./components/Stats"
import Day from './components/Day';

import cloud from "./assets/images/cloud.png";
import sun from "./assets/images/sun.png";
import rain from "./assets/images/rain.png";
import thunder from "./assets/images/thunder.png";
import sincloud from "./assets/images/suncloud.png";
import Info from './components/Info';

function App() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-[456px] gap-2">
        <Stats icon={AirIcon} label="Vento" value="17"  unit="km" />
        <Stats icon={Drop} label="Umidade" value="31"  unit="%" />
        <Stats icon={Cloud} label="Chuva" value="10"  unit="%" />
      </div>  

      <ul className='flex gap-4 bg-purple-600'>
        <Info text='PM2.2' number={12.9}/>
        <Info text='PM2.2' number={12.9}/>
        <Info text='PM2.2' number={12.9}/>
        <Info text='PM2.2' number={12.9}/>  
        <Info text='PM2.2' number={12.9}/>  
        <Info text='PM2.2' number={12.9}/> 
      </ul>

      <div className="max-w-max flex p-10 gap-4 items-center bg-purple-600 rounded-lg">
        <Day day="Amanha" image={cloud} min="16°" max="21°"/>
        <Day day="Sexta-feira" image={sun} min="28°" max="20°"/>
        <Day day="Sábado" image={rain} min="25°" max="21°"/>
        <Day day="Domingo" image={thunder} min="20°" max="14°"/>
        <Day day="Segunda-Feira" image={sincloud} min="24°" max="18°"/>
      </div>
    </div>
  )
}

export default App
