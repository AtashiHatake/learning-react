
import Greetings from "./components/Greetings";
import JSXRules from "./components/JSXRules";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
import ProductList from "./components/ProductList";
import PersonProps from "./components/PersonProps";
import ProductProps from "./components/ProductProps";
import CardChildrenProps from "./components/CardChildrenProps";


const App = () => {
    return <div> 
        <Greetings />
        <ProductInfo />
        <Lists />
        <ProductList />
        <PersonProps name="Houndz" age={21} isMarried={false} img="src/assets/img_web_dev.jpg"/>
        <ProductProps name="Toaster" price={300} inStock={true} img="src/assets/toaster.avif"/>

        <CardChildrenProps>
            <div className="w-80 m-3 border-2 border-blue-900 p-3 text-center">
                <h4 className="text-blue-900 font-bold">Card 1</h4>
                <p className="text-blue-900">Some text for card 1</p>
            </div>
            <div className="w-80 m-3 border-2 border-blue-900 p-3 text-center">
                <h4 className="text-blue-900 font-bold">Card 2</h4>
                <p className="text-blue-900">Some text for card 2</p>
            </div>
            <div className="w-80 m-3 border-2 border-blue-900 p-3 text-center">
                <h4 className="text-blue-900 font-bold">Card 3</h4>
                <p className="text-blue-900">Some text for card 3</p>
            </div>
        </CardChildrenProps>
        {/* <JSXRules/> */}
    </div>
}

export default App;

// JSX we need to use className not class like we use in HTML.
// for lists we generally use loops or map
// stopped at 1:15:19