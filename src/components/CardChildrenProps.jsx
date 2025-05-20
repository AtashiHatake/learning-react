const CardChildrenProps = ({children}) => {
  return (
    <div className="w-100 h-80 border-2 border-blue-900 flex flex-col justify-center items-center ">{children}</div>
  )
}

export default CardChildrenProps;

/*
Now here we add HTML to the App.jsx and we use props to target those children where "children" is the keyword (props.children) 
*/