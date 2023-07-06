import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

const hexCodeValues = [
  'red',
  'blue',
  'green',
  'light-green',
  'yellow',
  'orange',
]

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    isChecked: false,
    searchInput: '',
  }

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  getSearchInput = event => this.setState({searchInput: event.target.value})

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(each => each.id !== id)

    this.setState({passwordsList: filteredList})
  }

  addPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const backGroundColor = `initial-container ${
      hexCodeValues[Math.ceil(Math.random() * hexCodeValues.length - 1)]
    }`

    const newPasswordItem = {
      id: v4(),
      website,
      username,
      password,
      backGroundColor,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  passwordInput = event => this.setState({password: event.target.value})

  usernameInput = event => this.setState({username: event.target.value})

  websiteInput = event => this.setState({website: event.target.value})

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      isChecked,
      searchInput,
    } = this.state
    const searchResults = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="passwords-manager">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="inputs-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image1"
            />
            <form className="form" onSubmit={this.addPassword}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="input-item-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-icon"
                />
                <input
                  type="text"
                  className="input-item"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.websiteInput}
                />
              </div>
              <div className="input-item-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-icon"
                />
                <input
                  type="text"
                  className="input-item"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.usernameInput}
                />
              </div>
              <div className="input-item-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-icon"
                />
                <input
                  type="password"
                  className="input-item"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.passwordInput}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="image2"
            />
          </div>
          <div className="passwords-container">
            <div className="count-search-container">
              <div className="count-container">
                <h3 className="passwords-count">Your Passwords</h3>
                <p className="count">{passwordsList.length}</p>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
                <input
                  type="search"
                  className="search-input"
                  placeholder="search"
                  value={searchInput}
                  onChange={this.getSearchInput}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="checkbox-container">
              <input type="checkbox" id="checkbox" onChange={this.onChecked} />
              <label htmlFor="checkbox" className="label">
                Show Passwords
              </label>
            </div>
            {searchResults.length === 0 ? (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p className="no-passwords">No Passwords</p>
              </div>
            ) : (
              <ul className="list-container">
                {searchResults.map(eachItem => (
                  <PasswordItem
                    details={eachItem}
                    key={eachItem.id}
                    isChecked={isChecked}
                    deletePassword={this.deletePassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
