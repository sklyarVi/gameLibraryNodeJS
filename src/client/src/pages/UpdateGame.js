import React from "react";
import { Link } from 'react-router-dom';
//import {Table} from 'semantic-ui-react'
//import { useParams } from 'react-router-dom'

class UpdateGame extends React.Component {

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
        let id = this.props.data, title = items.title, genre = items.genre, released = items.released, ranking = items.ranking;

        function updateMyGame() {
            let zmienna = 0;
            let item={id, title, genre, released, ranking};
            console.log(item)

            fetch("http://localhost:5555/game/update/"+id, {
              method: 'PUT',
              headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify(item)
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                zmienna = 1;
            });

            if ( !zmienna ) {
                document.getElementById("messApi").innerHTML = "Your game has an update!";
            }
        }

        if (!DataisLoaded) return <div> <h1> Pleses wait few time.... </h1> </div> ;

        return (
            <div className = "games">
                <div className="header row"> 
                    <div className="link-header">
                        <Link to={`/games`} > <i className='material-icons-outlined left'> arrow_back </i> Back To Games </Link>
                    </div>
                    <div className="title-header">
                        <h2>  You are updating this game: </h2>
                    </div>
                </div>
                <div className="row margin-2prc padding-row striped white z-depth-2">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                              <input placeholder="Title" id="title" type="text" className="validate" 
                              defaultValue={ items.title } onChange= { (e) => {title = e.target.value; console.log(e.target.value); } } />
                              <label htmlFor="title" className="active"> Title </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Genre" id="genre" type="text" className="validate" 
                                defaultValue={ items.genre } onChange= { (e) => { genre = e.target.value; console.log(e.target.value); } } />
                                <label htmlFor="genre" className="active"> Genre </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Released" id="released" type="text" className="validate" 
                                defaultValue={ items.released } onChange= { (e) => { released = e.target.value; console.log(e.target.value); } } />
                                <label htmlFor="released" className="active" > Released </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Ranking" id="ranking" type="text" className="validate" 
                                defaultValue={ items.ranking } onChange= { (e) => { ranking = e.target.value; console.log(e.target.value); } } />
                                <label htmlFor="ranking" className="active" > Ranking </label>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className='col s4 waves-effect waves-light btn-large btn green right' onClick={updateMyGame}> 
                                <i className='material-icons-outlined left'>send</i>Submit 
                            </button>
                        </div>
                   </div>
                   <div className="row">
                        <div className="col s12 center green-text">
                            <h2 id = 'messApi'> </h2>
                        </div>
                   </div>
                </div>
            </div>
        ) ;
    }
}
   
export default UpdateGame;