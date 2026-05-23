import { Resend } from "resend";

export async function POST(req) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const emailSubject = subject?.trim()
      ? subject.trim()
      : `Message from ${name} via sinmisolaasaolu.com`;

    const { error } = await resend.emails.send({
      from: "Sinmisola Asaolu Website <onboarding@resend.dev>",
      to: ["collectionsfirstlady@gmail.com"],
      replyTo: email,
      subject: emailSubject,
      text: `You have a new message from sinmisolaasaolu.com\n\nName: ${name}\nEmail: ${email}\nSubject: ${emailSubject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#c9a24c;border-bottom:1px solid #eee;padding-bottom:12px">
            New message from sinmisolaasaolu.com
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:bold;width:90px">Name</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Subject</td><td>${emailSubject}</td></tr>
          </table>
          <div style="margin-top:20px">
            <p style="font-weight:bold;margin-bottom:8px">Message</p>
            <div style="background:#f9f9f9;padding:16px;border-radius:4px;white-space:pre-wrap">${message}</div>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#999">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
