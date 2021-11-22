// import { Iteam } from "../features/counter/Iteam";
// import {addCard} from "./storage";

const  basketAdd = (elementsValue:string) => {         
    let iteam = localStorage.getItem(elementsValue);

    if(iteam!= null)
    {
        sessionStorage.setItem(elementsValue,iteam);
        basketState();
    }
} 

const  basketRemove = (elementsValue:string) => {          

    sessionStorage.removeItem(elementsValue);   

    basketState();
} 

const  basketState = () => {        
    let basket =  document.getElementById("basket");

    if(basket != null)
    {
        basket!.textContent = ""+ sessionStorage.length;
    }   
} 

const basketPage = () => {

    // const myNode: HTMLElement | null = document.getElementById("storage-container");

    // if(myNode != null)
    // {
    //     myNode.innerHTML = '';   
    // }

    // for (let i = 0; i < sessionStorage.length; i++){
    //     let iteam;
    //     let iteamObject;
    //     let key = sessionStorage.key(i);

    //     if(key != null)
    //     {   
    //         iteam = sessionStorage.getItem(key);                                   
    //     }

    //     if(iteam!= null)
    //     {
    //         let iteamObject:Iteam = JSON.parse(iteam);     
    //         addCard(iteamObject);
    //     }               
    // }
}

export {basketAdd,basketRemove,basketPage,basketState}