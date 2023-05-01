// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {seconds: 0, minutes: 0}
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prev => ({
        minutes: prev.minutes + 1,
        seconds: 0,
      }))
    }
    this.setState(prev => ({seconds: prev.seconds + 1}))
  }

  onStart = () => {
    const {seconds, minutes} = this.state
    this.timerid = setInterval(this.tick, 1000)
  }

  onStop = () => {
    clearInterval(this.timerid)
  }

  onReset = () => {
    clearInterval(this.timerid)
    this.setState({seconds: 0, minutes: 0})
  }

  render() {
    const {seconds, minutes} = this.state
    console.log(seconds)
    console.log(minutes)

    return (
      <div className="app-container">
        <div>
          <h1 className="header">StopWatch</h1>
        </div>
        <div className="main-container">
          <div className="stopwatch-header-container">
            <img
              alt="stopwatch"
              className="stopwatch-image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
            />
            <p className="timer-heading">Timer</p>
          </div>

          <h1 className="time-count">
            {minutes < 10 ? `${0}${minutes}` : minutes}:
            {seconds < 10 ? `${0}${seconds}` : seconds}
          </h1>
          <div className="button-container">
            <button
              onClick={this.onStart}
              className="start-button"
              type="button"
            >
              Start
            </button>
            <button onClick={this.onStop} className="stop-button" type="button">
              Stop
            </button>
            <button
              onClick={this.onReset}
              className="reset-button"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
