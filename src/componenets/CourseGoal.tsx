import { PropsWithChildren } from "react";

// PropsWithChildren tells us we have children as props, and we also have title seperately so we add that in too.
type CourseGoalProps = PropsWithChildren<
    {
        title: string,
        onDelete: ((id: number) => void),
        key: number
    }
>;

// then we can extract out the props ready for use. i.e. title and children
const CourseGoal = ({ title, children, key, onDelete }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(key)}>Delete</button>
        </article>
    )
}

export default CourseGoal;
