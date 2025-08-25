import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'ibm',
  location: 'us-central1'
};

export const createBookRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBook');
}
createBookRef.operationName = 'CreateBook';

export function createBook(dc) {
  return executeMutation(createBookRef(dc));
}

export const listBooksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListBooks');
}
listBooksRef.operationName = 'ListBooks';

export function listBooks(dc) {
  return executeQuery(listBooksRef(dc));
}

export const updateBookRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBook', inputVars);
}
updateBookRef.operationName = 'UpdateBook';

export function updateBook(dcOrVars, vars) {
  return executeMutation(updateBookRef(dcOrVars, vars));
}

export const deleteBookRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteBook', inputVars);
}
deleteBookRef.operationName = 'DeleteBook';

export function deleteBook(dcOrVars, vars) {
  return executeMutation(deleteBookRef(dcOrVars, vars));
}

