const Lists = () => {
  
  const users = [
    {id:1, name: "Alice", age: 25},
    {id:2, name: "Bob", age: 30},
    {id:3, name: "Charlie", age: 22},
  ];
  return (
    <main>
        <h3>Users</h3>
        {users.map((user)=>(
             <div key={user.id}>
             <ul>
                 <li>{user.name}</li>
                 <li>{user.age}</li>
                 <li>{user.id}</li>
             </ul>
         </div>
        ))}
    </main>
  )
}

export default Lists;

// for lists/array we always need to provide a label to the list in order to keep track of the state so we use a KEY and use it in the

/*
 You are using curly braces {}, which means the arrow function is not implicitly returning anything.

Unless you explicitly write return, the JSX is ignored and nothing is rendered.

either use return or just use paranthesis ()
{numbers.map((i)=>(
            <ul key={i}>
            <li>{i}</li>
        </ul>
        ))}
*/