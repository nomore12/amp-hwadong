/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Posts } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostsUpdateFormInputValues = {
    title?: string;
    desc?: string;
    createdAt?: string;
    type?: string;
    filename?: string;
    index?: number;
};
export declare type PostsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
    index?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsUpdateFormOverridesProps = {
    PostsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextAreaFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    index?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    posts?: Posts;
    onSubmit?: (fields: PostsUpdateFormInputValues) => PostsUpdateFormInputValues;
    onSuccess?: (fields: PostsUpdateFormInputValues) => void;
    onError?: (fields: PostsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostsUpdateFormInputValues) => PostsUpdateFormInputValues;
    onValidate?: PostsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostsUpdateForm(props: PostsUpdateFormProps): React.ReactElement;
