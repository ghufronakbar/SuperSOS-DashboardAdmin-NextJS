
import { Container } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { DetailInstance } from "@/components/detail/DetailInstance";


export default function InstanceID() {
  return (
    <>
      <HeadAdmin/>
      <main>        
        <Container maxW="80%"><DetailInstance/></Container>
      </main>
    </>
  );
}
