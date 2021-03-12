import React from "react"
import "../styles/gameplaystyles.css"

function GamePlay(){
  return(
    <section className="main-container">
      <div className="gameplay-grid-container">
      
        <div className="quest-info">
          <h1 className="ques-name">Question 5 of 10 - LongName’s turn</h1>
        
        <button className="game-control-btn restart-btn restart-btn-img" type="button">Restart
        </button>
        <button className="game-control-btn quit-btn quit-btn-img">Quit
        </button>
        </div>

    
        <div className="quest-box">
          <h2>Pick the correct word to complete the sentence.</h2>
          <h3>Her hair is long and _____.</h3>
        </div>
    
        <div className="answers">
          <div className="answer1">
            <h4>curly</h4>
          </div>

          <div className="answer2">
            <h4>happy</h4>
          </div>

          <div className="answer3">
            <h4>late</h4>
          </div>
        </div>

        <div className="players">
        
          <div className="player player-turn">

            <div className="p-avatar-img">
              <img src="../svgs/monster blue.svg" alt="unicorn avatar" className="player-aviatar"></img>

            </div>
            
            <div className="score">
              5
            </div>
            
            <div className="name">
              AMY
            </div>
            
            <div className="q-total">
              out of 10
            </div>

          </div>

          <div className="player2">
            <div className="score">
              7
            </div>

            <div className="p-avatar-img">
              <img src="../svgs/monster pink.svg" alt="dragon avatar" className="player-aviatar"></img>
            </div>

            <div className="q-total">
              out of 10
            </div>

            <div className="name">
              TONY
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }

export default GamePlay