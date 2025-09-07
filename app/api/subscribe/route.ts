import validator from "validator";

export async function POST(request: Request) {
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
