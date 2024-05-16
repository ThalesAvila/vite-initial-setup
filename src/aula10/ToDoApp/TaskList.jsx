import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
