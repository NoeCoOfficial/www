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
