import { Skeleton, Stack } from "@chakra-ui/react";

export default function SkeletonCarousel() {
    return (
        <Stack h="400px">
            <Skeleton w="180px" height='192px' />
            <Stack w="180px" height='190px' >
                <Skeleton height='44px' />
                <Skeleton height='72px' />
                <Skeleton height='60px' />
            </Stack>
        </Stack>
    )
}