import { Container, Heading, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableUser } from "@/components/table/TableUser";

export default function User() {
  const router = useRouter();
  return (
    <>
      <HeadAdmin/>
      <main>
        
        <Container maxW="80%">          
          <Heading  marginBottom="8" marginTop="8">User</Heading>
          <TableUser/>
        </Container>
      </main>
    </>
  );
}
