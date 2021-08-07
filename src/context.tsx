import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

// export interface IProviderProps {
//   children?: any;
// }

export type UserState = {
  sessionId: string | undefined;
  username: string | undefined;
};

export type UserContextValue = {
  state: UserState;
  setState: Dispatch<SetStateAction<UserState>>;
};

const userContextDefaultValue: UserContextValue = {
  state: { sessionId: undefined, username: undefined },
  setState: () => {}, // noop default callback
};
export const Context = createContext(userContextDefaultValue);

const UserProvider = ({ children }: any) => {
  const [state, setState] = useState(userContextDefaultValue.state);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};
export default UserProvider;
