import { PropsWithChildren } from "react";

// PropsWithChildren tells us we have children as props, and we also have title seperately so we add that in too.
type CourseGoalProps = PropsWithChildren<{ title: string }>;

// then we can extract out the props ready for use. i.e. title and children
const CourseGoal = ({ title, children }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>Delete</button>
        </article>
    )
}

export default CourseGoal;
