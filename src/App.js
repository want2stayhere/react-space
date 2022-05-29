// import './App.scss';

import './style.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Features from './components/Features/Features';
// import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';

function App() {
  	return (
		<div className="layout">
			<Header />
			<Main />
			{/* <Calendar /> */}
			<Features />
			<Footer />
		</div>
  	);
}

export default App;
