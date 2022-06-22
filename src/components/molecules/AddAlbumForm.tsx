import { InputField, Spinner, StyledButton } from "@/src/components";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { albumFormValidation, FormValidationProps } from '@/src/validation';
import { colors } from "@/src/styles";
import { useStorage } from "@/src/containers";
import { AlbumListType } from "@/src/types";


export const AddAlbumForm = () => {

    const { t } = useTranslation('common');
    const {setAlbumListData, addToList} = useStorage()
    const errorTranslation: FormValidationProps = t('formValidation');

    const [isLoading, setisLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            albumName: '',
            id: '',
            createDate: '',
            isFavorite: false,
        },
        validationSchema: albumFormValidation(errorTranslation),
        onSubmit: (values, actions) => {
            if (isLoading) {
                return;
            }
            sendForm(values, actions.resetForm);
        },
    });

    const sendForm = (
        values: typeof formik.values,
        resetForm: typeof formik.resetForm,
    ) => {
        try {
            setisLoading(true);
            const response: AlbumListType = {
                albumName: values.albumName,
                id: uuidv4().toString(),
                createDate: new Date().toString(),
                isFavorite: false
            };

            if (response) {
                addToList(response)
                toast.success(t('sendSuccess'));
                resetForm();
            } else {
                toast.error(t('sendError'));
            }
        } catch (err) {
            console.log(err);
            toast.error(t('sendError'));
        } finally {
            setisLoading(false);
        }
    };

    const {
        albumName: albumNameTouched,
    } = formik.touched;
    const {
        albumName: albumNameErrors,
    } = formik.errors;

    const { albumName } = formik.values;

    return (
        <Container>
            {/* <ToastContainer /> */}
            <Form onSubmit={formik.handleSubmit} autoComplete="off">
                <InputField
                    touched={albumNameTouched}
                    errors={albumNameErrors}
                    label={t('albumName')}
                    inputProps={{
                        onChange: formik.handleChange,
                        value: albumName,
                        name: 'albumName',
                        type: 'text',
                    }}

                />    <ButtonContainer>
                    <StyledButton
                        props={{
                            type: 'submit',
                            minWidth: '187px',
                        }}>
                        {isLoading ? (
                            <Spinner color={colors.white} spinSize={3} size={28} />
                        ) : (
                            t('sendBtn')
                        )}
                    </StyledButton>
                </ButtonContainer>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
  @media (max-width: 600px) {
    max-width: 350px;
    margin: 0 auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 4rem;
    align-items: flex-start;
    button {
      align-self: center;
    }
  }

  p {
    position: absolute;
    bottom: -5rem;
    left: 0;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: red;

    &.success {
      color: green;
    }
  }
`;