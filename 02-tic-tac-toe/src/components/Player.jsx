import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? 
                <span className="player-name">{playerName}</span>
                : <input type="text" value={playerName} onChange={handleNameChange}/>}
                <span className="player-symbol">{symbol}
                </span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    
    )
}