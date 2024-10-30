import Card from "../islands/Card.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#0D1117] text-white min-h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/github.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Better GitHub Skills</h1>
        <p class="my-4">
          Showcase your concise GitHub skills on a minimalist card
        </p>
        <div class="my-4 hover:-translate-y-1 transition-transform">
          <Card />
        </div>
        <h1 class="text-xl my-4">Example:</h1>
        <div class="my-2 mb-4">
          <img
            src="/screenshots/example.png"
            alt="example screenshot"
            class="shadow-2xl rounded-xl border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}
