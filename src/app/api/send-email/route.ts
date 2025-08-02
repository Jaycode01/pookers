import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { formType } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_RECEIVER,
    },
  });

  let subject = "";
  let html = "";

  switch (formType) {
    case "contact":
      subject = `Contact Form: ${data.name}`;
      html = `
        <p><strong>Full Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phone_number}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `;
      break;

    case "request":
      subject = `Request Services: ${data.name}`;
      html = `
        <p><strong>Full Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phone_number}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Nature of Work:</strong> ${data.nature_of_work}</p>
        <p><strong>Specify Work:</strong> ${data.nature_of_work_specify}</p>
        <p><strong>Deadline:</strong> ${data.deadline}</p>
        <p><strong>Other Info:</strong> ${data.other_informations}</p>
      `;
      break;

    case "join":
      subject = `Join Pookers Team: ${data.name}`;
      html = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
        <p><strong>Area of Strength:</strong> ${data.strength}</p>
        <p><strong>Genre of Writing:</strong> ${data.genre}</p>
        <p><strong>Years of Experience:</strong> ${data.years_of_experience}</p>
        <p><strong>CV URL:</strong> ${data.cv}</p>
        <p><strong>Previous Work 1:</strong> ${data.prev_work1_url}</p>
        <p><strong>Previous Work 2:</strong> ${data.prev_work2_url}</p>
      `;
      break;

    default:
      return NextResponse.json({ error: "Unknown form type" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
