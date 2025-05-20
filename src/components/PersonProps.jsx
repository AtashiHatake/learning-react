const PersonProps = ({name, age, isMarried, img}) => {
  return (
    <div className="w-80 m-20 border-2 border-blue-900 p-3 text-center">
        <h1 className="text-blue-900 font-bold">Name: {name}</h1>
        <h2 className="text-blue-900 font-bold">Age: {age}</h2>
        <h2 className="text-blue-900 font-bold">Is Married: {isMarried}</h2>
        <img className="w-50 h-50 rounded-full mx-auto mt-3" src={img} alt={name} />
    </div>
  )
}

export default PersonProps;

/*
We use props to pass values from a Parent component (here App.jsx) to Child component (here PersonProps component)
*/