import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const lightThemeWebsiteLogoUrl =
  ' https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

const darkThemeWebsiteLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lightThemeIconUrl =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const darkThemeIconUrl =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const navBarClassName = isDarkTheme
        ? 'light-background'
        : 'dark-background'

      const menuItemsClassName = isDarkTheme
        ? 'dark-font-color'
        : 'light-font-color'

      const toggleWebsiteLogo = isDarkTheme
        ? darkThemeWebsiteLogoUrl
        : lightThemeWebsiteLogoUrl

      const onChangeThemeIconUrl = isDarkTheme
        ? lightThemeIconUrl
        : darkThemeIconUrl

      return (
        <nav className={`nav-container ${navBarClassName}`}>
          <img
            src={toggleWebsiteLogo}
            alt="website logo"
            className="website-logo"
          />
          <ul className="menu-container">
            <Link to="/" className="menu-item">
              <li className={menuItemsClassName}>Home</li>
            </Link>
            <Link to="/about" className="menu-item">
              <li className={menuItemsClassName}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            label="true"
            data-testid="theme"
            className="theme-button"
            onClick={onClickToggleTheme}
          >
            <img
              src={onChangeThemeIconUrl}
              alt="theme"
              className="dark-theme-logo"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
