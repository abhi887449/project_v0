import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[var(--vanilla)] text-yellow-100 p-6">
  <h1 className="text-red-600 text-2xl font-bold">RedRacoon</h1>
  <p className="text-orange-500">Loading animation coming soon...</p>
  <button className="bg-amber-400 text-blue-950 px-4 py-2 rounded-full">
    Click Me
  </button>
</div>
  );
}
