// import nodemailer from "nodemailer";
// import { WELCOME_EMAIL_TEMPLATE } from "./templatest";

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.NODEMAILER_EMAIL!,
//     pass: process.env.NODEMAILER_PASSWORD!,
//   },
// });

// export const sendWelcomeEmail = async ({
//   email,
//   name,
//   intro,
// }: WelcomeEmailData) => {
//   const htmlTempalete = WELCOME_EMAIL_TEMPLATE.replace(
//     "{{name}}",
//     name
//   ).replace("{{intro}}", intro);

//   const mailOptions = {
//     from: `"Signalist" <signalist@support.team>`,
//     to: email,
//     subject: `Welcome to Signalist - your stock market toolkit  is ready!`,
//     text: "Thank for joining Signalist",
//     html: htmlTempalete,
//   };

//   await transporter.sendMail(mailOptions);
// };

import { Resend } from "resend";
import { WELCOME_EMAIL_TEMPLATE } from "./templatest";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  console.log("=== DEBUG: sendWelcomeEmail called ===");
  console.log("Email:", email);
  console.log("Name:", name);
  console.log("Intro:", intro);
  console.log("Intro type:", typeof intro);
  console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

  // Проверяем, что intro не null/undefined
  if (!intro || intro === "null") {
    console.error("ERROR: intro is null or undefined!");
    throw new Error("Intro text is missing");
  }

  const htmlTempalete = WELCOME_EMAIL_TEMPLATE.replace(
    "{{name}}",
    name
  ).replace("{{intro}}", intro);

  console.log("HTML template length:", htmlTempalete.length);
  console.log("Template contains {{name}}:", htmlTempalete.includes("{{name}}"));
  console.log("Template contains {{intro}}:", htmlTempalete.includes("{{intro}}"));

  try {
    const result = await resend.emails.send({
      from: "Signalist <onboarding@resend.dev>",
      to: email,
      subject: `Welcome to Signalist - your stock market toolkit is ready!`,
      html: htmlTempalete,
    });
    console.log("=== Email sent successfully ===");
    console.log("Resend result:", result);
    return result;
  } catch (error) {
    console.error("=== ERROR sending email ===");
    console.error("Error:", error);
    throw error;
  }
};
