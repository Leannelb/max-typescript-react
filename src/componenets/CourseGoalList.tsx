import CourseGoal from "./CourseGoal";
import {type CourseGoal as CourseGoalProps } from '../App.tsx';

type CourseGoalListProps = {
    goals: CourseGoalProps[],
    onDeleteGoal: (id: number) => void; 
}


export default function CourseGoalList({ goals, onDelete}: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>)
}