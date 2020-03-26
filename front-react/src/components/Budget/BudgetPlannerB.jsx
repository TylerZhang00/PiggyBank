import React from "react";
import CardBudget from "components/Card/CardBudget.jsx";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { budgetCalc } from "helpers/budget";
import CustomButton from "../CustomButton/CustomButton";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 60,
    },
  },
  tableHead: {
    fontSize: '12pt',
  },
  tableCell: {
    fontSize: '10pt',
  },
}));

export default function BudgetPlannerB(props) {
  const classes = useStyles();
  const fieldSize = function(size) {
    if (size >= 400) {
      return 100;
    } else {
      return 70;
    }
  };

  return (
    <CardBudget
      title="Plan Your Monthly Budget"
      size={props.size}
      dispatch={props.dispatch}
      dispatchType="PLANNER"
      dispatchInfo={props.dispatchInfo}
      content={
        <div>
          {props.info.planner ?
          <div>
            <p>This is where you can plan your budget. Please insert your initial capital, expected monthly income, and expected monthly expenses. The graphs on this page will be calculated by values on this card.</p>
            <p>Clicking Save button after inserting values in this Budget Planner will allow PiggyBank to remember current state of inputs. When no previous budget info is available, the Budget Planner will fill its expenses value equal to that of given monthly expenses, from Expenses tab.</p>
            <p>Press ? icon to go back to Budget Planner.</p>
          </div> :
          <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHead}>Assets</TableCell>
                    <TableCell className={classes.tableHead} align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={1}>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Initial Capital'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value = {props ? props.budget.base : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "BASE", amount: e.target.value})
                        }}
                      />
                      }
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Monthly Income'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.income : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "INCOME", amount: e.target.value})
                        }}
                      />
                      }
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableHead}>Budgeted Expenses</TableCell>
                    <TableCell className={classes.tableHead} align="right"></TableCell>
                  </TableRow>
                  <TableRow key={2}>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Housing'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_hous : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_HOUS", amount: e.target.value})
                        }}
                      />
                      }
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Transportation'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_tran : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_TRAN", amount: e.target.value})
                        }}
                      />
                      }
                      </TableCell>
                  </TableRow>
                    <TableRow key={3}>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Food'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_food : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_FOOD", amount: e.target.value})
                        }}
                      />
                      }
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Util/Phone/Internet'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_util : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_UTIL", amount: e.target.value})
                        }}
                      />
                      }
                      </TableCell>
                  </TableRow>
                  <TableRow key={4}>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Entertainment'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_entr : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_ENTR", amount: e.target.value})
                        }}
                      />
                      }
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Medical/Health'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_medi : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_MEDI", amount: e.target.value})
                        }}
                      />
                      }
                      </TableCell>
                  </TableRow>
                  <TableRow key={5}>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Debt'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_debt : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_DEBT", amount: e.target.value})
                        }}
                      />
                      }
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row" className={classes.tableCell}>
                      {'Misc'}
                    </TableCell>
                    <TableCell align="right">
                      {
                        <TextField
                        type="number"
                        inputProps={{ min: "0", max: "9999999999", step: "100" }}
                        style = {{width: fieldSize(props.size)}}
                        value={props ? props.budget.c_misc : 0}
                        onInput={(e)=>{ 
                          e.target.value = parseInt(Math.max(0, parseInt(e.target.value)).toString().slice(0,10))
                          props.updateBudgetLocal({ type: "C_MISC", amount: e.target.value})
                        }}
                      />
                      }
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableHead}>Surplus (Deficit)</TableCell>
                    <TableCell className={classes.tableHead} align="right">{budgetCalc(props.budget)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div>
              <div className="budgetPlannerError">
                {props.error}
              </div>
              <div className="budgetPlannerButtons">
                <CustomButton
                  className="button"
                  bsStyle="success"
                  onClick={() => props.validate()}
                >Save</CustomButton>
              </div>
            </div>
          </div>
          }
        </div>
      }
    />
  );
}