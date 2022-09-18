// Write your code here
import {component} from 'react'
import './index.css'

class CashWithdrawl extends Component {
    state={denominationsList}
  render() {
      const {denominationsList}=this.state
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
              <h1 className=='h1'>Your Balance</h1>
              <div className="balancecontainer">
                <h1 className="h1">{balance}</h1>
                <p className="h1">in Rupees</p>
              </div>
          </div>
          <div className="inner3">
                <h1 className="h1">withdrawn</h1>
                <p className="h1">Choose Some in rupees</p>
          </div>
          <div className="inner4">
          <ul className="listsContainer">
              {denominationsList.map(eachList=>(
                    <ListProfile key={eachList.id} eachDrawn={eachList}/>
              ))
              }
          </ul>

          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
