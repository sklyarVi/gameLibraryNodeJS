import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import {Table} from 'semantic-ui-react'
//import { useParams } from 'react-router-dom'

// export const Component = () => {
//     const [state, setState] = useState(false)

//     return <div>text</div>
// }

function AddGame() {
    const [messGood, setGood] = useState('')
    const [messErr, setErr] = useState('')
    const [games, setGames] = useState([])
    const [classAdd, setClassAdd] = useState('')
    const [id, setId] = useState()

    let title, genre, released, ranking
    let theSame = games.map((game) => game.id)

    useEffect(() => {
        fetch('http://localhost:5555/games')
            .then((res) => res.json())
            .then((json) => {
                setGames(json)
            })
    }, [])

    useEffect(() => {
        let pars = parseInt(id)
        console.log(pars)
        if (theSame[id - 1] === pars || isNaN(pars)) {
            setClassAdd(' validRed')
        } else {
            setClassAdd(' validGreen')
        }
    }, [theSame, id])

    function updateMyGame() {
        let statusUpdate = 0
        let item = { id, title, genre, released, ranking }
        console.log(item)

        if (
            id === '' ||
            title === '' ||
            genre === '' ||
            released === '' ||
            ranking === '' ||
            id === undefined ||
            title === undefined ||
            genre === undefined ||
            released === undefined ||
            ranking === undefined
        ) {
            setErr('Please fill all required fields')
            console.log(messErr)
        } else {
            fetch('http://localhost:5555/game/post/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json)
                    statusUpdate = 1
                })

            if (!statusUpdate) {
                setGood('Your game has been added')
            }
        }
    }

    return (
        <div className="games">
            <div className="header row">
                <div className="link-header">
                    <Link to={`/games`}>
                        {' '}
                        <i className="material-icons-outlined left">
                            {' '}
                            arrow_back{' '}
                        </i>{' '}
                        Back To Games{' '}
                    </Link>
                </div>
                <div className="title-header">
                    <h2> You added this game: </h2>
                </div>
            </div>
            <div className="row padding-row striped white z-depth-2">
                <form className="col s12">
                    <div className="row ">
                        <div className="input-field col s12">
                            <input
                                placeholder="ID"
                                id="ID"
                                type="number"
                                required
                                className={'validate ' + classAdd}
                                onChange={(e) => {
                                    setId(e.target.value)
                                    //console.log(e.target.value)
                                }}
                            />
                            <label htmlFor="ID" className="active">
                                {' '}
                                ID{' '}
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                placeholder="Title"
                                id="title"
                                type="text"
                                required
                                className="validate"
                                onChange={(e) => {
                                    title = e.target.value
                                    console.log(e.target.value)
                                }}
                            />
                            <label htmlFor="title" className="active">
                                {' '}
                                Title{' '}
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                placeholder="Genre"
                                id="genre"
                                type="text"
                                required
                                className="validate"
                                onChange={(e) => {
                                    genre = e.target.value
                                    console.log(e.target.value)
                                }}
                            />
                            <label htmlFor="genre" className="active">
                                {' '}
                                Genre{' '}
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                placeholder="Released"
                                id="released"
                                type="number"
                                required
                                min="1900"
                                max="2099"
                                className="validate"
                                onChange={(e) => {
                                    released = e.target.value
                                    console.log(e.target.value)
                                }}
                            />
                            <label htmlFor="released" className="active">
                                {' '}
                                Released{' '}
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                placeholder="Ranking"
                                id="ranking"
                                type="number"
                                required
                                min="1"
                                max="5"
                                className="validate"
                                onChange={(e) => {
                                    ranking = e.target.value
                                    console.log(e.target.value)
                                }}
                            />
                            <label htmlFor="ranking" className="active">
                                {' '}
                                Ranking{' '}
                            </label>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="input-field col s12">
                        <button
                            id="submitAdd"
                            className="col s4 waves-effect waves-light btn-large btn green right"
                            onClick={updateMyGame}
                        >
                            <i className="material-icons-outlined left">send</i>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center ">
                        <h2 id="messApi" className="green-text">
                            {' '}
                            {messGood}{' '}
                        </h2>
                        <h2 id="messApi2" className="red-text">
                            {' '}
                            {messErr}{' '}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddGame
