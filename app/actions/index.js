let nextToDoID = 0;
// action 是指代一些抽象的行为
export const addToDo = text => {
  return {
    type: "ADD_TODO",
    id: nextToDoID++,
    text
  };
};
 export const toggleToDo = id => ({ type: "TOGGLE_TODO", id });