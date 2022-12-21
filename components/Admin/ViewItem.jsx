import { Box, Button, Flex, Icon, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingItem from "../Cartcheckout/LoadingItem";
import WithCartItem from "../Cartcheckout/WithCartItem";
import { getAllItem } from "../../redux/cart/action";
import styles from "../../pages/carts/Css/cart.module.css"
import Display from "../../components/Admin/Display";
import stylesA from "./Css/admin.module.css"
import { getAllProducts } from "../../redux/product/action";

export default function ViewItem() {
    const [page,setPage]=useState(1)
    const dispatch = useDispatch();
    const { data, AllProducts:{loading} } = useSelector((store) => store.product);
    // console.log('data:', data)

    useEffect(() => {
        dispatch(getAllProducts({page}))
    }, [dispatch,page])

   

    return (
        <Box>
            <Box className={stylesA.viewItem}>
                {/* Mapping of Data Over Here */}
                {data &&
                    data.map((item, index) => (
                        <div key={index}>
                            {loading ? <LoadingItem /> : <Display item={item} />}
                        </div>
                    ))}
            </Box>
            <Flex justifyContent='center' alignItems='center' mt='5' mb='5'>
            <Button colorScheme={'blue'} onClick={()=>{
              if(page==1){
                setPage(5)
              }
              else{
                setPage((page)=>page-1)
              }
            }}>Prev</Button>
            <Button >{page}</Button>
            <Button colorScheme={'blue'} onClick={()=>{
              if(page==5){
                setPage(1)
              }
              else{
                setPage((page)=>page+1)
              }
            }}>Next</Button>
            </Flex>
        </Box>


    )
}
