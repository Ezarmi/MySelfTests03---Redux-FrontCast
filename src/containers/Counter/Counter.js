import React from "react";
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends React.Component{
    state={
        counter:0
    }

    counterChangedHandler = (action, value)=>{
        switch(action){
            case 'inc':
                this.setState((prevState)=>{
                    return {counter: prevState.counter+1}
                })
                break
            case 'dec':
                this.setState((prevState)=>{
                    return {counter: prevState.counter-1}
                })
                break
            case 'add':
                this.setState((prevState)=>{
                    return {counter: prevState.counter+value}
                })
                break
            case 'sub':
                this.setState((prevState)=>{
                    return {counter: prevState.counter - value}
                })
                break
        }
    }

    render(){
        return(
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl
                    label="افزایش"
                    clicked = {this.props.onIncrement}
                />
                <CounterControl
                    label="کاهش"
                    clicked = {()=>this.counterChangedHandler('dec')}
                />
                <CounterControl
                    label="افزودن ۲"
                    clicked = {()=>this.counterChangedHandler('add',2)}
                />
                <CounterControl
                    label="کاهش ۲"
                    clicked = {()=>this.counterChangedHandler('sub',2)}
                />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        ctr: state.counter,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrement: ()=> dispatch({type: 'INCREMENT'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)