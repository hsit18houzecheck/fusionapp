import Container from "../components/Container";

const Thankyou = () => {
  return (
    <Container goBack={false}>
      <p className="text-center text-4xl font-bold">
        Thank you for your enquiry.{" "}
      </p>
      <p className="text-center mt-4">
        One of our advisors will be in touch shortly to discuss further.
      </p>
      {/* <p className="mt-6 text-xl text-center"></p> */}
      <div className="w-full md:w-11/12 mx-auto bg-primary-lead-old-50 px-1 md:px-7 rounded-2xl mt-8 pb-8">
        <p className="py-8 text-primary-lead-old-800 font-bold text-center">
          What happens next?
        </p>
        <div className="flex flex-col mx-8 border-l-2 border-primary-lead-old-500 pl-6">
          <div className="relative">
            <div className="absolute left-[-42px] text-white border border-primary-lead-old-500 w-8 h-8 bg-primary-lead-old-500 text-center rounded-full">
              <p className={`absolute top-[15%] left-[11.5px]`}>1</p>
            </div>
            <div className="pb-8 px-2 md:px-4">
              <p className="font-bold text-xl">Confirmation</p>
              <p>
                One of our advisors will call you within 2 working hours to
                confirm the cost and surveyor availability.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className={`absolute left-[-42px] text-primary-lead-old-500 bg-white border border-primary-lead-old-500 w-8 h-8 text-center rounded-full`}
            >
              <p className={`absolute top-[15%] left-[11.5px]`}>2</p>
            </div>
            <div className="pb-8 px-2 md:px-4">
              <p className="font-bold text-xl">Surveyor Visit</p>
              <p>
                90% of our survey visits are carried out within 1 week of your
                enquiry.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className={`absolute left-[-42px] text-primary-lead-old-500 bg-white border border-primary-lead-old-500 w-8 h-8 text-center rounded-full`}
            >
              <p className={`absolute top-[15%] left-[11.5px]`}>3</p>
            </div>
            <div className="px-2 md:px-4">
              <p className="font-bold text-xl">Report</p>
              <p>
                After the survey, 99% of our reports are sent within 5 working
                days, most of them a lot sooner due to Houzecheck&apos;s cutting
                edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <FormSubmitButtons
        backBtnHandler={() =>
          dispatch(
            updateStepAction(
              leadData.productData?.callbackStatus === true ? 6 : 2
            )
          )
        }
        nocontinue
      /> */}
    </Container>
  );
};

export default Thankyou;
