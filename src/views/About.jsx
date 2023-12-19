import './about.css';
import Team from "../components/Team";
import { useState } from 'react';

export default function AboutView() {
  const [dev, setDev] = useState(0);
  const [content, setContent] = useState(0);
  const [organizers, setOrganizers]=useState(0);
   const [design, setDesign] = useState(0);
  const [marketing, setMarketing]=useState(0);
  return (
    <div style={{ padding: '30px' }}>
      <div className="card grid grid-cols-1 items-center sm:grid-cols-4">
        <div className='col-span-1 text-center'>
          <h1>abcd</h1>
        </div>
        <div className='col-span-3'>
          <h1 className='title'>About GenAI Hack</h1>
          <div style={{ height: 15 }}></div>
          <p className="genai-short-for">
            &#34;GenAI,&#34; short for &#34;Generative AI,&#34; represents a
            category of artificial intelligence systems capable of autonomously
            generating various forms of content, such as text, images, music, or
            software. These systems leverage advanced techniques like neural
            networks and deep learning to produce creative, realistic, or
            human-like content. GPT-3, the model powering this conversation,
            serves as an example of GenAI, excelling in natural language
            understanding and generation. GenAI finds applications across
            diverse domains, including chatbots, content generation, image
            synthesis, and more, and continues to evolve as a pivotal field in
            AI&#34;GenAI,&#34; short for &#34;Generative AI,&#34; represents a
            category of artificial intelligence systems capable of autonomously
            generating various forms of content, such as text, images, music, or
            software. These systems leverage advanced techniques like neural
            networks and deep learning to produce creative, realistic, or
            human-like content. GPT-3, the model powering this conversation,
            serves as an example of GenAI, excelling in natural language
            understanding and generation. GenAI finds applications across
            diverse domains, including chatbots, content generation, image
            synthesis, and more, and continues to evolve as a pivotal field in
            AI
          </p>
        </div>
      </div>
      
      <div style={{ height: 80 }}></div>
      <h1 className='title'>Steps to Register</h1>
      <div style={{ height: 25 }}></div>
      <div className='grid sm:grid-cols-3 gap-4 text-center grid-cols-1'>
        <div className="card">
          <h1 className="title">1</h1>
          <div style={{ height: 15 }}></div>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div className="card">
          <h1 className="title">2</h1>
          <div style={{ height: 15 }}></div>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div className="card">
          <h1 className="title">3</h1>
          <div style={{ height: 15 }}></div>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div className="card">
          <h1 className="title">4</h1>
          <div style={{ height: 15 }}></div>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div className="card">
          <h1 className="title">5</h1>
          <div style={{ height: 15 }}></div>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div className="card">
          <h1 className="title">6</h1>
          <div style={{ height: 15 }}></div>
          <p>The quick brown fox jumped over the lazy dog.</p>
        </div>
      </div>

      <div style={{ height: 80 }}></div>
      <div className='text-center'>
        <h1 className='title'>Rules and Regulations</h1>
      </div>
      <div style={{ height: 25 }}></div>
      <div className="card">
        <div className="grid grid-cols-12 items-center">
          <div className='col-span-2 text-center'>
            <h1 className="title">1</h1>
          </div>
          <div className='col-span-10'>
            <p>The quick brown fox jumped over the lazy dog.</p>
          </div>
        </div>
      </div>
      <div style={{ height: 15 }}></div>
      <div className="card">
        <div className="grid grid-cols-12 items-center">
          <div className='col-span-2 text-center'>
            <h1 className="title">2</h1>
          </div>
          <div className='col-span-10'>
            <p>The quick brown fox jumped over the lazy dog.</p>
          </div>
        </div>
      </div>
      <div style={{ height: 15 }}></div>
      <div className="card">
        <div className="grid grid-cols-12 items-center">
          <div className='col-span-2 text-center'>
            <h1 className="title">3</h1>
          </div>
          <div className='col-span-10'>
            <p>The quick brown fox jumped over the lazy dog.</p>
          </div>
        </div>
      </div>
      <div style={{ height: 80 }}></div>
      <div className="card grid grid-cols-1 items-center sm:grid-cols-4">
        <div className='col-span-4 text-center'>
          <h1 className='title'>Meet our team</h1>
          <div style={{ height: 30 }}></div>
          <h1 className='font-mono text-lg text-slate-500'>Meet our team of professionals to serve you</h1>
          <div style={{ height: 30 }}></div>
          <div className='flex-row space-x-3 '>
          <button
          className={`bg-white hover:text-cyan-600 text-slate-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
            dev === 1 ? 'mr-1' : ''
          }`}
          onClick={() => {
            setDev(1);
            setContent(0);
            setDesign(0);
            setOrganizers(0);
            setMarketing(0);
          }}
        >
          Dev
        </button>
        <button
          className={`bg-white hover:text-cyan-600 text-slate-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
            content === 1 ? 'mr-1' : ''
          }`}
          onClick={() => {
            setDev(0);
            setContent(1);
            setDesign(0);
            setOrganizers(0);
            setMarketing(0);
          }}
        >
          Content
        </button>
        <button
          className={`bg-white hover:text-cyan-600 text-slate-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
            organizers === 1 ? 'mr-1' : ''
          }`}
          onClick={() => {
            setDev(0);
            setContent(0);
            setDesign(0);
            setOrganizers(1);
            setMarketing(0);
          }}
        >
          Organizers
        </button>
        <button
          className={`bg-white hover:text-cyan-600 text-slate-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
            design === 1 ? 'mr-1' : ''
          }`}
          onClick={() => {
            setDev(0);
            setContent(0);
            setDesign(1);
            setOrganizers(0);
            setMarketing(0);
          }}
        >
          Design
        </button>
        <button
          className={`bg-white hover:text-cyan-600 text-slate-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow  ${
            marketing === 1 ? 'mr-1' : ''
          }`}
          onClick={() => {
            setDev(0);
            setContent(0);
            setDesign(0);
            setOrganizers(0);
            setMarketing(1);
          }}
        >
          Marketing
        </button>
       </div>
      <div style={{ height: 30 }}></div>
      <div className='flex self-center space-x-3 '>
         {dev === 1 && (
          < >
            <Team />
            <Team />
            <Team />
            <Team />
            <Team />
          </>
        )}
        {content === 1 && (
          <>
            <Team />
            <Team />
            <Team />
            <Team />
          </>
        )}
        {organizers === 1 && (
          <>
            <Team />
            <Team />
            <Team />
          </>
        )}
        {design === 1 && (
          <>
            <Team />
            <Team />
          </>
        )}
        {marketing === 1 && <Team />}
      </div>
        </div>
        </div>
      </div>
  );
}
