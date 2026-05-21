export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-black border-b border-gray-800">
      <h1 className="text-xl font-bold">Muhammad Huzaifa</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}