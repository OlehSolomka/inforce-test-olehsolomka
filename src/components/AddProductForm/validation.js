import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^([A-Za-zа-яА-ЯёЁ\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin or Cyrillic letters.'
    ),
  count: Yup.number().required('Enter quantity'),
  width: Yup.number().required('Width is required'),
  height: Yup.number().required('Heihgt is required'),
});
export default schema;
