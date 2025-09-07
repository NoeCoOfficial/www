import validator from "validator";
import { checkBotId } from "botid/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const verification = await checkBotId();

  if (verification.isBot) {
    return NextResponse.json(
      { success: false, message: "Access denied" },
      { status: 403 },
    );
  }

  let email;
  try {
    ({ email } = await request.json());
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid JSON body" }),
      {
        status: 400,
      },
    );
  }

  if (!email) {
    return new Response(
      JSON.stringify({ success: false, message: "Email is required" }),
      {
        status: 400,
      },
    );
  }

  if (!validator.isEmail(email)) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid email address" }),
      {
        status: 400,
      },
    );
  }

  return new Response(
    JSON.stringify({ success: true, message: "Email subscribed successfully" }),
    {
      status: 200,
    },
  );
}

async function subscribe(email: string) {
  const url = "https://api.kit.com/v4/subscribers";
  const options = {
    method: "POST",
    headers: {
      "X-Kit-Api-Key": "<api-key>",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
