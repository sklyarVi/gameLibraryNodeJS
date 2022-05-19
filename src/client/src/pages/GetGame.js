import React from 'react'
import ListGame from './ListGame';
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class GetGames extends React.Component {
    // Constructor 
    constructor(props) {
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

        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "games">
            <h2> Games from an API: </h2>
            <table>
                <tbody>
                    <ListGame data = {items} pC = {this.props.getData} del = {this.props.getData}  />
                </tbody>
            </table>
        </div>
        );
    }
}
export default GetGames;

//<Game data={item.id}/>

//Hejka, będę miał pytanko do projektu, mogli byśmy się umówić o której tam będzie Ci pasować? Wolałbym Ci wytłumaczyć niż pisać ;P