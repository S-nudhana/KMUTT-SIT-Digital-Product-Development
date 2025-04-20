import { Box, Flex, Text, Center, Image, Link, Separator } from "@chakra-ui/react";
import KMUTTSITLogo from "/images/5.png";
import AdirekLogo from "/images/Adirek_Logo 2.png";

import { FaFacebook, FaLine, FaPhoneAlt } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function Footer() {
    return (
        <Box py={"20px"} bgColor={"#222222"}>
            <Box w={"85%"} justifyContent={"center"} mx={"auto"}>
                <Box mb={"20px"} display={{ base: "block", md: "flex" }} justifyContent={{ md: "space-around", lg: "center" }} alignItems={"center"} gap={{ lg: "50px", xl: "100px" }}>
                    <Flex justify="center" align="center" direction="row">
                        <Image src={KMUTTSITLogo} h={{ base: "80px", md: "100px", lg: "150px" }} />
                        <Separator orientation="vertical" height={{ base: "50px", lg: "90px" }} borderInlineStartWidth={"0.7px"} borderColor={"#5C5C5C"} />
                        <Image src={AdirekLogo} h={{ base: "70px", md: "85px", lg: "110px" }} />
                    </Flex>
                    <Flex flexDir={"column"} gap={"8px"} mt={{ base: "10px", lg: "0px" }} ml={{ base: "20px", md: "0" }} fontSize={"14px"}>
                        <Text color={"white"} fontWeight={"semibold"} fontSize={"16px"}>
                            ติดต่อสอบถามข้อมูลเพิ่มเติม
                        </Text>
                        <Text color={"#B5B5B5"} transition={".3s all"} _hover={{ color: "white" }} display="inline-flex" alignItems="center" gap={"10px"} fontWeight={"medium"}>
                            <FaPhoneAlt /> +662 470 9850
                        </Text>
                        <Link href="https://www.facebook.com/SIT.Family" target="_blank" _hover={{ textDecoration: "none" }} focusRingColor={"transparent"}>
                            <Text color={"#B5B5B5"} transition={".3s all"} _hover={{ color: "white" }} display="inline-flex" alignItems="center" gap={"10px"} fontWeight={"medium"}>
                                <FaFacebook /> SIT.Family
                            </Text>
                        </Link>
                        <Link href="https://www.sit.kmutt.ac.th" target="_blank" _hover={{ textDecoration: "none" }} focusRingColor={"transparent"}>
                            <Text color={"#B5B5B5"} transition={".3s all"} _hover={{ color: "white" }} display="inline-flex" alignItems="center" gap={"10px"} fontWeight={"medium"}>
                                <TfiWorld /> www.sit.kmutt.ac.th
                            </Text>
                        </Link>
                        <Link href="https://page.line.me/olt5471s?openQrModal=true" target="_blank" _hover={{ textDecoration: "none" }} focusRingColor={"transparent"}>
                            <Text color={"#B5B5B5"} transition={".3s all"} _hover={{ color: "white" }} display="inline-flex" alignItems="center" gap={"10px"} fontWeight={"medium"}>
                                <FaLine /> @sit.kmutt
                            </Text>
                        </Link>
                    </Flex>
                </Box>
                <Center>
                    <Box w={"100%"}>
                        <Separator borderColor={"#B5B5B5"} />
                    </Box>
                </Center>
            </Box>
            <Text mt={"10px"} color={"#B5B5B5"} fontSize={{ base: "9px", md: "10px", lg: "12px" }} textAlign={"center"}>
                © 2025 School of Information Technology, King Mongkut's University of Technology Thonburi.
            </Text>
        </Box>
    )
}
