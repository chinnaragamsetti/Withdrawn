import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App


// Write your code here


import {Component} from 'react'
import './index.css'



class GoogleSuggestions extends Component{
    state={searchInput:''}

    render(){
        const {searchInput}=this.state
        const {suggestionsList}=this.props 


        return(
            <div className="mainbg">
                <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png alt should be google logo" className='logo'/>

                <div className="innerbg">
                    <div className="inputcontainer">
                        <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png alt should be search icon" className="icon"/>
                        <input type="search" />
                        
                    </div>
                    <ul>
                        {suggestionsList.map(eachsuggestion=>(
                            <suggestionProfile key={eachsuggestion.id} eachsuggestion={eachsuggestion} 
                        ))
                        }
                    </ul>
                </div>
                 
            </div>
        )
    }
}

/* Write your CSS here */
.mainbg {
  display: flex;
  justify-content: center;
  background-color: white;
}
.innerbg {
  background-color: wheat;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  height: 20px;
  width: 20px;
}

.inputcontainer {
  display: flex;
  flex-direction: row;
}
