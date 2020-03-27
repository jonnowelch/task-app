export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          activity: action.task.activity,
          notes: action.task.notes,
          id: action.task.length ? action.task.length + 1 : 1
        }
      ];
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.id);

    default:
      return state;
  }
};
