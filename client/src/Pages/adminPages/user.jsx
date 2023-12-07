import axios from "axios"

const User = (props)=>{

    const deleteHandler = ()=>{
        axios.delete(`http://localhost:3000/api/admin/users/${props.user.idusers}`).then(()=>{
            props.fetchUsers()
        })
    }
    return(
        <div>
            <p className=" inline-block"> name : {props.user.username}  adress : {props.user.adress} </p>
            <button className=" bg-darkRed ml-5 " onClick={deleteHandler}>delete user</button>
        </div>
    )
}
export default User;