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

export function DetailInstance() {
  const router = useRouter();
  const { id: id_instances } = router.query;
  const [item, setRequestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reqDataResponse = await axiosInstance.get(`/instance/${id_instances}`);
        setRequestData(reqDataResponse.data.values[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching detail request data:", error);
      }
    };

    if (id_instances) {
      fetchData();
    }
  }, [id_instances]);

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
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  if (loading) return <div>Memuat...</div>;
  if (error) return <div>Terjadi kesalahan saat mengambil data</div>;

  return (
    <>
      {item && (
        <Box>
          <Flex justifyContent="center">
            <Box flex={4} mt={4}>
              <Box p={8} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box mt={4}>
                  <TableContainer>
                    <Table>
                      <Tbody>
                        <Tr>
                          <Th>Nama</Th>
                          <Td>{item.instances_name}</Td>
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
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>Panggilan Dijawab</Th>
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
                            call.call_status === 1 ? "#E53E3E" : "#0063d1"
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
                            <Text>{formatDate(call.answered_at)}</Text>
                            <Text as="b">{call.user_fullname}</Text>
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
