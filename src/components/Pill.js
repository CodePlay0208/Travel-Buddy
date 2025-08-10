import React from 'react';
import styled, { css } from 'styled-components';

const PillStyled = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  border: 1px solid ${({ selected }) => (selected ? '#0b87ac' : '#d0d7de')};
  background: ${({ selected }) => (selected ? '#e6f7fc' : '#fff')};
  color: ${({ selected }) => (selected ? '#0b87ac' : '#24292f')};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.15s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  ${({ style }) => style && css(style)}
`;

const Pill = ({ selected, onClick, children, disabled, style }) => (
  <PillStyled
    selected={selected}
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
    style={style}
    role="button"
    aria-pressed={selected}
    tabIndex={disabled ? -1 : 0}
  >
    {children}
  </PillStyled>
);

export default Pill;
