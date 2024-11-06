import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FaGlobeAsia, FaEye } from 'react-icons/fa';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbMessageChatbotFilled } from "react-icons/tb";

const features = [
  {
    name: "Global Access",
    description: "Keep all your PDF files securely stored and easily accessible anytime, anywhere.",
    icon: FaGlobeAsia,
  },
  {
    name: "Lightning Fast",
    description: "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: BsFillLightningChargeFill,
  },
  {
    name: "Intelligent Chatbot",
    description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon: TbMessageChatbotFilled,
  },
  {
    name: "Interactive Viewer",
    description: "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: FaEye,
  },
  {
    name: "Global Access",
    description: "Keep all your PDF files securely stored and easily accessible anytime, anywhere.",
    icon: FaGlobeAsia,
  },
  {
    name: "Lightning Fast",
    description: "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: BsFillLightningChargeFill,
  }
];

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
            <p className="mt-4">Introducing <span className="text-indigo-600 font-semibold">chat with PDF</span></p>
            <p className="mt-5">Upload your document, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for everyone. <span className="text-indigo-600 font-semibold">chat with PDF</span> turns static documents into <span className="text-black-600 font-semibold">dynamic conversations</span>, enhancing productivity 10x effortlessly.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="/assets/ss.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-9 bg-gray-100 rounded-lg p-6 shadow-md">
                <dt className="font-semibold text-gray-900 flex items-center mb-3">
                  {feature.icon && <feature.icon aria-hidden="true" className="mr-3 h-6 w-6 text-indigo-600" />}
                  <span className="text-lg font-bold text-indigo-800">{feature.name}</span>
                </dt>
                <dd className="text-gray-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
