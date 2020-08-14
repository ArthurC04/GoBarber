import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Preencha este campo'),
                email: Yup.string().required('Preencha este campo').email('Preencha com um email válido'),
                password: Yup.string().min(6, 'Sua senha deve ter mais de 6 caracteres'),
                
            });
            
            await schema.validate(data, {
                abortEarly: false,
            });


          } catch (err) {

            const errors = getValidationErrors(err);

              formRef.current?.setErrors(errors);
          }
    }, []);

    return (
        <Container>
        <Background />

        <Content>
            <img src={LogoImg} alt='GoBarber' draggable='false'/>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input name='name' icon={FiUser} placeholder='Seu nome' /> 
                <Input name='email' icon={FiMail} placeholder='E-mail' /> 
                <Input name='password' icon={FiLock} type='password' placeholder='Senha'/>

                <Button type='submit'>Cadastrar</Button>

                <a href='forgt'>Esqueci minha senha</a>

            </Form>

            <a href='google.com'>
            <FiArrowLeft />
                Voltar para Login
            </a>
        </Content>
    </Container>
    );
};

export default SignUp;