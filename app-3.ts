import { incrementadorAction, multiplicarAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

 

class Store<T>{

    constructor(private reducer: Reducer<T>, 
        private state: T) {
        }
    
    getState() {
        return this.state
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10);

// el metodo get state obtiene el estado actual del estado de la aplicacion
console.log(store.getState());

// con el metodo dispatch ejecutamos el reducer, el estado se lo pasa el store y nosotros el action
store.dispatch(incrementadorAction); 
store.dispatch(incrementadorAction);

console.log(store.getState());

store.dispatch(multiplicarAction);

console.log(store.getState());