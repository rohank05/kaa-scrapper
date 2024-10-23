import config from "../config";

const request = <T = any>(url: string, method: string, data: object) => {
    return new Promise((resolve, reject) => {
        fetch(`${config.baseUrl}${url}`, {
            method,
            body: data ? JSON.stringify(data) : undefined,
            headers: { "Content-Type": "application/json" },
        })
            .then(async (response) => {
                if (!response.ok)
                    reject(new Error(`HTTP error! status: ${response.status}`));
                resolve((await response.json()) as T);
            })
            .catch(reject);
    });
};

export default request;
