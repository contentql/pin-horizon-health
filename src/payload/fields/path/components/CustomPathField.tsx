'use client'

// This is a client component
import { TextField, useFormFields } from '@payloadcms/ui'
import { TextFieldProps } from 'payload'
import React from 'react'

const CustomPathField: React.FC<TextFieldProps> = props => {
  const { fields, dispatch } = useFormFields(([fields, dispatch]) => ({
    fields,
    dispatch,
  }))

  const readOnly = fields?.pathMode?.value
    ? fields?.pathMode?.value === 'generate'
    : true

  return <TextField {...props} readOnly={readOnly} />
}

export default CustomPathField
