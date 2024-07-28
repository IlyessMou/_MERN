import logo from './logo.svg';
import './App.css';
import TabContainer from './components/Tab';
import { useState } from 'react';
import ContentBox from './components/content';

function App() {
  const[currentTabNumber, setCurrentTabNumber] = useState(1);
  const[tabs, addTab] = useState([
    {
      tabNumber: 1,
      content: "Tab 1 content is showing here.",
      selected: true
    },
    {
      tabNumber: 2,
      content: "Tab 2 content is showing here.",
      selected: false
    },
    {
      tabNumber: 3,
      content: "Tab 3 content is showing here.",
      selected: false
    }
  ]);


  return (
    <div className="App">
        <TabContainer tabs={tabs} setCurrentTabNumber={setCurrentTabNumber}/>
        <ContentBox tabs={tabs}/>
      </div>
      
  );
}

export default App;
