
import { Container, Heading } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableCallInstance } from "@/components/table/TableCallInstance";
import { NavbarAdmin } from "@/components/NavbarAdmin";



export default function CallInstanceID() {
  return (
    <>
      <HeadAdmin/>
      <NavbarAdmin/>
      <main>        
        <Container maxW="80%">
        
          <TableCallInstance/></Container>
      </main>
    </>
  );
}
