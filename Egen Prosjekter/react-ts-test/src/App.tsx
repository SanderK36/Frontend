import { Hello } from "./components/hello";
import { Counter } from "./components/counter";

export default function App() {
  return (
    <div>
      <h1>Welcome to React with TypeScript!</h1>
      <Hello name="Sander"/>
      <Hello name="Ove"/>
      <Hello name="Reidar"/>
      <h1>Counter with useState!</h1>
      <Counter/>
    </div>
  );
}