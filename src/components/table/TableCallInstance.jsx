import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
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
import React, { useState } from "react";
import { formatDecimal } from "@/lib/formatDecimal";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Loading } from "../Loading";
import { formatDate } from "@/lib/formatDate";

export function TableCallInstance() {
  const router = useRouter();
  const toast = useToast();
  const { id: id_instances } = router.query;
  const [isLoading, setIsloading] = useState(true);

  let i = 1;
  const { data: dataCall, refetch: refetchDataCall } = useQuery({
    queryKey: ["call/instances", id_instances],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(
        `/call/instances/${id_instances}`
      );
      setIsloading(false);
      return dataResponse;
    },
  });

  const { data: dataInstance, refetch: refetchDataInstance } = useQuery({
    queryKey: ["instance", id_instances],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(`/instance/${id_instances}`);
      return dataResponse;
    },
  });

  const handleDetail = (id_call) => {
    router.push(`/admin/call/${id_call}`);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      {dataInstance?.data.values.map((item, index) => (
        <Heading marginBottom="8" marginTop="8" key={index}>
          Panggilan {item.instances_name}
        </Heading>
      ))}
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th></Th>
              <Th>Nama</Th>
              <Th>Lokasi</Th>
              <Th>Jenis</Th>
              <Th>Diajukan Pada</Th>
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
                    <Image
                      key={index}
                      borderRadius="18"
                      boxSize="60px"
                      objectFit="cover"
                      src={user.picture}
                      alt={user.picture}
                    />
                  ))}
                </Td>
                <Td>
                  <Text as="b">
                    {item.user.map((user, index) => (
                      <React.Fragment key={index}>
                        {user.fullname}
                      </React.Fragment>
                    ))}
                  </Text>
                </Td>
                <Td>
                  <HStack>
                    <Text>{formatDecimal(item.latitude)}, </Text>
                    <Text>{formatDecimal(item.longitude)}</Text>{" "}
                    <a href={item.url_google_map} target="_blank">
                      <ExternalLinkIcon />
                    </a>
                  </HStack>
                </Td>{" "}
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
                            ? "Menunggu"
                            : item.status === 1
                            ? "Dibatalkan"
                            : "Diterima"}
                        </Text>
                        {item.status === 0 ? (
                          ""
                        ) : item.status == 1 ? (
                          <Text>Dibatalkan Oleh Pengguna</Text>
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
        {dataCall?.data.values.length == 0 ? (
          <Alert status="info">
            <AlertIcon />
            Tidak ada data
          </Alert>
        ) : null}
      </TableContainer>
    </>
  );
}
