import React from "react";

export function UserName(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function UserTag(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="20" {...props} />
        </div>
    );
}

export function UserSummary(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="20" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    );
}