import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { useLocation } from 'react-router-dom';
import DisplayMultipleCards from "../../components/common/DisplayCards/DisplayMultipleCards"



export default function SearchPage({recipeList})
{
    const location = useLocation();
    const searchKeyword = new URLSearchParams(location.search);
    let searchTerm = searchKeyword.get('q').toLowerCase();

    const filteredRecipe = recipeList.filter(element => {
        return element['title'].toLowerCase().includes(searchTerm);
      });


    return(
        <>
            <Header />
                <section className='recipeList mx-auto w-75'>
                    <h1 className='text-center' id="recipeTitle">Pet Recipe</h1>
                    <p className='text-center' id="recipeSubtitle">Browse recipes for wholesome and homemade pet food and treats for your furry friends.</p>
                    <hr className='w-75 mx-auto'></hr>
                    <DisplayMultipleCards recipeList={filteredRecipe}/>
                </section>
            <Footer />
        </>
    );
}