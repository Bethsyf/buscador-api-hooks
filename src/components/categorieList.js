import { Col, Row } from 'antd';
import React from 'react';
import CardList from './card';



const CategorieList = ({ data }) => {


    return (
        <>
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <Row justify="space-evenly">
                            <Col span={4}>
                            <CardList key={index} categoria={item} />
                            </Col>
                            </Row>
                        )

                    })
                }

            </div>
        </>
    )
}


export default CategorieList;