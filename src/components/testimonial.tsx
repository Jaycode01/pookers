import React from "react";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <>
      <div className="overflow-hidden w-full bg-gray-100 py-10 flex flex-col gap-16">
        <div className="mt-20 flex flex-col gap-2 justify-center items-center w-[90%] md:w-[40%] text-center mx-auto">
          <button
            type="button"
            className="text-sm border border-gray-600 py-3 px-7 rounded-md text-gray-600"
          >
            Testimonials
          </button>
          <h2 className="text-[22px] md:text-[40px]">Our Success Story</h2>
          <p className="text-[15px] md:text-[17px]">
            Real feedback from real clients who we have helped on their projects
            and ideas with our writing and editing service.
          </p>
        </div>
        <div className="flex w-max animate-scroll gap-5 px-5">
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Pookers prepared my CV and Cover Letter for a job in a
              multinational company. I {`didn't`} know my CV and Cover Letter
              could be compelling. My career has found essence with Pookers
              Literary & Editing World
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <img
                src="/images/photo_avatar_male.jpeg"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-0.5">
                <span className="font-semibold">Segun, Umoru</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              After the first publication of my novel, The Secret Killer, I knew
              I needed a professional editor to give it the life and touch it
              needed. Deciding who the editor would be was daunting and held me
              back for a few years from revising and editing the book. Then, I
              met Oluwasegun Ikuforiji, the editor-in-chief of Pookers Literary
              & Editing World. He assured me that the puzzle in my head would be
              solved. And he and his team actually did. Their input in the novel
              is virtuoso, to say the least. I’m glad I met them. In Pookers, I
              have found great comfort. They are indeed solution providers.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <img
                src="/images/photo_avatar_female.png"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-0.5">
                <span className="font-semibold">Faith Ozioma Peter Diji</span>
                <span className="text-sm">Author, The Secret Killer</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              At some point, I needed a booklet with creative content to
              showcase to the world what I do in my NGO focused on restoring
              inmates. The moment I was referred to Pookers, my story became
              different. Through the letters and other writing by {`Pookers's`}
              seasoned writers, our donors have now increased nationally and
              internationally
            </p>
            <div className="mt-5 flex flex-row gap-2 items-center">
              <img
                src="/images/photo_avatar_female.png"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-0.5">
                <span className="font-semibold">Mrs Amaka</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              I had the IELTS exam to take a month to the virtual Elegant
              Writing Course taught periodically by Oluwasegun Ikuforiji, the
              editor-in-chief of Pookers Literary & Editing World, sometime in
              November 2020. I needed a 7 band score or above to qualify.
              Through the 21-day online extensive training, I was able to brush
              up my writing skills and improve on my grammar before the exam.
              Guess what! I got a 7. Now I write better business correspondence
              and opinions for my company. The training was absolutely worth it.
            </p>
            <div className="mt-5 flex flex-row items-center gap-2">
              <img
                src="/images/photo_avatar_male.jpeg"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-0.5">
                <span className="font-semibold">Efe John</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              I had a deadline for submitting a Statement of Purpose in a
              research-intensive university in the UK for master’s admissions. I
              never knew the work could be completed within such a short time.
              Pookers was my hope when I had none
            </p>
            <div className="mt-5 flex flex-row items-center gap-2">
              <img
                src="/images/photo_avatar_female.png"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5 h-fit"
              />

              <p className="flex flex-col gap-0.5">
                <span className="font-semibold">Sandra</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              I had serious reservations about virtual classes. So, when I was
              informed that the 21-day Elegant Writing Course would be virtual,
              I was scared of enrolling because I preferred physical classes.
              However, to my greatest surprise, when the training commenced, it
              was more or less like a physical session, as everyone was carried
              along. The training opened my eyes to common mistakes and gave me
              a thorough grasp of the proper use of punctuation marks. I’m glad
              I {`didn't`} miss the great opportunity, and I will recommend any
              {`Pookers's`} writing course to anyone willing to be an elegant
              writer
            </p>
            <div className="mt-5 flex flex-row gap-2 items-center">
              <img
                src="/images/photo_avatar_female.png"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Titilope, Oluwatayo</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              Since I engaged Pookers for weekly reports and articles on my
              youth campaign programmes, the result has been tremendous. You are
              the best! writer
            </p>
            <div className="mt-5 flex flex-row gap-2 items-center">
              <img
                src="/images/photo_avatar_male.jpeg"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Oludamola, Ogidan</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-gray-200 w-[400px] p-5 h-fit">
            <div className="flex w-full justify-end text-gray-400">
              <Quote />
            </div>
            <p className="text-[15px]">
              I recently had the privilege of participating in The Business of
              Ghostwriting training, and it was a truly transformative
              experience. The program was mind-blowing, and I gained invaluable
              insights into the art of ghostwriting. One of the key takeaways
              for me is the importance of carving out a writing niche and
              harnessing my writing skills to stand out in the industry. I am
              deeply grateful to Pookers for delivering such as high-quality
              program, especially in today’s era where many people have
              neglected their writing skills. This training has reignited my
              passion for writing, and I’m eager to apply the skills I’ve
              learned. I wholeheartedly recommend Pookers’s training to anyone
              looking to elevate their writing skills and take their writing to
              the next level.
            </p>
            <div className="mt-5 flex flex-row gap-2 items-center">
              <img
                src="/images/photo_avatar_female.png"
                alt="customer avatar"
                className="border-2 border-orange-600 rounded-full w-[50px] p-1.5"
              />

              <p className="flex flex-col gap-1.5">
                <span className="font-semibold">Chioma, Okonkwo</span>
                <span className="text-sm">Client</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
