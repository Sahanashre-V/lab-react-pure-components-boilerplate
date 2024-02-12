import { Component } from "react";

class Regular extends Component{
    constructor(){
    super()
    this.state = {
        count: 0,
        condition: false
    }
    }

     handleCounter = () => {
        if(this.state.condition == true)
this.setState({...this.state,count:this.state.count + 1})

    }

     handleToggle = () => {
        this.setState({...this.state,condition : !this.state.condition})
    }

    render(){
        console.log("Simple Component")
        return(
            <div>
                <h1>Simple Component</h1>
<p>{this.state.count}</p>
<button onClick={this.handleToggle}>
    Set Toggle
</button>
<button onClick={this.handleCounter}>
    Counter
</button>

            </div>
        )
    }

}

export default Regular