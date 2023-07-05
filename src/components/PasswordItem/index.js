import './index.css'

const PasswordItem = props => {
  const {details, isChecked, deletePassword} = props
  const {id, website, username, password, backGroundColor} = details

  const onDelete = () => deletePassword(id)

  return (
    <li className="passwordItem">
      <div className="details-container">
        <div className={backGroundColor}>
          <p className="initial">{website[0].toUpperCase()}</p>
        </div>
        <div>
          <p className="text">{website}</p>
          <p className="text">{username}</p>
          {isChecked ? (
            <p className="text">{password}</p>
          ) : (
            <img
              className="stars-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
