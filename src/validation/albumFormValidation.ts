import * as Yup from 'yup';

interface reqMinMax {
  required: string;
  min: string;
  max: string;
}
export interface FormValidationProps {
  albumName: reqMinMax;
}

export const albumFormValidation = (
  errorTranslation: FormValidationProps,
) => {
  const { albumName } = errorTranslation;

  return Yup.object().shape({
    albumName: Yup.string()
      .required(albumName.required)
      .min(2, albumName.min)
      .max(30, albumName.max),
  });
};
