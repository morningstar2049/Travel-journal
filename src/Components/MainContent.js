import japan from '../images/japan.jpg'
import australia from '../images/australia.jpg'
import norway from '../images/norway.jpg'



function MainContent(props){
    console.log(props.item.imageUrl)
    return(
        <div className='main-container'>
            <img className='country-img' src={props.item.imageUrl} alt={props.item.title}/>
            

        </div>
    )
}

export default MainContent