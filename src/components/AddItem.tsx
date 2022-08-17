import Button from "./Button"
import { useTodoList } from "../store/useTodoList"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function AddItem() {
  const { addItem } = useTodoList()
  const [title, setTitle] = useState("")

  const handlerAddItem = () => {
    addItem({ title, id: uuidv4() })
    setTitle("")
  }

  const handlerEnterPressed = (e: any) => {
    if (e.key === "Enter") {
      handlerAddItem()
    }
  }

  return (
    <div className="flex gap-4 flex-wrap">
      <input
        type="text"
        className="flex flex-1 p-2 border-gray-300 border-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handlerEnterPressed(e)}
      />
      <Button
        onClick={() => handlerAddItem()}
        className="bg-gray-300 p-2 rounded-md w-24 mx-auto shadow-lg"
      >
        <span>Add</span>
      </Button>
    </div>
  )
}
