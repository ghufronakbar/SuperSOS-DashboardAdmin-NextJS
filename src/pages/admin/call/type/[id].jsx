
import { Container, Heading } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableCallType } from "@/components/table/TableCallType";
import { NavbarAdmin } from "@/components/NavbarAdmin";
import { withAuth } from "@/lib/authorization";



 function CallTypeID() {
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

export default withAuth(CallTypeID)
