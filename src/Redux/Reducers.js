import {COLOR, MODE,} from "./Types";


const state={
    color:'#ec1839',
    mode:false
}



const Reducers=(initialState=state,action)=>{
    switch (action.type){
        case COLOR:
            return{
                ...state,
                color: action.data
            }
        case MODE:
            return {
                ...state,
                mode: action.data
            }


    }
    return state
}

export default Reducers