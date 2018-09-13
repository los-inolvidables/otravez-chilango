import React from 'react';

class AddPost extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     description:"",
     description2:""
   }
   this.add = this.add.bind(this);
   this.updateDescription = this.updateDescription.bind(this);
   this.updateDescription2 = this.updateDescription2.bind(this);
    }
 updateDescription(e){
   this.setState({
     description: e.target.value
   })
 }
 updateDescription2(e){
   this.setState({
     description2: e.target.value
   })
 }

 add(){
   this.props.addPost(this.state.description, this.state.description2);
   this.setState({
     description:"",
     description2:""
   })
 }

 render () {
   return(
       <div>
       <p className ="textbox">Event's Name:</p>
        <input className="box1" onChange={this.updateDescription} value={this.state.description}></input>
         <br />
         <br />
       <p className ="textbox">Event's Description:</p>
       <input className="box2" onChange={this.updateDescription2} value={this.state.description2}></input>
      <button className="button2" onClick={this.add}>submit</button>
     </div>
   );
 }
}

export default AddPost;
