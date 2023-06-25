import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import DisplayMultipleCards from '../components/common/DisplayCards/DisplayMultipleCards'
import './HomePage.css'

function HomePage( {recipeList} ) {
  return (
    <>
    <Header />
    <section className='header-img'>
      <div style={{ height:"50vh" }}>
        <div className='header-text'>
          <div className='content'>
            <h2>Know more about your love</h2>
            <h1 className='underline-heading'>Today</h1>
            <br></br>
            <button className='button-74 mt-3'>Get Started</button>
          </div>
        </div>
      </div>
    </section>

    <section className='recipeList mx-auto w-75'>
      <h1 className='text-center' id="recipeTitle">Pet Recipe</h1>
      <p className='text-center' id="recipeSubtitle">Browse recipes for wholesome and homemade pet food and treats for your furry friends.</p>
      <hr className='w-75 mx-auto'></hr>
      <DisplayMultipleCards recipeList={recipeList}/>

    </section>
    <Footer />
    </>
  )
}

export default HomePage

