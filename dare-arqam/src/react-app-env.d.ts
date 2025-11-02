/// <reference types="react-scripts" />

// Fix TypeScript 4.9.5 compatibility with React 19 and third-party libraries
declare module 'react-icons/fa' {
  import { IconBaseProps } from 'react-icons';
  import { FC } from 'react';
  export const FaArrowUp: FC<IconBaseProps>;
  export const FaPhone: FC<IconBaseProps>;
  export const FaWhatsapp: FC<IconBaseProps>;
  export const FaCheckCircle: FC<IconBaseProps>;
  export const FaExclamationCircle: FC<IconBaseProps>;
  export const FaTimes: FC<IconBaseProps>;
  export const FaBars: FC<IconBaseProps>;
  export const FaBook: FC<IconBaseProps>;
  export const FaBookOpen: FC<IconBaseProps>;
  export const FaPray: FC<IconBaseProps>;
  export const FaHeart: FC<IconBaseProps>;
  export const FaClock: FC<IconBaseProps>;
  export const FaBroom: FC<IconBaseProps>;
  export const FaHandshake: FC<IconBaseProps>;
  export const FaChevronDown: FC<IconBaseProps>;
  export const FaChevronUp: FC<IconBaseProps>;
  export const FaImages: FC<IconBaseProps>;
  export const FaFileAlt: FC<IconBaseProps>;
  export const FaDownload: FC<IconBaseProps>;
  export const FaSpinner: FC<IconBaseProps>;
  export const FaMapMarkerAlt: FC<IconBaseProps>;
  export const FaEnvelope: FC<IconBaseProps>;
  export const FaFacebook: FC<IconBaseProps>;
  export const FaGraduationCap: FC<IconBaseProps>;
  export const FaHome: FC<IconBaseProps>;
  export const FaUsers: FC<IconBaseProps>;
  export const FaBullhorn: FC<IconBaseProps>;
  export const FaCalendarAlt: FC<IconBaseProps>;
  export const FaBed: FC<IconBaseProps>;
  export const FaChalkboardTeacher: FC<IconBaseProps>;
  export const FaUtensils: FC<IconBaseProps>;
  export const FaFutbol: FC<IconBaseProps>;
  export const FaCheck: FC<IconBaseProps>;
  export const FaQuoteLeft: FC<IconBaseProps>;
  export const FaStar: FC<IconBaseProps>;
  export const FaMosque: FC<IconBaseProps>;
}

declare module 'react-icons/fa6' {
  import { IconBaseProps } from 'react-icons';
  import { FC } from 'react';
  export const FaMosque: FC<IconBaseProps>;
  export const FaArrowDown: FC<IconBaseProps>;
}

declare module 'react-icons/md' {
  import { IconBaseProps } from 'react-icons';
  import { FC } from 'react';
  export const MdLanguage: FC<IconBaseProps>;
  export const MdMosque: FC<IconBaseProps>;
}

// Fix AnimatePresence TypeScript compatibility with TS 4.9.5
declare module 'framer-motion' {
  import * as React from 'react';
  
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
    initial?: boolean;
    mode?: 'wait' | 'sync' | 'popLayout';
    custom?: any;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    presenceAffectsLayout?: boolean;
  }
  
  export const AnimatePresence: React.FC<AnimatePresenceProps>;
  
  export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    variants?: any;
    custom?: any;
    onAnimationComplete?: () => void;
    layoutId?: string;
    layout?: boolean | 'position' | 'size';
    style?: any;
  }
  
  export const motion: {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      MotionProps & JSX.IntrinsicElements[K]
    >;
  };
  
  export function useInView(
    ref: React.RefObject<HTMLElement>,
    options?: {
      once?: boolean;
      margin?: string;
      amount?: number | 'some' | 'all';
    }
  ): boolean;
  
  export function useMotionValue<T = number>(initialValue: T): import('framer-motion').MotionValue<T>;
  
  export function useSpring(
    source: import('framer-motion').MotionValue<number>,
    config?: any
  ): import('framer-motion').MotionValue<any>;
  
  export function useScroll(options?: any): {
    scrollX: import('framer-motion').MotionValue<number>;
    scrollY: import('framer-motion').MotionValue<number>;
    scrollXProgress: import('framer-motion').MotionValue<number>;
    scrollYProgress: import('framer-motion').MotionValue<number>;
  };
  
  export function useTransform<I, O>(
    value: import('framer-motion').MotionValue<I>,
    inputRange: I[],
    outputRange: O[],
    options?: any
  ): import('framer-motion').MotionValue<O>;
  
  export type MotionValue<T> = any;
}

