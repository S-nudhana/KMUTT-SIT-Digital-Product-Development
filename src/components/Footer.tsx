import { Box, Flex, Text, Center, Image, Link } from "@chakra-ui/react";
import Logo from "/images/5.png";

import { FaFacebook, FaLine } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function Footer() {
    return (
        <Box py={"20px"} bgColor={"#222222"}>
            <Box w={"85%"} justifyContent={"center"} mx={"auto"}>
                <Box mb={"20px"} display={{base: "block", md: "flex"}} justifyContent={{md:"space-around", lg: "center"}} alignItems={"center"} gap={{lg:"100px"}}>
                    <Image src={Logo} w={{ base: "100%", md: "50%", lg: "40%" }} />
                    <Flex flexDir={"column"} gap={"8px"} mt={{base: "10px", lg: "0px"}}>
                        <Text color={"white"} fontWeight={"semibold"}>
                            ติดต่อสอบถามข้อมูลเพิ่มเติม
                        </Text>
                        <Link href="https://www.facebook.com/SIT.Family" target="_blank" _hover={{ textDecoration: "none" }}>
                            <Text color={"#B5B5B5"} transition={".3s all"} _hover={{ color: "white" }} display="inline-flex" alignItems="center" gap={"10px"} fontWeight={"medium"}>
                                <FaFacebook /> SIT.Family
                            </Text>
                        </Link>
                        <Link href="https://www.sit.kmutt.ac.th" target="_blank" _hover={{ textDecoration: "none" }}>
                            <Text color={"#B5B5B5"} transition={".3s all"} _hover={{ color: "white" }} display="inline-flex" alignItems="center" gap={"10px"} fontWeight={"medium"}>
                                <TfiWorld /> www.sit.kmutt.ac.th
                            </Text>
                        </Link>
                        <Link href="https://page.line.me/olt5471s?openQrModal=true" target="_blank" _hover={{ textDecoration: "none" }}>
                            <Text color={"#B5B5B5"} transition={".3s all"} _hover={{ color: "white" }} display="inline-flex" alignItems="center" gap={"10px"} fontWeight={"medium"}>
                                <FaLine /> @sit.kmutt
                            </Text>
                        </Link>
                    </Flex>
                </Box>
                <Center>
                    <Box w={"100%"}>
                        <Box h="1px" w="100%" bg="#B5B5B5" />
                        <Text mt={"10px"} color={"#B5B5B5"} fontSize={{ base: "9px", md: "12px", lg: "14px" }} textAlign={"center"}>
                            © 2025 School of Information Technology, King Mongkut's University of Technology Thonburi.
                        </Text>
                    </Box>
                </Center>
            </Box>
        </Box>
    )
}
