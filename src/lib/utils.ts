import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function parseISOString(s: string) {
	const b = s.split(/\D+/) as unknown as number[];
	return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

export function randomColor() {
	const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
		16
	)}40`;
	return randomColor;
}
