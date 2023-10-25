import React,{useState} from 'react'

export const withAccordion = (WrappedComponent) => {
    return function WithAccordion(props) {
        const [openAccordion, setOpenAccordion] = useState(null);
    
        const handleAccordionClick = (index) => {
          if (openAccordion === index) {
            setOpenAccordion(null);
          } else {
            setOpenAccordion(index);
          }
        };
    
        return (
          <WrappedComponent
            {...props}
            openAccordion={openAccordion}
            toggleAccordion={handleAccordionClick}
          />
        );
      };
}
