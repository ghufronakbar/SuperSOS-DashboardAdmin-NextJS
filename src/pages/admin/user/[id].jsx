
import { Container } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { DetailUser } from "@/components/detail/DetailUser";
import { NavbarAdmin } from "@/components/NavbarAdmin";

export default function WargaID() {
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
