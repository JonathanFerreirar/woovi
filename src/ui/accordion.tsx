'use client'

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import { styled } from '@mui/material/styles'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  padding: 0,
  width: '100%',
  border: `none`,
  '&::before': {
    display: 'none',
  },
}))

export default Accordion
