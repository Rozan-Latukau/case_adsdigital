import { getCsrfToken } from "next-auth/react";

// export async function GET(req, res) {
//   const csrfToken = await getCsrfToken({ req });
//   return res.status(200).json({ csrfToken });
// }

export async function GET(req) {
  try {
    const csrfToken = await getCsrfToken({ req });
    return new Response(JSON.stringify({ csrfToken }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching CSRF token" }), { status: 500 });
  }
}
