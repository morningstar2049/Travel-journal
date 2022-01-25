import earthIcon from '../images/whiteearth.png'

function Header(){
    return(
        <div className="header">
           
               <div>
                   <img className='earth-icon' src={earthIcon} alt='icon'/>
                    <span>my travel journal</span>
               </div>

        </div>

    )
}

export default Header


