import { Age } from "./Age.jsx";
import { Welcome } from "./Welcome.jsx";

export function App() {
  return (
    <div>
      <h1 className="bg-red-200 text-center">Ciao</h1>
      <hr />
      <Welcome name="Michele" age={25} />
      <Age age={25}/>
      
    </div>
  );
}

