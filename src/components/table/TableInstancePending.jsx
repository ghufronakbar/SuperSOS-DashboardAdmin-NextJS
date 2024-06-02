import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
import { useState } from "react";
import { Loading } from "../Loading";

export function TableInstancePending() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idInstances, setIdInstances] = useState(null);
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsloading] = useState(true)

  let i = 1;
  const { data: dataInstancePending, refetch: refetchDataInstancePending } =
    useQuery({
      queryKey: ["instances/pending"],
      queryFn: async () => {
        const dataResponse = await axiosInstance.get("/instances/pending");
        setIsloading(false)
        return dataResponse;
      },
    });

  const handleApproveInstance = async (id_instances) => {
    try {
      await axiosInstance.put(`/instance/approve/${id_instances}`, {
        status: 1,
        id_instances,
      });
      toast({
        title: "Instansi ini telah diaktifkan",
        status: "success",
      });
      refetchDataInstancePending();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  const handleDelete = async (id_instances) => {
    try {
      await axiosInstance.delete(`/instance/reject/${id_instances}`, {
        id_instances,
      });
      toast({
        title: "Instansi ini telah dihapus",
        status: "warning",
      });
      refetchDataInstancePending();
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
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataInstancePending?.data.values.length === 0 ? (
              <></>
            ) : (
              dataInstancePending?.data.values.map((item) => (
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
                      {item.type == 1
                        ? "Rumah Sakit"
                        : item.type == 2
                        ? "Polisi"
                        : "Pemadam Kebakaran"}
                    </Text>
                  </Td>
                  <Td>
                    <Box
                      as="button"
                      borderRadius="md"
                      bg="#CBD5E0"
                      color="white"
                      px={4}
                      h={8}
                      onClick={() => {
                        setIsModalOpen(true);
                        setIdInstances(item.id_instances);
                      }}
                    >
                      Pending
                    </Box>
                  </Td>
                  <Td>
                    <Box
                      as="button"
                      borderRadius="md"
                      bg="#E53E3E"
                      color="white"
                      px={4}
                      h={8}
                      onClick={() => {
                        handleDelete(item.id_instances);
                      }}
                    >
                      Hapus Permintaan
                    </Box>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
        {dataInstancePending?.data.values.length === 0 ? (
          <Alert status="info">
            <AlertIcon />
            Tidak ada data
          </Alert>
        ) : null}
      </TableContainer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Setujui Instansi?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Spacer />
              <Button
                mt={8}
                borderRadius="md"
                bg="#CBD5E0"
                color="white"
                px={4}
                h={8}
                type="submit"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                Batal
              </Button>
              <Spacer />
              <Button
                mt={8}
                borderRadius="md"
                bg="#48BB78"
                color="white"
                px={4}
                h={8}
                onClick={() => {
                  handleApproveInstance(idInstances);
                }}
              >
                Terima
              </Button>
              <Spacer />
            </Flex>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
