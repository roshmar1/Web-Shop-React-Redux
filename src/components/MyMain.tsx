import '../css/Store.css';
import MyForm from'./MyForm';
import {ShowCardList} from '.././features/counter/Counter';
export function MyMain()
{
    return(
        <div className='container'>
            {/* <MyForm onSubmit={this.submit}/> */}
            <main >
                <ShowCardList/>
            </main>
        </div>
    );
}
