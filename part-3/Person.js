const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{props.age}: {props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
            <h3>{props.name.length}</h3>
            <h3>Hobbies:</h3>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}