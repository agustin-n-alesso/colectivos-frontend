import { environment } from "src/environments/environment"

export const getBaseUrl = (): string => {
	return `${environment.server_url}:${environment.server_port}`;
}