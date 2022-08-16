import seedPalettes from "./Components/seedPalettes";
import Palette from "./Components/Palette";
import { generatePalette } from "./colorHelpers";


function App() {

  return (
    <div>
      <Palette palette={generatePalette(seedPalettes[0])} />
    </div>
  );
}

export default App;
