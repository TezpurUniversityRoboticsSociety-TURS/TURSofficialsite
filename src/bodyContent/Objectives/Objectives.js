import classes from "./Objectives.module.css";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Objectives = () => {
  return (
    <>
      <VStack pt={{ base: "5%", sm: "7%", md: "9%", lg: "7%" }} id="objectives">
        <Heading fontSize={{ base: "md", sm: "lg", md: "xl", lg: "xl" }} fontFamily="'Josefin Sans', sans-serif" color="#FF5F1F">
          WHAT WE DO
        </Heading>
        <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }} fontFamily="'Josefin Sans', sans-serif" pt={{md:"7px",lg:"10px"}}>
          Our Objectives
        </Heading>
        <hr className={classes.styletwo}></hr>
        <Box w={{ base: "80vw", sm: "80vw", md: "70vw", lg: "vw" }}>
          <Text
            textAlign="justify"
            fontSize={{ base: "14px", sm: "17px", md: "20px", lg: "24px" }}
            mt={{ base: "5%", sm: "7%", md: "6%", lg: "3.5%" }}
            fontFamily="'Josefin Sans', sans-serif"
          >
            (a) Its objectives shall be scientific, technology and educational
            in character. The Society shall strive for the advancement of the
            theory and practice of robotics and automation engineering, science
            and technology and for the maintenance of high professional
            standards among its members, all in consonance with the constitution
            and bylaws of the society and with special attention to such aims
            within the field of interest of the society.<br></br>
            <br></br>
            (b) The Society shall aid in promoting close co-operation and
            exchange of technical information among its members and to this end
            shall hold collaborative programs with industry, research centres,
            educational institutes through workshops, seminars, class room
            training, exchange programs etc.<br></br>
            <br></br>
            (c) The Society shall provide facilities to students from different
            levels for carrying out their projects and other robotic activities
            of interest.
          </Text>
        </Box>

      </VStack>
    </>
  );
};

export default Objectives;
