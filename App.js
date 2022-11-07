import React from 'react';
import Banner from './Components/Banner';
import Navbar from "./Components/Navbar";
import Drawer from './Components/Drawers';
import CarouselContainer from './Components/CarouselContainer';
//import Contact from './Components/Contact';

function App() {
	return (
		<React.Fragment>
			<Navbar/>
      <Banner/>
      {/* <Contact/> */}
      <Drawer />
      <CarouselContainer/>


		</React.Fragment>
	);
}

export default App;
