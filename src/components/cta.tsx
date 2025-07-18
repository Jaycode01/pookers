import React from "react";

export default function CTA() {
  return (
    <>
      <div className="bg-white w-full px-[5%] py-14 flex flex-col md:flex-row justify-between items-start gap-7">
        <div className="flex flex-col gap-3">
          <h2 className="text-[25px] md:text-[35px]">
            Ready to tranform your documents ?
          </h2>
          <button
            type="button"
            className=" bg-orange-600 px-7 py-3 text-white hover:bg-orange-500 w-fit"
          >
            Get Started
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[18px] md:text-[25px]">
            Subscribe to our newsletter for writting and services updates
          </h3>
          <form className="flex flex-row gap-0 border border-gray-600 w-full md:w-[80%]">
            <input
              type="email"
              name=""
              id=""
              className="outline-none px-5 py-3 w-full text-sm"
              placeholder="Input your email to subscribe"
            />
            <button
              type="submit"
              className="px-10 py-3 bg-orange-600 text-white text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
