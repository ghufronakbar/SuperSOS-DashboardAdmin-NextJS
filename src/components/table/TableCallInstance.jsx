import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { axiosInstance } from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";


export function TableCallInstance() {
  const router = useRouter();
  const toast = useToast();
  const { id: id_instances } = router.query;

  function formatDate(dateString) {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  let i = 1;
  const { data: dataCall, refetch: refetchDataCall } = useQuery({
    queryKey: ["call/instances", id_instances],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(`/call/instances/${id_instances}`);
      return dataResponse;
    },
  });

  const { data: dataInstance, refetch: refetchDataInstance } = useQuery({
    queryKey: ["instance",id_instances],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(`/instance/${id_instances}`);
      return dataResponse;
    },
  });

  const handleDetail = (id_call) => {
    router.push(`/admin/call/${id_call}`);
  };

  return (
    <>
     {dataInstance?.data.values.map((item) => (
    <Heading marginBottom="8" marginTop="8">Calls {item.instances_name}</Heading>
     ))}
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th></Th>
              <Th>Name</Th>
              <Th>Location</Th>
              <Th>Type</Th>
              <Th>Applied At</Th>              
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataCall?.data.values.map((item) => (
              <Tr key={item.id_call}>
                <Td>{i++}</Td>
                <Td>
                  {item.user.map((user, index) => (
                    <>
                      <Image
                        borderRadius="18"
                        boxSize="60px"
                        objectFit="cover"
                        src={user.picture}
                        alt={user.picture}
                      />
                    </>
                  ))}
                </Td>
                <Td>
                  <Text as="b">
                    {item.user.map((user) => (
                      <>{user.fullname}</>
                    ))}
                  </Text>
                </Td>
                <Td>
                  <Text>{item.latitude}</Text>
                  <Text>{item.longitude}</Text>
                </Td>

                <Td>
                  <Text as="b">
                    {item.type == 1
                      ? "Rumah Sakit"
                      : item.type == 2
                      ? "Polisi"
                      : "Pemadam Kebakaran"}
                  </Text>
                </Td>
                <Td>
                  <Text>{formatDate(item.applied_at)}</Text>
                </Td>
          
                <Td>
                  <Center>
                    <Box
                      as="button"
                      borderRadius="md"
                      bg={
                        item.status === 0
                          ? "#CBD5E0"
                          : item.status === 1
                          ? "#E53E3E"
                          : "#0063d1"
                      }
                      color="white"
                      p={2}
                      m={2}
                      px={4}
                    >
                      <VStack>
                       
                        <Text as="b">
                          {item.status === 0
                            ? "Pending"
                            : item.status === 1
                            ? "Cancelled"
                            : "Accepted"}
                        </Text>
                        {item.status === 0 ? (
                          ""
                        ) : item.status == 1 ? (
                          <Text>Cancelled By User</Text>
                        ) : (
                          <Text>{formatDate(item.answered_at)}</Text>
                        )}

                      </VStack>
                    </Box>
                  </Center>
                </Td>
                <Td>
                  <Center>
                    <Button
                      variant="outline"
                      colorScheme="grey"
                      onClick={() => handleDetail(item.id_call)}
                    >
                      <Text as="b">Detail</Text>
                    </Button>
                  </Center>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
