import React, {useEffect, useState} from 'react'
import './Boards.css'
import {connect} from 'react-redux'
import {createBoard, loadBoards} from '../../actions'
import {useHistory} from 'react-router-dom'
import {Spinner} from '../../components/Spinner/Spinner'

const mapStateToProps = ({boards}) => ({boards})

export const Boards = connect(mapStateToProps)(({boards, dispatch}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      dispatch(loadBoards()).then(() => setLoading(false))
    }, [])

    const addBoard = () => {
      const name = prompt('Введите название доски')
      if (name) {
        dispatch(createBoard(name))
      }
    }

    const history = useHistory()

    if (loading) {
      return <Spinner/>
    }

    return (
      <div>
        <div className="boards-page">
          {
            boards.map(b => (
              <div className="board-item hovered"
                   key={b._id}
                   onClick={() => history.push(`board/${b._id}`)}>
                <p>{b.name}</p>
              </div>
            ))
          }
          <div className="board-create hovered"
               onClick={addBoard}
          >
            <p>Создать доску</p>
          </div>
        </div>
      </div>
    )
  }
)