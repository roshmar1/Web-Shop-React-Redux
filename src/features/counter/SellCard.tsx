import React from "react";
import {addToBasket} from '../../ts/storage';
import { Iteam } from "./Iteam";

import  '../../css/Store.css';

export const  SellCard = (props:Iteam)=> {
   // const card = useAppSelector(selectCard(props));
   
    return (    
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-img-wrapper">
                            <img src={''+ props.file.fileReader } alt="" className="card-img" />
                        </div>

                        <div className="card-description-wrapper">
                            <span className="card-description">
                                {props.description}
                            </span>
                        </div>

                        <div className="card-btn-wrapper">
                            <button className="card-btn" type="button"  onClick={()=>{}} value={props.name}>
                                Add to baasket
                            </button>
                        </div>
                    </div>
                </div>        
    );
}


