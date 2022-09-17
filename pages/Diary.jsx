import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";
import styles from '../styles/Home.module.css'

const Diary = () => {
    const [todoItem, setTodoItem] = useState("");
    const [items, setItems] = useState([]);

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleAdd();
        }
    };

    const handleAdd = () => {
        if (todoItem) {
            setItems([
                {
                    id: uuidv4(),
                    message: todoItem,
                    done: false,
                },
                ...items,
            ]);

            setTodoItem("");
        }
    };

    const handleDone = (id) => {
        const _items = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done,
                };
            }

            return item;
        });

        setItems(_items);
    };
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num + 1)
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1)
        }
        else {
            alert('no log is here')
            setNum(0);
        }
    }

    return (
        <div className="w-[50vw] mx-5">
                <div className="">
                    <textarea
                        // type="text"
                        value={todoItem}
                        className=" rounded py-2 px-4 border bg-transparent w-[50vw]"
                        onChange={(e) => setTodoItem(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                </div>

                <ul className="">
                    {items
                        .filter(({ done }) => !done)
                        .map(({ id, message, done }) => (
                            <li
                                key={id}
                                className={cx(styles.item)}
                            // onClick={() => handleDone(id)}
                            >
                                {message}
                                <button onClick={() => { handleDone(id); incNum(); }} className="border-2 px-2 absolute right-96 rounded-lg">Save</button>
                            </li>
                        ))}
                    {items
                        .filter(({ done }) => done)
                        .map(({ id, message, done }) => (
                            <li
                                key={id}
                                className={cx(styles.item, styles.done)}
                            // onClick={() => handleDone(id)}
                            >
                                {message}
                                <button onClick={() => { handleDone(id); decNum(); }} className="border-2 px-2 absolute right-96 rounded-lg">EDIT</button>
                            </li>
                        ))}

                </ul>
     

        </div>
    )
}

export default Diary