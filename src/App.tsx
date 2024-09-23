import CourseGoal from "./componenets/CourseGoal";
import goalsImg from './assets/goals.jpg';
import Header from './componenets/Header';
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        title: 'Learn React + TS',
        description: 'this is a description',
        id: Math.random()
      };

      return [...prevGoals, newGoal]
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>your course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
      <CourseGoal title="hello" description="description for the project" >
        Learn it from the ground up
      </CourseGoal>
    </main>
  );
}
