export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      const isTextEmpty = action.text === "";
      let newState = [...tasks];
      if (!isTextEmpty) {
        newState = [
          ...newState,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }

      return newState;
    case "changed":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    case "deleted":
      return tasks.filter((t) => t.id !== action.id);
    case "deletedAll":
      return [];
    case "completeAll":
      return tasks.map((t) => {
        return { ...t, done: true };
      });
    default:
      break;
  }
}
