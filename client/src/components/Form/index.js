import React from "react";

function Form({ handleFormSubmit }) {
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
            </div>
            <div className="pull-right">
                <button
                    // onClick={() => handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-danger float-right"
                >Search</button>
            </div>
        </form>
    );
}

export default Form;