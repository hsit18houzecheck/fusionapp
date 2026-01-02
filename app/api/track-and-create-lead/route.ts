// import { phClient } from "@common/ph-client";

export async function POST(req: Request) {
  const { userKey, ...body } = await req.json();

  const targetApiUrl = `${process.env.SNOW_BASE_URL}houch/hzchek_web_app/lead`;

  try {
    const response = await fetch(targetApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // phClient.capture({
    //   distinctId: userKey,
    //   event: "lp_surveyor_cta_clicked",
    // });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
