import {AccordionItem} from "@nextui-org/accordion";
import IntegrationsContent from "@/components/Collapse/Content/integrationsTable";

const SingleAccordeon = () => {
  return(
    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" className={"w-full"}>
      <IntegrationsContent />
    </AccordionItem>
  )
}

export default SingleAccordeon;