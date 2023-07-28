const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'))

export const todos = todosFromLocalStorage || [];