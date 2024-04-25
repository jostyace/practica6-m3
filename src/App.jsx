import { ArticlesContainer } from "./components/ArticlesContainer/ArticlesContainer"
import { Header } from "./components/Header/Header"
import { MainArticle } from "./components/MainArticle/MainArticle"
import { NewContainer } from "./components/NewContainer/NewContainer"

function App() {

  return (
    <main className='px-4 pt-6 max-w-[1400px]'>
      <Header/>
      <div className="lg:flex lg:gap-8">
        <MainArticle/>
        <NewContainer/>
      </div>
      <ArticlesContainer/>
    </main>
  )
}

export default App
