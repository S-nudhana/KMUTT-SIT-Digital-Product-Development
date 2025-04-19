import { Box, Flex, Image } from "@chakra-ui/react";

import KMUTTSITLogo from "/images/1.png";
import AdirekLogo from "/images/Adirek_Logo 2.png";

export default function Navbar() {
    return (
        <Box w="100%" h="80px" pl={{base: "15px",md: "30px", lg:"60px"}} py="10px">
            <Flex align="center" h="60px">
                <Image src={KMUTTSITLogo} h="60px" />
                <Box w={{base: "0.7px", xl:"0.3px"}} h="60%" bg="#B5B5B5"/>
                <Image src={AdirekLogo} h="60px" />
            </Flex>
        </Box>
    );
}
