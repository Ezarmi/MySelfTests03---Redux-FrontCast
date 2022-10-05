const inistialState = {
    counter:0
}

const reducer = (state=inistialState, action)=>{
    if (action.type==='INCREMENT'){
        return{
            counter: state.counter +1
        }
    }
    return state
}

export default reducer