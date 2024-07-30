/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    doctors: Doctor;
    category: Category;
    department: Department;
    tags: Tag;
    blogs: Blog;
    pages: Page;
    sessions: Session;
    appointments: Appointment;
    tours: Tour;
    contact: Contact;
    hospital: Hospital;
    country: Country;
    tourists: Tourist;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    'site-settings': SiteSetting;
  };
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (Doctor & {
        collection: 'doctors';
      });
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  imageUrl?: string | null;
  role?: ('admin' | 'user' | 'author') | null;
  emailVerified?: string | null;
  accounts?:
    | {
        provider?: string | null;
        providerAccountId?: string | null;
        id?: string | null;
      }[]
    | null;
  verificationTokens?:
    | {
        identifier?: string | null;
        token?: string | null;
        expires?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tour_gallery_1?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tour_card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tour_gallery?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    blog_image_size2?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    blog_image_size3?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    appointment_contact_image?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    doctorImage?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    blogImage?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "doctors".
 */
export interface Doctor {
  id: string;
  role?: ('admin' | 'doctor') | null;
  emailVerified?: string | null;
  accounts?:
    | {
        provider?: string | null;
        providerAccountId?: string | null;
        id?: string | null;
      }[]
    | null;
  verificationTokens?:
    | {
        identifier?: string | null;
        token?: string | null;
        expires?: string | null;
        id?: string | null;
      }[]
    | null;
  name?: string | null;
  designation?: string | null;
  description?: string | null;
  doctor_image?: string | Media | null;
  qualifications?:
    | {
        qualification?: ('High School Diploma' | 'Bachelor’s Degree' | 'Medical Degree (MD/DO)' | 'Residency') | null;
        institute?: string | null;
        year?: string | null;
        specialization?: string | null;
        id?: string | null;
      }[]
    | null;
  experience?:
    | {
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  achievements?:
    | {
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  phone_number?: number | null;
  slug?: string | null;
  department?: {
    relationTo: 'department';
    value: string | Department;
  } | null;
  cal_user?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "department".
 */
export interface Department {
  id: string;
  title: string;
  description: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "category".
 */
export interface Category {
  id: string;
  title: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  title?: ('Ayurveda' | 'Yoga' | 'Blog') | null;
  heading?: string | null;
  description?: string | null;
  button_name?: string | null;
  button_link?: string | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: string;
  author: {
    relationTo: 'doctors';
    value: string | Doctor;
  }[];
  tags: {
    relationTo: 'tags';
    value: string | Tag;
  };
  title: string;
  slug?: string | null;
  sub_title?: string | null;
  blog_image: string | Media;
  social_media?:
    | {
        icon: 'fa-brands:linkedin-in' | 'fa-brands:facebook-f' | 'fa-brands:twitter';
        url: string;
        id?: string | null;
      }[]
    | null;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  description_html?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  isHome?: boolean | null;
  blocks?:
    | (
        | TestType
        | HeroType
        | FeaturesType
        | AboutType
        | DepartmentType
        | AwardType
        | TestimonialsType
        | AppointmentBannerType
        | AppointmentContactType
        | DoctorHeroType
        | DoctorBannerType
        | BannerType
        | AppointmentType
        | FaqsType
        | AboutHeroType
        | AboutServicesType
        | AboutFeaturesType
        | AboutStatisticsType
        | AboutGalleryType
        | AboutAwardsType
        | AboutBannerType
        | AllBlogsType
        | LatestBlogsType
        | DepartmentBannerType
        | DepartmentHeroType
        | GalleryType
        | BlogBannerType
        | ContactBannerType
        | ContactDetailsType
        | HospitalHeroType
        | TravelHeroType
        | YogaPostsType
        | AyurvedaPostsType
        | AyurvedaHeroType
        | AyurvedaAboutType
      )[]
    | null;
  slug?: string | null;
  path?: string | null;
  parent?: (string | null) | Page;
  breadcrumbs?:
    | {
        doc?: (string | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestType".
 */
export interface TestType {
  message?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Test';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroType".
 */
export interface HeroType {
  title?: string | null;
  sub_title?: string | null;
  hero_image?: string | Media | null;
  background_image?: string | Media | null;
  button_text?: string | null;
  button_url?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FeaturesType".
 */
export interface FeaturesType {
  title?: string | null;
  features?:
    | {
        title?: string | null;
        description?: string | null;
        feature_icon?: ('1' | '2' | '3' | '4' | '5') | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Features';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutType".
 */
export interface AboutType {
  image?: string | Media | null;
  spin_image?: string | Media | null;
  spin_logo?: string | Media | null;
  title?: string | null;
  sub_title?: string | null;
  points?:
    | {
        title?: string | null;
        sub_title?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'About';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DepartmentType".
 */
export interface DepartmentType {
  title?: string | null;
  departments?:
    | {
        title?: string | null;
        department_icon?: ('1' | '2' | '3' | '4' | '5' | '6') | null;
        url_path?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Department';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AwardType".
 */
export interface AwardType {
  title?: string | null;
  awards?:
    | {
        title?: string | null;
        sub_title?: string | null;
        award_image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Award';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestimonialsType".
 */
export interface TestimonialsType {
  title?: string | null;
  sub_title?: string | null;
  testimonials?:
    | {
        title?: string | null;
        sub_title?: string | null;
        image?: string | Media | null;
        review?: string | null;
        rating?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Testimonials';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AppointmentBannerType".
 */
export interface AppointmentBannerType {
  title: string;
  description: string;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AppointmentBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AppointmentContactType".
 */
export interface AppointmentContactType {
  title: string;
  phoneNumber: string;
  email: string;
  location: string;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AppointmentContact';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DoctorHeroType".
 */
export interface DoctorHeroType {
  title: string;
  sub_title: string;
  imgUrl: string | Media;
  bgUrl?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'DoctorHero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DoctorBannerType".
 */
export interface DoctorBannerType {
  title: string;
  sub_title: string;
  bgUrl?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'DoctorBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BannerType".
 */
export interface BannerType {
  title?: string | null;
  sub_title?: string | null;
  image?: string | Media | null;
  button_text?: string | null;
  button_path?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Banner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AppointmentType".
 */
export interface AppointmentType {
  title?: string | null;
  sub_title?: string | null;
  image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Appointment';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FaqsType".
 */
export interface FaqsType {
  title?: string | null;
  sub_title?: string | null;
  faqs?:
    | {
        question?: string | null;
        answer?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Faqs';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutHeroType".
 */
export interface AboutHeroType {
  title?: string | null;
  sub_title?: string | null;
  image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AboutHero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutServicesType".
 */
export interface AboutServicesType {
  title?: string | null;
  sub_title?: string | null;
  services?:
    | {
        title: string;
        sub_title: string;
        service_path: string;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AboutServices';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutFeaturesType".
 */
export interface AboutFeaturesType {
  title?: string | null;
  image?: string | Media | null;
  features?:
    | {
        title: string;
        sub_title: string;
        feature_icon: '1' | '2' | '3' | '4';
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AboutFeatures';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutStatisticsType".
 */
export interface AboutStatisticsType {
  statistics?:
    | {
        number: string;
        title: string;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AboutStatistics';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutGalleryType".
 */
export interface AboutGalleryType {
  title?: string | null;
  sub_title?: string | null;
  gallery?:
    | {
        image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AboutGallery';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutAwardsType".
 */
export interface AboutAwardsType {
  title?: string | null;
  sub_title?: string | null;
  description?: string | null;
  awards?:
    | {
        title: string;
        image: string | Media;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AboutAwards';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutBannerType".
 */
export interface AboutBannerType {
  title?: string | null;
  sub_title?: string | null;
  background_image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AboutBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AllBlogsType".
 */
export interface AllBlogsType {
  title?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AllBlogs';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LatestBlogsType".
 */
export interface LatestBlogsType {
  title?: string | null;
  sub_title?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'LatestBlogs';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DepartmentBannerType".
 */
export interface DepartmentBannerType {
  title: string;
  sub_title: string;
  imgUrl: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'DepartmentBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DepartmentHeroType".
 */
export interface DepartmentHeroType {
  title: string;
  sub_title: string;
  imgUrl: string | Media;
  bgUrl?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'DepartmentHero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "GalleryType".
 */
export interface GalleryType {
  gallery?:
    | {
        image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Gallery';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlogBannerType".
 */
export interface BlogBannerType {
  image?: string | Media | null;
  title?: string | null;
  sub_title?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'BlogBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactBannerType".
 */
export interface ContactBannerType {
  title?: string | null;
  sub_title?: string | null;
  image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ContactBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactDetailsType".
 */
export interface ContactDetailsType {
  title?: string | null;
  contact_info?:
    | {
        title: string;
        sub_title: string;
        contact_icon: '1' | '2' | '3';
        id?: string | null;
      }[]
    | null;
  location?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ContactDetails';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HospitalHeroType".
 */
export interface HospitalHeroType {
  title: string;
  sub_title: string;
  imgUrl: string | Media;
  bgUrl?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'HospitalHero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TravelHeroType".
 */
export interface TravelHeroType {
  title: string;
  sub_title: string;
  imgUrl: string | Media;
  bgUrl?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'TravelHero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "YogaPostsType".
 */
export interface YogaPostsType {
  title: string;
  sub_title: string;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'YogaPosts';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AyurvedaPostsType".
 */
export interface AyurvedaPostsType {
  title?: string | null;
  sub_title?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AyurvedaPosts';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AyurvedaHeroType".
 */
export interface AyurvedaHeroType {
  title: string;
  sub_title: string;
  image: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AyurvedaHero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AyurvedaAboutType".
 */
export interface AyurvedaAboutType {
  image?: string | Media | null;
  title?: string | null;
  points?:
    | {
        title?: string | null;
        sub_title?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'AyurvedaAbout';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sessions".
 */
export interface Session {
  id: string;
  user: string | Doctor;
  sessionToken: string;
  expires?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "appointments".
 */
export interface Appointment {
  id: string;
  title?: string | null;
  attendee_name?: string | null;
  attendee_email?: string | null;
  description?: string | null;
  additional_notes?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  metadata?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  doctor?: {
    relationTo: 'doctors';
    value: string | Doctor;
  } | null;
  booking_status?: string | null;
  cal_video_url?: string | null;
  uid?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tours".
 */
export interface Tour {
  id: string;
  title: string;
  hero_url?: string | Media | null;
  gallery?:
    | {
        image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  price?: number | null;
  duration?: string | null;
  location?: string | null;
  services?:
    | {
        service?: string | null;
        id?: string | null;
      }[]
    | null;
  highlights?:
    | {
        highlight?: string | null;
        id?: string | null;
      }[]
    | null;
  guide_name: string;
  guide_phone: number;
  guide_email?: string | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact".
 */
export interface Contact {
  id: string;
  name: string;
  email?: string | null;
  phoneNumber: string;
  subject: string;
  message: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hospital".
 */
export interface Hospital {
  id: string;
  email?: string | null;
  title: string;
  description?: string | null;
  country?: (string | null) | Country;
  location?: string | null;
  gallery?:
    | {
        image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  services?:
    | {
        service?: string | null;
        id?: string | null;
      }[]
    | null;
  receptionistName?: string | null;
  phone: number;
  highlights?:
    | {
        highlight?: string | null;
        id?: string | null;
      }[]
    | null;
  achievements?:
    | {
        achievement?: string | null;
        id?: string | null;
      }[]
    | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "country".
 */
export interface Country {
  id: string;
  country?: string | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tourists".
 */
export interface Tourist {
  id: string;
  name?: string | null;
  email?: string | null;
  date?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'doctors';
        value: string | Doctor;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "site-settings".
 */
export interface SiteSetting {
  id: string;
  appName?: string | null;
  appDescription?: string | null;
  header?: {
    logo_image?: string | Media | null;
    app_name?: string | null;
    menuItems?:
      | {
          page?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          subMenuItems?:
            | {
                page?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                subMenuItems?:
                  | {
                      page?: {
                        relationTo: 'pages';
                        value: string | Page;
                      } | null;
                      id?: string | null;
                    }[]
                  | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
    app_description?: string | null;
    personal_details?:
      | {
          icon: '1' | '2' | '3';
          title: string;
          sub_title: string;
          id?: string | null;
        }[]
      | null;
  };
  footer?: {
    logo_image?: string | Media | null;
    logo?: string | null;
    menuItems?:
      | {
          page?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          subMenuItems?:
            | {
                page?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                subMenuItems?:
                  | {
                      page?: {
                        relationTo: 'pages';
                        value: string | Page;
                      } | null;
                      id?: string | null;
                    }[]
                  | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
    personal_information?:
      | {
          icon: 'ep:location' | 'fluent:call-24-regular' | 'bi:envelope';
          title: string;
          id?: string | null;
        }[]
      | null;
    title?: string | null;
    sub_title?: string | null;
    social_media?:
      | {
          icon:
            | 'fa-brands:facebook-f'
            | 'fa-brands:youtube'
            | 'fa-brands:twitter'
            | 'fa-brands:linkedin-in'
            | 'fa-brands:instagram';
          social_media_url: string;
          id?: string | null;
        }[]
      | null;
    copyright?: string | null;
  };
  email?: string | null;
  phone_number?: number | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}