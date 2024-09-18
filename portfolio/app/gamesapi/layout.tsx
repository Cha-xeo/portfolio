import '../globals.css';

export default function MobyGamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <div>{children}</div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center text-lg">
            Data provided by <a className="text-cyan-400" href="https://www.mobygames.com/">MobyGames</a>.
          </div>
        </div>
      </footer>
    </html>
  )
}