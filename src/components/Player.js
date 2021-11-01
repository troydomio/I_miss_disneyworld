import React from 'react'

const Player = ({name, src}) => {
    return (
        <div className="test">
            <div className="player1">
            <p className="name">{name}</p>
         <img src={src}/>
            </div>
            <div className="hr">
                <span className="play">▶</span>
            <hr className="hr"/>
            </div>
        </div>
    )
}

export default Player
