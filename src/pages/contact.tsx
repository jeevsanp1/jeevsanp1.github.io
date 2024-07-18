import "../index.css";

function Contact() {
  return (
    <>
      <div className="bg-cyan-800 h-[400px] flex flex-col text-center font-display text-emerald-300">
        <h1 id="contact" className="text-7xl w-full pt-10 justify-center">
          Contact Page
        </h1>
        <p className="pt-3 w-full pb-6">let's shine together.</p>
        <div className="flex-wrap w-full space-x-4 pt-12">
          <button className="inline-flex h-12 w-1/5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a href="https://www.linkedin.com/in/sanjeevkumarvijayakumar/">
              LinkedIn
            </a>
          </button>
          <button className="inline-flex h-12 w-1/5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a href="mailto:sanjeevkumarvijayakumar@gmail.com?subject=Hi, sanjeev&body=Type something nice">
              Email
            </a>
          </button>
          <button className="inline-flex h-12 w-1/5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a href="https://github.com/jeevsanp1">Github</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
