import {
  Box,
  Center,
  Table,
  Flex,
  Text,
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
import { Loading } from "../Loading";
import { formatDate } from "@/lib/formatDate";

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


  if (loading) return <Loading/>
  if (error) return <div>Terjadi kesalahan saat mengambil data</div>;

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
                          <Th>Nama</Th>
                          <Td>{item.fullname}</Td>
                        </Tr>
                        <Tr>
                          <Th>Email</Th>
                          <Td>{item.email}</Td>
                        </Tr>
                        <Tr>
                          <Th>Telepon</Th>
                          <Td>{item.phone}</Td>
                        </Tr>
                        <Tr>
                          <Th>Alamat</Th>
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
                                Diaktifkan
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
                                Ditangguhkan
                              </Box>
                            )}
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>Panggilan Diajukan</Th>
                          <Td>{item.calls.length}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    <Flex mt={8} flexWrap="wrap" justifyContent="center">
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
                          onClick={() => {
                            handleDetailCall(call.id_call);
                          }}
                        >
                          <VStack>
                            <Text>{formatDate(call.applied_at)}</Text>
                            <Text as="b">
                              {call.call_status === 0
                                ? "Menunggu"
                                : call.call_status === 1
                                ? "Dibatalkan"
                                : "Diterima"}
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
