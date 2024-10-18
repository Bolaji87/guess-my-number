import { useContext } from "react";
import { GuessContext } from "./GuessContext";
function useGuess() {
  const context = useContext(GuessContext);
  if (context === undefined)
    throw new Error("GuessContext was used outside of GuessProvider");
  return context;
}

export { useGuess };
