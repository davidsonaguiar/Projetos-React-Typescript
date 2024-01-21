import { useContext } from "react";
import { PomodoroContext } from "../context/pomodoro.context";

export function usePomodoroContext() {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error(
      "usePomodoroContext must be used within a PomodoroProvider"
    );
  }
  return context;
}