export default function JoinTeam() {
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
              name="strength"
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
              name="genre"
              className="border px-5 py-3 outline-none text-sm"
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
            <label htmlFor="cv">CV Url:</label>
            <input
              type="url"
              id="cv"
              name="cv_url"
              className="border px-5 py-3 outline-none text-sm"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Best Two Previous Works(Url):</label>
            <div className="flex flex-row justify-between gap-2 w-full border p-3">
              <input
                type="url"
                className="border px-5 py-3 outline-none text-sm w-[50%]"
                name="prev_work1_url"
                required
              />
              <input
                type="url"
                className="border px-5 py-3 outline-none text-sm w-[50%]"
                name="prev_work2_url"
                required
              />
            </div>
          </div>
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
