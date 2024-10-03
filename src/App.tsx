import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeJysk from './pages/HomeJysk'
import Header from './header_components/Header'
import Category from './pages/Category'
import Footer from './footer_components/Footer'
import ProductDetail from './main_components/ProductDetail'
//import ProductsByCategory from './main_components/ProductsByCategory'
//import CategoryList from './home_components/CategoryList'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element={<HomeJysk />} />
						<Route path="/category/:id" element={<Category />} />
						<Route path="/category/:categoryId/:productId" element={<ProductDetail/>} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App
