export default function Header() {
  return (
    <header className="flex justify-between place-items-center min-h-[112px]">
      <div className="flex place-items-center gap-1">
        <span className="text-4xl font-medium">12</span>
        <div className="flex flex-col text-xs">
          <span>JAN</span>
          <span>2016</span>
        </div>
      </div>
      <span>TUESDAY</span>
    </header>
  )
}
