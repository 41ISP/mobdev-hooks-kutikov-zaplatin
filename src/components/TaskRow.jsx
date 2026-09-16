const TaskRow = ({title, storyPoints, setTasks, id, done}) => {
    const handleDelete = () => {
        setTasks(o => o.filter(e => e.id !== id))
    }
    const handleStoryPoints = (diff) => {
        setTask(oldValue => oldValue.map(el => el.id === id ? {...el, storyPoints: el.storyPoints + diff} : el))

    }

    const handledone= () => {
        setTasks(oldValue => oldValue.map(el => el.id === id ? {...el, done : !el.done} : el))
    }

    return (
        <div className="task-row">
            <button onClick = {handledone} className={`task-check${done ? " checked" : ""}`}></button>
            <span onClick= {handledone} className={`task-title${done ? " done" : ""}`}>
                {title}
            </span>
            <div className="estimate-stepper">
                <button onClick={() => handleStoryPoints(-1)} className ="stepper-btn">−</button>
                <span className="stepper-value">{storyPoints}</span>
                <button onClick={() => handleStoryPoints(+2)} className ="stepper-btn">+</button>
            </div>
            <button className="quick-bump">+2</button>
            <button onClick={handleDelete} className="icon-danger">✕</button>
        </div>
    )


}

export default TaskRow