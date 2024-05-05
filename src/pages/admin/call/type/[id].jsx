
import { Container, Heading } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableCallType } from "@/components/table/TableCallType";




export default function CallInstanceID() {
  return (
    <>
      <HeadAdmin/>
      <main>        
        <Container maxW="80%">
        
          <TableCallType/></Container>
      </main>
    </>
  );
}
