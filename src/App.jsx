import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import HomePage from "./pages/Home";
import WeaponsPage from "./pages/Weapons";
import NewsPage from "./pages/News";
import styles from "./App.module.css";
import ModalShell from "./component/modalShell/ModalShell";

const App = () => {
	return (
		<Router>
			<div className={styles.wrapper}>
				<Header />
				<main className={styles.content}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/weapons" element={<WeaponsPage />} />
						<Route path="/news" element={<NewsPage />} />
					</Routes>
				</main>
				<ModalShell />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
