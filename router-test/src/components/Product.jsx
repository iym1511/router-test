import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Product = () => {

    const [text, setText] = useState("");

    const [searchParams, setSearchParams] =  useSearchParams();

    const param = searchParams.get("page");

    return (  
        <div>
            {/* input으로 값을 입력받아서 주소로 값을 건네줌
                1. params값으로 보내기 : /page/1
                2. 쿼리스트링으로 보내기 : ?name=사과
                >> params값으로 보내는 방식 사용
                1) App.js에 주소지정 필요 : /page/:id
                2) 값을 주소의 :id위치에 전달 : /page/1
            */}
            
            <h3>값을 입력받아서 페이지를 이동합니다</h3>
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <Link to={`/ProductPage?page=${text}`} >쿼리 스트링을 가지고 이동</Link>
            
            <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            <Link to={`/ProductPage/${text}`}>params 가지고 이동</Link>
        </div>
    );
}

export default Product;