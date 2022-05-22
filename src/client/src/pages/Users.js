import React from 'react'
//import {Link} from "react-router-dom";

class Users extends React.Component {
    // Constructor
    constructor(props) {
        //console.log(props)
        super(props)
        this.state = {
            items: [],
            DataisLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:5554/users')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                })
            })
    }

    render() {
        const { DataisLoaded, items } = this.state

        let arrUser = items
        //liste.sort();
        //arrUser.sort( (a,b) => a.ranking - b.ranking)

        console.log(arrUser)

        if (!DataisLoaded)
            return (
                <div>
                    <h1> Please wait for a while.... </h1>{' '}
                </div>
            )

        return (
            <div className="users">
                <h2> Users from an API: </h2>
                <table className="centered striped white z-depth-3">
                    <tbody>
                        <tr>
                            <th className="center"> Nickname </th>
                            <th className="center"> Firstname </th>
                            <th className="center"> Lastname </th>
                            <th className="center"> Age </th>
                            <th className="center"> Actions </th>
                        </tr>
                        {arrUser.map((item) => (
                            <tr key={item.id}>
                                <td> {item.nickname} </td>
                                <td> {item.firstName} </td>
                                <td> {item.lastName} </td>
                                <td> {item.age} </td>
                                <td>
                                    <button
                                        className="waves-effect waves-light btn-floating btn-small btn light-blue darken-1"
                                        onClick={() =>
                                            alert(' Freature not implementent ')
                                        }
                                    >
                                        <i className="material-icons-outlined">
                                            edit
                                        </i>
                                    </button>
                                    <button
                                        className="waves-effect waves-light btn-floating btn-small btn red"
                                        onClick={() =>
                                            alert(' Freature not implementent ')
                                        }
                                    >
                                        <i className="material-icons-outlined">
                                            delete_outline
                                        </i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Users
