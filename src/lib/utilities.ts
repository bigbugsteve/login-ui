export const handleGeneralError = (errPool: Record<string, string | number>, statusCode: number) => {
	for (const [key, value] of Object.entries(errPool)) {
		if (statusCode === value) {
			return key;
		}
	}
};

export const GeneralErrors = {
	SUCCESS: 200,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	SESSION_EXPIRED: 401,
	FORBIDDEN: 403,
	PRECONDITIONAL_FAILED: 412,
	INTERNAL_SERVER_ERROR: 500,
	NO_CONNECTION: 'undefined',
};
