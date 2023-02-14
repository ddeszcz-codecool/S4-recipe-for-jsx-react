import Name from "./components/1Name";
import Image from "./components/2Image";
import Ingredients from "./components/3Ingredients";
import Preparation from "./components/4Preparation";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Name />
            <Image />
            <Ingredients />
            <Preparation />
        </div>
    );
}
export default App;

