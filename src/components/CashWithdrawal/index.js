import {Component} from 'react'
import ListProfile from './components/DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onChanged = value => {
    const {balance} = this.state
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="mainbg">
        <div className="innerbg">
          <div className="inner1">
            <div className="piccontainer">
              <h1>S</h1>
            </div>
            <h1 className="h1">Sarah williams</h1>
          </div>
          <div className="inner2">
            <h1 className="h1">Your Balance</h1>
            <div className="balancecontainer">
              <h1 className="h1">{balance}</h1>
              <p className="h1">in Rupees</p>
            </div>
          </div>
          <div className="inner3">
            <h1 className="h1">withdrawn</h1>
            <p className="h1">Choose Some in rupees</p>
          </div>

          <ul className="listsContainer">
            {denominationsList.map(eachList => (
              <ListProfile
                key={eachList.id}
                eachDrawn={eachList}
                onDeduction={this.onChanged}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
