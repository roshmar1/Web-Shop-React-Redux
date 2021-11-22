import '../css/header.css';
import {ReactComponent as ReactLogo} from '../Images/basket_icon.svg';

export function MyHeader() {
    return(
        <div>
             <header>
        <nav className="nav">
            <div className="nav-logo">
                <a className="" href="Index.tsx">
                    <h3>
                        My Site
                    </h3>
                </a>
            </div>     

            <ul>
                <li><a href="Index.tsx" className="nav-link">Home</a></li>
                <li>
                    <div className="dropdown">
                    <button className="dropbtn">Storage
                      <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="?category=All">All</a>
                        <a href="?category=Whatch">Whatches</a>
                        <a href="?category=Phone">Mobile phones</a>
                        <a href="?category=Audio">Audio</a>
                        <a href="?category=Game gadget">Game gadgets</a>         
                    </div>
                    </div>
                </li>
                <li><a href="AddNewItem.tsx" className="nav-link">Upload Iteam</a></li>
            </ul>    
            
            <div className="nav-basket">
                <a className="nav-basket-img-container" href="?category=Basket" >
                    <ReactLogo width="100%" height="100%" />                  
                </a>
                <span className="nav-basket-number" id="basket">                    
                </span>
            </div>     
        </nav>
    </header>
</div>       
    );
}
