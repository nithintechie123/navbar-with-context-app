import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)

      const notFoundContainerClassName = isDarkTheme
        ? 'light-bg-container'
        : 'dark-bg-container'

      const fontColorClassName = isDarkTheme ? 'dark-font-color' : null
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notFoundContainerClassName}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not-found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${fontColorClassName}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-description ${fontColorClassName}`}>
              We cannot seem to find the page
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
