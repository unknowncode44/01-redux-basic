import { Action } from '../01-redux-basic/ngrx-fake/ngrx'
import { dividirAction, multiplicarAction, incrementadorAction, decrementadorAction, resetAction } from '../01-redux-basic/contador/contador.actions'



function reducer(state = 10, action: Action) {

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

// -----------------INCREMENTAR------------------//
console.log(reducer(10, incrementadorAction)); // = 11


// -----------------DECREMENTAR------------------//
console.log(reducer(10, decrementadorAction)); // = 9


// -----------------MULTIPLICAR------------------//
console.log(reducer(10, multiplicarAction)); // = 20


// -----------------DIVIDIR------------------//
console.log(reducer(10, dividirAction)); // = 5


// -----------------RESET------------------//
console.log(reducer(10, resetAction)); // = 5