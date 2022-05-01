import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Image,
  Link,
  Skeleton,
} from '@chakra-ui/react';
import { useState } from 'react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />

      <ModalContent bgColor="pGray.800" minW={900} overflow="auto">
        <Skeleton isLoaded={!isLoading}>
          <Image
            src={imgUrl}
            onLoad={() => setIsLoading(false)}
            h={600}
            minW={900}
            overflow="auto"
          />
        </Skeleton>
        <ModalFooter px={2.5} py={2} justifyContent="flex-start">
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
