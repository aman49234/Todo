import  {MdCheck, MdDeleteForever} from "react-icons/md";


export const TodoList = ({key ,date, onHandleDeleteToda}) => {
    return (
        <li key={index} className="todo-item">
            <span>{data}</span>

            <button className="check-btn">
                <MdCheck />
            </button>
            <button className="delete-btn"
                onClick={() => onHandleDeleteToda(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}