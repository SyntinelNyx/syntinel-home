import { NextRequest } from "next/server";

export const dynamic = "auto";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return new Response("Discord webhook URL is not configured", {
      status: 500,
    });
  }

  const data = {
    embeds: [
      {
        title: "New Contact Form Submission",
        fields: [
          { name: "Name", value: name },
          { name: "Email", value: email },
          { name: "Message", value: message },
        ],
        color: 5814783,
      },
    ],
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Discord API responded with status: ${res.status}`);
    }

    return new Response("Message sent to Discord successfully", {
      status: 200,
    });
  } catch (err) {
    console.error("Error sending to Discord:", err);
    return new Response("Failed to send message to Discord", { status: 500 });
  }
}
