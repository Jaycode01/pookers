"use client";

import { useState } from "react";
export default function JoinTeam() {
  const [isSending, setisSending] = useState(false);
  const [formData, setformData] = useState({
    formType: "join",
    name: "",
    email: "",
    phoneNumber: "",
    strength: "",
    genre: "",
    years_of_experience: "",
    cv: "",
    prev_work1_url: "",
    prev_work2_url: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisSending(true);

    const res = await fetch("../api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setisSending(false);

    if (res.ok) {
      alert("Application to Join Sent Successfull!");
      setformData({
        formType: "join",
        name: "",
        email: "",
        phoneNumber: "",
        strength: "",
        genre: "",
        years_of_experience: "",
        cv: "",
        prev_work1_url: "",
        prev_work2_url: "",
        message: "",
      });
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
              className="border px-5 py-3 outline-none text-sm"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nexon Nas"
              required
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
              className="border px-5 py-3 outline-none text-sm"
              placeholder="nexon@dev.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border px-5 py-3 outline-none text-sm"
              placeholder="+234 90 000 000 0000"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nature">Area of Strength/Interest:</label>
            <select
              id="nature"
              name="strength"
              value={formData.strength}
              onChange={handleChange}
              className="border px-2 py-3 outline-none text-sm"
              required
            >
              <option value="none" defaultValue="none">
                Choose your strength
              </option>
              <option value="Writing">Writing</option>
              <option value="Editing">Editing</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="genre">Genre of Writing:</label>
            <input
              type="text"
              id="genre"
              onChange={handleChange}
              name="genre"
              value={formData.genre}
              className="border px-5 py-3 outline-none text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="experience">Years of Experience:</label>
            <input
              type="number"
              id="experience"
              onChange={handleChange}
              name="years_of_experience"
              value={formData.years_of_experience}
              className="border px-5 py-3 outline-none text-sm"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cv">CV:</label>
            <input
              type="url"
              id="cv"
              name="cv"
              value={formData.cv}
              onChange={handleChange}
              className="border px-5 py-3 outline-none text-sm"
              placeholder="Link to CV"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Best Two Previous Works(Url):</label>
            <div className="flex flex-row justify-between gap-2 w-full border p-3">
              <input
                type="url"
                onChange={handleChange}
                className="border px-5 py-3 outline-none text-sm w-[50%]"
                name="prev_work1_url"
                value={formData.prev_work1_url}
                required
              />
              <input
                type="url"
                onChange={handleChange}
                className="border px-5 py-3 outline-none text-sm w-[50%]"
                name="prev_work2_url"
                value={formData.prev_work2_url}
                required
              />
            </div>
          </div>
          <button
            disabled={isSending}
            type="submit"
            className="text-white text-sm bg-blue-600 hover:bg-blue-500 w-full text-center py-3"
          >
            {isSending ? "Applying..." : "Apply"}
          </button>
        </form>
      </div>
    </>
  );
}
