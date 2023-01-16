/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ImagePost } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ImagePostUpdateForm(props) {
  const {
    id,
    imagePost,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    desc: undefined,
    imgKey: undefined,
    createdAt: undefined,
    type: undefined,
  };
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [imgKey, setImgKey] = React.useState(initialValues.imgKey);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [type, setType] = React.useState(initialValues.type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...imagePostRecord };
    setDesc(cleanValues.desc);
    setImgKey(cleanValues.imgKey);
    setCreatedAt(cleanValues.createdAt);
    setType(cleanValues.type);
    setErrors({});
  };
  const [imagePostRecord, setImagePostRecord] = React.useState(imagePost);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(ImagePost, id) : imagePost;
      setImagePostRecord(record);
    };
    queryData();
  }, [id, imagePost]);
  React.useEffect(resetStateValues, [imagePostRecord]);
  const validations = {
    desc: [],
    imgKey: [],
    createdAt: [],
    type: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          desc,
          imgKey,
          createdAt,
          type,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            ImagePost.copyOf(imagePostRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ImagePostUpdateForm")}
    >
      <TextField
        label="Desc"
        isRequired={false}
        isReadOnly={false}
        defaultValue={desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              desc: value,
              imgKey,
              createdAt,
              type,
            };
            const result = onChange(modelFields);
            value = result?.desc ?? value;
          }
          if (errors.desc?.hasError) {
            runValidationTasks("desc", value);
          }
          setDesc(value);
        }}
        onBlur={() => runValidationTasks("desc", desc)}
        errorMessage={errors.desc?.errorMessage}
        hasError={errors.desc?.hasError}
        {...getOverrideProps(overrides, "desc")}
      ></TextField>
      <TextField
        label="Img key"
        isRequired={false}
        isReadOnly={false}
        defaultValue={imgKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              desc,
              imgKey: value,
              createdAt,
              type,
            };
            const result = onChange(modelFields);
            value = result?.imgKey ?? value;
          }
          if (errors.imgKey?.hasError) {
            runValidationTasks("imgKey", value);
          }
          setImgKey(value);
        }}
        onBlur={() => runValidationTasks("imgKey", imgKey)}
        errorMessage={errors.imgKey?.errorMessage}
        hasError={errors.imgKey?.hasError}
        {...getOverrideProps(overrides, "imgKey")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              desc,
              imgKey,
              createdAt: value,
              type,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              desc,
              imgKey,
              createdAt,
              type: value,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Wco"
          value="WCO"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Etc"
          value="ETC"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
