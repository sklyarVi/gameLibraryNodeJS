import React from 'react'
import { Link } from 'react-router-dom'
//import { Table } from 'semantic-ui-react'
//import { useParams } from 'react-router-dom'

class DelGame extends React.Component {
    // Constructor
    constructor(props) {
        console.log(props.data)
        super(props)
        this.state = {
            items: [],
            DataisLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:5554/game/del/' + this.props.data, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            //.then((res) => console.log(res))
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                })
            })
    }

    render() {
        const { DataisLoaded, items } = this.state

        if (!DataisLoaded)
            return (
                <div>
                    {' '}
                    <h1> Pleses wait few time.... </h1>{' '}
                </div>
            )

        return (
            <div className="games">
                <div className="header">
                    <div className="link-header">
                        <Link to={`/games`}>
                            {' '}
                            <i className="material-icons-outlined large left">
                                {' '}
                                arrow_back{' '}
                            </i>{' '}
                            Back To Games{' '}
                        </Link>
                    </div>
                    <div className="title-header">
                        <h2> This game has been removed: </h2>
                    </div>
                </div>
                <table className="margin-2prc padding-row striped white z-depth-2">
                    <tbody className="margin-2prc">
                        <tr>
                            <th className="center"> ID </th>
                            <th className="center"> Title </th>
                            <th className="center"> Genre </th>
                            <th className="center"> Released </th>
                            <th className="center"> Ranking </th>
                        </tr>
                        <tr key={items.id}>
                            <td className="center"> {items.id} </td>
                            <td className="center"> {items.title} </td>
                            <td className="center"> {items.genre} </td>
                            <td className="center"> {items.released} </td>
                            <td className="center"> {items.ranking} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DelGame
