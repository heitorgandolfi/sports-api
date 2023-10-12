import styled from "styled-components";

export const TableWrapper = styled.div``;

export const Table = styled.table`
  width: 100%;

  font-weight: bold;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  color: ${({ theme }) => theme["white"]};
  background-color: ${({ theme }) => theme["gray-700"]};

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  th {
    font-weight: bold;
    background-color: ${({ theme }) => theme["gray-700"]};
  }

  tr {
    background-color: ${({ theme }) => theme["gray-600"]};
  }

  tr:nth-child(-n + 4) {
    background-color: ${({ theme }) => theme["green-400"]};
  }

  tr:nth-child(5) {
    background-color: ${({ theme }) => theme["orange-400"]};
  }

  tr:nth-last-child(-n + 3) {
    background-color: ${({ theme }) => theme["red-400"]};
  }

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const FormInfo = styled.td`
  letter-spacing: 0.25rem;
  width: 0.5rem;
`;
