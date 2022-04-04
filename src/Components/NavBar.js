import React from 'react'

function NavBar(props) {
    return (
        <div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">{props.NavBar}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
     </div>
    )
}

export default NavBar;