import { Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableInstance } from "@/components/table/TableInstance";
import { NavbarAdmin } from "@/components/NavbarAdmin";
import { withAuth } from "@/lib/authorization";

function Instance() {
  return (
    <>
      <HeadAdmin />
      <NavbarAdmin />
      <main>
        <Container maxW="80%">
          <Heading marginBottom="8" marginTop="8">
            Instances
          </Heading>
          <TableInstance />
        </Container>
      </main>
    </>
  );
}

export default withAuth(Instance)