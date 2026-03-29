import validator from "validator";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let email;
  let source;
  try {
    ({ email, source } = await request.json());
  } catch {
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

  try {
    await subscribe(email, source);
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong" }),
      {
        status: 500,
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

async function subscribe(email: string, source: string) {
  const url = "https://api.kit.com/v4/subscribers";
  const options = {
    method: "POST",
    headers: {
      "X-Kit-Api-Key": process.env.KIT_API_KEY || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      fields: {
        source,
      },
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.error(response.status);
      console.error(response.json());
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
