import { minikitConfig } from "@/minikit.config";

export const dynamic = "force-static";

export async function GET() {
  return Response.json(minikitConfig);
}
