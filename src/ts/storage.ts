import {basketAdd} from "./Basket";
import {basketRemove} from './Basket';
import { Iteam } from "../features/counter/Iteam";



const addToBasket = (button: HTMLElement) =>{        
    let elementsValue: string | null = button.getAttribute("value");
    let isElementContainClassName: boolean = button.classList.contains("card-btn");   
    
    if(isElementContainClassName){
        button.classList.add("card-btn-added");
        button.classList.remove("card-btn");

        if(elementsValue!= null)
        {
            basketAdd(elementsValue);  
        }          
    }
    else
    {        
        button.classList.add("card-btn");
        button.classList.remove("card-btn-added");

        if(elementsValue!= null)
        {
            basketRemove(elementsValue);
        }            
    }    
}   

// function fullThePage (){
//     let urlParams: URLSearchParams = new URLSearchParams(window.location.search);
//     let category: string | null = urlParams.get('category');

//     if(category === "basketPage"){
//         basketPage();
//     }

//     for (let i = 0; i < localStorage.length; i++){

//         let localStorageKey = localStorage.key(i);  
//         let iteam: string|null;      
//         let iteamObject:Iteam;

//         if(localStorageKey != null)
//         {
//             iteam = localStorage.getItem(localStorageKey);      
            
//             if(iteam != null)
//             {
//                 iteamObject = JSON.parse(iteam); 

//                 switch (category) {
//                     case 'All':
//                         addCard(iteamObject);
//                         break;
//                     case iteamObject.category:
//                         addCard(iteamObject);
//                         break;           
//                     default:                
//                         break;
//                 }   
//             }   
//         }            
//     }
// }

const addCard = (iteamObject:Iteam) => {       
    // render(){
    //     return(
    //         <SellCard {iteamObject}/>    
    //     );
    // }
}

export {addToBasket,addCard}

