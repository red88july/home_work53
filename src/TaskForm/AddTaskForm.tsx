const AddTaskForm = () => {
    return (
        <form className="taskform-box">
            <label className="label-input-todo" htmlFor="input-form">TODO</label>
            <div className="taskform-item">
                <input id="input-form" type="text" placeholder="What would you like to do today?" required />
                <button type="submit">Add</button>
            </div>
        </form>
    )
}
export default AddTaskForm;