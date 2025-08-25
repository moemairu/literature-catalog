# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListBooks*](#listbooks)
- [**Mutations**](#mutations)
  - [*CreateBook*](#createbook)
  - [*UpdateBook*](#updatebook)
  - [*DeleteBook*](#deletebook)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListBooks
You can execute the `ListBooks` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
listBooks(): QueryPromise<ListBooksData, undefined>;

interface ListBooksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListBooksData, undefined>;
}
export const listBooksRef: ListBooksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listBooks(dc: DataConnect): QueryPromise<ListBooksData, undefined>;

interface ListBooksRef {
  ...
  (dc: DataConnect): QueryRef<ListBooksData, undefined>;
}
export const listBooksRef: ListBooksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listBooksRef:
```typescript
const name = listBooksRef.operationName;
console.log(name);
```

### Variables
The `ListBooks` query has no variables.
### Return Type
Recall that executing the `ListBooks` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListBooksData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListBooksData {
  books: ({
    id: UUIDString;
    title: string;
    author: string;
    genre?: string | null;
  } & Book_Key)[];
}
```
### Using `ListBooks`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listBooks } from '@dataconnect/generated';


// Call the `listBooks()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listBooks();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listBooks(dataConnect);

console.log(data.books);

// Or, you can use the `Promise` API.
listBooks().then((response) => {
  const data = response.data;
  console.log(data.books);
});
```

### Using `ListBooks`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listBooksRef } from '@dataconnect/generated';


// Call the `listBooksRef()` function to get a reference to the query.
const ref = listBooksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listBooksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.books);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.books);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateBook
You can execute the `CreateBook` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
createBook(): MutationPromise<CreateBookData, undefined>;

interface CreateBookRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateBookData, undefined>;
}
export const createBookRef: CreateBookRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createBook(dc: DataConnect): MutationPromise<CreateBookData, undefined>;

interface CreateBookRef {
  ...
  (dc: DataConnect): MutationRef<CreateBookData, undefined>;
}
export const createBookRef: CreateBookRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createBookRef:
```typescript
const name = createBookRef.operationName;
console.log(name);
```

### Variables
The `CreateBook` mutation has no variables.
### Return Type
Recall that executing the `CreateBook` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateBookData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateBookData {
  book_insert: Book_Key;
}
```
### Using `CreateBook`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createBook } from '@dataconnect/generated';


// Call the `createBook()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createBook();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createBook(dataConnect);

console.log(data.book_insert);

// Or, you can use the `Promise` API.
createBook().then((response) => {
  const data = response.data;
  console.log(data.book_insert);
});
```

### Using `CreateBook`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createBookRef } from '@dataconnect/generated';


// Call the `createBookRef()` function to get a reference to the mutation.
const ref = createBookRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createBookRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.book_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.book_insert);
});
```

## UpdateBook
You can execute the `UpdateBook` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
updateBook(vars: UpdateBookVariables): MutationPromise<UpdateBookData, UpdateBookVariables>;

interface UpdateBookRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBookVariables): MutationRef<UpdateBookData, UpdateBookVariables>;
}
export const updateBookRef: UpdateBookRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateBook(dc: DataConnect, vars: UpdateBookVariables): MutationPromise<UpdateBookData, UpdateBookVariables>;

interface UpdateBookRef {
  ...
  (dc: DataConnect, vars: UpdateBookVariables): MutationRef<UpdateBookData, UpdateBookVariables>;
}
export const updateBookRef: UpdateBookRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateBookRef:
```typescript
const name = updateBookRef.operationName;
console.log(name);
```

### Variables
The `UpdateBook` mutation requires an argument of type `UpdateBookVariables`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateBookVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateBook` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateBookData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateBookData {
  book_update?: Book_Key | null;
}
```
### Using `UpdateBook`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateBook, UpdateBookVariables } from '@dataconnect/generated';

// The `UpdateBook` mutation requires an argument of type `UpdateBookVariables`:
const updateBookVars: UpdateBookVariables = {
  id: ..., 
};

// Call the `updateBook()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateBook(updateBookVars);
// Variables can be defined inline as well.
const { data } = await updateBook({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateBook(dataConnect, updateBookVars);

console.log(data.book_update);

// Or, you can use the `Promise` API.
updateBook(updateBookVars).then((response) => {
  const data = response.data;
  console.log(data.book_update);
});
```

### Using `UpdateBook`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateBookRef, UpdateBookVariables } from '@dataconnect/generated';

// The `UpdateBook` mutation requires an argument of type `UpdateBookVariables`:
const updateBookVars: UpdateBookVariables = {
  id: ..., 
};

// Call the `updateBookRef()` function to get a reference to the mutation.
const ref = updateBookRef(updateBookVars);
// Variables can be defined inline as well.
const ref = updateBookRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateBookRef(dataConnect, updateBookVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.book_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.book_update);
});
```

## DeleteBook
You can execute the `DeleteBook` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [example-connector/index.d.ts](./index.d.ts):
```typescript
deleteBook(vars: DeleteBookVariables): MutationPromise<DeleteBookData, DeleteBookVariables>;

interface DeleteBookRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteBookVariables): MutationRef<DeleteBookData, DeleteBookVariables>;
}
export const deleteBookRef: DeleteBookRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteBook(dc: DataConnect, vars: DeleteBookVariables): MutationPromise<DeleteBookData, DeleteBookVariables>;

interface DeleteBookRef {
  ...
  (dc: DataConnect, vars: DeleteBookVariables): MutationRef<DeleteBookData, DeleteBookVariables>;
}
export const deleteBookRef: DeleteBookRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteBookRef:
```typescript
const name = deleteBookRef.operationName;
console.log(name);
```

### Variables
The `DeleteBook` mutation requires an argument of type `DeleteBookVariables`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteBookVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteBook` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteBookData`, which is defined in [example-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteBookData {
  book_delete?: Book_Key | null;
}
```
### Using `DeleteBook`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteBook, DeleteBookVariables } from '@dataconnect/generated';

// The `DeleteBook` mutation requires an argument of type `DeleteBookVariables`:
const deleteBookVars: DeleteBookVariables = {
  id: ..., 
};

// Call the `deleteBook()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteBook(deleteBookVars);
// Variables can be defined inline as well.
const { data } = await deleteBook({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteBook(dataConnect, deleteBookVars);

console.log(data.book_delete);

// Or, you can use the `Promise` API.
deleteBook(deleteBookVars).then((response) => {
  const data = response.data;
  console.log(data.book_delete);
});
```

### Using `DeleteBook`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteBookRef, DeleteBookVariables } from '@dataconnect/generated';

// The `DeleteBook` mutation requires an argument of type `DeleteBookVariables`:
const deleteBookVars: DeleteBookVariables = {
  id: ..., 
};

// Call the `deleteBookRef()` function to get a reference to the mutation.
const ref = deleteBookRef(deleteBookVars);
// Variables can be defined inline as well.
const ref = deleteBookRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteBookRef(dataConnect, deleteBookVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.book_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.book_delete);
});
```

