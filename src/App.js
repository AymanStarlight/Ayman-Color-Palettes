import seedPalettes from "./Components/seedPalettes";
import Palette from "./Components/Palette";
import { generatePalette } from "./colorHelpers";


function App() {
  console.log(generatePalette(seedPalettes[0]))
  return (
    <div>
      <Palette {...seedPalettes[0]} />
    </div>
  );
}

export default App;
