
import { Container, Heading } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableCallInstance } from "@/components/table/TableCallInstance";



export default function CallInstanceID() {
  return (
    <>
      <HeadAdmin/>
      <main>        
        <Container maxW="80%">
        
          <TableCallInstance/></Container>
      </main>
    </>
  );
}
