import User from "./user";

const Users = (props)=>{
console.log(props)
    return(
        <div>
            {props.users.map((e,i)=>{
                return(
                    <User user= {e} key ={i} fetchUsers ={props.fetchUsers}/>
                )
            })}
        </div>
    )
}
export default Users;