import React, {useState} from 'react'
import './Register.css'
import {connect} from 'react-redux'
import {register} from '../../actions'
import {useHistory} from 'react-router-dom'

export const Register = connect()(({dispatch}) => {

    const [form, setForm] = useState({
      email: '',
      password: ''
    })

    const registerHandler = () => {
      if (Object.values(form).every(el => el.trim())) {
        dispatch(register({...form}))
          .catch(e => alert(e.message || 'Error'))
      } else {
        alert('Заполните все поля')
      }
    }

    const history = useHistory()

    const changeHandler = ({target}) =>
      setForm({...form, [target.name]: target.value})

    return (
      <div className="auth-container">
        <img
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"
          alt="trello-logo"/>
        <div className="login-form">
          <p>Регистрация в Trello</p>
          <input type="text" value={form.email}
                 onChange={changeHandler} name="email"
          />
          <input type="password" value={form.password}
                 onChange={changeHandler} name="password"/>
          <div className="login-btn hovered"
               onClick={registerHandler}
          >
            <p>Зарегистрироваться</p>
          </div>
          <p className="or">ИЛИ</p>
          <div className="login-form-service hovered">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
              alt="google"/>
            <p>Войти через Google</p>
          </div>
          <p className="login hovered"
             onClick={() => history.push('/login')}
          >Войти</p>
        </div>
      </div>
    )
  }
)
