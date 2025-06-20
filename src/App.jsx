
import Greetings from "./components/Greetings";
import JSXRules from "./components/JSXRules";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
import ProductList from "./components/ProductList";
import PersonProps from "./components/PersonProps";
import ProductProps from "./components/ProductProps";
import CardChildrenProps from "./components/CardChildrenProps";
import CubeRotate from "./components/FramerMotion";
import ConditionalRendering from "./components/ConditionalRendering";
import CondRenderWeather from "./components/CondRenderWeather";
import CondRenderUserStatus from "./components/CondRenderUserStatus";
{/* react icon below */}
import { FaCartArrowDown } from "react-icons/fa";
import StylingCard from "./components/StylingCard";
import State from "./components/State";
import MoviesState from "./components/MoviesState";
import ShareState from "./components/ShareState";
import ExampleOne from "./components/ExampleOne";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import PortalCopyInput from "./components/PortalCopyInput";
import PortalPopUpcontent from "./components/PortalPopUpcontent";
import DarkLightSwitch from "./components/DarkLightSwitch";
import UseEffectHook from "./components/UseEffectHook";
import UseEffectDataFetching from "./components/UseEffectDataFetching";
import UseEffectBasicEffect from "./components/UseEffectBasicEffect";
import UseEffectCounterEffect from "./components/UseEffectCounterEffect";
import UseEffectFetchData from "./components/UseEffectFetchData";
import { createContext } from "react";
import ComponentA from "./components/ComponentA";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./components/UserContext";
import UpdateUser from "./components/UpdateUser";
import UseReducerHook from "./components/UseReducerHook";
import CounterReducer from "./components/CounterReducer";
import UseRef from "./components/UseRef";
import UseID from "./components/UseID";


export const nameData = createContext();

export const multipleData = createContext();

const App = () => {
    const name = "Atharva";

    const age = 21;

    return <div> 
        <UseID />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quam omnis qui suscipit assumenda, temporibus, officiis incidunt possimus repellendus exercitationem laborum, ad quisquam?
        </p>
        <UseID />
        {/* 
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
        <ConditionalRendering />
        <br />
        <CondRenderWeather/>
        <br />
        <CondRenderUserStatus />
        <StylingCard />
        <State />
        <MoviesState />
        <ShareState />
        <ExampleOne />
        <TodoList /> 
        <Profile />
        <ShoppingList />
        <PortalCopyInput />
        <DarkLightSwitch />
        <UseEffectHook />
        <UseEffectDataFetching />
        <UseEffectBasicEffect />
        <UseEffectCounterEffect />
        <UseEffectFetchData />

         <nameData.Provider value={name}>
            <multipleData.Provider value={age}>
                <ComponentA  />
            </multipleData.Provider>
        </nameData.Provider>

        <UserProvider>
            <UserProfile />
            <UpdateUser />
        </UserProvider>
        <UseReducerHook />
        <CounterReducer />
        <UseRef />
        */}
        {/* <JSXRules/> */}
    </div>
}

export default App;

// JSX we need to use className not class like we use in HTML.
// for lists we generally use loops or map
// stopped at 3:50:46