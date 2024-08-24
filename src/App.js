import './App.css';
import React ,{useState} from 'react';
import ShareOption  from './Components/ShareOption';
import './Components/ShareOption.css';
// import logo from './logo.svg';
// import LoginForm from './Components/LoginForm';
// import './Components/LoginForm.css';
//import MyComponent from './Components/MyComponent';
//import { BrowserRouter } from 'react-router-dom';
//import DocumentViewer from './Components/DocumentViewer';
function App() {
  const [showOptions, setShowOptions] = useState(false);
  
  const url ='https://www.medicalnewstoday.com/articles/303409';
  const title ='Understanding Anxiety: Causes, Symptoms, and Treatments';
  
  const toggleShareOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="App">
      {/* <LoginForm/> */}
      {/* <BrowserRouter>
      <MyComponent />
      </BrowserRouter> */}
      {/* <h1>Document Viewer App</h1>
      <DocumentViewer/> */}
      <div className='Article-box'>
          <h1>Check Out This Article</h1>
          <p>This article is about the medical knowledge on varies disease.</p>
      <button className="share-icon" onClick={toggleShareOptions}>
        Share
      </button>
      <ShareOption url={url} title={title} showOptions={showOptions}/>
      </div>
    </div>
  );
}

export default App;
