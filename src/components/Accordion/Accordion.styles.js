import styled from 'styled-components';

export const StyledAccordion = styled.div`
    border-radius: 0.375rem;
    margin-bottom: 0;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const StyledAccordionHeader = styled.div`
    display: flex;
    cursor: pointer;
    position: relative;

    .icon--chevron {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transition: all 0.25s linear;
        transform: ${(p) =>
            p.isOpened ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'};
    }
`;

export const StyledAccordionContent = styled.div`
    padding: 0.75rem;
`;
