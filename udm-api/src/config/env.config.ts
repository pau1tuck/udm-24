// A utility function to parse number from environment variables
function toInt(key: string | undefined, defaultValue: number): number {
	if (key === undefined) {
		return defaultValue;
	}
	const value = parseInt(key, 10);
	return isNaN(value) ? defaultValue : value;
}

export const env = {
	HOST: process.env.HOST || "127.0.0.1",
	PORT: toInt(process.env.PORT, 3000),
	DB_URL: process.env.DATABASE_URL || "",
	DB_USER: "",
	DB_PASS: "",
};
