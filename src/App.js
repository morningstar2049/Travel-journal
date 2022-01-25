import Header from './Components/Header'
import MainContent from './Components/MainContent'
import data from './data'

function App() {
  const content = data.map(item => <MainContent
                                      item={item}
                                      />)
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
        {content}

      </div>
         
        
      
    </div>
  );
}

export default App;
