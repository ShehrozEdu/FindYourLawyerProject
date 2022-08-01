import React from "react";

export default function BookingDone() {
  return (
    <>
      <div className="bg-green-100 rounded-md p-3 flex">
        <svg
          className="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>

        <div className="text-green-700">
          <div className="font-bold text-xl">Form Submitted Successfully</div>

          <div>
            You will get a confirmation email when the lawyer will confirm your
            case, you may be asked for the payment before connecting
          </div>
        </div>
      </div>
    </>
  );
}
