import React, {useState} from "react";

const course = {
    name: "Mountain Brook Club",
    tees: [
        {name: "Blue", holes: [
            {number: 1, yardage: 414, handicap: 11, par: 4},
            {number: 2, yardage: 432, handicap: 3, par: 4},
            {number: 3, yardage: 401, handicap: 9, par:4},
            {number: 4, yardage: 174, handicap: 13, par:3},
            {number: 5, yardage: 617, handicap: 7, par:5},
            {number: 6, yardage: 357, handicap: 5, par:4},
            {number: 7, yardage: 162, handicap: 15, par:3},
            {number: 8, yardage: 462, handicap: 1, par:4},
            {number: 9, yardage: 516, handicap: 17, par:5},
            {number: 10, yardage: 435, handicap: 4, par:4},
            {number: 11, yardage: 500, handicap: 10, par:5},
            {number: 12, yardage: 247, handicap: 16, par:4},
            {number: 13, yardage: 458, handicap: 2, par:4},
            {number: 14, yardage: 430, handicap: 8, par:4},
            {number: 15, yardage: 142, handicap: 18, par:3},
            {number: 16, yardage: 422, handicap: 6, par:4},
            {number: 17, yardage: 210, handicap: 12, par:3},
            {number: 18, yardage: 440, handicap: 14, par:4}
        ]}
    ]
}

const players = [
    {
        id: 1,
        name: "Robby White",
        handicap: 2.7,
        team: 1
    },
    {
        id: 2,
        name: "Hawkins Tatum",
        handicap: 0.4,
        team: 2
    },
    {   id: 3,
        name: "Chapman Brown",
        handicap: 10.1,
        team: 1
    },
    {   id: 4,
        name: "Tom Miles",
        handicap: 5.0,
        team: 2
    }
]

const HoleHeader = (props) => (
    <div style={{display:"flex", flexDirection: "column", flexGrow: "1"}}>
        <div style={{fontWeight:"bold"}}>{props.hole.number}</div>
        <div>{props.hole.par}</div>
        <div>{props.hole.yardage}</div>
        <div>{props.hole.handicap}</div>
    </div>
);

const HoleScore = (props) => {
    const [score, setScore] = useState("");
    const handleScoreChange = (event) => {
        const newScore = event.target.value;
        setScore(newScore);
        console.log(`score changed: ${newScore}`);
    };
    return (
        <div style={{flexGrow: 1}}>
            <input style={{width: "100%"}} value={score} onChange={handleScoreChange}/>
            <div key={props.hole.number} style={{flexGrow: 1, height: "16px"}}>{props.player.handicap > props.hole.handicap ? '*' : ''}</div>
        </div>)
};

const Header = (props) => (
    <div style={{display:"flex", flexDirection: "row"}}>
        <div style={{width: "180px"}}>
            <div style={{fontWeight:"bold"}}>Hole</div>
            <div>Par</div>
            <div>Yardage</div>
            <div>Handicap</div>
        </div>
        {props.holes.map(hole => <HoleHeader hole={hole} key={hole.number}/>)}
    </div>
);

const PlayerHoles = (props) => (
    props.holes.map(hole => <HoleScore player={props.player} hole={hole} key={hole.number}/>)
);


const Player = (props) => (
    <div style={{display:"flex", flexDirection: "row"}}>
        <div style={{width: "180px"}}>{`${props.player.name} (${props.player.handicap})`}</div>
        <div style={{display:"flex", flexDirection: "row", padding: "4px 8px"}}>
            <PlayerHoles holes={props.holes} player={props.player} />
        </div>
    </div>
);

const Players = (props) => (
    props.players.map(player => <Player key={player.id} player={player} holes={props.holes}/>)
);

const NewScore = () => {
    const tee = course.tees[0]
    const holes = tee.holes;
    return (
        <div >
            <h2>New Game</h2>
            <h3>{`${tee.name} Tees`}</h3>

            <Header holes={holes}/>

            <Players holes={holes} players={players}/>
        </div>
    )
};

export default NewScore;
