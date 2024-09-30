import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import OnSale from './pages/OnSale'
import HomeJysk from './pages/HomeJysk'
import LowPrice from './pages/LowPrice'
import Header from './header_components/Header'
import Category from './pages/Category'
import Bedroom from './pages/Bedroom'
import Bathroom from './pages/Bathroom'
import Kitchen from './pages/Kitchen'
import Office from './pages/Ofice'
import Footer from './footer_components/Footer'

function App() {

	return (
		<>

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomeJysk />} />
					<Route path="/onsale" element={<OnSale />} />
					<Route path="/lowprice" element={<LowPrice />}> </Route>
					<Route path="/category/:id" element={<Category />} />
					<Route path="/bedroom" element={<Bedroom />} />
					<Route path="/bathroom" element={<Bathroom />} />
					<Route path="/kitchen" element={<Kitchen />} />
					<Route path="/office" element={<Office />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}




export default App
