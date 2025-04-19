import image from "/images/discussing-mobile-app.jpg";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Box position="relative">
            <Image
                src={image}
                alt="Header Image"
                w="100%"
                h={{ base: "300px", sm: "300px", md: "200px",lg:"250px"}}
                objectFit="cover"
            />
            <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bgColor={"rgba(0, 0, 0, 0.5)"}
                zIndex={1}
                pointerEvents="none"
            />

            <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                zIndex={2}
                px={{ base: "5%", lg: "7%" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <VStack color={"white"} gap={4} textAlign="center" fontWeight={"medium"}>
                    <Text fontWeight={"bold"} fontSize={{base: "24px",md:"36px"}}>Digital Product Development</Text>
                    <Text fontSize={"16px"}>ผู้เรียนจะได้เรียนรู้พื้นฐาน ของการออกแบบผลิตภัณฑ์ดิจิทัล การออกแบบที่คำนึงถึงปฏิสัมพันธ์ระหว่างผู้ใช้กับผลิตภัณฑ์หรือบริการการปรับปรุงประสบการณ์ของผู้ใช้ เรียนรู้เครื่องมือที่ใช้ ในการทำงานร่วมกัน และเครื่องมือที่จำเป็นในการออกแบบผลิตภัณฑ์ หรือบริการ</Text>
                </VStack>
            </Box>
        </Box>
    )
}

