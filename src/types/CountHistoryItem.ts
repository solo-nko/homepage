export interface CountHistoryItem {
	id: number;
	count: number;
	date: string;
}

export function constructDateReadable(inputDate: Date) {
	return `${inputDate.getFullYear()}/${inputDate.getMonth() + 1}/${inputDate.getDate()} - ${inputDate.toLocaleTimeString()}`;
}