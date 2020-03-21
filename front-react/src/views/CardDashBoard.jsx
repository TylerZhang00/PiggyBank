import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import BriefPortfolio from "./BriefPortfolio";
import DashPortfolio from "./DashPortfolio";
import DashGoals from "./DashGoals";
import DashBudget from "./DashBudget";
import DashExpenses from "./DashExpenses";

function CardDashBoard(props) {
  console.log("props", props.state.users[0].riskscore);
  return (
    <>
      <Grid item xs={6}>
        <Card
          style={{
            maxWidth: 500,
            minHeight: 500,
            opacity: 0.8,
            margin: "auto",
            marginBottom: 20,
            marginTop: 20,
            padding: 20,
            backgroundColor: "white"
          }}
        >
          <DashGoals></DashGoals>
        </Card>

        <Card
          style={{
            maxWidth: 500,
            minHeight: 500,
            opacity: 0.8,
            margin: "auto",
            marginBottom: 20,
            marginTop: 20,
            padding: 20,
            backgroundColor: "white"
          }}
        >
          <DashBudget></DashBudget>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card
          style={{
            maxWidth: 500,
            minHeight: 500,
            opacity: 0.8,
            margin: "auto",
            marginBottom: 20,
            marginTop: 20,
            padding: 20,
            backgroundColor: "white"
          }}
        >
          <DashExpenses></DashExpenses>
        </Card>
        <Card
          style={{
            maxWidth: 500,
            minHeight: 500,
            opacity: 0.8,
            margin: "auto",
            marginBottom: 20,
            marginTop: 20,
            padding: 20,
            backgroundColor: "white"
          }}
        >
          {props.state.users[0].riskscore === 0 ? (
            <DashPortfolio></DashPortfolio>
          ) : (
            <BriefPortfolio state={props.state}></BriefPortfolio>
          )}
        </Card>
      </Grid>
    </>
  );
}

export default CardDashBoard;