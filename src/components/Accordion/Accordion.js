import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';

import {
    StyledAccordion,
    StyledAccordionHeader,
    StyledAccordionContent
} from './Accordion.styles';

export * from './Accordion.styles';

export const Accordion = ({ title, children }) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleAccordion = useCallback(() => setExpanded(!isExpanded), [isExpanded]);

    return (
        <StyledAccordion>
            <StyledAccordionHeader isOpened={isExpanded} onClick={handleAccordion}>
                {title}
                <FaChevronDown />
            </StyledAccordionHeader>
            {isExpanded ? (
                <StyledAccordionContent>{children}</StyledAccordionContent>
            ) : null}
        </StyledAccordion>
    );
};

Accordion.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node
};
