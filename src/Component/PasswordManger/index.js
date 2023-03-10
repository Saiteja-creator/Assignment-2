import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManger extends Component {
  state = {websiteName: '', userName: '', passwordCode: '', userList: []}

  getWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  getUserName = event => {
    this.setState({userName: event.target.value})
  }

  getPassword = event => {
    this.setState({passwordCode: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {websiteName, userName, passwordCode} = this.state
    const UpdateList = {
      id: uuidv4(),
      websiteName,
      userName,
      passwordCode,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, UpdateList],
    }))
  }

  getPasswordList = () => {
    const {userList} = this.state
    if (userList.length === 0) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
            alt="passwords"
          />
        </div>
      )
    }
    return (
      <ul>
        {userList.map(each => (
          <PasswordItem eachDetails={each} key={each.key} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="passwordManager">
          <img
            className="appLogo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="inputAndImageContainer">
            <div className="InputContainer">
              <h1>Add New Password</h1>
              <form onSubmit={this.onAdd}>
                <div className="imageAndInput">
                  <img
                    className="inputImage"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                  <input type="text" onChange={this.getWebsite} />
                </div>
                <div className="imageAndInput">
                  <img
                    className="inputImage"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username
"
                  />
                  <input type="text" onChange={this.getUserName} />
                </div>
                <div className="imageAndInput">
                  <img
                    className="inputImage"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                  <input type="text" onChange={this.getPassword} />
                </div>
                <button type="submit">Add</button>
              </form>
            </div>
            <div>
              <img
                className="appLogo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
            </div>
          </div>
        </div>
        {this.getPasswordList()}
      </div>
    )
  }
}

export default PasswordManger
