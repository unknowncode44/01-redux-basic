import { Action } from '../ngrx-fake/ngrx'


// usar el reducer

// -----------------INCREMENTAR------------------//
export const incrementadorAction: Action = {
    type: 'INCREMENTAR',
}; 



// -----------------DECREMENTAR------------------//
export const decrementadorAction: Action = {
    type: 'DECREMENTAR',
}; 


// -----------------MULTIPLICAR------------------//
export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}; 


// -----------------DIVIDIR------------------//
export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}; 


// -----------------RESET------------------//
export const resetAction: Action = {
    type: 'RESET',
    
}; 




