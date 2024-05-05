import { Container } from "@chakra-ui/react";
import { HeadAdmin } from "@/components/HeadAdmin";
import { DetailInstance } from "@/components/detail/DetailInstance";
import { NavbarAdmin } from "@/components/NavbarAdmin";

export default function InstanceID() {
  return (
    <>
      <HeadAdmin />
      <NavbarAdmin />
      <main>
        <Container maxW="80%">
          <DetailInstance />
        </Container>
      </main>
    </>
  );
}
