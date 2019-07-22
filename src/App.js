//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [home, score] = useState(0)
  // const [homeFg, scoreFg] = useState(0)
  // console.log('homeScore', homeTd + homeFg)
  // const [awayTd, scoreAwayTd] = useState(0)
  const [away, scores] = useState(0)
  let times = [0]

  let time = function timer() {
      setInterval(()=>{
      times[0] += 1
      // let timer = time + 1
      console.log('isTriggered?', times)
      // return times

    }, 1000)
    console.log('isTriggered?000', times)

   
  }
  console.log('isTriggered?', times)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer" onLoad={time()}>{times}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => score(home+7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => score(home+3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => scores(away+7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => scores(away+3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
