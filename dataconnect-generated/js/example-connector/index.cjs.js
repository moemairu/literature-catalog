const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'ibm',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createBookRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBook');
}
createBookRef.operationName = 'CreateBook';
exports.createBookRef = createBookRef;

exports.createBook = function createBook(dc) {
  return executeMutation(createBookRef(dc));
};

const listBooksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListBooks');
}
listBooksRef.operationName = 'ListBooks';
exports.listBooksRef = listBooksRef;

exports.listBooks = function listBooks(dc) {
  return executeQuery(listBooksRef(dc));
};

const updateBookRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBook', inputVars);
}
updateBookRef.operationName = 'UpdateBook';
exports.updateBookRef = updateBookRef;

exports.updateBook = function updateBook(dcOrVars, vars) {
  return executeMutation(updateBookRef(dcOrVars, vars));
};

const deleteBookRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteBook', inputVars);
}
deleteBookRef.operationName = 'DeleteBook';
exports.deleteBookRef = deleteBookRef;

exports.deleteBook = function deleteBook(dcOrVars, vars) {
  return executeMutation(deleteBookRef(dcOrVars, vars));
};
