import {createContext, useContext, useState} from 'react';

const FilterContext=createContext(null);

export const useFilterContext=()=>{
    const context=useContext(FilterContext);
    if(!context){
        throw new Error('useFilterContext must be used within a FilterProvider');
    }
    return context;
}

export const FilterProvider=({children})=>{
    const [filters, setFilters]=useState({
        search:'',
    });
    return (
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    )
}