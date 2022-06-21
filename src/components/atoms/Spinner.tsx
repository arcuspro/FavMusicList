import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Loader = styled.div<{ size: number; color: string; spinSize: number }>`
  border: ${({ spinSize }) => spinSize}px solid #000000;
  border-top: ${({ spinSize, color }) => `${spinSize}px solid ${color}`};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: React.FC<{
  color: string;
  size: number;
  spinSize: number;
}> = ({ color, size, spinSize }) => {
  return (
    <Container>
      <Loader color={color} size={size} spinSize={spinSize} />
    </Container>
  );
};
