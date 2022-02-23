import { Action } from "../ngrx-fake/ngrx";



export function contadorReducer(state = 10, action: Action) {

    switch (action.type){
        case 'INCREMENTAR':
            state++;
            return state;

        case 'DECREMENTAR':
            state--;
            return state;

        case 'MULTIPLICAR':
             return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;
        
        case 'RESET':
            return state = 0;
        
        default: return state;
    }

};