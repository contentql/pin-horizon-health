'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { parsePhoneNumber } from 'libphonenumber-js'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast } from 'sonner'

import {
  TTravelContactForm,
  TravelFormValidator,
} from '@/lib/validator/TravelFormValidator'
import { trpc } from '@/trpc/client'

export default function TravelContactForm() {
  const {
    control,
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<TTravelContactForm>({
    resolver: zodResolver(TravelFormValidator),
  })

  const { mutate: travelContactFormData } =
    trpc.tourist.postTouristFormData.useMutation({
      onSuccess: () => {
        reset()
        toast.success('Form submitted Successfully!', {
          position: 'bottom-left',
        })
      },
      onError: err => {
        toast.error('Failed to submit form, Please try again.', {
          position: 'bottom-left',
        })
      },
    })

  const onSubmit = (data: TTravelContactForm) => {
    data.phoneNumber = parsePhoneNumber('+' + data.phoneNumber)
      .formatInternational()
      .replace(/[\s+]/g, '')
    travelContactFormData(data)
  }

  return (
    <div className='cs_contact_form cs_style_1 cs_white_bg cs_radius_30'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Traveler Details</h2>
        <p>
          Please provide your contact details so our travel team can reach out
          to you.
        </p>
        <div className='row'>
          <div className='col-lg-6'>
            <label className='cs_input_label cs_heading_color'>Name</label>
            <input
              type='text'
              className='cs_form_field'
              placeholder='David John'
              {...register('name')}
            />
            {errors.name && <p className='error'>{errors.name.message}</p>}
            <div className='cs_height_42 cs_height_xl_25' />
          </div>
          <div className='col-lg-6'>
            <label className='cs_input_label cs_heading_color'>Date</label>
            <input
              type='date'
              className='cs_form_field'
              placeholder='Select a date'
              {...register('date')}
            />
            {errors.date && (
              <p className='error'>{errors.date.message as String}</p>
            )}
            <div className='cs_height_42 cs_height_xl_25' />
          </div>

          <div className='col-lg-6'>
            <label className='cs_input_label cs_heading_color'>Email</label>
            <input
              type='email'
              className='cs_form_field'
              placeholder='example@gmail.com'
              {...register('email')}
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
            <div className='cs_height_42 cs_height_xl_25' />
          </div>

          <div className='col-lg-6'>
            <label className='cs_input_label cs_heading_color'>
              Number of Travelers
            </label>
            <input
              type='number'
              className='cs_form_field'
              placeholder='Ex: 4'
              {...register('no_of_persons')}
            />
            {errors.no_of_persons && (
              <p className='error'>{errors?.no_of_persons?.message}</p>
            )}
            <div className='cs_height_42 cs_height_xl_25' />
          </div>
          <div className='col-lg-12'>
            <label className='cs_input_label cs_heading_color'>
              Phone Number
            </label>
            <Controller
              name='phoneNumber'
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country='us'
                  prefix='+'
                  placeholder='Your Phone Number'
                  value={field.value}
                  onChange={value => {
                    field.onChange(value)
                  }}
                  onBlur={() => {
                    trigger('phoneNumber')
                  }}
                  inputStyle={{
                    display: 'block',
                    width: '100%',
                    borderRadius: '15px',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(48, 123, 196, 0.5)',
                    padding: '26px 30px',
                    paddingLeft: '120px',
                    height: '56px',
                    fontSize: 'medium',
                    color: 'inherit',
                    outline: 'none',
                  }}
                  buttonStyle={{
                    borderRadius: '15px',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(48, 123, 196, 0.5)',
                    padding: '26px 30px',
                    background: 'transparent',
                    fontSize: 'medium',
                  }}
                  inputClass='cs_form_field'
                />
              )}
            />
            {errors?.phoneNumber && (
              <p className='error'>{errors?.phoneNumber?.message}</p>
            )}
            <div className='cs_height_42 cs_height_xl_25' />
          </div>
          <div className='col-lg-12'>
            <label className='cs_input_label cs_heading_color'>Message</label>
            <textarea
              cols={30}
              rows={10}
              className='cs_form_field'
              placeholder='Write something...'
              {...register('message')}
            />
            {errors.message && (
              <p className='error'>{errors.message.message}</p>
            )}
            <div className='cs_height_42 cs_height_xl_25' />
          </div>
          <div className='col-lg-12'>
            <div className='cs_height_18' />
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
        </div>
      </form>
    </div>
  )
}
