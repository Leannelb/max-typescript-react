import CourseGoal from "./componenets/CourseGoal";
import goalsImg from './assets/goals.jpg';
import Header from './componenets/Header';
import { useState } from "react";
import CourseGoalList from "./componenets/CourseGoalList";

// from here, one 'goal'

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
      <CourseGoalList goals={goals}/>
    </main>
  );
}
