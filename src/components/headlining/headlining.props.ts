import { HtmlHTMLAttributes } from 'react';

export interface HeadliningProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    appearance: 'authorization';
    text: string;
}
