import React from 'react';

import { NextPage } from 'next';
import Input from '../../components/input';
import Button from '../../components/button';

import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { toast } from 'react-toastify';
import { STORAGE_KEY } from '../../config/constants';
import { useAuth } from '../../hooks/auth';

interface AuthUser {
  authUser: {
    access_token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  };
}

const AUTH_MUTATION = gql`
  mutation {
    authUser(createUserInput: { email: "email27@domain.com", password: "123456" }) {
      user {
        id
        name
        email
      }
      access_token
    }
  }
`;

export const SignIn: NextPage = () => {
  const { handleSubmit } = useForm();
  const { setToken, getToken } = useAuth();

  const [authMutate, { data }] = useMutation<AuthUser>(AUTH_MUTATION);

  const token = getToken();

  console.log('token: ', token);

  const handleSubmitForm = (data: any) => {
    const signin = async () => {
      try {
        const { data } = await authMutate();

        const token = data?.authUser.access_token as string;

        setToken(token);

        toast.info('success');
      } catch (error) {
        debugger;
        console.error(error);
        toast.error(`Erro at sign in: ${error}`);
      }
    };

    signin();
  };

  return (
    <div className="flex bg-black h-screen w-screen">
      <div className="bg-white w-1/2 h-screen rounded-r-3xl">
        <div className="flex flex-col justify-start px-16 py-8 xl:px-32 h-full w-full">
          <span className="font-sans font-extrabold text-3xl">
            <a href="/"> real wallet</a>
          </span>

          <div className="flex flex-col flex-1 items-start justify-center">
            <h1 className="text-5xl font-bold xl:text-7xl">Get control over your finances!</h1>
            <h2 className="text-2xl text-gray-400">
              Start managing your finances. Track your money and know about how your are
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 h-full">
        <div className="flex flex-col w-full max-w-sm">
          <h3 className="text-white text-6xl mb-14">sign in</h3>
          <form className="flex flex-col" onSubmit={handleSubmit(handleSubmitForm)}>
            <Input name="email" type="email" label="email" />
            <Input name="password" type="password" label="password" />
            <div className="flex mt-10">
              <Button className="w-full mr-2" secondary>
                forgot password
              </Button>
              <Button className="w-full ml-2">login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
