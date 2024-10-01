import styles from "./BannerComponent.module.css";
const BannerComponent: React.FC = () => {


	return (
		<div className= {styles.bannerContainer}>
            <div className={styles.bannerImg2}>
           <img src="https://jysk.ua/sites/jysk.ua/files/styles/full_optimized/public/2024-09/UA3_4.jpg?itok=tnoUl5ME" className="img-responsive" width="190" height="140" loading="eager" alt="" ></img>
            <img src = "https://jysk.ua/sites/jysk.ua/files/styles/full_optimized/public/2024-09/UA2_4.jpg?itok=1gkuOWPA" className={styles.bannerImg1} width="760" height="140" loading="eager" alt=""></img>
            <img src="https://jysk.ua/sites/jysk.ua/files/styles/full_optimized/public/2024-09/UA3_4.jpg?itok=tnoUl5ME" className="img-responsive" width="190" height="140" loading="eager" alt=""/>
            </div>
            <div className={styles.bannerImg2}>
            <img src="https://jysk.ua/sites/jysk.ua/files/styles/full_optimized/public/2024-09/UA6_0.jpg?itok=Kw2DA5W9" className="img-responsive" width="190" height="280" loading="eager" alt=""></img>
            <img src="https://jysk.ua/sites/jysk.ua/files/styles/full_optimized/public/2024-09/UA5_3.jpg?itok=fzxKF-lH"  width="760" height="280" loading="eager" alt=""></img> 
            <img src="https://jysk.ua/sites/jysk.ua/files/styles/full_optimized/public/2024-09/UA6_0.jpg?itok=Kw2DA5W9" className="img-responsive" width="190" height="280" loading="eager" alt=""></img>
            </div>
        </div>
	);
};

export default BannerComponent;