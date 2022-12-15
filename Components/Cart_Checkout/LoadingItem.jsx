import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function LoadingItem() {
    return (
        <Box>
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
        </Box>
    )
}