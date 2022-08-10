import seedPalettes from "./Components/seedPalettes";
import Palette from "./Components/Palette";


function App() {
  return (
    <div>
      <Palette {...seedPalettes[0]} />
    </div>
  );
}

export default App;
