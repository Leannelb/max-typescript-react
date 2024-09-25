import CourseGoal from "./componenets/CourseGoal";
import goalsImg from './assets/goals.jpg';
import Header from './componenets/Header';
import { useState } from "react";
import CourseGoalList from "./componenets/CourseGoalList";

// previously - we copied the below 'goals' type, from the App.tsx because we know this is the type we'll see in multiple 'goals'
// from here, one 'goal'
// Can still make this better though, if we need to change the props with this current set up, we'll have to change it in two places
// to avoid that! We can export types. Now we can use it in many places.

export type CourseGoal = {
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
