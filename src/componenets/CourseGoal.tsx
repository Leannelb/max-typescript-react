// first way to define this is to destructure the props as they come in. 
// Then also define the types of our props in line.
// This can get messy though when we do it in line when we have many props

import { type ReactNode } from "react";

/*
//uncomment star above to see example /*

export default function CourseGoal2({ title, description }: {
    title: string;
    description: string;
}) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button>Delete</button>
        </article>
    )
}
*/

// Instead what wse can do to make this read better is to either define them as types or an interface
// interface is a little more extensable(more likely to be used with multiple devleopers/work)
// defining as type is fine for smaller, personal projects.
type CourseGoalProps2 = {
    title: string;
    description: string;
}

interface CourseGoalProps {
    title: string;
    description: string;
    children: ReactNode;
}
export default function CourseGoal({ title, description, children }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button>Delete</button>
        </article>
    )
}