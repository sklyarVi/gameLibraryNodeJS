import React from 'react'
import {Link} from "react-router-dom";

class Users extends React.Component {

    // Constructor
    constructor(props) {
        //console.log(props)
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:5555/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;

        let arrUser = items.users;
        //liste.sort();
        //arrUser.sort( (a,b) => a.ranking - b.ranking)

        console.log( arrUser );

        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
            <div className = "users">
                <h2> Users from an API: </h2>
                <table className='centered'>
                    <tbody>
                    <tr>
                        <th className='center'> Nickname </th>
                        <th className='center'> Name </th>
                        <th className='center'> Lastname </th>
                        <th className='center'> Age </th>
                        <th className='center'> Actions </th>
                    </tr>
                    { arrUser.map((item) => (
                        <tr  key = { item.id }>
                            <td> { item.nickname } </td>
                            <td> { item.name } </td>
                            <td> { item.last_name } </td>
                            <td> { item.age } </td>
                            <td>
                                <Link to={`/user/update/${item.id}`}>
                                    <button
                                        className="waves-effect waves-light btn-floating btn-small btn light-blue darken-1"
                                    >
                                        <i className="material-icons-outlined">edit</i>
                                    </button>
                                </Link>
                                <Link to={`/user/del/${item.id}`}>
                                    <button
                                        className="waves-effect waves-light btn-floating btn-small btn red"
                                    >
                                        <i className="material-icons-outlined">
                                            delete_outline
                                        </i>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Users;