import type { FormDataType } from "./formData";

export type FormErrors = Record<keyof FormDataType, boolean>;