import Comment from "./comment"

const Comments = (props)=>{
console.log(props)
    return(
        <div className=" bg-darkRed">
            {props.comments.map((e,i)=>{
                return(
                    <Comment comment= {e} key ={i} fetchComments ={props.fetchComments}/>
                )
            })}
        </div>
    )
}
export default Comments;