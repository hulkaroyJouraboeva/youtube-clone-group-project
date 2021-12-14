import React from "react"; 
import "./Comment.css";

class Comment extends React.Component{
    constructor(){
        super();
        this.state={
         commentArr: [],
         comments: [{name:"", comment:""}],
         
        }
    }
   
       handleSubmit=(event)=>{
        event.preventDeault()
        const {comment} = this.state
        this.setState({
            commentArr:[...this.state.commentArr,{comment}]
            //if you're wondering its saying comment extends and I wrote this here cause I hate explaining things but I did drop this in help code a month ago (:
        })
    }
       handleReset = () => {
       this.setState({
         commentArr: [],
       });
     };
      
       handleInput=(event)=>{
           this.setState({
           comment: event.target.value
           })
       }
   
     render(){
       const { comments } = this.state;    
         return(

         <form onSubmit={this.handleSubmit}>
             <section className="commentBox">
             <input 
             onchange={this.handleInput}
             type="text2"
             placeholder= "Add Comment" 
             value ={comments.comment}
             />
            <textarea
            type="text"
            onChange={this.handleInput}
            placeholder="Please Enter A Comment"
            value={comments.comment}
          ></textarea>
          <div className="commentLine">
   
          </div>
             </section>
             <button onClick={this.handleInput}type="submit">Submit</button>
             <button onClick={this.handleRest}type="cancel">Cancel</button>
         </form>
     )
   }
   }

   export default Comment;