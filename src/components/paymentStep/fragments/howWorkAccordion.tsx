import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { ChevronUp } from 'lucide-react'

import Accordion from '@/ui/accordion'

const HowWorkAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ChevronUp strokeWidth={3} />}
        id="panel2-header"
        aria-controls="panel2-content"
        style={{
          padding: 0,
          width: '100%',
          border: 0,
          outline: 'none',
          boxShadow: 'none',
        }}
      >
        <Typography fontWeight="1000" color="#4D4D4D">
          Como funciona?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Copie o código acima e realize o pagamento no seu banco de
          preferência, após isso será redirecionado para uma tela onde poderá
          adicionar seu cartão de crédito e dar seguimento no fluxo.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default HowWorkAccordion
