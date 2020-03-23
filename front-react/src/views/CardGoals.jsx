import React from "react";
import Grid from "@material-ui/core/Grid";
import Goal from "components/Goal/index.jsx";

function CardGoals(props) {

  return (
    <Grid item xs={12}>
      {
        <div>
          {props.GoalsInList}
          <Goal
            mode="new"
            key={props.state.goals.length + 1}
            id={props.state.goals.length + 1}
            date={`1-${'JAN'}-${new Date().getFullYear() + 1}`}
            setGoal={props.setGoal}
          />
        </div>
      }
    </Grid>
  );
}

export default CardGoals;
