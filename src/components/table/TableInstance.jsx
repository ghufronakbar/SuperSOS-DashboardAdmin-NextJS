import {
  Box,
  Button,
  Center,
  Flex,
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
  useToast,
} from "@chakra-ui/react";
import { axiosInstance } from "../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function TableInstance() {
  const router = useRouter();
  const toast = useToast();

  let i = 1;
  const { data: dataUser, refetch: refetchDataUser } = useQuery({
    queryKey: ["instances"],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get("/instances");
      return dataResponse;
    },
  });


  const handleDetail = (id_instance) => {
    router.push(`/admin/instance/${id_instance}`);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>No</Th>

              <Th>Name</Th>
              <Th>Contact</Th>
              <Th>Address</Th>
              <Th>Call Answered</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataUser?.data.values.map((item) => (
              <Tr key={item.id_user}>
                <Td>{i++}</Td>

                <Td>
                  <Text as="b">{item.instances_name}</Text>
                </Td>
                <Td>
                  <Text as="b">{item.email}</Text>
                  <Text>{item.phone}</Text>
                </Td>

                <Td>
                  <Text>{item.address}</Text>
                </Td>
                <Td isNumeric>
                  <Center>
                    <Text as="abbr">{item.calls.length}</Text>
                  </Center>
                </Td>
                <Td>
                  <Center>
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
                  </Center>
                </Td>
                <Td>
                  <Center>
                    <Button
                      variant="outline"
                      colorScheme="grey"
                      onClick={() => handleDetail(item.id_instances)}
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
