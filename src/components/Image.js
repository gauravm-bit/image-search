import React from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";

const ImageElement = ({ image, alt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="image-list">
      <Modal size="full" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m={5}>
          <ModalCloseButton />
          <Image objectFit="contain" src={image} />
        </ModalContent>
      </Modal>
      <img src={image} alt={alt} onClick={onOpen} />
    </div>
  );
};

export default ImageElement;
