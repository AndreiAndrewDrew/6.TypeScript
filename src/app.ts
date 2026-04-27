type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Uppercase<ReadOrWrite>}${Capitalize<Bulk>}`;

type ErrorOrSuccess = 'error' | 'success';

type ResponseType1 = {
  result: `http${Capitalize<ErrorOrSuccess>}`;
};

const a1: ResponseType1 = {
  result: 'httpSuccess',
};
