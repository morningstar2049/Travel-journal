import locationIcon from '../images/location.png'

function MainContent(props){
    console.log(props.item)
    return(
        <div className='flex-items'>
           
                <img className='country-img' src={props.item.imageUrl} alt={props.item.title}/>
                <div>
                    <span className="location">
                        <img src={locationIcon} alt='loc'/>
                        {props.item.location}</span>
                    <span className="link"><a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a></span>
                    <h2>
                        {props.item.title}
                    </h2>
                    <h5>{props.item.startDate} - {props.item.endDate}</h5>
                    <p>
                        {props.item.description}
                    </p>
                </div>



         
            

        </div>
    )
}

export default MainContent