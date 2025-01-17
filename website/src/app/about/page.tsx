'use client'

import Image from 'next/image'
import Icon from '@/components/Icon'

// About / More Info page
export default function About() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center pt-navbar-height">
      <div className="flex flex-col items-center max-w-[800px] m-4 p-4 lg:p-8 bg-gray-900 rounded-md">
        <h2 className="text-4xl text-center font-bold mb-4">ABOUT THE CHAPGPT PROJECT</h2>
        <p className="text-gray-300">ChapGPT is a custom tailored AI chat bot that can help answer all your questions about College of Dupage! We are using the Google Gemini Pro language model, along with a database of all publically available resources on the COD website. This project is a combination of custom made tooling, backend, and frontend components. We hope you enjoy our project!<br /><br /><em>- COD Computer Science Club</em></p>
        <p className="text-xl text-white font-bold mt-6">Project Contributors</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>
            Alex Yamada -&nbsp;
            <a href="mailto:alex.yamada8@gmail.com" target="_blank" className="text-blue-500 hover:underline">alex.yamada8@gmail.com</a>
            <span className="text-gray-400">&nbsp; (Project Lead)</span>
          </li>
          <li>
            Wojtek Kulak -&nbsp;
            <a href="mailto:wkulak3@gmail.com" target="_blank" className="text-blue-500 hover:underline">wkulak3@gmail.com</a>
          </li>
          <li>
            Andrea Marcelli -&nbsp;
            <a href="mailto:ilmarcedesign@gmail.com" target="_blank" className="text-blue-500 hover:underline">donmarcelostudio@protonmail.com</a>
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <a href="https://github.com/cod-cs-club/AI-Chat-Bot" target="_blank" className="flex items-center gap-2 p-2 bg-black rounded-lg hover:brightness-80">
            <Image src="/github.png" alt="GitHub" width="40" height="40" className="rounded-full bg-white" />
            <span className="text-lg">View Source Code</span>
          </a>
          <a href="https://discord.gg/uzBEgApK9K" target="_blank" className="flex items-center gap-2 p-2 bg-blue-600 rounded-lg hover:brightness-80">
            <Image src="/discord.png" alt="Discord" width="40" height="40" className="rounded-full bg-white" />
            <span className="text-lg">Join Our Discord</span>
          </a>
        </div>
      </div>
    </main>
  )
}