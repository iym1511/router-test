import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Product = () => {

    const [text, setText] = useState("");

    const [searchParams, setSearchParams] =  useSearchParams();

    const param = searchParams.get("page");

    return (  
        <div>

            
            <h3>값을 입력받아서 페이지를 이동합니다</h3>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <Link to={`/ProductPage?page=${text}`} >쿼리 스트링을 가지고 이동</Link>
        </div>
    );
}

export default Product;