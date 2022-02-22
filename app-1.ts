
// accion
interface Action {
    type: string;
    payload?: any;
}

// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// }; 

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
        
        default: return state;
    }

};

// usar el reducer

// -----------------INCREMENTAR------------------//
const incrementadorAction: Action = {
    type: 'INCREMENTAR',
}; 
console.log(reducer(10, incrementadorAction)); // = 11


// -----------------DECREMENTAR------------------//
const decrementadorAction: Action = {
    type: 'DECREMENTAR',
}; 
console.log(reducer(10, decrementadorAction)); // = 9

// -----------------MULTIPLICAR------------------//
const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}; 
console.log(reducer(10, multiplicarAction)); // = 20

// -----------------DIVIDIR------------------//
const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}; 
console.log(reducer(10, dividirAction)); // = 5

