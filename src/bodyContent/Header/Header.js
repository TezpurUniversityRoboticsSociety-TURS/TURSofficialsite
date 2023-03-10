import { NavLink } from "react-router-dom";
import { Box, Center, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";
import { GoX } from "react-icons/go";
import { motion } from "framer-motion";
import classes from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [Display, DisplayHandler] = useState(false);
  return (
    <>
      <Box
        h={{ base: "10", sm: "12", md: "12", lg: "14" }}
        bgGradient="linear(to-r, #920404, black)"
        pos="fixed"
        zIndex={11}
        w="100vw"
        boxShadow="0 0 8px 4px #302B2B"
      >
        <Flex justify="space-between">
          <Center
            className={classes.icons}
            h={{ base: "9", sm: "10", md: "12", lg: "14" }}
            w={{ base: "9", sm: "10", md: "12", lg: "14" }}
            display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
            pl="10px"
            onClick={() => {
              DisplayHandler(() => {
                return true;
              });
            }}
          >
            <TfiMenu color="white" size="25px" />
          </Center>
        </Flex>
        <Flex
          h={{ base: "8", sm: "10", md: "12", lg: "14" }}
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          alignItems="center"
          pr={{ base: "2%", sm: "5%", md: "10%", lg: "20%" }}
          pl={{ base: "2%", sm: "5%", md: "10%", lg: "20%" }}
        >
          <Box>
            <Link to="home" smooth={true} offset={-10} duration={500}>
              <NavLink to="/home" className={classes.active}>
                Home
              </NavLink>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link to="about" smooth={true} offset={-50} duration={500}>
              <NavLink to="/about" className={classes.active}>
                About Us
              </NavLink>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link to="objectives" smooth={true} offset={-50} duration={500}>
              <NavLink to="/objectives" className={classes.active}>
                Objectives
              </NavLink>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link to="gallery" smooth={true} offset={-50} duration={500}>
              <NavLink to="/gallery" className={classes.active}>
                Gallery
              </NavLink>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <NavLink className={classes.active} to="/team">
              Team
            </NavLink>
          </Box>
          <Spacer />
          <Box>
            <NavLink className={classes.active} to="/members">
              Members
            </NavLink>
          </Box>
          <Spacer />
          <Box>
            <NavLink className={classes.active} to="/registration">
              Registration
            </NavLink>
          </Box>
        </Flex>
      </Box>
      {Display && (
        <div className={classes.backgrnd} onClick={() => {
          DisplayHandler(() => {
            return false;
          });
        }}>
          <motion.div
            className={classes.sidebar}
            initial={{ opacity: 0 }}
            animate={!Display ? { x: [0, -150] } : { opacity: 1, x: [-150, 0] }}
            transition={{ duration: 0.3 }}
            display={{ base: "block", sm: "block", md: "none", lg: "none" }}
          >
            <VStack
              w={{ base: "70vw", sm: "50vw" }}
              backgroundColor=" #212F3D"
              display={Display ? "flex" : "none"}
              p="1%"
              className={classes.sidebarVStack}
            >
              {Display && (
                <Flex justify="flex-end" mt="10px">
                  <Center
                    className={classes.icons}
                    h={{ base: "8", sm: "10", md: "12", lg: "14" }}
                    w={{ base: "8", sm: "10", md: "12", lg: "14" }}
                    display={{
                      base: "flex",
                      sm: "flex",
                      md: "none",
                      lg: "none",
                    }}
                    onClick={() => {
                      DisplayHandler(() => {
                        return false;
                      });
                    }}
                  >
                    <GoX color="white" size="30px" />
                  </Center>
                </Flex>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-90, 0],
                  transition: { duration: 1, type: "spring", delay: 0.1 },
                }}
              >
                <NavLink
                  className={classes.active}
                  to="/home"
                  onClick={() => {
                    DisplayHandler((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <Text pt={{base:"10px",md:"15px"}} fontFamily="'Josefin Sans', sans-serif">Home</Text>
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-90, 0],
                  transition: { duration: 1, type: "spring", delay: 0.2 },
                }}
              >
                <NavLink
                  className={classes.active}
                  to="/team"
                  onClick={() => {
                    DisplayHandler((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <Text pt={{base:"10px",md:"15px"}} fontFamily="'Josefin Sans', sans-serif">Team</Text>
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-90, 0],
                  transition: { duration: 1, type: "spring", delay: 0.3 },
                }}
              >
                <NavLink
                  className={classes.active}
                  to="/members"
                  onClick={() => {
                    DisplayHandler((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <Text pt={{base:"10px",md:"15px"}} fontFamily="'Josefin Sans', sans-serif">Members</Text>
                </NavLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-90, 0],
                  transition: { duration: 1, type: "spring", delay: 0.4 },
                }}
              >
                <NavLink
                  className={classes.active}
                  to="/registration"
                  onClick={() => {
                    DisplayHandler((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <Text pt={{base:"10px",md:"15px"}} fontFamily="'Josefin Sans', sans-serif">Registration</Text>
                </NavLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-90, 0],
                  transition: { duration: 1, type: "spring", delay: 0.5 },
                }}
              >
                <NavLink
                  className={classes.active}
                  to="/blog"
                  onClick={() => {
                    DisplayHandler((prev) => {
                      return !prev;
                    });
                  }}
                >
                  <Text pt={{base:"10px",md:"15px"}} pb={{base:"20px",md:"20px"}} fontFamily="'Josefin Sans', sans-serif">Resources</Text>
                </NavLink>
              </motion.div>
            </VStack>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Header;
