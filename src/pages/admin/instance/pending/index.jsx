import { Container, Heading, } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableInstancePending } from "@/components/table/TableInstancePending";
import { NavbarAdmin } from "@/components/NavbarAdmin";
import { withAuth } from "@/lib/authorization";

function InstancePending() {
  return (
    <>
      <HeadAdmin/>
      <NavbarAdmin/>
      <main>        
        <Container maxW="80%">          
          <Heading  marginBottom="8" marginTop="8">Permintaan Pendaftaran Instansi</Heading>
          <TableInstancePending/>
        </Container>
      </main>
    </>
  );
}

export default withAuth(InstancePending)
