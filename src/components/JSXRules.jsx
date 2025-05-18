const JSXRules = () => {
    const myName = "Atharva";
    const simpleClass = "simple-class";
    const multiply = (a, b) => {
        return a * b;
    }

  return (
    <div>
        <h1>JSX Rules</h1>
        <h3>My name is: {myName}</h3>
        <p>JSX must return a single parent element</p>
        <p>JSX elements must be properly closed</p>
        <p>JSX attributes are written using camelCase(eg className instead of class)</p>
        <p>Answer of 2+2 is: {2+2}</p> 
        <p>4 * 8 = {multiply(4,8)}</p>
        <p className={simpleClass}>This is an example of simple class</p>
    </div>
  )
}

export default JSXRules;

// the above are examples of dynamic use of JSX