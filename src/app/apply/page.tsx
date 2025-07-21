"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function JoinTeam() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    try {
      const formData = new FormData(form);

      const response = await fetch(
        "https://formsubmit.co/josephlamidijoslam@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Application sent successfully! 🎉");
        router.push("/");
      } else {
        alert("Failed to send your application. ☹");
      }
    } catch {
      alert("Error submiting your application:");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-[5%]">
        <form
          ref={formRef}
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
              className="border px-5 py-3 outline-none text-sm"
              placeholder="+234 90 000 000 0000"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nature">Area of Strength/Interest:</label>
            <select
              id="nature"
              name="stsrength"
              className="border px-2 py-3 outline-none text-sm"
              required
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
              name="genre"
              className="border px-5 py-3 outline-none text-sm"
              placeholder="Cover Letter, Statement of Purpose, e.t.c"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="experience">Years of Experience:</label>
            <input
              type="number"
              id="experience"
              name="years_of_experience"
              className="border px-5 py-3 outline-none text-sm"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cv">Upload CV:</label>
            <input
              type="file"
              id="cv"
              name="cv"
              className="border px-5 py-3 outline-none text-sm"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Best Two Previous Works:</label>
            <div className="flex flex-row justify-between gap-2 w-full border p-3">
              <input
                type="file"
                className="border px-5 py-3 outline-none text-sm w-[50%]"
                accept="*.pdf"
                name="prev_work1"
                required
              />
              <input
                type="file"
                className="border px-5 py-3 outline-none text-sm w-[50%]"
                name="prev_work2"
                required
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
