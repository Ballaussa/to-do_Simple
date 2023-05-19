import "./todo.css";
import { Link } from 'react-router-dom';

function STR1 (){
	return( 
        <div class="container"> 
            <div class="name"> 
                <h1 class="title">ZhaSa</h1> 
                <p class="text">Жұмыстарды оңай басқару</p> 
            </div> 
            <Link to="/str2"> 
                <button class="btn" type="submit">Кеттік!</button> 
            </Link> 
        </div> 
    ); 

}
export default STR1;