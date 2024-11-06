import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex-1 overflow-x-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-indigo-600 text-base font-semibold leading-7">Your Interactive Document Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
            </p>
            <p className="mt-4">Introducing{" "}<span className="text-indigo-600 font-semibold">chat with PDF</span></p>
            <p className="mt-5">Upload your document, and our chatbot will answer questions,summarize content,
              and answer all your Qs. Ideal for everyone.{""}<span className="text-indigo-600 font-semibold">chat with PDF</span> turns static document into {""}
              <span className="text-black-600 font-semibold">dynamic conversation,</span>  enhancing productivity 10x fold effortlessly.
            </p>

          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard"> Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
             alt="App screenshot"
             src="/assets/ss.jpeg"
             width={2432}
             height={1442}
             className="mb-[-0%] rounded-xl shadow-2xlring-1 ring-gray-900/10"
             />
             <div aria-hidden="true" className="relative"></div>
          </div>
        </div>
      </div>
    </main>
  );

}
