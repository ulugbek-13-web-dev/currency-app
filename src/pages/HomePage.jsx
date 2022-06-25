import { Navigate } from 'react-router-dom'
import { Button, Col, Pagination, Row, Statistic, Typography } from "antd";
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../store/slices/userSlice'
import { useGetCryptosQuery } from '../store/currency/selfApi';
import { Link } from 'react-router-dom';
import millify from 'millify'
import '../components/home.css'
import Navbar from '../components/Navbar/Navbar'
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
            <Navbar/>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}
export default HomePage 