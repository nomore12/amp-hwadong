/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Posts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
};
export declare type PostsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsUpdateFormOverridesProps = {
    PostsUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    desc?: FormProps<TextAreaFieldProps>;
    createdAt?: FormProps<TextFieldProps>;
    type?: FormProps<SelectFieldProps>;
    filename?: FormProps<TextFieldProps>;
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
