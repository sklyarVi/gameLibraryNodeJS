import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import {Table} from 'semantic-ui-react'
//import { useParams } from 'react-router-dom'

function ListGame(props) {
    const sortToData = props.data
    const [sampleData, setSampleData] = useState([])
    const [clickSort, setCount1] = useState(null)

    useEffect(() => {
        setSampleData(sortToData)
    }, [])

    function handleSort(id) {
        console.log(clickSort)
        switch (id) {
            case 0:
                document.getElementById('btn2').disabled = true
                document.getElementById('btn3').disabled = true
                document.getElementById('btn4').disabled = true
                if (clickSort % 2) {
                    const sortedData = [...sortToData].sort((a, b) => {
                        if (a.title.toLowerCase() > b.title.toLowerCase()) {
                            return -1
                        }
                        return 0
                    })
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                } else {
                    const sortedData = [...sortToData].sort((a, b) => {
                        if (a.title.toLowerCase() < b.title.toLowerCase()) {
                            return -1
                        }
                        return 0
                    })
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                }
                break
            case 1:
                document.getElementById('btn1').disabled = true
                document.getElementById('btn3').disabled = true
                document.getElementById('btn4').disabled = true
                if (clickSort % 2) {
                    const sortedData = [...sortToData].sort((a, b) => {
                        if (a.genre.toLowerCase() > b.genre.toLowerCase()) {
                            return -1
                        }
                        return 0
                    })
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                } else {
                    const sortedData = [...sortToData].sort((a, b) => {
                        if (a.genre.toLowerCase() < b.genre.toLowerCase()) {
                            return -1
                        }
                        return 0
                    })
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                }
                break
            case 2:
                document.getElementById('btn1').disabled = true
                document.getElementById('btn2').disabled = true
                document.getElementById('btn4').disabled = true
                if (clickSort % 2) {
                    const sortedData = [...sortToData].sort(
                        (a, b) => a.released - b.released,
                    )
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                } else {
                    const sortedData = [...sortToData].sort(
                        (a, b) => b.released - a.released,
                    )
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                }
                break
            case 3:
                document.getElementById('btn1').disabled = true
                document.getElementById('btn2').disabled = true
                document.getElementById('btn3').disabled = true
                if (clickSort % 2) {
                    const sortedData = [...sortToData].sort(
                        (a, b) => a.ranking - b.ranking,
                    )
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                } else {
                    const sortedData = [...sortToData].sort(
                        (a, b) => b.ranking - a.ranking,
                    )
                    setSampleData(sortedData)
                    setCount1(clickSort + 1)
                }
                break
            case 4:
                document.getElementById('btn1').disabled = false
                document.getElementById('btn2').disabled = false
                document.getElementById('btn3').disabled = false
                document.getElementById('btn4').disabled = false
                const sortedData = [...sortToData].sort((a, b) => a.id - b.id)
                setSampleData(sortedData)
                setCount1(clickSort - clickSort)
                break

            default:
        }
    }
    console.log(sampleData)

    const listComp = sampleData.map((item) => (
        <tr key={item.id}>
            <td className="center"> {item.title} </td>
            <td className="center"> {item.genre} </td>
            <td className="center"> {item.released} </td>
            <td className="center"> {item.ranking} </td>
            <td className="center">
                <Link to={`/game/${item.id}`}>
                    <button
                        className="waves-effect waves-light btn-floating btn-small btn green"
                        onClick={() => props.pC(item.id)}
                    >
                        <i className="material-icons">preview</i>
                    </button>
                </Link>
                <Link to={`/game/update/${item.id}`}>
                    <button
                        className="waves-effect waves-light btn-floating btn-small btn light-blue darken-1"
                        onClick={() => props.edit(item.id)}
                    >
                        <i className="material-icons-outlined">edit</i>
                    </button>
                </Link>
                <Link to={`/game/del/${item.id}`}>
                    <button
                        className="waves-effect waves-light btn-floating btn-small btn red"
                        onClick={() => props.del(item.id)}
                    >
                        <i className="material-icons-outlined">
                            delete_outline
                        </i>
                    </button>
                </Link>
            </td>
        </tr>
    ))

    return (
        <>
            <tr className="borderShadow">
                <th className="center">
                    {' '}
                    <button
                        className="waves-effect waves-light btn"
                        id="btn1"
                        onClick={() => handleSort(0)}
                    >
                        <i className="material-icons-outlined left"> sort </i>{' '}
                        Sort
                    </button>{' '}
                </th>
                <th className="center">
                    {' '}
                    <button
                        className="waves-effect waves-light btn"
                        id="btn2"
                        onClick={() => handleSort(1)}
                    >
                        <i className="material-icons-outlined left"> sort </i>{' '}
                        Sort
                    </button>{' '}
                </th>
                <th className="center">
                    {' '}
                    <button
                        className="waves-effect waves-light btn"
                        id="btn3"
                        onClick={() => handleSort(2)}
                    >
                        <i className="material-icons-outlined left"> sort </i>{' '}
                        Sort
                    </button>{' '}
                </th>
                <th className="center">
                    {' '}
                    <button
                        className="waves-effect waves-light btn"
                        id="btn4"
                        onClick={() => handleSort(3)}
                    >
                        <i className="material-icons-outlined left"> sort </i>{' '}
                        Sort
                    </button>{' '}
                </th>
                <th className="center">
                    <button
                        className="waves-effect waves-light btn"
                        onClick={() => handleSort(4)}
                    >
                        <i className="material-icons-outlined left">
                            {' '}
                            restart_alt{' '}
                        </i>{' '}
                        Reset
                    </button>
                    <Link to={`/game/add`}>
                        <button className="waves-effect waves-light btn yellow darken-2">
                            <i className="material-icons-outlined left">add</i>{' '}
                            Add New Game
                        </button>
                    </Link>
                </th>
            </tr>
            <tr>
                <th className="center"> Title </th>
                <th className="center"> Genre </th>
                <th className="center"> Released </th>
                <th className="center"> Ranking </th>
                <th className="center"> Actions </th>
            </tr>

            {listComp}
        </>
    )
}
export default ListGame
