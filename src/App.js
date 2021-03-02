
import './App.css';
import { SideBar } from './components/SideBar';
import { NavBar } from './components/NavBar';
import { Accordion } from './components/Accordion';
import styled from 'styled-components';
import { useState } from 'react'

const StyledGridContainer = styled.div`
  margin-top:2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
  "notifications notifications notifications Status"
  "notifications notifications notifications Earnings"
  ". . . .";
`

const StyledStatusText = styled.div`
  margin-top:0;
  text-align:end;
  & span { 
    margin: 0 0.5rem;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border: 1px solid grey;
    border-radius:10px;
    padding: 0 1rem;
  }
`

const StyledNotifications = styled.div`
  grid-area: notifications;
  box-shadow: 0px 5px 16px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`

const StyledNotificationItem = styled.div`
  background: ${p => p.isError ? 'linear-gradient(0deg, #fff, #ffb2b2);' : 'inherit'};
  border-bottom:1px solid grey;
  display:flex;
  text-align:start;
  & .right-side {
    margin-left:auto;
    display:flex;
    & button {
      border-radius:25px;
      border-bottom:1px solid gray;
      border-top:1px solid blue; 
      padding:0.5rem 2rem;
      height:2rem;
      align-self:center;
    }
    & p {
      align-self:flex-end;
      margin:0 2rem 0 0;
    }
    & progress { 
      width: 40rem;
      margin: 1.5rem 3rem 0 0 ;
    }
  }
`

const AccordionContent = styled.div`
  display:flex;  
  justify-content:space-around;
  & .content-item {
    display:flex;
    flex-direction:column;
  }
  
  
`

const SwitchWrapper = styled.div`
display:flex;
justify-content:center;
& .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
& .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
& .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

& .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

& input:checked + .slider {
  background-color: #2196F3;
}

& input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

& input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
& .slider.round {
  border-radius: 34px;
}

& .slider.round:before {
  border-radius: 50%;
}
`

const StyledIndicator = styled.div`
  width:1rem;
  height:1rem;
  border-radius:50%;
  background-color:${p => p.color};
  margin:1.5rem 0.5rem 0 0.5rem;
`

const StyledStatus = styled.div`
  grid-area: Status;
  box-shadow: 0px 5px 16px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  & .header {
    background:linear-gradient(0deg, #fff, #4a8ef7);
    padding:1rem;
    margin:0rem;
    border-radius:10px 10px 0 0;
  }
  & h2 {
    font-weight:bold;
    margin-bottom:2rem;
  }
  & .red { 
    color:red;
  }
`

const StyledEarnings = styled.div`
  grid-area: Earnings;
  box-shadow: 0px 5px 16px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  & .header {
    background:linear-gradient(0deg, #fff, #4a8ef7);
    padding:1rem;
    border-radius:10px 10px 0 0;
  }
  & h2 {
    color: green;
  }
`

const StyledRights = styled.div`
  text-align:end;
  background: linear-gradient(90deg, #fff, #7984f4);
`
const StyledLatestNotifications = styled.div`
  background:linear-gradient(0deg, #fff, #4a8ef7);
  margin:0;
  padding:1rem;
  border-radius:10px 10px 0 0;
`
const StyledMain = styled.div`
  margin-left:3rem;
  padding:0 1rem;
  width:100%;
`
function App() {
  const [isOnline,setIsOnline] = useState(false)
  
  const handleToggle = () => {
    setIsOnline(!isOnline)
  }

  const currYear = new Date().getFullYear();

  return (
    <div className="App">
      <NavBar />
      <div className="flex-wrapper" style={{display:"flex"}}>
      <SideBar />
      <StyledMain>
        <Accordion>
          <AccordionContent>
            <div className="content-item">
              <h3>New Request</h3>
              <p>5</p>
            </div>
            <div className="content-item">
              <h3>Processing</h3>
              <p>4/8</p>
            </div>
            <div className="content-item">
              <h3>Rating</h3>
              <p>4.9</p>
            </div>
            <div className="content-item">
              <h3>Plan</h3>
              <p>Premium</p>
            </div>
            <SwitchWrapper>
              <label className="switch">
                <input onChange={handleToggle} type="checkbox" />
                <span className="slider round"></span>
              </label>
            </SwitchWrapper>
          </AccordionContent>
        </Accordion>
        <StyledStatusText >
          <span >{`Status: ${isOnline ? 'online' : 'offline'}`}</span>
          <span >Last scan 25, Oct 2020</span>
        </StyledStatusText>
        <StyledGridContainer className="grid-container">
          <StyledNotifications className="notifications" >
            <StyledLatestNotifications>Latest notifications:</StyledLatestNotifications>
            <StyledNotificationItem >
              <StyledIndicator color="green"/>
              <div className="left-side">
                <b>Report</b>
                <p>Kaup24 asked latest fixes Report</p>
              </div>
              <div className="right-side">
                <button >Action</button>
                <p>03 january 2021</p>
              </div>
            </StyledNotificationItem>
            <StyledNotificationItem >
              <StyledIndicator color="green"/>
              <div className="left-side">
                <b>Report</b>
                <p>Kaup24 asked latest fixes Report</p>
              </div>
              <div className="right-side">
                <button >Action</button>
                <p>03 january 2021</p>
              </div>
            </StyledNotificationItem>
            <StyledNotificationItem >
              <StyledIndicator color="green"/>
              <div className="left-side">
                <b>Report</b>
                <p>Kaup24 asked latest fixes Report</p>
              </div>
              <div className="right-side">
              <progress max="100" value="80"></progress>
                <p>03 january 2021</p>
              </div>
            </StyledNotificationItem>
            <StyledNotificationItem isError>
              <StyledIndicator color="green"/>
              <div className="left-side">
                <b>Report</b>
                <p>Kaup24 asked latest fixes Report</p>
              </div>
              <div className="right-side">
                <button >Action</button>
                <p>03 january 2021</p>
              </div>
            </StyledNotificationItem>
          </StyledNotifications>
          <StyledStatus className="Status" >
            <p className="header">Status</p>
            <p className="your-score">Your score</p>
            <h2>450</h2>
            <hr></hr>
            <p>Profile views this week</p>
            <h2 className="red">50</h2>
          </StyledStatus>
          <StyledEarnings className="Earnings" >
          <p className="header">Earnings</p>
            <p className="your-score">Total</p>
            <h2>4501.65$</h2>
            <hr></hr>
            <p>Your earnings on Jan</p>
            <h2 >8501.65$</h2>
          </StyledEarnings>
        </StyledGridContainer>
      </StyledMain>
      </div>
      <StyledRights> {currYear} All right reserved</StyledRights>
    </div>
  );
}

export default App;
