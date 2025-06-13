import ComponentB from "./ComponentB"

const ComponentA = () => {
  return (
    <div>
        <ComponentB />
    </div>
  )
}

export default ComponentA;

/*
Context API is a feature used to manage and share state across components without having to do prop drilling at every component.

In App.jsx we used createContext API to do easier prop drilling but to make it even more easier and simple we will use useContext hook.
*/