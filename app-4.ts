import { createStore, Store } from 'redux'
import { incrementadorAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer'

const store: Store = createStore(contadorReducer);

// nos subscribimos a los cambios del state, usando la funcion subscribe del store del package redux
store.subscribe(() => {
    console.log('Subs:', store.getState());
});

// podemos usar la funcion dispatch para ejecutar acciones, y asi modificar el state, como estamos
// suscritos a los cambios, veremos los mismos por consola, cada vez que ejecutemos uno de ellos.

store.dispatch(incrementadorAction);