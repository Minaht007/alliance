import { useState } from "react";
import bgImage from "../../assets/background/bg1.png";
import styles from "./home.module.css";
import StrategyPanel from "../strategyPanel/strategyPanel";
import CompanyPanel from "../сompanyPanel/companyPanel";

const Home = () => {
	const [showStrategy, setShowStrategy] = useState(false);
	return (
		<div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
			<div>
				{showStrategy ? (
					<StrategyPanel onBack={() => setShowStrategy(false)} />
				) : (
					<CompanyPanel onShowStrategy={() => setShowStrategy(true)} />
				)}
			</div>
		</div>
	);
};

export default Home;
