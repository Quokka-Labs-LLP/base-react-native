export const inputTypes = {
  mandatory: 'mandatory',
  name: 'name',
  mobile: 'mobile',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
  number: 'number',
  onlyNumber: 'onlyNumber',
  specialCharacter: 'specialCharacter',
  nameWithSpace: 'nameWithSpace',
  numberWithDecimal: 'numberWithDecimal',
  specialChar: 'specialChar',
  panNumber: 'panNumber',
  aadhaarNumber: 'aadhaarNumber',
  gstNumber: "gstNumber",
  bankAccountNumber: "bankAccountNumber",
  ifscCode: "ifscCode",
  pincode: "pincode",
  file: "file",
  validateFile: "validateFile",
}

export default (text: string, type: string) => {
  let isValid = true;
  switch (type) {
    case inputTypes.mandatory: {
      isValid = text.length > 0
      return isValid;
    }
    case inputTypes.panNumber: {
      const reg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
      isValid = reg.test(text);
      return isValid;
    }
    case inputTypes.aadhaarNumber: {
      const reg = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)/;
      isValid = reg.test(text);
      return isValid;
    }
    case inputTypes.bankAccountNumber: {
      const reg = /^[0-9]{9,18}$/;
      isValid = reg.test(text);
      return isValid;
    }
    case inputTypes.ifscCode: {
      const reg = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
      isValid = reg.test(text);
      return isValid;
    }
    case inputTypes.name: {
      const reg = /^[A-Za-z]+$/;
      // if valid false
      isValid = !reg.test(text) || text === '';
      return isValid;
    }
    case inputTypes.mobile: {
      isValid = text.length > 6 && text.length < 16 ? true : false;
      return isValid;
    }
    case inputTypes.email: {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      isValid = reg.test(text) !== false;
      return isValid;
    }
    case inputTypes.password: {
      isValid = text.length === 6 ? true : false;
      return isValid;
    }
    case inputTypes.nameWithSpace: {
      const reg = /^[A-Za-z ]+$/;
      isValid = reg.test(text);
      return isValid;
    }
    case inputTypes.number: {
      const reg = /^[0-9]+$/;
      isValid = reg.test(text) === true || text === '';
      return isValid;
    }
    case inputTypes.onlyNumber: {
      const reg = /^[0-9]+$/;
      isValid = reg.test(text) === true;
      return isValid;
    }
    case inputTypes.pincode: {
      const reg = /^[0-9]+$/;
      isValid = (reg.test(text) === true || text === '') && text.length === 6;
      return isValid;
    }
    case inputTypes.specialChar: {
      const reg = /^[a-zA-Z\s,'-]*$/;///^[A-Za-z -]+$/;
      isValid = reg.test(text) || text === '' || text === ',';
      return isValid;
    }
    case inputTypes.numberWithDecimal: {
      const reg = /^\d*\.?\d+$/;
      isValid = reg.test(text) || text === '';
      return isValid;
    }
    case inputTypes.gstNumber: {
      const reg = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
      isValid = reg.test(text) || text === '';
      return isValid;
    }
    case inputTypes.file: {
      isValid = text.length > 0
      return isValid;
    }
    case inputTypes.validateFile: {
      // const reg = /^[^<>:"/\\|?*\x00-\x1F]+(\s[^<>:"/\\|?*\x00-\x1F]+)*\.[a-zA-Z0-9]{1,5}(?<!\.\d*)$/;
      const reg = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
      isValid = reg.test(text) || text === '';
      return isValid;
    }
  }
}

// export function validateFile(file: string) {
//   if (file?.length <= 0) {
//     return false;
//   }
//   const allowedExtensions = ^[^<>:"/\\|?*\x00-\x1F]+(\s[^<>:"/\\|?*\x00-\x1F]+)*\.[a-zA-Z0-9]{1,5}(?<!\.\d*)$
//   const fileExtension = file;
//   return allowedExtensions
// }

// const regex = /^[^<>:"/\\|?*\x00-\x1F]+(\s[^<>:"/\\|?*\x00-\x1F]+)*\.[a-zA-Z0-9]{1,5}(?<!\.\d*)$/;

// export function validateFile(file: string) {

// export function validateFile(file: string) {
//   const regex = /^[^<>:"/\\|?*\x00-\x1F]+(\s[^<>:"/\\|?*\x00-\x1F]+)*\.[a-zA-Z0-9]{1,5}(?<!\.\d*)$/;
//   return regex.test(file);
// }
