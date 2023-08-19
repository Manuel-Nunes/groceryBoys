import { Auth as CognitoAuth } from '@aws-amplify/auth';
import { Hub, HubCallback } from '@aws-amplify/core';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { createContext, ReactNode, useContext, useState } from 'react';
import useAsyncEffect from 'use-async-effect';


CognitoAuth.configure({
  aws_project_region: 'us-east-1',
  userPoolId: 'us-east-1_bgjMgLW9i',
  userPoolWebClientId: '2cp9jnng37l79i4v1lh7kgepim'
});

type User = {
    email: string;
}

async function cognitoUserToUser(cognitoUser: CognitoUser): Promise<User> {
  const attrList = await CognitoAuth.userAttributes(cognitoUser);
  const attrs = Object.fromEntries(
    attrList.map((attr) => [attr.getName(), attr.getValue()]),
  );
  console.log(JSON.stringify(attrs));
  return {
    email: attrs.email,
  };
}

type Auth = ReturnType<typeof useProvideAuth>;
const AuthContext = createContext<Auth | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext)!;
}

export type Credentials = Pick<User, 'email'> & {
    password: string;
};

type CognitoUserWithChallenge = CognitoUser & {
    challengeName: string | null | undefined;
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [authInProgress, setAuthInProgress] = useState(true);
  
  async function logIn({ email, password }: Credentials): Promise<User | string> {
    const cognitoUser: CognitoUserWithChallenge = await CognitoAuth.signIn(email, password);
    if (cognitoUser.challengeName) {
      return cognitoUser.challengeName;
    }
    setUser(await cognitoUserToUser(cognitoUser));
    setAuthInProgress(false);
    return user!;
  }
  

  async function logOut(global = false) {
    setUser(null);
    await CognitoAuth.signOut({ global });
  }
  
  async function signUp({ email, password }: Credentials) {
    const result = await CognitoAuth.signUp({
      username: email,
      password
    });
  }

  async function verifyEmail(email: string, code: string) {
    return await CognitoAuth.confirmSignUp(email, code);
  }

  async function getUser() {
    try {
      const user: CognitoUserWithChallenge = await CognitoAuth.currentAuthenticatedUser();
      if (!user.challengeName) {
        setUser(await cognitoUserToUser(user));
        setAuthInProgress(false);
      }
    } catch (e) {
      setAuthInProgress(false);
    }
  }
  
  let listener: HubCallback;
  
  useAsyncEffect(
    async (isMounted) => {
      if (isMounted()) {
        await getUser();
        listener = async (data) => {
          switch (data.payload.event) {
          case 'signOut':
            setUser(null);
            setAuthInProgress(false);
            break;
          case 'signIn_failure':
            setUser(null);
            setAuthInProgress(false);
            break;
          case 'tokenRefresh_failure':
            setUser(null);
            setAuthInProgress(false);
            break;
          default:
          }
        };
  
        Hub.listen('auth', listener);
      }
    },
    () => listener != null && Hub.remove('auth', listener),
    [],
  );
  
  return {
    user,
    inProgress: authInProgress,
    logIn,
    logOut,
    signUp,
    verifyEmail,
  };
}
  