export type ValidationResult = string | null;
export type Validator<T> = (params?: T) => ValidationResult;
export type GetValidator<Options, Params> = (options?: Options) => Validator<Params>;
