import styled from 'styled-components';

interface AvatarProps {
  size: number;
}

export const Avatar = styled.img<AvatarProps>`
  vertical-align: middle;
  object-fit: cover;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;
