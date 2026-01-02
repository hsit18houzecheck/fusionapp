import Container from "@/components/OldWebsite/Container";
import Banner from "./Banner";
import Tnc from "./Tnc";

export const metadata = {
  title: "Privacy Policy | Houzecheck",
  description: "",
};
const Terms = () => {
  return (
    <Container>
      <Banner />
      <Tnc />
    </Container>
  );
};

export default Terms;
