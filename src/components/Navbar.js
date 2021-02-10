import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div id="nav-bar">
                <div className="container-fluid row align-items-center">
                    <div className="col-md-5 ms-auto">
                        <input className="form-control" type="text" placeholder="Search"/>
                    </div>
                    <div className="col-md-2 col-3 ms-auto">
                        <button type="button" className="btn btn-primary ">
                            <i className="fas fa-user-plus"></i>
                            <label>Add contact</label>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
