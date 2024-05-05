import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const homeLightImageUrl =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const homeDarkImageUrl =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImageUrl = isDarkTheme ? homeDarkImageUrl : homeLightImageUrl

      const homeContainerClassName = isDarkTheme
        ? 'home-light-bg-container'
        : 'home-dark-bg-container'

      const homeClassName = isDarkTheme
        ? 'home-dark-font-color'
        : 'home-light-font-color'

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeContainerClassName}`}>
            <img src={homeImageUrl} alt="home" className="home-theme-image" />
            <h1 className={homeClassName}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
