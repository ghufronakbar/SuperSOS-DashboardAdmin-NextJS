
import { Container } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { DetailUser } from "@/components/detail/DetailUser";

export default function WargaID() {
  return (
    <>
      <HeadAdmin/>
      <main>        
        <Container maxW="80%"><DetailUser/></Container>
      </main>
    </>
  );
}
