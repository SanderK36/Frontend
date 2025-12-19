import { useState } from "react"
import Upgrade from "./Upgrade"
import upgradeData from "./upgradesData"
import "../styles/Clicker.css"

export default function Clicker() {
    const [score, setScore] = useState(0)
    const [clickPower , setClickPower] = useState(1)

    function handleClick() {
        setScore(score + clickPower)
    }

    function buyUpgrade(cost: number, power: number) {
        if (score >= cost) {
            setScore(score - cost)
            setClickPower(clickPower + power)
        }
    }

    return (
        <div className="game">
            <h1>Clicker Game!</h1>

            <p>Poeng: {score}</p>
            <p>Click Power: {clickPower}</p>

            <button className="click-btn" onClick={handleClick}>Klikk meg!</button>

            <h2>Oppgraderinger!</h2>
            {upgradeData.map((u:any) => (
                <Upgrade
                key={u.id}
                name={u.name}
                cost={u.cost}
                value={u.value}
                canBuy={score >= u.cost}
                onBuy={() => buyUpgrade(u.cost, u.value)}
                />
            ))}
        </div>
    )
}