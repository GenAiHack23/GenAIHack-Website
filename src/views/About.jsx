import './about.css';

export default function AboutView() {
  return (
    <div>
      <div className="card grid grid-cols-4 items-center">
        <div className='col-span-1'>
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
      <div className='grid grid-cols-3 gap-4 text-center'>
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
    </div>
  );
}