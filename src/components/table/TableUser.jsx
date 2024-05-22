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

export function TableUser() {
  const router = useRouter();
  const toast = useToast();

  let i = 1;
  const { data: dataUser, refetch: refetchDataUser } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get("/users");
      return dataResponse;
    },
  });

  const handleSuspend = async (id_user) => {
    try {
      await axiosInstance.put(`/user/suspend/${id_user}`, {
        status: 0,
        id_user,
      });
      toast({
        title: "Pengguna ini telah ditangguhkan",
        status: "warning",
      });
      refetchDataUser();
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  const handleActivated = async (id_user) => {
    try {
      await axiosInstance.put(`/user/suspend/${id_user}`, {
        status: 1,
        id_user,
      });
      toast({
        title: "Pengguna ini telah diaktifkan",
        status: "success",
      });
      refetchDataUser();
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  const handleDetail = (id_user) => {
    router.push(`/admin/user/${id_user}`);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th></Th>
              <Th>Nama</Th>
              <Th>Kontak</Th>
              <Th>Alamat</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataUser?.data.values.map((item) => (
              <Tr key={item.id_user}>
                <Td>{i++}</Td>
                <Td>
                  <Image
                    borderRadius="18"
                    boxSize="60px"
                    objectFit="cover"
                    src={process.env.NEXT_PUBLIC_BASE_URL + '/images/profile/' + item.picture}
                    alt={item.picture}
                  />
                </Td>
                <Td>
                  <Text as="b">{item.fullname}</Text>
                </Td>
                <Td>
                  <Text as="b">{item.email}</Text>
                  <Text>{item.phone}</Text>
                </Td>
                <Td>
                  <Text>{item.address}</Text>
                </Td>
                <Td>
                  <Center>
                    {item.user_status == 1 ? (
                      <Box
                        as="button"
                        borderRadius="md"
                        bg="#48BB78"
                        color="white"
                        px={4}
                        h={8}
                        onClick={() => {
                          handleSuspend(item.id_user);
                        }}
                      >
                        Aktif
                      </Box>
                    ) : (
                      <Box
                        as="button"
                        borderRadius="md"
                        bg="#E53E3E"
                        color="white"
                        px={4}
                        h={8}
                        onClick={() => {
                          handleActivated(item.id_user);
                        }}
                      >
                        Ditangguhkan
                      </Box>
                    )}
                  </Center>
                </Td>
                <Td>
                  <Center>
                    <Button
                      variant="outline"
                      colorScheme="grey"
                      onClick={() => handleDetail(item.id_user)}
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
