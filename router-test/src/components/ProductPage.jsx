
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {

    
    const [searchParams, setSearchParams] =  useSearchParams();

    const param = searchParams.get("page");
    
    return (  
        <div>
            <h1>{param}</h1>
            <p>상품의 이름으로 상품 페이지를 출력하고 있습니다.</p>
        </div>
    );
}
 
export default ProductPage;