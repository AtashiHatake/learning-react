import { UserContext } from "./UserContext";
import { useContext, useState } from "react";



const UpdateUser = () => {
  const {updatedUser} = useContext(UserContext);
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newName.trim()) {
        updatedUser(newName);
        setNewName('');
    }
  }

  return (
    <div>
        <h2>Update user: </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)} placeholder="new name"/>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser