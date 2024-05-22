import { Flex, Spacer, Box, Button, Select, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
      <Button colorScheme="white" variant="ghost" mr={4}>
        SUPERSOS ADMIN
      </Button>
      <Spacer />
      <Flex alignItems="center">
        <Box mr={4}>
          <Button
            colorScheme="white"
            variant="ghost"
            onClick={() => router.push(`/admin/instance`)}
          >
            Instansi
          </Button>
        </Box>
        <Box mr={4}>
          <Button
            colorScheme="white"
            variant="ghost"
            onClick={() => router.push(`/admin/instance/pending`)}
          >
            Permintaan Pendaftaran Instansi
          </Button>
        </Box>
        <Box mr={4}>
          <Button
            colorScheme="white"
            variant="ghost"
            onClick={() => router.push(`/admin/user`)}
          >
            Pengguna
          </Button>
        </Box>
        <Box mr={4}>
          <Select
            placeholder="Tipe Panggilan Darurat"
            onChange={handleSelectChange}
            variant="filled"
            color="teal"
          >
            <option value="/admin/call">Semua Panggilan Darurat</option>
            <option value="/admin/call/type/1">
              Panggilan Darurat Rumah Sakit
            </option>
            <option value="/admin/call/type/2">Panggilan Darurat Polisi</option>
            <option value="/admin/call/type/3">
              Panggilan Darurat Pemadam Kebakaran
            </option>
          </Select>
        </Box>
        <Box mr={4}>
          <Select
            placeholder="Panggilan Darurat oleh Instansi"
            onChange={handleSelectChange}
            variant="filled"
            color="teal"
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
        <Button colorScheme="white" variant="ghost" onClick={handleLogout}>
          <Text as="b">Keluar</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
