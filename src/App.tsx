import Header from "./components/Header"
import List from "./components/List"

function App() {
  return (
    <div className="flex w-screen min-h-screen justify-center place-items-center p-2">
      <main className="flex flex-1 flex-col max-w-lg p-6 bg-gray-100 h-[90vh] overflow-y-auto relative z-10 shadow-lg">
        <Header />
        <List />
      </main>
    </div>
  )
}

export default App
