import React, {useEffect} from 'react'
import './CardActions.css'

export const CardActions = ({close}) => {

  const closeActions = () => {
    close()
  }

  useEffect(() => {
    window.addEventListener('click', closeActions)
    return () => {
      window.removeEventListener('click', closeActions)
    }
  }, [])

  return (
    <div className="card-actions-menu"
         onClick={(e)=>e.stopPropagation()}>
      <p className="actions-logo">Действия со списком</p>
      <span className="material-icons table-actions-close-icon"
      onClick={closeActions}
      >close</span>
      <hr className="hr-actions"/>
      <div className="card-actions-buttons">
        <div className="card-action-button">
          <p>Добавить карточку...</p>
        </div>
        <div className="card-action-button">
          <p>Копировать список...</p>
        </div>
        <div className="card-action-button">
          <p>Переместить список...</p>
        </div>
        <div className="card-action-button">
          <p>Подписаться</p>
        </div>
        <hr className="hr-actions"/>
        <div className="card-action-button">
          <p>Переместить все карточки списка...</p>
        </div>
        <div className="card-action-button">
          <p>Архивировать все карточки списка...</p>
        </div>
        <hr className="hr-actions"/>
        <div className="card-action-button">
          <p>Архивировать список...</p>
        </div>
      </div>
    </div>
  )
}