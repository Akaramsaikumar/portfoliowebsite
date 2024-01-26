import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {userInput: '', userUrl: '', description: '', projectsList: []}

  onChangeuser = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeUrl = event => {
    this.setState({userUrl: event.target.valu})
  }

  onChangeDesc = event => {
    this.setState({description: event.target.value})
  }

  addBtnClicked = () => {
    const {userInput, userUrl, description, projectsList} = this.state
    const newList = {
      name: userInput,
      urls: userUrl,
      desc: description,
    }

    this.setState(prev => ({projectsList: [...prev.projectsList, newList]}))
    this.setState({userInput: '', userUrl: '', description: ''})

    console.log(projectsList)
  }

  render() {
    const {projectsList, userInput, userUrl, description} = this.state
    return (
      <div className="App">
        <div className="head">
          <h1>My PortFolio</h1>
          <div className="head-sec">
            <h1 className="menu-ietm">
              <a href="#about" className="anchor">
                About
              </a>
            </h1>
            <h1 className="menu-ietm">
              <a href="#projects" className="anchor">
                Projects
              </a>
            </h1>
            <h1 className="menu-ietm">
              <a href="#contact" className="anchor">
                Contacts
              </a>
            </h1>
          </div>
        </div>
        <div className="first-con" id="about">
          <div className="main-content">
            <h1 className="main-head">My PROJECT</h1>
            <p>
              Lorem ipsum dolor sit amet. Sit rerum sunt aut asperiores minus
              sit aspernatur perspiciatis est libero internos cum
            </p>
            <button type="button" className="project-btn">
              <a href="#projects" className="anchor">
                Projects
              </a>
            </button>
            <button type="button" className="linked-btn">
              LinkedIn
            </button>
          </div>
          <img
            src="https://media.istockphoto.com/id/1473508665/photo/administration-teamwork-office-documents-or-people-review-financial-data-finance-funding-or.jpg?s=1024x1024&w=is&k=20&c=7S4FyaQ0_TBEf4mRFuguACbapN2U2u8Kt_DyB-laGUc="
            alt="team"
            className="main-image"
          />
        </div>
        <div>
          <div className="form-control">
            <h1 className="pro-head">Add Project</h1>
            <label htmlFor="projectName" className="proj-title">
              Project Name
              <input
                type="text"
                className="user"
                id="projectName"
                value={userInput}
                onChange={this.onChangeuser}
              />
            </label>
            <label htmlFor="url">
              Project url
              <input
                type="text"
                className="user"
                id="url"
                value={userUrl}
                onChange={this.onChangeUrl}
              />
            </label>
            <label htmlFor="projectDesc" className="proj-desc">
              Description
              <textarea
                type="text"
                className="user"
                id="projectDesc"
                value={description}
                onChange={this.onChangeDesc}
              />
            </label>
            <div className="btn-content">
              <button
                type="button"
                className="add-btn"
                onClick={this.addBtnClicked}
              >
                Add
              </button>
            </div>
          </div>
          <footer className="fot">
            <svg
              viewBox="0 -20 700 110"
              width="100%"
              height="110"
              preserveAspectRatio="none"
            >
              <path
                transform="translate(0, -20)"
                d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
                fill="#edb037"
              />
            </svg>
          </footer>
        </div>
        <div id="projects">
          <div className="proj-list">
            <h1 className="pro-head">Projects</h1>
            <div className="sample">
              <h3>Project name</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard ever since
                the 1500s,
              </p>
              <button type="button" className="vi-pro">
                View Project
              </button>
            </div>
            <div className="sample">
              <h3>Project name</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s,
              </p>
              <button type="button" className="vi-pro">
                View Project
              </button>
            </div>
            <div className="sample">
              <h3>Project name</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s,
              </p>
              <button type="button" className="vi-pro">
                View Project
              </button>
            </div>
            <ul>
              {projectsList.map(eachItem => (
                <li key={eachItem.name} className="lis">
                  <h3>{eachItem.name}</h3>
                  <p>{eachItem.desc}</p>
                  <button type="button" className="vi-pro">
                    View Project
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="contact">
          <div className="btn-container">
            <button type="button" className="insta-btn">
              <img
                src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
                alt="insta"
                className="instagram"
              />
            </button>
            <button type="button" className="insta-btn">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zJrUp7pJgtwqbKzdrvhR_2G5DOC_tgfrLgXsC_C50Q&s"
                alt="insta"
                className="instagram"
              />
            </button>
            <button type="button" className="insta-btn">
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                alt="insta"
                className="instagram"
              />
            </button>
          </div>
          <div className="copyrights">
            <h3> Copyright @ 2024 All rights reserved</h3>
          </div>
        </div>
        <footer className="fot">
          <svg
            viewBox="0 -20 700 110"
            width="100%"
            height="110"
            preserveAspectRatio="none"
          >
            <path
              transform="translate(0, -20)"
              d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
              fill="#edb037"
            />
            <path
              d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
              fill="#edb037"
            />
          </svg>
        </footer>
      </div>
    )
  }
}

export default App
