import {
  Flex,
  Spacer,
  Box,
  Link as ChakraLink,
  Button,
  Select,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { List, Nav } from "reactstrap";
import { axiosInstance } from "../lib/axios";

export function NavbarAdmin() {
  const router = useRouter();
  const [item, setRequestData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reqDataResponse = await axiosInstance.get(`/instances`);
        setRequestData(reqDataResponse.data.values);
      } catch (error) {
        console.error("Error fetching detail request data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("item:", item);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    router.push(selectedValue);
  };

  return (
    <Flex p={1} bg="#4FD1C5" color="white" padding="3">
      <Box>
        <Button colorScheme="white" variant="ghost">
          SUPERSOS ADMIN
        </Button>
      </Box>
      <Spacer />
      <Box>
        <Box>
          <Nav horizontal>
            <UnorderedList
              style={{
                display: "flex",
                listStyleType: "none",
                gap: "20px",
                margin: 0,
                padding: 0,
              }}
            >
              <List>
                <ChakraLink href="/admin/instance">
                  <Button colorScheme="white" variant="ghost">
                    Instance
                  </Button>
                </ChakraLink>
              </List>
              <List>
                <ChakraLink href="/admin/instance/pending">
                  <Button colorScheme="white" variant="ghost">
                    Request Instance
                  </Button>
                </ChakraLink>
              </List>
              <List>
                <ChakraLink href="/admin/user">
                  <Button colorScheme="white" variant="ghost">
                    User
                  </Button>
                </ChakraLink>
              </List>
              <List>
                <Box>
                  <Select
                    placeholder="Call"
                    onChange={handleSelectChange}
                    color={"white"}
                    variant="fill"
                  >
                    {" "}
                    <option value="/admin/call"> All Calls</option>
                    <option value="/admin/call/type/1">Call Rumah Sakit</option>
                    <option value="/admin/call/type/2">Call Polisi</option>
                    <option value="/admin/call/type/3">
                      Call Pemadam Kebakaran
                    </option>
                  </Select>
                </Box>
              </List>
              <List>
                <Box>
                  <Select
                    placeholder="Call"
                    onChange={handleSelectChange}
                    color={"white"}
                    variant="fill"
                  >
                    {item?.map((item) => (
                      <option
                        key={item.id_instances}
                        value={`/admin/call/instance/${item.id_instances}`}
                      >
                        {item.instances_name}
                      </option>
                    ))}
                  </Select>
                </Box>
              </List>
              <List>
              <Box
                as="button"
                p={2}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                mr={8}
                flex={2}
                onClick={() => {
                  handleLogout()
                }}
              >
                <Text as="b">Logout</Text>
              </Box>
              </List>
            </UnorderedList>
          </Nav>
        </Box>
      </Box>
    </Flex>
  );
}
