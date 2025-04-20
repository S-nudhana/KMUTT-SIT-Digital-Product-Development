import { Box, Flex, Image, Separator } from "@chakra-ui/react";

import KMUTTSITLogo from "/images/1.png";
import AdirekLogo from "/images/Adirek_Logo 2.png";

export default function Navbar() {
    return (
        <Box w="100%" px={{ base: "10px", md: "30px", lg: "60px" }}>
            <Flex alignItems={"center"}>
                <Image src={KMUTTSITLogo} h="70px" direction="row"/>
                <Separator orientation="vertical" h="42px" borderInlineStartWidth={"0.3px"} borderColor={"#999999"}/>
                <Image src={AdirekLogo} h="60px" />
            </Flex>
        </Box>
    );
}
