import React from "react";

export default function JoinTeam() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-[5%]">
        <form className="w-[95%] md:w-[40%] flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="border px-5 py-3 outline-none text-sm"
              id="name"
              placeholder="Nexon Nas"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="nexon@dev.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="+234 90 000 000 0000"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nature">Area of Strength/Interest:</label>
            <select
              id="nature"
              className="border px-2 py-3 outline-none text-sm"
            >
              <option value="">Writing</option>
              <option value="">Editing</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="genre">Genre of Writing:</label>
            <input
              type="text"
              id="genre"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="Cover Letter, Statement of Purpose, e.t.c"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="experience">Years of Experience:</label>
            <input
              type="number"
              id="experience"
              className="border px-5 py-3 outline-none text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cv">Upload CV:</label>
            <input
              type="file"
              id="cv"
              className="border px-5 py-3 outline-none text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Best Two Previous Works:</label>
            <div className="flex flex-row justify-between gap-2 w-full border p-3">
              <input
                type="file"
                className="border px-5 py-3 outline-none text-sm w-[50%]"
                accept="*.pdf"
              />
              <input
                type="file"
                className="border px-5 py-3 outline-none text-sm w-[50%]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white text-sm bg-orange-600 hover:bg-orange-500 w-full text-center py-3"
          >
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}
