import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingItem from "../../Components/Cart_Checkout/LoadingItem";
import WithCartItem from "../../Components/Cart_Checkout/WithCartItem";
import { getAllItem } from "../../redux/cart/action";
import styles from "../../pages/carts/Css/cart.module.css"
import Display from "../../Components/Admin/Display";
import stylesA from "./Css/admin.module.css"

export default function ViewItem() {
    const dispatch = useDispatch();
    const { allData, loading, } = useSelector((store) => store.cart);
    // console.log('allData:', allData)

    useEffect(() => {
        dispatch(getAllItem());
    }, [])

    const handleQuantity = () => {

    }

    return (
        <Box>
            <Box className={stylesA.viewItem}>
                {/* Mapping of Data Over Here */}
                {allData &&
                    allData.map((item, index) => (
                        <div key={index}>
                            {loading ? <LoadingItem /> : <Display item={item} />}
                        </div>
                    ))}
            </Box>
        </Box>


    )
}
