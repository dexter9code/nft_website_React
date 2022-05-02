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
    </>
  );
};

export default App;
