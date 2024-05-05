
import { Container } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { DetailUser } from "@/components/detail/DetailUser";
import { NavbarAdmin } from "@/components/NavbarAdmin";
import { withAuth } from "@/lib/authorization";

function UserID() {
  return (
    <>
      <HeadAdmin/>
      <NavbarAdmin/>
      <main>        
        <Container maxW="80%"><DetailUser/></Container>
      </main>
    </>
  );
}

export default withAuth(UserID)