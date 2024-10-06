import {type FormEvent } from "react";

export default function NewGoal() {
    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        // built into the browser
        // to extract the data, assign a 'name' field
        new FormData(event.currentTarget);
    }

    return (<form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" name="goal"> </input>
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text"> </input>
        </p>
        <p>
            <button>Add Goal</button>
        </p>

    </form>)
}