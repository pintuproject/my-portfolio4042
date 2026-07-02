import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

// Swap these for your own roles — the line beneath your name cycles through them
const ROLES = ['Full Stack  Developer', 'React Developer' ,'frontend Developer','Node Js Developer'];

const useTypewriter = (words, typeSpeed = 70, pauseTime = 1400) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? typeSpeed / 2 : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, pauseTime]);

  return text;
};

const Introduction = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section
      name="introduction"
      className="px-6 sm:px-10 w-full flex gap-14 flex-col-reverse lg:flex-row
                 justify-center items-center mt-16 mb-16 lg:mt-10
                 max-w-5xl mx-auto min-h-[60vh]"
    >
      <div className="flex-1 flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
        <span className="font-mono text-xs text-[#E8A33D] tracking-wide">
          $ whoami
        </span>

        <div className="flex flex-col gap-2">
          <h4 className="text-[#8B92A3] text-lg font-medium">
            Hi, I'm
          </h4>
          <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[#F2F0E9] text-4xl sm:text-5xl leading-tight">
            Pintu Pradhan
          </h1>
        </div>

        <div className="h-8 font-mono text-lg sm:text-xl text-[#E8A33D]">
          {typed}
          <span className="inline-block w-[2px] h-5 bg-[#E8A33D] ml-1 align-middle animate-pulse" />
        </div>

        <p className="text-[#8B92A3] max-w-md leading-relaxed">
          I build fast, accessible web interfaces from idea to deployment.
          Take a look at what I've made, or get in touch about working together.
        </p>

        <div className="flex gap-3 mt-2">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-md bg-[#E8A33D] text-[#161A22] font-medium text-sm px-5 py-2.5 hover:bg-[#f0b25d] transition-colors"
          >
            View my work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-md border border-[#8B92A3]/40 text-[#F2F0E9] font-medium text-sm px-5 py-2.5 hover:border-[#E8A33D] hover:text-[#E8A33D] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="relative shrink-0">
        <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#E8A33D]" />
        <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#E8A33D]" />
        <img
          src="myimage.jpeg"
          alt="Pintu Pradhan"
          className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default Introduction;