import "./Tnc.css";
import TncWebsite from "./TncWebsite";
// import TncSurvey from "./TncSurvey";
// import ComplaintHandling from "./ComplaintHandling";
// import ValuationTnc from "./ValuationTnc";

const Tnc = () => {
  return (
    <div className="max-w-[1250px] mx-auto">
      <div className="flex flex-wrap">
        <div className="md:w-10/12 pt-5">
          <TncWebsite />
        </div>
      </div>
    </div>
  );
};

export default Tnc;
