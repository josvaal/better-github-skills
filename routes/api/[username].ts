import { FreshContext } from "$fresh/server.ts";
import { java, js, spring, ts } from "../../icons/icons.tsx";

const icons: Record<string, (x: string, y: string) => string> = {
  js,
  java,
  spring,
  ts,
};

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const url = new URL(_req.url);

  const techsParam = url.searchParams.get("techs");

  const techs = techsParam ? techsParam.split(",") : [];

  const { username } = _ctx.params;

  if (!username) {
    return new Response(
      JSON.stringify({ success: false, message: "No username provided" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const jsonResponse = await fetch(`https://api.github.com/users/${username}`);
  const jsonData = await jsonResponse.json();

  if (jsonData.status === "404") {
    return new Response(
      JSON.stringify({ success: false, message: "User not found" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const htmlContent = `
<svg width="400" height="210" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>Layer 1</title>
  <rect fill="#fff" stroke="#000" x="377.16666" y="269.16667" width="1" height="0" id="svg_2"/>
  <rect fill="#fff" stroke="#000" x="49.16666" y="9.16667" width="5" height="0" id="svg_3"/>
  <rect rx="19" id="svg_1" height="210" width="400" y="0" x="-0.10999" stroke="#3d444d" fill="#151b23"/>
  <line fill="none" stroke="#3d444d" x1="10" y1="90" x2="390" y2="90" id="svg_4"/>
  <text fill="#fafafa" stroke="#3d444d" stroke-width="0" x="95" y="43.22234" id="svg_5" font-size="20" font-family="'JetBrains Mono'" text-anchor="start" xml:space="preserve" font-style="normal">${jsonData.login}</text>
  <text fill="#fafafa" stroke="#3d444d" stroke-width="0" x="95" y="71.88901" id="svg_6" font-size="16" font-family="'JetBrains Mono'" text-anchor="start" xml:space="preserve" font-style="normal" fill-opacity="0.8">${jsonData.name}</text>
  <image clip-path="url(#clip)" y="20" width="60" height="60" href="${jsonData.avatar_url}" id="svg_7" x="20"/>
  <g id="svg_35">
   <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" id="svg_9" x="290.05911" y="9.25542" fill="#fafafa">
    <path fill="#fafafa" fill-opacity="0" d="m12,8c0,0 0,0 0.76,-1c0.88,-1.16 2.18,-2 3.74,-2c2.49,0 4.5,2.01 4.5,4.5c0,0.93 -0.28,1.79 -0.76,2.5c-0.81,1.21 -8.24,9 -8.24,9c0,0 -7.43,-7.79 -8.24,-9c-0.48,-0.71 -0.76,-1.57 -0.76,-2.5c0,-2.49 2.01,-4.5 4.5,-4.5c1.56,0 2.87,0.84 3.74,2c0.76,1 0.76,1 0.76,1z" id="svg_11"/>
    <path fill="#fafafa" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12,8c0,0 0,0 -0.76,-1c-0.88,-1.16 -2.18,-2 -3.74,-2c-2.49,0 -4.5,2.01 -4.5,4.5c0,0.93 0.28,1.79 0.76,2.5c0.81,1.21 8.24,9 8.24,9m0,-13c0,0 0,0 0.76,-1c0.88,-1.16 2.18,-2 3.74,-2c2.49,0 4.5,2.01 4.5,4.5c0,0.93 -0.28,1.79 -0.76,2.5c-0.81,1.21 -8.24,9 -8.24,9" id="svg_10"/>
   </svg>
   <text fill="#fafafa" stroke="#fafafa" stroke-width="0" x="323.72047" y="30.08876" id="svg_27" font-size="15" font-family="'JetBrains Mono'" text-anchor="start" xml:space="preserve" font-style="normal">${jsonData.followers}</text>
  </g>
  <g id="svg_43">
   <text fill="#fafafa" stroke="#fafafa" stroke-width="0" x="323.30632" y="65.80392" id="svg_22" font-size="15" font-family="'JetBrains Mono'" text-anchor="start" xml:space="preserve" font-style="normal">${jsonData.following}</text>
   <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" id="svg_13" x="289.33334" y="45.33333">
    <path fill="white" d="m12,12q-1.65,0 -2.825,-1.175t-1.175,-2.825t1.175,-2.825t2.825,-1.175t2.825,1.175t1.175,2.825t-1.175,2.825t-2.825,1.175m-8,8l0,-2.8q0,-0.85 0.438,-1.562t1.162,-1.088q1.55,-0.775 3.15,-1.162t3.25,-0.388t3.25,0.388t3.15,1.162q0.725,0.375 1.163,1.088t0.437,1.562l0,2.8l-16,0z" id="svg_14"/>
   </svg>
  </g>
  <g id="svg_60">
  ${icons[techs[0]]("42", "121")}       // Primer ícono
  ${icons[techs[1]]("126", "121")}      // Segundo ícono
  ${icons[techs[2]]("210", "121")}      // Tercer ícono
  ${icons[techs[3]]("294", "121")}      // Cuarto ícono
  </g>
 </g>
 <defs>
  <clipPath id="clip">
   <rect id="svg_8" ry="50" rx="50" height="60" width="60" y="20" x="20"/>
  </clipPath>
 </defs>
</svg>
    `;

  return new Response(htmlContent, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};
