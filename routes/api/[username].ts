import { FreshContext } from "$fresh/server.ts";
import * as icons from "../../icons/icons.tsx";

const iconsRecord: Record<string, (x: string, y: string) => string> = Object
  .fromEntries(
    Object.entries(icons).filter(([_, fn]) => typeof fn === "function"),
  );

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
  <title>${jsonData.login} Skills Card</title>
  <rect fill="#fff" stroke="#000" x="377.16666" y="269.16667" width="1" height="0" id="svg_2"/>
  <rect fill="#fff" stroke="#000" x="49.16666" y="9.16667" width="5" height="0" id="svg_3"/>
  <rect rx="19" id="svg_1" height="210" width="400" y="0" x="-0.10999" stroke="#3d444d" fill="#151b23"/>
  <line fill="none" stroke="#3d444d" x1="10" y1="100" x2="390" y2="100" id="svg_4"/>
  <text fill="#fafafa" stroke="#3d444d" stroke-width="0" x="95" y="43.22234" id="svg_5" font-size="20" text-anchor="start" xml:space="preserve" font-style="normal" style="font-family: 'JetBrains Mono', monospace;">${jsonData.login}</text>
  <text fill="#fafafa" stroke="#3d444d" stroke-width="0" x="95" y="71.88901" id="svg_6" font-size="16"  text-anchor="start" xml:space="preserve" font-style="normal" style="font-family: 'JetBrains Mono', monospace;" fill-opacity="0.8">${jsonData.name}</text>
  <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 20 20" x="20" y="20">
	<path fill="white" d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08c0-.443-.156-.856-.527-1.197c-.622-.571-1.671-.268-2.862-.268M8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908s.657.406.657.908c.001.502-.293.91-.657.91m3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908c.001.502-.293.91-.656.91M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m.876 13.539c-.172 0-.514 0-.876.002c-.362-.002-.704-.002-.876-.002c-.76 0-3.772-.059-3.772-3.689c0-.834.286-1.445.755-1.955c-.074-.184-.078-1.232.32-2.236c0 0 .916.1 2.301 1.051c.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051c.398 1.004.395 2.053.32 2.236c.469.51.755 1.121.755 1.955c-.001 3.632-3.013 3.69-3.773 3.69" />
  </svg>
  <g id="svg_35">
   <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" id="svg_9" x="290.05911" y="9.25542" fill="#fafafa">
    <path fill="#fafafa" fill-opacity="0" d="m12,8c0,0 0,0 0.76,-1c0.88,-1.16 2.18,-2 3.74,-2c2.49,0 4.5,2.01 4.5,4.5c0,0.93 -0.28,1.79 -0.76,2.5c-0.81,1.21 -8.24,9 -8.24,9c0,0 -7.43,-7.79 -8.24,-9c-0.48,-0.71 -0.76,-1.57 -0.76,-2.5c0,-2.49 2.01,-4.5 4.5,-4.5c1.56,0 2.87,0.84 3.74,2c0.76,1 0.76,1 0.76,1z" id="svg_11"/>
    <path fill="#fafafa" stroke="currentColor" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12,8c0,0 0,0 -0.76,-1c-0.88,-1.16 -2.18,-2 -3.74,-2c-2.49,0 -4.5,2.01 -4.5,4.5c0,0.93 0.28,1.79 0.76,2.5c0.81,1.21 8.24,9 8.24,9m0,-13c0,0 0,0 0.76,-1c0.88,-1.16 2.18,-2 3.74,-2c2.49,0 4.5,2.01 4.5,4.5c0,0.93 -0.28,1.79 -0.76,2.5c-0.81,1.21 -8.24,9 -8.24,9" id="svg_10"/>
   </svg>
   <text fill="#fafafa" stroke="#fafafa" stroke-width="0" x="323.72047" y="30.08876" id="svg_27" font-size="15"  text-anchor="start" xml:space="preserve" font-style="normal" style="font-family: 'JetBrains Mono', monospace;">${jsonData.followers}</text>
  </g>
  <g id="svg_43">
   <text fill="#fafafa" stroke="#fafafa" stroke-width="0" x="323.30632" y="65.80392" id="svg_22" font-size="15"  text-anchor="start" xml:space="preserve" font-style="normal" style="font-family: 'JetBrains Mono', monospace;">${jsonData.following}</text>
   <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" id="svg_13" x="289.33334" y="45.33333">
    <path fill="white" d="m12,12q-1.65,0 -2.825,-1.175t-1.175,-2.825t1.175,-2.825t2.825,-1.175t2.825,1.175t1.175,2.825t-1.175,2.825t-2.825,1.175m-8,8l0,-2.8q0,-0.85 0.438,-1.562t1.162,-1.088q1.55,-0.775 3.15,-1.162t3.25,-0.388t3.25,0.388t3.15,1.162q0.725,0.375 1.163,1.088t0.437,1.562l0,2.8l-16,0z" id="svg_14"/>
   </svg>
  </g>
  <g id="svg_60">
  ${iconsRecord[techs[0]]?.("42", "121") || ""}
  ${iconsRecord[techs[1]]?.("126", "121") || ""}
  ${iconsRecord[techs[2]]?.("210", "121") || ""}
  ${iconsRecord[techs[3]]?.("294", "121") || ""}
  </g>
 </g>
 <defs>
  <clipPath id="clip">
   <rect id="svg_8" ry="50" rx="50" height="60" width="60" y="20" x="20"/>
  </clipPath>
 </defs>
 <defs>
    <style type="text/css">@import url('https://fonts.googleapis.com/css?family=JetBrains+Mono');</style>
  </defs>
</svg>
    `;

  return new Response(htmlContent, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};
