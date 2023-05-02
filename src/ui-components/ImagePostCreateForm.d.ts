/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImagePostCreateFormInputValues = {
    desc?: string;
    imgKey?: string;
    createdAt?: string;
    type?: string;
};
export declare type ImagePostCreateFormValidationValues = {
    desc?: ValidationFunction<string>;
    imgKey?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImagePostCreateFormOverridesProps = {
    ImagePostCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    imgKey?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ImagePostCreateFormProps = React.PropsWithChildren<{
    overrides?: ImagePostCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ImagePostCreateFormInputValues) => ImagePostCreateFormInputValues;
    onSuccess?: (fields: ImagePostCreateFormInputValues) => void;
    onError?: (fields: ImagePostCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImagePostCreateFormInputValues) => ImagePostCreateFormInputValues;
    onValidate?: ImagePostCreateFormValidationValues;
} & React.CSSProperties>;
export default function ImagePostCreateForm(props: ImagePostCreateFormProps): React.ReactElement;
