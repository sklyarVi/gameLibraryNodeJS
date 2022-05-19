import React from "react";
import { Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
//import {Table} from 'semantic-ui-react'
//import { useParams } from 'react-router-dom'


class ViewGame extends React.Component {

    // Constructor 
    constructor(props) {
        console.log(props.data);
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    };
    
    componentDidMount() {
        fetch("http://localhost:5555/game/"+this.props.data)
            .then((res) => res.json())
            //.then((res) => console.log(res))
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state; 
        
        if (!DataisLoaded) return <div> <h1> Pleses wait few time.... </h1> </div> ;

        return (
            <div className = "games">
                <div className="header"> 
                    <div className="link-header">
                        <Link to={`/games`} > <ArrowBackRoundedIcon color="primary" /> </Link>
                    </div>
                    <div className="title-header">
                        <h2>  Game from an API: </h2>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr>
                          <th> ID </th>
                          <th> Title </th>
                          <th> Genre </th>
                          <th> Released </th>
                          <th> Ranking </th>
                        </tr>
                        <tr  key = { items.id }>
                          <td> { items.id } </td>
                          <td> { items.title } </td>
                          <td> { items.genre } </td>
                          <td> { items.released } </td>
                          <td> { items.ranking } </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ) ;
    }
}
   
export default ViewGame;