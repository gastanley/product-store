import { CiSquarePlus } from "react-icons/ci";
import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react"
import {React} from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <Container maxH={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={
                {
                    base: "column",
                    sm: "row",
                }
            }
        >
            <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
                    bgColor={"violet.500"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

            <HStack spacing={2} align-items={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus fontSize={20}/>
                    </Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar