import './App.css';

import Email from './icons/Email';
import GitHub from './icons/GitHub';
import Linkedin from './icons/Linkedin';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Andy Dunstall</h1>
        <h2>Software Engineer | London</h2>
        <div className="contact">
          <a href="https://github.com/andydunstall" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><GitHub /></a>
          <a href="mailto:andydunstall@hotmail.co.uk" aria-label="Email"><Email /></a>
          <a href="https://uk.linkedin.com/in/andy-dunstall-531b6122a" aria-label="Linkedin"><Linkedin /></a>
        </div>
      </div>
	  
	  <div className="landing">
		<p>
			Hi, I'm Andy Dunstall. I'm a software engineer based near London.
		</p>
		<p>
			You can contact me via the above links.
		</p>
	  </div>
    </div>
  );
}

export default App;
