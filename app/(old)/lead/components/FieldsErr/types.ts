export type StringKeyedRecord<T> = Record<string, T>;

export type FieldLabels = StringKeyedRecord<string>;
export type FieldErrors = StringKeyedRecord<unknown>;
export type FieldTouched = StringKeyedRecord<boolean | undefined>;

export type FieldsErrProps = {
  fieldLabels: FieldLabels;
  errors: FieldErrors;
  touched: FieldTouched;
};

