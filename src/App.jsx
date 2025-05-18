
import Greetings from "./components/Greetings";
import JSXRules from "./components/JSXRules";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
import ProductList from "./components/ProductList";


const App = () => {
    return <div> 
        <Greetings />
        <ProductInfo />
        <Lists />
        <ProductList />
        {/* <JSXRules/> */}
    </div>
}

export default App;

// JSX we need to use className not class like we use in HTML.
// for lists we generally use loops or map
// stopped at 49:40