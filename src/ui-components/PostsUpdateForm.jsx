/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Posts } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PostsUpdateForm(props) {
  const {
    id: idProp,
    posts: postsModelProp,
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
    title: "",
    desc: "",
    createdAt: "",
    type: "",
    filename: "",
    index: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [type, setType] = React.useState(initialValues.type);
  const [filename, setFilename] = React.useState(initialValues.filename);
  const [index, setIndex] = React.useState(initialValues.index);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = postsRecord
      ? { ...initialValues, ...postsRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setDesc(cleanValues.desc);
    setCreatedAt(cleanValues.createdAt);
    setType(cleanValues.type);
    setFilename(cleanValues.filename);
    setIndex(cleanValues.index);
    setErrors({});
  };
  const [postsRecord, setPostsRecord] = React.useState(postsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Posts, idProp)
        : postsModelProp;
      setPostsRecord(record);
    };
    queryData();
  }, [idProp, postsModelProp]);
  React.useEffect(resetStateValues, [postsRecord]);
  const validations = {
    title: [],
    desc: [],
    createdAt: [],
    type: [],
    filename: [],
    index: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
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
      hourCycle: "h23",
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
          title,
          desc,
          createdAt,
          type,
          filename,
          index,
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
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Posts.copyOf(postsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PostsUpdateForm")}
      {...rest}
    >
      <TextField
        label="제목"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              desc,
              createdAt,
              type,
              filename,
              index,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextAreaField
        label="게시글"
        isRequired={false}
        isReadOnly={false}
        value={desc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              desc: value,
              createdAt,
              type,
              filename,
              index,
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
      ></TextAreaField>
      <TextField
        label="생성일"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              desc,
              createdAt: value,
              type,
              filename,
              index,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <SelectField
        label="공지사항 / 연간사업보고"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              desc,
              createdAt,
              type: value,
              filename,
              index,
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
          children="Notice"
          value="NOTICE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Report"
          value="REPORT"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Filename"
        isRequired={false}
        isReadOnly={false}
        value={filename}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              desc,
              createdAt,
              type,
              filename: value,
              index,
            };
            const result = onChange(modelFields);
            value = result?.filename ?? value;
          }
          if (errors.filename?.hasError) {
            runValidationTasks("filename", value);
          }
          setFilename(value);
        }}
        onBlur={() => runValidationTasks("filename", filename)}
        errorMessage={errors.filename?.errorMessage}
        hasError={errors.filename?.hasError}
        {...getOverrideProps(overrides, "filename")}
      ></TextField>
      <TextField
        label="Index"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={index}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              desc,
              createdAt,
              type,
              filename,
              index: value,
            };
            const result = onChange(modelFields);
            value = result?.index ?? value;
          }
          if (errors.index?.hasError) {
            runValidationTasks("index", value);
          }
          setIndex(value);
        }}
        onBlur={() => runValidationTasks("index", index)}
        errorMessage={errors.index?.errorMessage}
        hasError={errors.index?.hasError}
        {...getOverrideProps(overrides, "index")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
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
            isDisabled={
              !(idProp || postsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
