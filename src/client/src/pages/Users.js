import React from 'react'

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
                <table>
                    <tbody>
                        <tr>
                            <th> Nickname </th>
                            <th> Name </th>
                            <th> Lastname </th>
                            <th> Age </th>
                            <th> Actions </th>
                        </tr>
                        { arrUser.map((item) => (
                        <tr  key = { item.id }>
                            <td> { item.nickname } </td>
                            <td> { item.name } </td>
                            <td> { item.last_name } </td>
                            <td> { item.age } </td>
                            <td> 
                                <button> Edit </button>
                                <button> Edit </button>
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


// <Link to={`/game/${item.id}`}>
// <button onClick={ () => this.props.getData(item.id)}>  
//     Explore 
// </button>
// </Link>