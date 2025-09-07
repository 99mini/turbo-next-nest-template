export async function GET() {
  const response = { status: 200, message: 'Hello from the Next.js API' };
  return Response.json(response);
}
