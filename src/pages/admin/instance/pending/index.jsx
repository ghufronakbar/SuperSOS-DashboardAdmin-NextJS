import { Container, Heading, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeadAdmin } from "@/components/HeadAdmin";
import { TableInstancePending } from "@/components/table/TableInstancePending";


export default function InstancePending() {
  const router = useRouter();
  return (
    <>
      <HeadAdmin/>
      <main>
        
        <Container maxW="80%">          
          <Heading  marginBottom="8" marginTop="8">Request Instances</Heading>
          <TableInstancePending/>
        </Container>
      </main>
    </>
  );
}
