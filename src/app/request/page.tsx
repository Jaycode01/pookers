import React from "react";

export default function RequestService() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-[5%]">
        <form
          action="https://formsubmit.co/pookerseditorial@gmail.com"
          method="POST"
          className="w-[95%] md:w-[40%] flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="border px-5 py-3 outline-none text-sm"
              id="name"
              name="name"
              placeholder="Nexon Nas"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="nexon@dev.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone_number"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="+234 90 000 000 0000"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="Lagos, Nigeria"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nature">Nature of work:</label>
            <select
              id="nature"
              name="nature_of_work"
              className="border px-2 py-3 outline-none text-sm"
            >
              <option value="default" defaultValue="default"></option>
              <option value="Writing">Writing</option>
              <option value="Editing">Editing</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nature_specify">Nature of Work(Specify):</label>
            <input
              type="text"
              id="nature_specify"
              name="nature_of_work_specify"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="Cover Letter, Statement of Purpose, e.t.c"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="border px-5 py-3 outline-none text-sm"
            />
          </div>
          <textarea
            className="border px-5 py-3 outline-none text-sm h-[200px] w-full"
            name="other_informations"
            placeholder="Other Informations"
          />
          <button
            type="submit"
            className="text-white text-sm bg-blue-600 hover:bg-blue-500 w-full text-center py-3"
          >
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}
