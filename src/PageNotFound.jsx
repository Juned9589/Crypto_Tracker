import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] font-mono">
      <div className="text-center p-12 bg-black/80 border-4 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.5)] relative">

        <div className="absolute top-3 left-3 text-red-400 text-xl">[</div>
        <div className="absolute top-3 right-3 text-red-400 text-xl">]</div>
        <div className="absolute bottom-3 left-3 text-red-400 text-xl">[</div>
        <div className="absolute bottom-3 right-3 text-red-400 text-xl">]</div>

        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl text-red-400 mb-2 tracking-widest">[ERROR: PAGE_NOT_FOUND]</h2>
        <p className="text-cyan-400 mb-6 tracking-wide">&gt; The requested resource does not exist in the database</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-black font-bold px-8 py-3 border-2 border-red-400 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] transition-all duration-300 uppercase tracking-widest"
        >
          [RETURN_HOME]
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
