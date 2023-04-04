// @ts-nocheck
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export function sanitizeText(text) {
    return DOMPurify.sanitize(text);
}
