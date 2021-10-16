import React from "react";

const SlotMachine = ({ credit, firutis, handlePlay, isLoading }) => {

    const handleClick= () =>{
        handlePlay();
    }
    return (
        <div className="form-container">

            <div className="row">
                <div className="center-text">
                    <h3> You have <span class="credit-text">{credit.currentPrize}</span> credit! </h3>
                    <p>You won <span class="credit-text">{credit.wonPrize}</span> coins</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">

                </div>
                <div className="col-sm-2 game-box">
                    <div class={`firiut-box furiut-shadow ${firutis[0]}`}>{firutis[0]}</div>
                </div>
                <div className="col-sm-2 game-box">
                <div class={`firiut-box furiut-shadow ${firutis[1]}`}>{firutis[1]}</div>
                </div>
                <div className="col-sm-2 game-box">
                <div class={`firiut-box furiut-shadow ${firutis[2]}`}>{firutis[2]}</div>
                </div>
                <div className="col-sm-3">

                </div>
            </div>
            <div className="row">
                <div className="center-text">
                    <button type="button" class={`btn btn-danger ${isLoading ? "disabled" : ""}`} onClick={handleClick}>I am feeling Lucky!</button>
                </div>
            </div>
        </div>
    )
}

export default SlotMachine
