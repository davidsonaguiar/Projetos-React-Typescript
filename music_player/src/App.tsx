import Button from "./components/Button";
import ProgessBar from "./components/ProgressBar";
import Time from "./components/Time";
import Title from "./components/Title";
import Author from "./components/Author";
import Photo from "./components/Photo";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { FastForwardIcon, Play, Pause, Rewind } from "lucide-react";
import manoelImg from "./assets/manoel-gomes_1_76952 (1).jpg";
import manoelMusic from "./assets/CANETA AZUL.mp3";

function App() {
  
  const [state, setState] = useState({
    play: false,
    duration: 0,
    currentTime: 0,
  });

  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    state.play ? musicRef.current?.play() : musicRef.current?.pause();
  }, [state.play]);

  function handlePlay() {
    setState({ ...state, play: !state.play });
  }

  function handlePlaying(event: ChangeEvent<HTMLAudioElement>) {
    setState({
      ...state,
      currentTime: event.target.currentTime,
    });
  }

  function advance() {
    if(musicRef.current!.currentTime < musicRef.current!.duration) {
      musicRef.current!.currentTime = Math.min(musicRef.current!.currentTime + 3, musicRef.current!.duration);
    } 
  }

  function rewind() {
    const rewindMax = 0;
    if(musicRef.current!.currentTime > rewindMax) {
      musicRef.current!.currentTime = Math.max(musicRef.current!.currentTime - 3, rewindMax);
    } 
  }

  function converterSecMin(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds.toFixed(0).padStart(2, "0")}`;
  }

  return (
    <>
      <main
        className="
        max-w-[270px] p-10 bg-primay rounded-xl 
        sm:max-w-[360px] sm:p-7
        flex flex-col gap-7
        transition-all duration-500
      "
      >
        <audio
          ref={musicRef}
          src={manoelMusic}
          onTimeUpdate={handlePlaying}
          onEnded={handlePlay}
        />
        <div className="flex gap-9 items-center transition-all duration-500 sm:flex-row flex-col">
          <Photo url={manoelImg} />
          <div>
            <Title text="Caneta Azul" />
            <Author text="Manoel Gomes" />
          </div>
        </div>
        <div className="flex gap-12 m-auto">
          <Button children={Rewind} handleClick={rewind}/>
          <Button
            children={state.play ? Pause : Play}
            handleClick={handlePlay}
          />
          <Button children={FastForwardIcon} handleClick={advance}/>
        </div>
        <div className="w-full">
          <ProgessBar
            max={musicRef.current?.duration.toString() || "0"}
            value={state.currentTime.toString()}
          />
          <div className="w-full flex justify-between">
            <Time text={converterSecMin(musicRef.current?.currentTime || 0)} />
            <Time text={converterSecMin(musicRef.current?.duration || 0)} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
