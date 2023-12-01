import React from "react";

const listStudent = ({id, name, image, email}) => {
    return (
        <div className="listS">
            <div className="img">
                <img className="pic" src={image} />
            </div>
            <div className="name">
                <h2>{name}</h2>
            </div>
            <div className="email">
                <h2>{email}</h2>
            </div>
        </div>
    );
}
export default listStudent; 