import { Container, Heading, } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableInstancePending } from "@/components/table/TableInstancePending";
import { NavbarAdmin } from "@/components/NavbarAdmin";


export default function InstancePending() {
  return (
    <>
      <HeadAdmin/>
      <NavbarAdmin/>
      <main>        
        <Container maxW="80%">          
          <Heading  marginBottom="8" marginTop="8">Request Instances</Heading>
          <TableInstancePending/>
        </Container>
      </main>
    </>
  );
}
