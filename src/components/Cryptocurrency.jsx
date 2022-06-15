import React, { useState } from "react";
import { Card, Col } from 'antd'
import './cryptocurrency.css'
import { useGetCryptosQuery } from '../store/currency/selfApi'
import { Link } from 'react-router-dom'
import { Pagination } from "antd"
import millify from 'millify'

const Cryptocurrency = ({ limited }) => {
    const limit = limited ? 12 : 100;
    const { data, isFetching } = useGetCryptosQuery();
    const cryptoData = data?.data?.coins
    console.log(cryptoData)
    const latestValue = cryptoData.slice(0, limit)
    const [dataValue, setDataValue] = useState(latestValue)
    if (isFetching) { return 'Loading...' }
    return (
        <div className={limit == 12 ? 'currency-12' : 'currency'}>
            <div className="currency-cont">
                {dataValue.map((item) => (
                    <Col xs={12} sm={12} lg={7} className="crypto-card" key={item.uuid}>
                        <Link to={`/crypto/${item.uuid}`} >
                            <Card
                                title={`${item.rank}. ${item.name}`}
                                hoverable
                                style={{ width: '100%', height: 300 }}
                                extra={<img className="crypto-img" src={item.iconUrl} />}
                            >
                                <p>Price : {millify(item.price)} $</p>
                                <p>Market Cap : {millify(item.marketCap)} </p>
                                <p>Daily Change : {millify(item.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </div>


        </div>
    )
}
export default Cryptocurrency



