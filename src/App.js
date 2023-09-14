import logo from './logo.svg';
import './App.css';
import stories from './sample_news_stories.json'
import placeholder from './placeholderimg.svg'

function App() {
  return (
    <div className="App">
      <div className='pageTitle'>My News Feed</div>
      {
        stories && stories.results.slice(0, 4).map((item, index) => (
          <div className='storyContainer' key={index}>
            <div className='imgTitleContainer'>
              <img className='img' src={item.image_url || placeholder}></img>
              <div className='titleContainer'>
                <a className='title' href={item.link}>{item.title}</a>
                <div className='creator'>By: {item.creator}</div>
              </div>
            </div>
            <div className='descContainer'>
              {
                item.description?.length >= 293 ? `${item.description?.substring(0, 293)}...` : `${item.description}`
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
