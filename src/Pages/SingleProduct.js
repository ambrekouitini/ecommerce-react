import Header from "../Components/Header";
import SingleProductInfo from '../Components/SingleProductInfo';
import CommentsList from '../Components/CommentsList';
import { useParams } from 'react-router-dom'; 

export default function SingleProduct() { 
    let { id } = useParams(); 
    return (
        <div>
            <Header />
            <SingleProductInfo/> 
            <CommentsList productId={id} />
        </div>
    );
}
