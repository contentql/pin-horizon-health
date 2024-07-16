'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  ContactFormValidator,
  TContactForm,
} from '@/lib/validator/contactValidator'
import { trpc } from '@/trpc/client'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactFormValidator),
  })

  const { mutate: contactFormData } =
    trpc.contact.ContactFormPostData.useMutation({
      onSuccess: () => {
        toast.success('Contact form is submitted!!')
      },
    })

  const onSubmit = (data: TContactForm) => {
    contactFormData(data)
    console.log(data)
  }

  return (
    <div className='cs_contact_form cs_style_1 cs_white_bg cs_radius_30'>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className='col-lg-12'>
            <label className='cs_input_label cs_heading_color'>Subject</label>
            <input
              type='text'
              className='cs_form_field'
              placeholder='Your subject'
              {...register('subject')}
            />
            {errors.subject && (
              <p className='error'>{errors.subject.message}</p>
            )}
            <div className='cs_height_42 cs_height_xl_25' />
          </div>
          <div className='col-lg-12'>
            <label className='cs_input_label cs_heading_color'>
              Phone Number
            </label>
            <input
              type='text'
              className='cs_form_field'
              placeholder='Your Phone Number'
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && (
              <p className='error'>{errors.phoneNumber?.message}</p>
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
