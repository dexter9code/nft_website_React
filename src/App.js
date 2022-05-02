import { Features, SectionWrapper, Download } from "./components/index";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="ProNFT a verified place to buy & Sell nfts "
        description="ProNft provide secure place to buy, sell and exchange your Nft and currently serving over 90+ millions happy customers around the wrold"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface MarketPlace "
        description="ProNft Uses Multilevel Encryption Mode so that you don't have to Worry about your Ethereum ever and Make Transcation Safe"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="In ProNft Store you can Find Millions of Verified Nfts all from the world"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with Love by {""}
          <span className="bold">RUDY</span>
        </p>
      </div>
    </>
  );
};

export default App;
