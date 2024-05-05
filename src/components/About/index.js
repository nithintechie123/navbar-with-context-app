import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const aboutDarkImageUrl =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
const aboutLightImageUrl =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImageUrl = isDarkTheme ? aboutDarkImageUrl : aboutLightImageUrl

      const aboutContainerClassName = isDarkTheme
        ? 'about-light-bg-container'
        : 'about-dark-bg-container'

      const aboutClassName = isDarkTheme
        ? 'about-dark-font-color'
        : 'about-light-font-color'
      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutContainerClassName}`}>
            <img src={aboutImageUrl} alt="about" className="about-image" />
            <h1 className={aboutClassName}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
