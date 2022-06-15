import { Navigate } from 'react-router-dom'
import { Button, Col, Pagination, Row, Statistic, Typography } from "antd";
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../store/slices/userSlice'
import { useGetCryptosQuery } from '../store/currency/selfApi';
import { Link } from 'react-router-dom';
import millify from 'millify'
import '../components/home.css'
import Cryptocurrency from '../components/Cryptocurrency';
const { Title } = Typography

const HomePage = () => {

    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    const { data, isFetching } = useGetCryptosQuery();
    const cryptoState = data?.data?.stats
    console.log(cryptoState)
    if (isFetching) {
        return 'Loading ...'
    }
    return isAuth ? (
        <div className="home-container">
            <div className="home-stat">
                <div className="stat-container">
                    <Title level={2} className="stat-title">Global Crypto Stats</Title>
                    <Row gutter={16} className="stat-row">

                        <Col span={10} className="stat-col">
                            <Statistic className="stat-stat" title="Title Crypocurrency" value={millify(cryptoState.totalCoins)} />
                        </Col>
                        <Col span={10} className="stat-col">
                            <Statistic className="stat-stat" title="Total Exchanges" value={millify(cryptoState.totalExchanges)} />
                        </Col>
                        <Col span={10} className="stat-col">
                            <Statistic className="stat-stat" title="Total Market Cap" value={millify(cryptoState.totalMarketCap)} />
                        </Col>
                        <Col span={10} className="stat-col">
                            <Statistic className="stat-stat" title="Total 24th Volume" value={millify(cryptoState.total24hVolume)} />
                        </Col>
                        <Col span={10} className="stat-col">
                            <Statistic className="stat-stat" title="Total Markets" value={millify(cryptoState.totalMarkets)} />
                        </Col>
                        <Col span={10} className="stat-col">
                            <Statistic className="stat-stat" title="Title" value={millify(cryptoState.total)} />
                        </Col>
                    </Row>
                    <div className="home-crypto">
                        <div className="home-crypto-inside">
                            <Title level={2} className="stat-title" >Top 10 Cryptocurrencies in the world</Title>
                            <p><Link to='/crypto'>Show More</Link></p>
                        </div>
                        <div>
                            <Cryptocurrency limited />
                        </div>
                        <div className="news-home">
                            <Title level={2} className="stat-title" >Top News about Crypto</Title>
                            {/* <News limited /> */}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    ) : (
        <Navigate to="/login" />
    )
}
export default HomePage 