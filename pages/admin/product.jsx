import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingItem from "../../components/Cartcheckout/LoadingItem";
import styles from "../../pages/carts/Css/cart.module.css"
import Display from "../../components/Admin/Display";

export default function Products() {
    const dispatch = useDispatch();
    const { allData, loading, } = useSelector((store) => store.cart);
    // console.log('allData:', allData)

    useEffect(() => {
    }, [])

    const handleQuantity = () => {

    }

    return (
        <Box>
            <Box className={styles.withCartItem}>
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