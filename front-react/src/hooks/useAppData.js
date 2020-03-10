import React, { useReducer, useEffect } from "react";
import axios from "axios";
import reducerz, {
  SET_DATA
} from "./reducers/app";

export default function useAppData() {
 
  const [state, dispatch] = useReducer(reducerz, {
    expenses: [{a: 'a'}],
    users: [{a: 'a'}]
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/expenses")
    ]).then(response => {
      dispatch({
        type: SET_DATA,
        expenses: response[0].data
      })
    }).catch(error => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    console.log(state);
  }, state);

  return { state };
}