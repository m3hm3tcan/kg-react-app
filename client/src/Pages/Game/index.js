import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import SlotMachine from '../../Components/SlotMachine'
import { doPlay } from '../../Services/DataServices'
import Header from '../../Components/Header'

const Game = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false);
    const [credit, setCredit] = useState(0);
    const [user, setUser] = useState(null);
    const [spinResult, setSpinResult] = useState(['ready', 'ready', 'ready']);

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                history.replace('/')
            } else {
                setUser(user)
                setCredit(user.totalCoins)
                //here add api to collect last credit from DB
            }
        }else{
            localStorage.removeItem('token')
            history.replace('/')
        }
    },[])

    const handlePlay = () => {
        setIsLoading(true);
        doPlay(user.email).then((data) => {
            setCredit(data.currentPrize);
            let spin = data.prizeText.split('-')
            setSpinResult(spin);
            setIsLoading(false);
        });
    }

    return (
        <div>
            <Header user={user ? user.name : '' } />
            <SlotMachine credit={credit} firutis={spinResult} isLoading={isLoading} handlePlay={handlePlay} />
        </div>
    )
}

export default Game