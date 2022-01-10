const Counter =()=>{
    state = {
        counter:0
    }
    increment =()=>{
        this.setSate({counter:this.state.counter +1})
        
    }
    decrement =()=>{
        this.setSate({counter:this.state.counter -1})
        
    }
    return(
<div>
    counter : {this.state.counter}
    <br/>
    <button onClick={this.increment}>+</button>
    <button onClick={this.decrement}>-</button>

</div>
    )
}
export default Counter;