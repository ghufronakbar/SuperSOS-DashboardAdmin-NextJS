import {
  Box,
  Button,
  Center,
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
import { useState } from "react";
import { Loading } from "../Loading";

export function TableInstance() {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsloading] = useState(true)


  let i = 1;
  const { data: dataInstance, refetch: refetchDataInstance } = useQuery({
    queryKey: ["instances"],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get("/instances");
      setIsloading(false)
      return dataResponse;
    },
  });

  const handleDetail = (id_instance) => {
    router.push(`/admin/instance/${id_instance}`);
  };

  const handleSuspend = async (id_instance) => {
    try {
      await axiosInstance.put(`/instance/suspend/${id_instance}`, {
        id_user: id_instance,
      });
      toast({
        title: "Instansi ini telah ditangguhkan",
        status: "warning",
      });
      refetchDataInstance();
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  const handleActive = async (id_instance) => {
    try {
      await axiosInstance.put(`/instance/approve/${id_instance}`, {
        id_user: id_instance,
      });
      toast({
        title: "Instansi ini telah diaktifkan kembali",
        status: "info",
      });
      refetchDataInstance();
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  if(isLoading)return<Loading/>

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Nama</Th>
              <Th>Kontak</Th>
              <Th>Alamat</Th>
              <Th>Jenis</Th>
              <Th>Panggilan Dijawab</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataInstance?.data.values.map((item) => (
              <Tr key={item.id_instances}>
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
                <Td>
                  <Text as="b">
                    {item.instances_type == 1
                      ? "Rumah Sakit"
                      : item.instances_type == 2
                      ? "Polisi"
                      : "Pemadam Kebakaran"}
                  </Text>
                </Td>
                <Td isNumeric>
                  <Center>
                    <Text as="abbr">{item.calls.length}</Text>
                  </Center>
                </Td>
                <Td>
                  <Center>
                    {item.status == 1 ? (
                      <Box
                        as="button"
                        borderRadius="md"
                        bg="#48BB78"
                        color="white"
                        px={4}
                        h={8}
                        onClick={() => {
                          handleSuspend(item.id_instances);
                        }}
                      >
                        Aktif
                      </Box>
                    ) : item.status == 2 ? (
                      <Box
                        as="button"
                        borderRadius="md"
                        bg="red"
                        color="white"
                        px={4}
                        h={8}
                        onClick={() => {
                          handleActive(item.id_instances);
                        }}
                      >
                        Ditangguhkan
                      </Box>
                    ) : null}
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
