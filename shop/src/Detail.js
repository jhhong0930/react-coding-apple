
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// history.goBack(); 뒤로가기
// history.push('url'); 특정 url로 이동
import styled from 'styled-components';

let Box = styled.div`
    padding : 20px;
`;

let Title = styled.h4`
    font-size: 25px;
    color: ${ props => props.color }
`;

function Detail(props) {

    let { id } = useParams();

    let 찾은상품 = props.shoes.find(function(상품) {
        return 상품.id == id;
    })

    let history = useHistory();

    return (
        <div className="container">
            <Box>
                <Title color={'red'}>title</Title>
            </Box>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={ () => {
                        history.goBack();
                    } }>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;