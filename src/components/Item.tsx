import { useTodoList } from "../store/useTodoList"
import Button from "./Button"
import DeleteIcon from "../assets/delete.png"
export default function Item(props: any) {
  const { title, id, done } = props
  const { removeItem, completeItem } = useTodoList()
  return (
    <Button
      className={`flex justify-between items-center gap-3 p-2 ${
        done && "bg-green-300"
      }`}
      onClick={() => completeItem(id)}
    >
      <span>{title}</span>
      <Button onClick={() => removeItem(id)}>
        <img src={DeleteIcon} alt="Remover" />
      </Button>
    </Button>
  )
}
