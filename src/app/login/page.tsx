'use client';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginInputs = {
  userSession: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors /* touchedFields */, isSubmitting },
  } = useForm<LoginInputs>({
    defaultValues: { userSession: 'ssamsara98', password: 'asdf1234' },
  });
  const [showPassword, setShowPassword] = useState(false);

  const submitLogin: SubmitHandler<LoginInputs> = async (data, event) => {
    // console.log('data', data);
    // console.log('event', event);
    // handleSubmit(evt);
    try {
      const resp = await signIn('server-api', { redirect: false, callbackUrl: '/', ...data });
      console.log('signin response', resp);

      if (!resp?.error) {
        router.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordShow: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    setShowPassword((v) => !v);
  };

  // console.log('watch("userSession") -->>', watch('userSession')); // watch input value by passing the name of it
  // console.log('watch("password") -->>', watch('password')); // watch input value by passing the name of it
  console.log('errors', errors);
  // console.log('touchedFields', touchedFields);

  return (
    <>
      <Container>
        <Box>
          <form onSubmit={handleSubmit(submitLogin)} onReset={() => reset()}>
            <FormControl isInvalid={!!errors.userSession}>
              <FormLabel>Email/Username</FormLabel>
              {/* <Input type="email" name="userSession" id="userSession" /> */}
              <Input
                {...register('userSession', {
                  required: { value: true, message: 'enter your email/username' },
                })}
                placeholder="Enter Email/Username!"
              />
              {errors.userSession ? (
                <FormErrorMessage>Email/Username is required.</FormErrorMessage>
              ) : (
                <FormHelperText>Enter the email/username.</FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  {...register('password', {
                    required: { value: true, message: 'enter your password' },
                  })}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password!"
                />
                <InputRightElement>
                  <Button onClick={handlePasswordShow}>{showPassword ? 'Hide' : 'Show'}</Button>
                </InputRightElement>
              </InputGroup>
              {errors.password ? (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              ) : (
                <FormHelperText>Enter the password.</FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid>
              <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
                Login
              </Button>
              <Button colorScheme="blue" type="reset" isLoading={isSubmitting}>
                Reset
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
