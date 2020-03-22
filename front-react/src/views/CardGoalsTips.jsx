import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

function CardGoalsTips(props) {
  const [localState, setLocalState] = useState({
    outputTips: 0
  });
  console.log("localstate", localState);
  return (
    <Grid item xs={12}>
      <div className="goals-container">
        <Card
          style={{
            maxWidth: 500,
            minHeight: 500,
            opacity: 0.8,
            margin: "auto",
            marginBottom: 20,
            marginTop: 20,
            padding: 20,
            backgroundColor: "transparent"
          }}
        >
          {localState.outputTips === 1 ? (
            <>
              <h2> How To Save Money - Top Saving Tips </h2>{" "}
              <h4>By Lisa MacColl</h4> <h5>18 min Read</h5>{" "}
              <h5>
                You're wondering how to save money. It can be tough, but we have
                all the tips and tactics you need to get started saving money...
              </h5>{" "}
              <a
                href="https://www.wealthsimple.com/en-ca/learn/how-to-save-money"
                class="btn btn-primary"
                style={{ color: "black", borderColor: "#c4d2c7" }}
              >
                Go to Article
              </a>
            </>
          ) : null}

          {localState.outputTips === 2 ? (
            <>
              <h2> How to Save for a House </h2> <h4>By Luisa Rollenhagen</h4>{" "}
              <h5>10 min Read</h5>{" "}
              <h5>
                Advice, tips and tricks you need to save for your dream home.
                Find out how to save for a downpayment and a house itself...
              </h5>{" "}
              <a
                href="https://www.wealthsimple.com/en-ca/learn/how-to-save-for-a-house"
                class="btn btn-primary"
                style={{ color: "black", borderColor: "#c4d2c7" }}
              >
                Go to Article
              </a>
            </>
          ) : null}
          {localState.outputTips === 3 ? (
            <>
              <h2> The Ultimate Guide to Money Management </h2>{" "}
              <h4>By Katherine Gustafson</h4> <h5>13 min Read</h5>{" "}
              <h5>
                Managing your money is deceptively difficult. Even those with a
                lot of it can easily put themselves in a financial hole. And
                those who...
              </h5>{" "}
              <a
                href="https://www.wealthsimple.com/en-ca/learn/how-to-manage-money"
                class="btn btn-primary"
                style={{ color: "black", borderColor: "#c4d2c7" }}
              >
                Go to Article
              </a>
            </>
          ) : null}
          {localState.outputTips === 4 ? (
            <>
              <h2> How To Retire Early </h2> <h4>By Michael Allen, CIM</h4>{" "}
              <h5>8 min Read</h5>{" "}
              <h5>
                Done with being a working stiff and ready to let loose as a spry
                young retiree? We've got your guide to retiring early. Really
                early...
              </h5>{" "}
              <a
                href="https://www.wealthsimple.com/en-ca/learn/how-to-retire-early"
                class="btn btn-primary"
                style={{ color: "black", borderColor: "#c4d2c7" }}
              >
                Go to Article
              </a>
            </>
          ) : null}
        </Card>
        <div className="goals-buttons-container">
          <button
            onClick={() => setLocalState({ outputTips: 1 })}
            className="goals-button"
          >
            How To Save Money - Top Saving Tips
          </button>
          <button
            onClick={() => setLocalState({ outputTips: 2 })}
            className="goals-button"
          >
            How to Save for a House
          </button>
          <button
            onClick={() => setLocalState({ outputTips: 3 })}
            className="goals-button"
          >
            The Ultimate Guide to Money Management
          </button>
          <button
            onClick={() => setLocalState({ outputTips: 4 })}
            className="goals-button"
          >
            How to Retire Early
          </button>
        </div>
      </div>
    </Grid>
  );
}

export default CardGoalsTips;