function Card({ name, description, id, status, removeTodo, editTodo, SetStatus }) {

    return (<>
        <div className="alert alert-success" role="alert">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="alert-heading">{name}</h4>
                        <p className="mb-0">{description}</p>
                    </div>
                    <div className="col-md-6">
                        {/* <!-- Example single danger button --> */}
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {status? "Completed": "Not Completed"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => SetStatus(id,true)}>Completed</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => SetStatus(id,false)}>Not Completed</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-success" onClick={() => editTodo(name, description, id)}> Edit </button>
                <button type="button" className="btn btn-danger" onClick={() => removeTodo(id)}>Delete</button>
            </div>
        </div>
    </>)
}
export default Card;