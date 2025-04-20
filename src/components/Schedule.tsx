import { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Box, Text, Timeline, TimelineIndicator } from "@chakra-ui/react";

import { eventList } from "@/utils/TimeSchedule";
import { formatDateToThai } from "@/utils/LocalDate";

export default function Schedule() {
    const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());
    const getCurrentDateTime = async () => {
        const res = await axios('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FBangkok');
        setCurrentDateTime(new Date(res.data.data.dateTime));
    }
    useEffect(() => {
        getCurrentDateTime();
    }, []);
    // const currentDateTime = new Date(2025, 5, 14, 11, 0, 0); //test
    return (
        <Box my={"30px"}>
            <Box bgColor={"#004AAD"} w={{ base: "300px", md: "400px"}} h="50px" display="flex" justifyContent="end" alignItems="center" pr={"15px"}>
                <Text fontWeight={"semibold"} fontSize={{ base: "20px", md: "24px" }} color={"white"}>ตารางเรียน (Class Schedule)</Text>
            </Box>
            <Flex mt={"40px"} w={{ base: "85%", xl: "70%" }} justifyContent={"center"} flexDir={"column"} mx={"auto"} fontWeight={"medium"}>
                <Timeline.Root>
                    {eventList.map((event, index) => (
                        <Timeline.Item key={index}>
                            <Timeline.Connector>
                                <Timeline.Separator borderColor={currentDateTime < event.date ? "#004AAD" : "#9D9D9D"} borderWidth={"1px"} ml={"-1px"} />
                                <TimelineIndicator bgColor={currentDateTime < event.date ? "#004AAD" : "#9D9D9D"} outline={"#004AAD"} />
                            </Timeline.Connector>
                            <Timeline.Content pb="40px">
                                <Timeline.Title pb="3px" color={currentDateTime < event.date ? "#004AAD" : "#9D9D9D"} fontWeight={"semibold"} fontSize={{ base: "18px", md: "20px", lg: "22px" }} textDecoration={currentDateTime < event.date ? "" : "line-through"}>{event.title} ({formatDateToThai(event.date)})</Timeline.Title>
                                <Timeline.Description fontSize={{base: "14px", md: "16px"}}>
                                    <Flex pb={"5px"}>
                                        <Text color={"black"}><Text as="span" fontWeight={'semibold'} pr={"5px"}>สถานที่:</Text>{event.place}</Text>
                                    </Flex>
                                    <Flex pb={"5px"}>
                                        <Text color={"black"}><Text as="span" fontWeight={'semibold'} pr={"5px"}>เวลา:</Text>{event.time}</Text>
                                    </Flex>
                                </Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))}
                </Timeline.Root>
            </Flex>
        </Box>
    )
}