const URL = "http://localhost:3000/api";

export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getDataFromApi = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(`${URL}/${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
    });
    return await checkResponse<T>(response);
  } catch (error) {
    console.error(`Request failed (${path} find all):`, error);
    return Promise.reject(error);
  }
};

export const postDataFromApi = async <T>(
  path: string,
  data: Partial<T>
): Promise<T> => {
  try {
    const response = await fetch(`${URL}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
      body: JSON.stringify(data),
    });
    return await checkResponse<T>(response);
  } catch (error) {
    console.error(`Request failed (${path} create):`, error);
    return Promise.reject(error);
  }
};

export const updateDataFromApi = async <T>(
  path: string,
  data: Partial<T>
): Promise<T> => {
  try {
    const response = await fetch(`${URL}/${path}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
      body: JSON.stringify(data),
    });
    return await checkResponse<T>(response);
  } catch (error) {
    console.error(`Request failed (${path} update):`, error);
    return Promise.reject(error);
  }
};