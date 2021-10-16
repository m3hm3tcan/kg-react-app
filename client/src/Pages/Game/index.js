import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import SlotMachine from '../../Components/SlotMachine'
import { doPlay, isAlreadyLogged, getCreditById } from '../../Services/DataServices'
import Header from '../../Components/Header'

const Game = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [gameResult, setGameResult] = useState({
        currentPrize:0,
        wonPrize:0,
    })
    const [spinResult, setSpinResult] = useState(['ready', 'ready', 'ready']);

    useEffect(()=>{
        const user = isAlreadyLogged()
        if (user) {
            setUser(user)
            getCreditById(user._id).then((data) => {
                setGameResult({
                    currentPrize: data.totalCoins,
                    wonPrize: 0
                })
            })
        } else {
            localStorage.removeItem('token')
            history.replace('/')
        }
    },[])

    const handlePlay = () => {
        setIsLoading(true);
        doPlay().then((data) => {
            setGameResult({
                currentPrize: data.currentPrize,
                wonPrize: data.wonPrize
            })
            let spin = data.prizeText.split('-')
            setSpinResult(spin);
            setIsLoading(false);
        });
    }

    return (
        <div>
            <Header user={user ? user.name : '' } />
            <SlotMachine credit={gameResult} firutis={spinResult} isLoading={isLoading} handlePlay={handlePlay} />
        </div>
    )
}

export default Game