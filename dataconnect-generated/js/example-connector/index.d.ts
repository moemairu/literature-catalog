import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface BookListItem_Key {
  id: UUIDString;
  __typename?: 'BookListItem_Key';
}

export interface BookList_Key {
  id: UUIDString;
  __typename?: 'BookList_Key';
}

export interface Book_Key {
  id: UUIDString;
  __typename?: 'Book_Key';
}

export interface CreateBookData {
  book_insert: Book_Key;
}

export interface DeleteBookData {
  book_delete?: Book_Key | null;
}

export interface DeleteBookVariables {
  id: UUIDString;
}

export interface ListBooksData {
  books: ({
    id: UUIDString;
    title: string;
    author: string;
    genre?: string | null;
  } & Book_Key)[];
}

export interface ReadingEntry_Key {
  id: UUIDString;
  __typename?: 'ReadingEntry_Key';
}

export interface UpdateBookData {
  book_update?: Book_Key | null;
}

export interface UpdateBookVariables {
  id: UUIDString;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateBookRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateBookData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateBookData, undefined>;
  operationName: string;
}
export const createBookRef: CreateBookRef;

export function createBook(): MutationPromise<CreateBookData, undefined>;
export function createBook(dc: DataConnect): MutationPromise<CreateBookData, undefined>;

interface ListBooksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListBooksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListBooksData, undefined>;
  operationName: string;
}
export const listBooksRef: ListBooksRef;

export function listBooks(): QueryPromise<ListBooksData, undefined>;
export function listBooks(dc: DataConnect): QueryPromise<ListBooksData, undefined>;

interface UpdateBookRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBookVariables): MutationRef<UpdateBookData, UpdateBookVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateBookVariables): MutationRef<UpdateBookData, UpdateBookVariables>;
  operationName: string;
}
export const updateBookRef: UpdateBookRef;

export function updateBook(vars: UpdateBookVariables): MutationPromise<UpdateBookData, UpdateBookVariables>;
export function updateBook(dc: DataConnect, vars: UpdateBookVariables): MutationPromise<UpdateBookData, UpdateBookVariables>;

interface DeleteBookRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteBookVariables): MutationRef<DeleteBookData, DeleteBookVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteBookVariables): MutationRef<DeleteBookData, DeleteBookVariables>;
  operationName: string;
}
export const deleteBookRef: DeleteBookRef;

export function deleteBook(vars: DeleteBookVariables): MutationPromise<DeleteBookData, DeleteBookVariables>;
export function deleteBook(dc: DataConnect, vars: DeleteBookVariables): MutationPromise<DeleteBookData, DeleteBookVariables>;

