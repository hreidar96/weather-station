"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-3xl font-bold text-center mb-10 sm:text-4xl lg:text-6xl">
          Veðurstöðin
        </Text>
        <Subtitle className="text-xl text-center">
          Keyrt áfram af OpenAI, Next.js, TailwindCSS, Tremor 2.0 + meira!
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
      <footer className="mt-5">
        <Link href={"https://open-meteo.com/"}>
          Weather data by Open-Meteo.com
        </Link>
      </footer>
    </div>
  );
}
