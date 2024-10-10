import { useCallback, useEffect } from "react";
import { useDispatchContext } from "../context/breakfastCtx";
import { useFilterContext } from "../context/filterCtx";
import { useBreakfastContext } from "../context/breakfastCtx";
import { actions } from "../context/brakfastReducer";
import { FetchMealByFirstLetter, SearchMealByName } from "../services/mealtService";

const useBreakfast = () => {
  const dispatch = useDispatchContext();
  const {filters} = useFilterContext();

  const fetchBreakfast = useCallback(async () => {
    dispatch({ type: actions.SET_LOADING, payload: true });
    var search_string = filters.search;
    var meals=[];

    if (search_string) {
        meals = await SearchMealByName(search_string);
    } else{
        meals = await FetchMealByFirstLetter();
    }

    if (meals) {
      dispatch({ type: actions.SET_BREAKFAST_LIST, payload: meals });
      dispatch({ type: actions.SET_LOADING, payload: false });
    }
    else {
      dispatch({ type: actions.SET_BREAKFAST_LIST, payload: meals });
      dispatch({ type: actions.SET_ERROR, payload: 'No se encontraron comidas' });
      dispatch({ type: actions.SET_LOADING, payload: false });
    }
  },[dispatch,filters]);

  useEffect(() => {
    fetchBreakfast();
  }, [fetchBreakfast]);
};

export default useBreakfast;
