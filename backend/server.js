import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const data = req.body;
  const { formType } = data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
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
      return res.status(400).json({ error: "Unknown form type" });
  }

  try {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject,
      html,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
