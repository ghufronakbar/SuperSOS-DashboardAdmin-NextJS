
import { Container } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { DetailCall } from "@/components/detail/DetailCall";



export default function InstanceID() {
  return (
    <>
      <HeadAdmin/>
      <main>        
        <Container maxW="80%"><DetailCall/></Container>
      </main>
    </>
  );
}
