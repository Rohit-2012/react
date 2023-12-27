import { useState } from "react";
import { nanoid } from "nanoid";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState( JSON.parse(localStorage.getItem('tasks')) || []);
  const [editId, setEditId] = useState("");
  const [editing, setEditing] = useState(false);
  const id = nanoid();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "" && !editing) {
      setTaskList((prevList) => {
        const newList = [...prevList, { task, isCompleted: false, id: id }];
        localStorage.setItem('tasks', JSON.stringify(newList));
        return newList;
      });
    } else if (task.trim() && editing) {
      setTaskList((prevList) => {
        const newList = prevList.map((taskItem) =>
          taskItem.id === editId ? { ...taskItem, task } : taskItem
        );
        localStorage.setItem('tasks', JSON.stringify(newList));
        return newList;
      });
      setEditing(false);
    }
    setTask("");
  };
  

  const markComplete = (id) => {
    setTaskList((prevList) =>{
      const updatedList = prevList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
        localStorage.setItem('tasks', JSON.stringify(updatedList))
        return updatedList

    }
    );
  };

  const deleteTask = (id) => {
      setTaskList((prevList) => {
          const updatedList = prevList.filter((task) => task.id !== id)
          localStorage.setItem('tasks', JSON.stringify(updatedList))
          return updatedList
      });
  };

  const handleEdit = (id) => {
    const editTask = taskList.find((task) => task.id === id);
      setTask(editTask.task);
      setEditing(true)
    setEditId(id);
  };

  return (
    <main>
      <h1>To-do List</h1>
      <section className="list--container">
        <div className="input--box">
          <input type="text" value={task} onChange={handleChange} />
          <button onClick={addTask}>{editing ? 'EDIT': 'ADD'}</button>
        </div>
        <div className="info">
          <p>
            Completed:{" "}
            <span>
              {taskList.filter((task) => task.isCompleted === true).length}
            </span>
          </p>
          <p>
            Total Task: <span>{taskList.length}</span>
          </p>
        </div>
        <ul className="list--items">
          {taskList.map((taskObject) => (
            <li
              key={taskObject.id}
              className={taskObject.isCompleted ? "completed" : ""}
            >
              <span>{taskObject.task}</span>
              <div className="buttons--container">
                <button
                  className="complete--button"
                  onClick={() => markComplete(taskObject.id)}
                >
                  ✅
                </button>
                <button
                  className="delete--button"
                  onClick={() => deleteTask(taskObject.id)}
                >
                  ❌
                </button>
                <button onClick={() => handleEdit(taskObject.id)}>📝</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Todo;
