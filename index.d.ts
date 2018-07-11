export interface Phone {
  (value: any): any;
}

export interface Formatters {
  phone: Phone;
}

declare const phone: Phone;
declare const formatters: Formatters;

export { phone };

export default formatters;
