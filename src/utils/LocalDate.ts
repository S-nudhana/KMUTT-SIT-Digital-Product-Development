export function formatDateToThai(date: Date): string {
    return date.toLocaleDateString("th-TH", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}