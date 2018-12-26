import {createStore} from 'redux';

export function counter(state=0,action){
    switch(action.type){
        case 'ADD':
        return state+1;
        case 'SUB':
        return state-1;
        default:
        return 10;
    }
}

export function addNum(){
    return {type:'ADD'}
}
export function removeNum(){
    return {type:'SUB'}
}

export function addNumAsync(){
    return dispatch=>{
        setTimeout(()=>{
           dispatch(addNum());
        },2000)
    }
}

