import create from "zustand"

interface IItem {
  title: string
  id: string
}

export const useTodoList = create<any>((set: any) => ({
  todoList: [],
  addItem: (item: IItem) =>
    set((state: any) => {
      if (item.title.trim().length === 0) {
        return { ...state }
      }
      state.todoList.push({ ...item, done: false })
    }),
  removeItem: (id: string) =>
    set((state: any) => {
      const todoListItems = state.todoList.filter((todo: any) => todo.id !== id)
      return { ...state, todoList: todoListItems }
    }),
  completeItem: (id: string) =>
    set((state: any) => {
      const todoListItems = state.todoList.map((todo: any) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done }
        }

        return todo
      })

      return { ...state, todoList: todoListItems }
    }),
}))
