import React, {useEffect, useRef, useState} from 'react'
import './ItemActionsModal.css'
import {ChangeLabelsModal} from '../ChangeLabelsModal/ChangeLabelsModal'

export const ItemActionsModal = ({name}) => {

  const [isChangeLabels, setIsChangeLabels] = useState(false)

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const openChangeLabels = (e) => {
    e.stopPropagation()
    setIsChangeLabels(!isChangeLabels)
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="item-actions-modal"
           onClick={(e) => e.stopPropagation()}>
        <textarea value={name} ref={inputRef}/>
        <div className="actions-save">
          <p>Сохранить</p>
        </div>
        <div className="actions">
          <div className="action-item"
               onClick={openChangeLabels}>
            <span className="material-icons" id="label">label</span>
            <p>Изменить метки</p>
          </div>
          {
            isChangeLabels &&
            <ChangeLabelsModal onClose={() => {
              setIsChangeLabels(false)
            }}/>
          }
          <div className="action-item">
            <span className="material-icons">trending_flat</span>
            <p>Переместить</p>
          </div>
          <div className="action-item">
            <span className="material-icons">content_copy</span>
            <p>Копировать</p>
          </div>
          <div className="action-item">
            <span className="material-icons">schedule</span>
            <p>Изменить срок</p>
          </div>
          <div className="action-item">
            <span className="material-icons">inbox</span>
            <p>Архивировать</p>
          </div>
        </div>
      </div>
    </>
  )
}
