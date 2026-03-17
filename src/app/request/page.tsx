"use client";

import { useState } from "react";
import React from "react";

export default function RequestService() {
  const [isSending, setisSending] = useState(false);
  const [formData, setformData] = useState({
    formType: "request",
    name: "",
    email: "",
    phone_number: "",
    location: "",
    nature_of_work: "",
    nature_of_work_specify: "",
    deadline: "",
    other_informations: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >,
  ) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisSending(true);

    const res = await fetch("https://pookers.onrender.com/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setisSending(false);

    if (res.ok) {
      setformData({
        formType: "request",
        name: "",
        email: "",
        phone_number: "",
        location: "",
        nature_of_work: "",
        nature_of_work_specify: "",
        deadline: "",
        other_informations: "",
      });
      alert("Service Request Sent Successfully!");
    } else alert("Failed to send. Try again later.\nNote: Error not from you.");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-[5%]">
        <form
          onSubmit={handleSubmit}
          className="w-[95%] md:w-[40%] flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="border px-5 py-3 outline-none text-[12px] md:text-sm"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nexon Nas"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border px-5 py-3 outline-none text-[12px] md:text-sm"
              placeholder="nexon@dev.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="border px-5 py-3 outline-none text-[12px] md:text-sm"
              placeholder="+234 90 000 000 0000"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border px-5 py-3 outline-none text-[12px] md:text-sm"
              placeholder="Lagos, Nigeria"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nature">Nature of work:</label>
            <select
              id="nature"
              name="nature_of_work"
              value={formData.nature_of_work}
              onChange={handleChange}
              className="border px-2 py-3 outline-none text-[12px] md:text-sm"
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
              onChange={handleChange}
              name="nature_of_work_specify"
              value={formData.nature_of_work_specify}
              className="border px-5 py-3 outline-none text-[12px] md:text-sm"
              placeholder="Cover Letter, Statement of Purpose, e.t.c"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="border px-5 py-3 outline-none text-[12px] md:text-sm"
            />
          </div>
          <textarea
            className="border px-5 py-3 outline-none text-[12px] md:text-sm h-[200px] w-full"
            name="other_informations"
            value={formData.other_informations}
            onChange={handleChange}
            placeholder="Other Informations"
          />
          <button
            disabled={isSending}
            type="submit"
            className="text-white text-[12px] md:text-sm bg-blue-600 hover:bg-blue-500 w-full text-center py-3"
          >
            {isSending ? "Requesting..." : "Send Request"}
          </button>
        </form>
      </div>
    </>
  );
}
