import CourseGoal from "./CourseGoal"

// we exported the <ul> into CourseGoalList
// we copied the below 'goals' type, from the App.tsx because we know this is the type we'll see in multiple 'goals'

type CourseGoalList = {
    goals: {
        title: string;
        description: string;
        id: number;
    }[]
};


export default function CourseGoalList({goals}: CourseGoalList) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>)
}