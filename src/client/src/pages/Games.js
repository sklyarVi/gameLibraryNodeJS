import React from 'react'
import { Link } from 'react-router-dom';
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import Game from './Game'
//import {Table} from 'semantic-ui-react';
//import { Route } from "react-router-dom";


class Games extends React.Component {
    
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
        fetch("http://localhost:5555/games")
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

        let arrGame = items.games;
        //liste.sort();
        //arrGame.sort( (a,b) => a.ranking - b.ranking)

        console.log( arrGame );

        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
            <div className = "games">
                <h2> Games from an API: </h2>
                <table>
                    <tbody>
                        <tr>
                            <th> Title </th>
                            <th> Genre </th>
                            <th> Released </th>
                            <th> Ranking </th>
                            <th> Actions </th>
                        </tr>
                        { arrGame.map((item) => (
                        <tr  key = { item.id }>
                            <td> { item.title } </td>
                            <td> { item.genre } </td>
                            <td> { item.released } </td>
                            <td> { item.ranking } </td>
                            <td> 
                                <Link to={`/game/${item.id}`}>
                                    <button onClick={ () => this.props.getData(item.id)}>  
                                        Explore 
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
export default Games;

//<Game data={item.id}/>

//Hejka, będę miał pytanko do projektu, mogli byśmy się umówić o której tam będzie Ci pasować? Wolałbym Ci wytłumaczyć niż pisać ;P