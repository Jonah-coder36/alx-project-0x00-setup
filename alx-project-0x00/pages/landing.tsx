import Card from "@/components/Card"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  )
}

'use client';

import Button from '@/components/Button';

export default function LandingPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Landing Page Buttons</h1>

      <div className="space-y-4">
        <h2 className="font-semibold">Small Buttons</h2>
        <div className="flex gap-4">
          <Button title="Small SM" styles="text-sm rounded-sm" />
          <Button title="Small MD" styles="text-sm rounded-md" />
          <Button title="Small FULL" styles="text-sm rounded-full" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold">Medium Buttons</h2>
        <div className="flex gap-4">
          <Button title="Medium SM" styles="text-base rounded-sm" />
          <Button title="Medium MD" styles="text-base rounded-md" />
          <Button title="Medium FULL" styles="text-base rounded-full" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold">Large Buttons</h2>
        <div className="flex gap-4">
          <Button title="Large SM" styles="text-lg rounded-sm" />
          <Button title="Large MD" styles="text-lg rounded-md" />
          <Button title="Large FULL" styles="text-lg rounded-full" />
        </div>
      </div>
    </main>
  );
}