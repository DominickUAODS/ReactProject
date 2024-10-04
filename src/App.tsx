import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeJysk from './pages/HomeJysk'
import Header from './header_components/Header'
import Category from './pages/Category'
import Footer from './footer_components/Footer'
import ProductDetail from './main_components/ProductDetail'
import LoginForm from './main_components/LoginForm'
import RegisterForm from './main_components/RegisterForm'
import Cart from './pages/Cart'
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
						<Route path="/category/:categoryId/:productId" element={<ProductDetail />} />
						<Route path="/category/:categoryId/:productId/details" element={<Cart />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/register" element={<RegisterForm />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App
