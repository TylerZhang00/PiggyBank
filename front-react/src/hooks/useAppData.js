import { useReducer, useEffect } from "react";
import axios from "axios";
import reducerz, { SET_DATA } from "./reducers/app";

export default function useAppData() {
  const [state, dispatch] = useReducer(reducerz, {
    expenses: [{ id: 0, name: "", user_id: 0, amount: 0, type: "", date: "" }],
    totalExpenses: [
      { type: "", sum: 0 },
      { type: "", sum: 0 },
      { type: "", sum: 0 }
    ],
    budget: [
      {
        id: 0,
        user_id: 0,
        income: 0,
        c_hous: 0,
        c_tran: 0,
        c_food: 0,
        c_util: 0,
        c_entr: 0,
        c_medi: 0,
        c_debt: 0,
        c_misc: 0
      }
    ],
    goals: [
      {
        id: 0,
        name: "",
        user_id: 1,
        type: "",
        amount: 0,
        description: "",
        date: ""
      }
    ],
    users: [{}],
    date: { month: 1, year: 2020 },
    educationAnswers: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    educationAnsweredYet: { 1: false, 2: false, 3: false, 4: false, 5: false },
    eduProgress: 0
  });

  useEffect(() => {
    const user = localStorage.getItem("id");

    console.log("starting app in useappdata");
    console.log("logged in as", user);

    let datez = `${state.date.month}+${state.date.year}+${user}`;

    Promise.all([
      axios.get(`http://localhost:8001/api/expenses/${datez}`),
      axios.get(`http://localhost:8001/api/expensestotal/${datez}`),
      axios.get("http://localhost:8001/api/budget"),
      axios.get("http://localhost:8001/api/goals"),
      axios.get(`http://localhost:8001/api/users/${user}`)
    ])
      .then(response => {
        console.log("response", response);
        dispatch({
          type: SET_DATA,
          expenses: response[0].data,
          totalExpenses: response[1].data,
          budget: response[2].data,
          goals: response[3].data,
          users: response[4].data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log("state has been updated: ", state);

  return { state, dispatch };
}
