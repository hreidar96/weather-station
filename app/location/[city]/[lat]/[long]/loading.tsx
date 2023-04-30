import { SunIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
      />
      <h1 className="text-2xl sm:text-4x md:text-6xl font-bold text-center mb-10 animate-pulse">
        Hleð veðurupplýsingum, vinsamlegst bíðið
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hægan hægan, við erum að hnoða saman tölunum og bíðum eftir
        veðursamantekt frá Chat-GPT!
      </h2>
    </div>
  );
}

export default Loading;
