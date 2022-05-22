import React from 'react'
import { Link } from 'react-router-dom'
//import {Table} from 'semantic-ui-react'
//import { useParams } from 'react-router-dom'

class ViewGame extends React.Component {
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
        fetch('http://localhost:5554/game/' + this.props.data)
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
        console.log(items)
        if (!DataisLoaded)
            return (
                <div>
                    {' '}
                    <h1> Please wait for a while.... </h1>{' '}
                </div>
            )

        return (
            <div className="games">
                <div className="header">
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
                        <h2> One game from an API: </h2>
                    </div>
                </div>
                <table className="margin-2prc padding-row striped white z-depth-2">
                    <tbody>
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

export default ViewGame
