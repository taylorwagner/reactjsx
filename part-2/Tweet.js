const Tweet = (props) => {
    return (
        <div>
            <h1>Username: {props.username}</h1>
            <ul>
                <li>Name: {props.name}</li>
                <li>Date: {props.date}</li>
                <li>Message: {props.message}</li>
            </ul>
        </div>
    );
}