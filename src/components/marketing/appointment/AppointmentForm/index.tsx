'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  AppointmentValidator,
  TAppointmentValidator,
} from '@/lib/validator/appointmentValidator'
import { trpc } from '@/trpc/client'

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TAppointmentValidator>({
    resolver: zodResolver(AppointmentValidator),
  })

  const [selectedDate, setSelectedDate] = useState<any>(null)

  const { mutate: appointmentFormData } =
    trpc.appointment.postAppointmentData.useMutation({
      onSuccess: () => {
        toast.success('Appointment form is submitted!!')
      },
    })

  const onSubmit = async (data: TAppointmentValidator) => {
    await appointmentFormData(data)

    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='row'>
      <div className='col-lg-6'>
        <label className='cs_input_label cs_heading_color'>Name</label>
        <input
          type='text'
          className='cs_form_field'
          placeholder='David John'
          {...register('name')}
        />
        {errors.name && (
          <p className='error'>{errors.name.message as string}</p>
        )}
        <div className='cs_height_42 cs_height_xl_25' />
      </div>
      <div className='col-lg-6'>
        <label className='cs_input_label cs_heading_color'>Phone Number</label>
        <input
          type='text'
          className='cs_form_field'
          placeholder='(123) 456 - 789'
          {...register('phoneNumber')}
        />
        {errors.phoneNumber && (
          <p className='error'>{errors.phoneNumber.message as string}</p>
        )}
        <div className='cs_height_42 cs_height_xl_25' />
      </div>
      <div className='col-lg-12'>
        <label className='cs_input_label cs_heading_color'>
          Medical Record Number
        </label>
        <input
          type='text'
          className='cs_form_field'
          placeholder='123456-7890-0987'
          {...register('medicalRecordNumber')}
        />
        {errors.medicalRecordNumber && (
          <p className='error'>
            {errors.medicalRecordNumber.message as string}
          </p>
        )}
        <div className='cs_height_42 cs_height_xl_25' />
      </div>
      <div className='col-lg-6'>
        <label className='cs_input_label cs_heading_color'>
          Preferred Date
        </label>
        <div className='cs_with_icon_input'>
          <Controller
            control={control}
            name='preferredDateAndTime'
            render={({ field }) => (
              //@ts-ignore
              <DatePicker
                {...field}
                selected={field.value}
                onChange={date => {
                  setSelectedDate(date)
                  field.onChange(date)
                }}
                dateFormat='MMMM d, yyyy h:mm aa'
                showTimeSelect
                todayButton
                minDate={new Date()}
                isClearable
                placeholderText='MMMM d, yyyy h:mm'
              />
            )}
          />
          <i>
            <Icon icon='fa6-solid:calendar-days' />
          </i>
        </div>
        {errors.preferredDateAndTime && (
          <p className='error'>
            {errors.preferredDateAndTime.message as string}
          </p>
        )}
        <div className='cs_height_42 cs_height_xl_25' />
      </div>
      <div className='col-lg-6'>
        <label className='cs_input_label cs_heading_color'>Gender</label>
        <div className='cs_radio_group'>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='male'
              value='male'
              {...register('gender')}
            />
            <label className='cs_radio_label' htmlFor='male'>
              Male
            </label>
          </div>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='female'
              value='female'
              {...register('gender')}
            />
            <label className='cs_radio_label' htmlFor='female'>
              female
            </label>
          </div>
        </div>
        <div className='cs_height_42 cs_height_xl_25' />
      </div>

      <div className='col-lg-12'>
        <label className='cs_input_label cs_heading_color'>
          Reason for Visit
        </label>
        <div className='cs_radio_group'>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='routineCheckup'
              value='routineCheckup'
              {...register('reasonForVisit')}
            />
            <label className='cs_radio_label' htmlFor='routineCheckup'>
              Routine Checkup
            </label>
          </div>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='newPatientVisit'
              value='newPatientVisit'
              {...register('reasonForVisit')}
            />
            <label className='cs_radio_label' htmlFor='newPatientVisit'>
              New Patient Visit
            </label>
          </div>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='specificConcern'
              value='specificConcern'
              {...register('reasonForVisit')}
            />
            <label className='cs_radio_label' htmlFor='specificConcern'>
              Specific Concern
            </label>
          </div>
        </div>
        {errors.reasonForVisit && (
          <p className='error'>{errors.reasonForVisit.message as string}</p>
        )}
        <div className='cs_height_42 cs_height_xl_25' />
      </div>
      <div className='col-lg-12'>
        <label className='cs_input_label cs_heading_color'>Department</label>
        <div className='cs_radio_group'>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='pediatric'
              value='pediatric'
              {...register('department')}
            />
            <label className='cs_radio_label' htmlFor='pediatric'>
              Pediatric
            </label>
          </div>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='obstetricsGynecology'
              value='obstetricsGynecology'
              {...register('department')}
            />
            <label className='cs_radio_label' htmlFor='obstetricsGynecology'>
              Obstetrics and Gynecology
            </label>
          </div>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='cardiology'
              value='cardiology'
              {...register('department')}
            />
            <label className='cs_radio_label' htmlFor='cardiology'>
              Cardiology
            </label>
          </div>
          <div className='cs_radio_wrap'>
            <input
              className='cs_radio_input'
              type='radio'
              id='neurology'
              value='neurology'
              {...register('department')}
            />
            <label className='cs_radio_label' htmlFor='neurology'>
              Neurology
            </label>
          </div>
        </div>
        {errors.department && (
          <p className='error'>{errors.department.message as string}</p>
        )}
        <div className='cs_height_42 cs_height_xl_25' />
      </div>
      <div className='col-lg-12'>
        <button type='submit' className='cs_btn cs_style_1'>
          <span>Submit</span>
          <i>
            <Image
              src='/images/icons/arrow_white.svg'
              alt='Icon'
              height={11}
              width={15}
            />
            <Image
              src='/images/icons/arrow_white.svg'
              alt='Icon'
              height={11}
              width={15}
            />
          </i>
        </button>
      </div>
    </form>
  )
}
