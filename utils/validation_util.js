import Validator from 'jsonschema/lib/validator';


export const validate = (data, schema, errMsg='') => {
    const result = new Validator().validate(data, schema)
    if (!result.valid)
        throw new Error(`${errMsg  } ${  result.errors}`)
}

export const validateArray = (arr, schema, errMsg='') => {
    arr.forEach(elem => validate(elem, schema, errMsg))
}