/*!
=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================
* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useEffect, useState, useContext } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import MonthPicker from "components/MonthPicker/MonthPicker.jsx";

import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import ExpenseUpdater1 from "components/ExpenseUpdater/ExpenseUpdater1.jsx";

import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

import { reduceEachLeadingCommentRange } from "typescript";
import appDataContext from "../hooks/reducers/useContext";
import { MDBDataTable } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Spring, Transition, animated } from "react-spring/renderprops";
import axios from "axios";
import reducerz, { SET_DATA } from "../hooks/reducers/app";



function Dashboard(props) {
  const { state, dispatch } = useContext(appDataContext)

  const [addExpense, setAddExpense] = useState(false);
  const [month, setMonth] = useState(1);


  function toggleState() {
    setAddExpense(!addExpense);
  }

  function createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  function chgMonth(date){
    console.log('changing month@@@', date.month)
    setMonth(date.month)

    console.log(date.month)
  }

  function nameList(data) {
    const finalOP = [];
    data.forEach(element => {
      finalOP.push(element.type);
    });
    return finalOP;
  }

  function createPie(expensesTotal) {
    const finalOP = { labels: [], series: [] };
    let grandTotal = 0;
    expensesTotal.forEach(element => {
      grandTotal += parseInt(element.sum);
    });
    expensesTotal.forEach(element => {
      finalOP.labels.push(
        ((parseInt(element.sum) / grandTotal) * 100).toFixed(0) + "%"
      );
      finalOP.series.push(element.sum);
    });

    return finalOP;
  }

  function refreshExpenses() {
    Promise.all([
      axios.get("http://localhost:8001/api/expenses"),
      axios.get("http://localhost:8001/api/expensestotal")
    ])
      .then(response => {
        dispatch({
          type: SET_DATA,
          expenses: response[0].data,
          totalExpenses: response[1].data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (

    <div className="content">
      <p>dashboard</p>

      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
              ctTableFullWidth
              ctTableResponsive
              content={
                <div>
                  <MonthPicker chgMonth={chgMonth} />
                  <MDBDataTable
                    scrollY
                    maxHeight="300px"
                    striped
                    bordered
                    small
                    data={{
                      columns: [
                        {
                          label: "Name",
                          field: "name",
                          sort: "asc",
                          width: 150
                        },
                        {
                          label: "Type",
                          field: "type",
                          sort: "asc",
                          width: 150
                        },
                        {
                          label: "Amount",
                          field: "amount",
                          sort: "asc",
                          width: 150
                        },
                        {
                          label: "Date",
                          field: "date",
                          sort: "asc",
                          width: 150
                        }
                      ],
                      rows: state.expenses
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => toggleState()}
                  >
                    Primary
                  </Button>

                  {addExpense === true && (
                    <ExpenseUpdater1 onExpenseSubmit={refreshExpenses} />
                  )}

                  {/* <Transition
                        native
                        items={{addExpense}}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        leave={{ opacity: 0 }}
                      >
                        {show => show && (props => (
                          <animated.div style={props}>
                              <ExpenseUpdater />
                          </animated.div>
                        ))}
                      </Transition> */}
                </div>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <Card
              statsIcon="fa fa-clock-o"
              title="Expenses"
              category="Last Campaign Performance"
              stats="Campaign sent 2 days ago"
              content={
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph
                    data={createPie(state.totalExpenses)}
                    type="Pie"
                  />
                </div>
              }
              legend={
                <div className="legend">
                  {createLegend({
                    names: nameList(state.totalExpenses),
                    types: ["info", "danger", "warning", "success"]
                  })}
                </div>
              }
            />
          </Col>
          <Col lg={7}>
            <Card
              statsIcon="fa fa-clock-o"
              title="Email Statistics"
              category="Last Campaign Performance"
              stats="Campaign sent 2 days ago"
              content={
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          895
                        ],
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          695
                        ]
                      ]
                    }}
                    type="Bar"
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Dashboard;
