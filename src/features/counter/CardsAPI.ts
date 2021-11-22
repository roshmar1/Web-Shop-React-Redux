// A mock function to mimic making an async request for data
import { Iteam } from "./Iteam";

const data: Iteam[] = [];

var loadOnce = (function() {
  
  return function() {
      if (true) {
          
          let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
          //iphone 12
          fetch('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"Iphone 13",description,"Phone");
          });
      
         //apple whach 6
          fetch('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML7Y3_VW_34FR+watch-45-alum-green-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1629920460000%2C1631661629000')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"Apple whach 6",description,"Whatch");
          });
      
          //apple whach7
          fetch('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/45-nc-alum-midnight-sport-gray-s7?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1631855766000')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"Apple whach 7",description,"Whatch");
          });    
      
          //iphone 11 pro max 
          fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"Iphone 11",description,"Phone");
          });
      
          //iphone 12
          fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343703000')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"Iphone 12",description,"Phone");
          });
      
          //air pods
          fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"AirPods Pro",description,"Audio");
          });
          //Mack Book Pro
          fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"Mack Book Pro",description,"Game gadget");
          });
          //IMac
          fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac27-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635186288000')
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
      
            addDataToStorage(blob,"IMac",description,"Game gadget");
          });
      }
  };
})();

const addDataToStorage = (selectedFile:any,name:string,description:string,category:string) =>{
    let reader = new FileReader();
    let iteam: Iteam;
    reader.readAsDataURL(selectedFile);    

    reader.addEventListener("load",()=>{
      iteam = {
            name: name,
            description: description,
            category: category,
            file: {
                    fileName:selectedFile.name,                   
                    fileReader: reader.result
                }
      }       
      data.push(iteam);
    });   
}

loadOnce();

export const fetchData = () => {
  return new Promise<Iteam[]>((resolve,reject)=> { 
    setTimeout(()=>{resolve([...data])}
    ,500);    
  });  
}
