import {createContext, useContext, useReducer} from 'react';
import { initialState, breakfastReducer } from './brakfastReducer';

const BreakfastContext = createContext(null);
const BreakfastDispatchContext = createContext(null);

export function useBreakfastContext(){
    const context = useContext(BreakfastContext);
    if(!context){
        throw new Error('useBreakfastContext must be used within a BreakfastProvider');
    }
    return context;
}

export function useDispatchContext(){
    const context = useContext(BreakfastDispatchContext);
    if(!context){
        throw new Error('useDispatchContext must be used within a BreakfastProvider');
    }
    return context;
}

export function BreakfastProvider({children}){
    const [state, dispatch] = useReducer(breakfastReducer, initialState);
    return (
        <BreakfastContext.Provider value={state}>
            <BreakfastDispatchContext.Provider value={dispatch}>
                {children}
            </BreakfastDispatchContext.Provider>
        </BreakfastContext.Provider>
    )
}