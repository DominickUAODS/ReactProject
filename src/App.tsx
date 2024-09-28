
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import OnSale from './pages/OnSale'
import HomeJysk from './pages/HomeJysk'
import LowPrice from './pages/LowPrice'
import Header from './header_components/Header'
function App() {

	return (
		<>

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomeJysk />} />
					<Route path="/onsale" element={<OnSale />} />
					<Route path="/lowprice" element={<LowPrice />}> </Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
