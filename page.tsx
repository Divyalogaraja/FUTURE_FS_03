import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, PiggyBank, Baby, HeartPulse } from 'lucide-react';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-8">
      <Image src="/LIC-logo.png" alt="LIC Logo" width={200} height={100} />
      <h1 className="text-4xl font-bold text-blue-700 mt-6">
        Welcome to LIC Rebrand
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">
        Explore our new look and discover LIC's plans.
      </p>

      <Link href="/plans">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View Plans
        </button>
      </Link>
    </main>
  );
}