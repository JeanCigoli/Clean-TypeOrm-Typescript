export const ok = (payload: object) => {
  return {
    statusCode: 200,
    body: {
      message: "Select success",
      payload,
    },
  };
};

export const created = (payload: object) => {
  return {
    statusCode: 201,
    body: {
      message: "Created success",
      payload,
    },
  };
};

export const serverError = (error?: any[]) => {
  return {
    statusCode: 500,
    body: {
      message: "Internal server error",
      payload: {},
      error,
    },
  };
};

export const conflict = (field: string, error?: any[]) => {
  return {
    statusCode: 409,
    body: {
      message: `${field} exist`,
      payload: {},
      error,
    },
  };
};

export const notFound = (field: string, error?: any[]) => {
  return {
    statusCode: 404,
    body: {
      message: `${field} not found`,
      payload: {},
      error,
    },
  };
};