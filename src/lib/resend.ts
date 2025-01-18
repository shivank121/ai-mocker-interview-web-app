import { Resend } from 'resend';
import { resend_api_key } from '@/constants/serverSideConst';

export const resend = new Resend(resend_api_key);