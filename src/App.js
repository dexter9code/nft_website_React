import { Features, SectionWrapper, Download } from "./components/index";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="ProNft a verified place to buy the nfts "
        description="buy and share and exchange the nfts over 100M+ users world-Wide"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface MarketPlace "
        description="Best place to sell and encripted place to buy verfied Nft"
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
        description="The app contains two screens. "
        mockupImg={assets.mockup}
        banner='banner02'
      />
    </>
  );
};

export default App;
