import React, { useEffect } from "react";
import Card from "components/Card/Card.jsx";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 80,
    },
  },
  tableHead: {
    fontSize: '12pt',
  },
  tableCell: {
    fontSize: '10pt',
  },
}));

export default function BudgetGoals(props) {
  const classes = useStyles();
  // console.log('this is props.goals in budgetGoals: ', props.goals)

  const GoalsInList = props.goals.map(goal => {
    return (
      // <Goal
      //   key={goal.id}
      //   id={goal.id}
      //   name={goal.name}
      //   type={goal.type}
      //   amount={goal.amount}
      //   description={goal.description}
      //   date={goal.date}
      // />
      <TableRow key={goal.id}>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          <Checkbox
            onChange={() => props.selectGoal({ type: "SELECT", id: goal.id, goal })}
          />
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          {goal.name}
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          {goal.type}
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          ${goal.amount}
        </TableCell>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          {goal.date}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Card
      title="Goals"
      category="choose goals to display on graph"
      ctTableFullWidth
      ctTableResponsive
      content={
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead}></TableCell>
                  <TableCell className={classes.tableHead}>Title</TableCell>
                  <TableCell className={classes.tableHead}>Type</TableCell>
                  <TableCell className={classes.tableHead}>Amount</TableCell>
                  <TableCell className={classes.tableHead}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {GoalsInList}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    />
  );
}