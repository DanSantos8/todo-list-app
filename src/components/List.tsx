import { useTodoList } from "../store/useTodoList"
import AddItem from "./AddItem"
import Item from "./Item"

export default function List() {
  const { todoList } = useTodoList()

  return (
    <section className="flex flex-col flex-1 gap-4">
      <div className="flex justify-between">
        <h1>Todo List:</h1>
      </div>
      <AddItem />
      <ul className="flex flex-1 flex-col gap-4">
        {todoList?.map((item: any) => (
          <Item {...item} />
        ))}
      </ul>
    </section>
  )
}
