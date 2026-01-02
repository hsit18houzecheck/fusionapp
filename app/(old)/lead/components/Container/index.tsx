"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Navbar from "../Navbar";
import type { ContainerProps } from "../../types";

function Container({
  children,
  backBtnHandler,
  goBack = true,
  showBottomTxt = true,
  isLoading,
}: ContainerProps) {
  const router = useRouter();

  useEffect(() => {
    // Display the modal when loader is true
    if (isLoading) {
      Swal.fire({
        title: "Please Wait",
        text: "Loading...",
        showConfirmButton: false, // Hide the "OK" button
        allowOutsideClick: false, // Prevent clicking outside to close
        allowEscapeKey: false, // Prevent closing with the Escape key
        showCloseButton: false, // Hide the close button
      });
    } else {
      // Close the modal when loader becomes false
      Swal.close();
    }
  }, [isLoading]);

  const backHandler = () => {
    if (backBtnHandler) {
      backBtnHandler();
    } else {
      router.back();
    }
  };

  return (
    <div className="w-full h-full bg-primary-lead-old-50 pb-52">
      <Navbar />
      <div className="container max-w-4xl px-8 md:px-16 py-12 md:mx-auto bg-white rounded-3xl shadow-lg">
        <div>
          {goBack && (
            <div
              className="text-secondary-lead-old-600 font-bold flex items-center"
              role="button"
              onClick={backHandler}
              onKeyDown={backHandler}
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-3">Back</p>
            </div>
          )}
        </div>
        <div>{children}</div>

        <div>
          {showBottomTxt && (
            <div className="text-center">
              <p className="mt-8 text-sm text-secondary-lead-old-500">
                If you need any assistance, please call us on{" "}
                <a href="tel:0330 113 1133">
                  <strong>0330 113 1133</strong>
                </a>{" "}
                during Mon to Fri, 9AM to 5:30PM.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Container;
