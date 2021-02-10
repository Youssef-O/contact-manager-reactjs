import React, { Component } from 'react'

export class Table extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table
