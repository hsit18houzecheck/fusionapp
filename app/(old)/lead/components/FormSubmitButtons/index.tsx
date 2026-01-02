import Button from "../../components/Button";
import useLeadStore from "@/store/oldWebsite/useLeadStore";
import type { FormSubmitButtonsProps } from "../../types";
import { useRouter } from "next/navigation";

function FormSubmitButtons({
  backBtnHandler,
  goBack,
  nocontinue,
  continueTxt = "Continue",
}: FormSubmitButtonsProps) {
  const router = useRouter();
  const loading = useLeadStore((state) => Boolean(state.loading));

  const onBack = () => {
    if (backBtnHandler) {
      backBtnHandler();
    } else {
      router.back();
    }
  };

  return (
    // <div className="py-6 fixed md:static md:flex md:justify-between bottom-0 bg-white bg-opacity-70 w-full right-0 text-center">
    <div className="py-6 flex justify-between bottom-0 w-full right-0 text-center">
      {goBack && (
        <Button
          btnType="defaultOutlineBtn"
          customClass="mr-auto"
          onClickHandler={onBack}
        >
          Go back
        </Button>
      )}
      {!nocontinue && (
        <Button
          submit
          loading={loading}
          customClass="ml-auto"
          id="leadpage-continue"
        >
          {loading ? "Loading..." : continueTxt}
        </Button>
      )}
    </div>
  );
}

export default FormSubmitButtons;
