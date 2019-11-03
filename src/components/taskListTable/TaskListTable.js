import React from "./node_modules/react";
import { tasks } from '../../services/data.json';

export default function TaskListTable() {
  console.log(tasks)
  return (
    <ul className="sidebar__navigation">
      {tasks.map((task) => (
        {task}
      ))}
    </ul>
  )
}