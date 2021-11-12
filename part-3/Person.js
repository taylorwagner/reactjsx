const Person = (props) => {
    let voteMsg = props.age >= 18 ? "please go vote!" : "you must be 18";
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{props.age}: {voteMsg}</h3>
            <h3>{props.name.slice(0, 6)}</h3>
            <h3>Hobbies:</h3>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}