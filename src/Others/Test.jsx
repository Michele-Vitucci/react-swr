const { useEffect } = require("react");
const { useState } = require("react");

function UncontrolledLogin() {
    const Onlogin=(event)=>{
        event.preventDefault()
        const form=(event.target)
        console.log({
            name: form.username.value,
            password: form.password.value,
            checkbox: form.rememeber.checked
        });
        
    }
    
    const loginWithFormData=(event)=>{
        event.preventDefault()

        const dataform= new dataform(event.target.form)
        console.log({
            name: username.get("username"),
            password:password.get("password"),
            checkbox: rememeber.get("rememeber")
        });
        

    }

    return(
        <form onSubmit={Onlogin}>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="checkbox"  name="checkbox" />

            <button onClick={Onlogin}>login</button>
            <button onClick={loginWithFormData}>form data </button>
        </form>
    )
}

//users

function Users(){
    const [users,setUsers]= useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(null);

    useEffect(()=>{
    const fetchData= async()=>{
    setLoading(true);
    try {
       const response =await fetch("https://dummyjson.com/users").then((r) =>
       r.json()
       ); 
       setUsers(response.users);
    } catch (error) {

    setError(error.message);
        
    }
    setLoading(false);
    };
    fetchData()
    },[])

if (loading) {

return <div>caricamento utenti....</div>
    
}

if (error){
return <div>errore durante la lettura degli users</div>;

}

return <div>className="mt-20 max-w-5wl mx-auto grid-cols-3 gap-4"</div>
{users.map(user => (<user user={user} key={user.id}/>))}
};

//user

function GithubUser({username}) {
    const [userData,setUserData]= useState(null);
    
    useEffect(()=>{
    fetch('www /${username}')
    .then((response)=>response.json())
    .then((data)=>setUserData(data));

    },[username]);

    if(!userData)return <p>caricamento...</p>

    return(
        <div>
            <h3>{userData.name||"nome non disponibile"}</h3>
            <p>{userData.login}</p>
            <img src={userData.avatar_url} alt="avatar" />
        </div>
    )
    
}

function GithubUsers() {
    const[username,setUsername]=useState("")
    const [users,setUsers]=useState([]);

    return(
        <div>
            <input value={username} onChange={(e)=>setUsername} />
            <button onClick={()=> setUsers([...users,username])}>cerca</button>
            {users.map((user,i)=>(
                <GithubUser key={i}  username={user}/>
            ))}
        </div>
    )
    
}



