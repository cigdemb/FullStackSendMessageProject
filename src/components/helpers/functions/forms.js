export const checkFormikField = (formik, field)=>{
    const isInvalid = formik.touched[field] && formik.errors[field];
    const isValid = formik.touched[field] && !formik.errors[field];
    return { isInvalid, isValid };
};