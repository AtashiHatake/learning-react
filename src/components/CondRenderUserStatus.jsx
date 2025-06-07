const CondRenderUserStatus = () => {
  let isAdmin = false;
  let loggedIn = true;

  function typeOfLogin(){
    if(isAdmin == true && loggedIn == true) {
        return <h4>Welcome admin</h4> 
    }
    else if (isAdmin == false && loggedIn == true){
        return <h4>Welcome user</h4>
    }
    else {
        return <h4>Either log in as user or admin</h4>
    }
  }

  return <div>
    <h4>Type of login: {typeOfLogin()}</h4>
  </div>
}

export default CondRenderUserStatus;