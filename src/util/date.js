export function formatDate(date) {
	return new Intl.DateTimeFormat('ru', {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false,
	}).format(new Date(date));
}