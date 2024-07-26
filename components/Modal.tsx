"use client";
import React, {useEffect} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface CMOdelT {
  updateState: () => void;
}

const  CModal: React.FC<CMOdelT> = (
  {updateState}
) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  useEffect(() => {
    onOpen()
  }, []);


  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Das hat geklappt!</ModalHeader>
              <ModalBody>
                <p className={"text-center"}>
                  Nachricht gesendet! <br/> Wir werden uns schnellstmöglich bei Ihnen melden!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={() => {
                  onClose();
                  updateState();
                }}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default CModal;