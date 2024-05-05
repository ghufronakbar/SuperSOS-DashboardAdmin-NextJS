import {
    Box,
    Center,
    Table,
    Flex,
    Text,
    Spacer,
    Tbody,
    Tr,
    TableContainer,
    Th,
    Td,
    Image,
    VStack,
  } from "@chakra-ui/react";
  import { axiosInstance } from "../../lib/axios";
  import { useEffect, useState } from "react";
  import { useRouter } from "next/router";
  
  export function DetailUser() {
    const router = useRouter();
    const { id: id_user } = router.query;
    const [item, setRequestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const reqDataResponse = await axiosInstance.get(`/user/${id_user}`);
          setRequestData(reqDataResponse.data.values[0]);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
          console.error("Error fetching detail request data:", error);
        }
      };
  
      if (id_user) {
        fetchData();
      }
    }, [id_user]);

    const handleDetailCall = (id_call) => {
      router.push(`/admin/call/${id_call}`);
    };
  
    function formatDate(dateString) {
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    }
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;
  
    return (
      <>
        {item && (
          <Box>
            <Flex justifyContent="center"> 
              <Box flex={4} mt={4}>
                <Box p={8} borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <Center>
                    <Image
                      borderRadius="18"
                      boxSize="120px"
                      objectFit="cover"
                      src={item.picture}
                      alt={item.picture}
                    />
                  </Center>
                  <Box mt={4}>
                    <TableContainer>
                      <Table>
                        <Tbody>
                          <Tr>
                            <Th>Name</Th>
                            <Td>{item.fullname}</Td>
                          </Tr>
                          <Tr>
                            <Th>Email</Th>
                            <Td>{item.email}</Td>
                          </Tr>
                          <Tr>
                            <Th>Phone</Th>
                            <Td>{item.phone}</Td>
                          </Tr>
                          <Tr>
                            <Th>Address</Th>
                            <Td>{item.address}</Td>
                          </Tr>
  
                          <Tr>
                            <Th>Status</Th>
                            <Td>
                              {item.user_status == 1 ? (
                                <Box
                                  as="button"
                                  borderRadius="md"
                                  bg="#48BB78"
                                  color="white"
                                  px={4}
                                  h={8}
                                >
                                  Activated
                                </Box>
                              ) : (
                                <Box
                                  as="button"
                                  borderRadius="md"
                                  bg="#E53E3E"
                                  color="white"
                                  px={4}
                                  h={8}
                                >
                                  Suspended
                                </Box>
                              )}
                            </Td>
                          </Tr>
                          <Tr>
                            <Th>Calls Applied</Th>
                            <Td>{item.calls.length}</Td>
                          </Tr>
                        
                        </Tbody>
                      </Table>
                      <Flex  mt={8}
                                flexWrap="wrap"
                                justifyContent="center" 
                              >
                                {item.calls.map((call, index) => (
                                  <Box
                                    as="button"
                                    borderRadius="md"
                                    bg={
                                      call.call_status === 0
                                        ? "#CBD5E0"
                                        : call.call_status === 1
                                        ? "#E53E3E"
                                        : "#0063d1"
                                    }
                                    color="white"
                                    p={2}
                                    m={2}
                                    px={4}
                                    key={index}
                                    onClick={()=>{handleDetailCall(call.id_call)}}
                                  >
                                    <VStack>
                                      <Text>{formatDate(call.applied_at)}</Text>
                                      <Text as="b">
                                        {call.call_status === 0
                                          ? "Pending"
                                          : call.call_status === 1
                                          ? "Cancelled"
                                          : "Accepted"}
                                      </Text>
                                    </VStack>
                                  </Box>
                                ))}
                              </Flex>
                    </TableContainer>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        )}
      </>
    );
  }
  