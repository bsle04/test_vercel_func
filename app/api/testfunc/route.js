// app/api/testfunc/route.js

export async function GET(req) {
  return new Response(JSON.stringify({ message: "Hello from Next.js API Route!" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const body = await req.json();
  return new Response(JSON.stringify({ received: body }), {
    headers: { "Content-Type": "application/json" },
  });
}
