import {addToBasket} from "./storage";
import {addNewIteam} from "./addNewIteam";
import {loadOnce} from "./addNewIteam";
import {basketPage} from "./Basket";
import {basketState} from "./Basket";
import {addCard} from "./storage";

(window as any)!.basketState = basketState;
(window as any)!.addCard = addCard;
(window as any)!.basketPage = basketPage;
(window as any)!.loadOnce = loadOnce;
(window as any)!.addToBasket = addToBasket;
(window as any)!.addNewIteam = addNewIteam;



