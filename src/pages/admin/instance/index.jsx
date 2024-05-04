import { Container, Heading, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableInstance } from "@/components/table/TableInstance";


export default function Instance() {
  const router = useRouter();
  return (
    <>
      <HeadAdmin/>
      <main>
        
        <Container maxW="80%">          
          <Heading  marginBottom="8" marginTop="8">Instance</Heading>
          <TableInstance/>
        </Container>
      </main>
    </>
  );
}
