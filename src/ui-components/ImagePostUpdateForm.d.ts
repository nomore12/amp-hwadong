/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImagePost } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImagePostUpdateFormInputValues = {
    desc?: string;
    imgKey?: string;
    createdAt?: string;
    type?: string;
};
export declare type ImagePostUpdateFormValidationValues = {
    desc?: ValidationFunction<string>;
    imgKey?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImagePostUpdateFormOverridesProps = {
    ImagePostUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    imgKey?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ImagePostUpdateFormProps = React.PropsWithChildren<{
    overrides?: ImagePostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    imagePost?: ImagePost;
    onSubmit?: (fields: ImagePostUpdateFormInputValues) => ImagePostUpdateFormInputValues;
    onSuccess?: (fields: ImagePostUpdateFormInputValues) => void;
    onError?: (fields: ImagePostUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImagePostUpdateFormInputValues) => ImagePostUpdateFormInputValues;
    onValidate?: ImagePostUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ImagePostUpdateForm(props: ImagePostUpdateFormProps): React.ReactElement;
