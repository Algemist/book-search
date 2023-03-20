import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getSearchBookValue = (state: StateSchema) => state.searchBook.value;
