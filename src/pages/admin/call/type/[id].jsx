
import { Container, Heading } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableCallType } from "@/components/table/TableCallType";
import { NavbarAdmin } from "@/components/NavbarAdmin";




export default function CallInstanceID() {
  return (
    <>
      <HeadAdmin/>
      <NavbarAdmin/>
      <main>        
        <Container maxW="80%">
        
          <TableCallType/></Container>
      </main>
    </>
  );
}
