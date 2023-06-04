import styled from 'styled-components';

interface SVGProps {
  size: number;
}

const StyledSVG = styled.svg<SVGProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export function OpenNewWindowIcon({ size }: SVGProps) {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      size={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </StyledSVG>
  );
}
