import {COLOR, MODE} from "./Types";


export  const updateColor=(data)=>{
    return{
        type:COLOR,
        data
    }
}

export  const updateMode=(data)=>{
    return{
        type:MODE,
        data
    }
}