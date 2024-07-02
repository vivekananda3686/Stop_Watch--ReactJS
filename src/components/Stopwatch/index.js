// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {minutes: 0, seconds: 0, start: false}
  }

  componentDidMount() {
    this.timer = null
  }

  tick = () => {
    this.setState(prevState => {
      const {minutes, seconds} = this.state
      if (seconds === 59) {
        return {
          minute: minutes + 1,
          seconds: 0,
        }
      } else {
        return {
          seconds: seconds + 1,
        }
      }
    })
  }

  startTimer = () => {
    if (!this.state.start) {
      this.timer = setInterval(this.tick, 1000)
      this.setState({
        start: true,
      })
    }
  }

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({
      start: false,
    })
  }

  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({
      start: false,
      minutes: 0,
      seconds: 0,
    })
  }

  displayTime = () => {
    const {minutes, seconds} = this.state
    if (minutes < 10 && seconds < 10) {
      return (
        <h1>
          0{minutes}:0{seconds}
        </h1>
      )
    } else if (seconds >= 10 && minutes < 10) {
      return (
        <h1>
          0{minutes}:{seconds}
        </h1>
      )
    } else if (minutes >= 10 && seconds < 10) {
      return (
        <h1>
          {minutes}:0{seconds}
        </h1>
      )
    } else {
      return (
        <h1>
          {minutes}:{seconds}
        </h1>
      )
    }
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="main-container">
        <h1>Stopwatch</h1>
        <div className="card-container">
        <div className="timer-card">
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch" />
            </div>
            <div>
                <p>Timer</p>
            </div>
        </div>
          {this.displayTime()}
          <div className="button-container">
            <button className="start-button" onClick={this.startTimer}>
              Start
            </button>
            <button className="stop-button" onClick={this.stopTimer}>
              Stop
            </button>
            <button className="reset-button" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
